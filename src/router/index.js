import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../pages/Home.vue";
import UserRegister from "../pages/auth/UserRegister.vue";
import UserLogin from "../pages/auth/UserLogin.vue";
import { useAuthStore } from "../stores/auth";

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
        },
        {
          path: "/login",
          component: UserLogin,
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
  // console.log(authStore.isTokenValid);
  // cek apakah route butuh auth
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // cek token jika belum valid
    if (!authStore.isTokenValid) {
      try {
        await authStore.checkToken(); // ini akan logout jika invalid
      } catch (err) {
        // ignore, sudah di-handle di store
      }
    }

    if (!authStore.isTokenValid) {
      return next({ path: "/login", query: { redirect: to.fullPath } });
    }
  }

  next();
});

export default router;
