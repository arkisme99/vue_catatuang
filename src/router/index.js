import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../pages/Home.vue";
import UserRegister from "../pages/auth/UserRegister.vue";
import UserLogin from "../pages/auth/UserLogin.vue";
import { useAuthStore } from "../stores/auth";
import { useFlashStore } from "../stores/flash";
import { alertSuccess } from "../lib/alert";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          component: Home,
        },
        {
          path: "/register",
          component: UserRegister,
          meta: { guestOnly: true },
        },
        {
          path: "/login",
          component: UserLogin,
          meta: { guestOnly: true },
        },
      ],
    },
    {
      path: "/dashboard",
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "kategori",
          // component: ,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  console.log(`val: ${authStore.isTokenValid}`);

  //cek token ada ga di local storage
  if (!authStore.authToken) {
    //jika null / tidak ada paksa logout
    authStore.logout();
    // return next({ path: "/login", query: { redirect: to.fullPath } });
  }

  // Refresh token status (jika belum valid)
  if (!authStore.isTokenValid) {
    try {
      // console.log(`cekrut: ekse inikan ?`);
      const result = await authStore.checkToken();
      // console.log(`cekrut: ekse selesai : ${result}`);
    } catch (err) {
      // ignore error
      // console.error(`Err cekrut: ${err}`);
    }
  }

  const isAuthenticated = authStore.isTokenValid;

  // console.log(`cekrut: ${isAuthenticated}`);
  // Route butuh login
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ path: "/login", query: { redirect: to.fullPath } });
  }

  // Route public, tapi user udah login
  if (to.meta.guestOnly && isAuthenticated) {
    return next({ path: "/dashboard" });
  }

  next();
});

router.afterEach(async (to, from) => {
  const flashStore = useFlashStore();

  if (flashStore.message && flashStore.type === "success") {
    await alertSuccess(flashStore.message);
    await flashStore.clearFlash();
  }
});

export default router;
