import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useFlashStore } from "@/stores/flash";
import Layout from "@/components/Layout.vue";
import Home from "@/pages/Home.vue";
import UserRegister from "@/pages/auth/UserRegister.vue";
import UserLogin from "@/pages/auth/UserLogin.vue";
import { alertDanger, alertSuccess } from "@/lib/alert";
import Dashboard from "@/pages/Dashboard.vue";
import Profile from "@/pages/auth/Profile.vue";
import Category from "@/pages/category/Category.vue";
import CategoryCreate from "@/pages/category/CategoryCreate.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "register",
        component: UserRegister,
        meta: { guestOnly: true },
      },
      {
        path: "login",
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
        path: "",
        component: Dashboard,
      },
      {
        path: "profile",
        component: Profile,
      },
      {
        path: "kategori",
        component: Category,
      },
      {
        path: "kategori/create",
        component: CategoryCreate,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // console.log(`val: ${authStore.isTokenValid}`);
  const authStore = useAuthStore();
  const flashStore = useFlashStore();
  const { setFlash } = flashStore;

  // console.log(`cekrutt: ${authStore.isTokenValid}`);
  // Route butuh login
  if (to.meta.requiresAuth && !authStore.isTokenValid) {
    authStore.logout(); //bersihkan state auth
    setFlash("Login dulu kanda...!", "danger");
    return next({ path: "/login", query: { redirect: to.fullPath } });
  }

  // Route public, tapi user udah login
  if (to.meta.guestOnly && authStore.isTokenValid) {
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
