import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useFlashStore } from "@/stores/flash";
import Layout from "@/components/Layout.vue";
import Home from "@/pages/Home.vue";
import UserRegister from "@/pages/auth/UserRegister.vue";
import UserLogin from "@/pages/auth/UserLogin.vue";
import { alertDanger, alertSuccess } from "@/lib/alert";

const routes: Array<RouteRecordRaw> = [
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
        component: Home,
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const flashStore = useFlashStore();
  // console.log(`val: ${authStore.isTokenValid}`);

  const { authToken, logout, isTokenValid, checkToken } = authStore;
  const { setFlash } = flashStore;

  //cek token ada ga di local storage
  if (!authToken) {
    //jika null / tidak ada paksa logout
    logout();
    // return next({ path: "/login", query: { redirect: to.fullPath } });
  }

  // Refresh token status (jika belum valid)
  if (!isTokenValid) {
    try {
      // console.log(`cekrut: ekse inikan ?`);
      await checkToken();
      // console.log(`cekrut: ekse selesai : ${result}`);
    } catch (err) {
      // ignore error
      // console.error(`Err cekrut: ${err}`);
    }
  }

  const isAuthenticated = isTokenValid;

  // console.log(`cekrut: ${isAuthenticated}`);
  // Route butuh login
  if (to.meta.requiresAuth && !isAuthenticated) {
    setFlash("Login dulu kanda...!", "danger");
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

  const { message, type } = flashStore;
  if (message && type === "success") {
    await alertSuccess(message);
    await flashStore.clearFlash();
  } else if (message && type === "danger") {
    await alertDanger(message);
    await flashStore.clearFlash();
  }
});

export default router;
