<script setup>
import { onBeforeMount, onMounted } from "vue";
import Navbar from "./Navbar.vue";
import { useThemeStore } from "../stores/theme";
import { useAuthStore } from "../stores/auth";

// Jalankan saat komponen mount
onBeforeMount(async () => {
  const themeStore = useThemeStore();
  console.log(`Theme: ${themeStore.theme}`);
  themeStore.applyTheme(themeStore.theme);
});
onMounted(async () => {
  // const themeStore = useThemeStore();
  const authStore = useAuthStore();

  // themeStore.applyTheme(themeStore.theme);

  await authStore.checkToken();
  const isAuth = authStore.isTokenValid;

  console.log(`Cek Auth : ${isAuth}`);

  if (isAuth === true) {
    // alert("Sudah login")
    // location.href="index.html"
    document.querySelectorAll(".authed\\:hidden").forEach((el) => {
      el.classList.toggle("hidden", false);
    }); // false hidden jika sudah login
    document.querySelectorAll(".guest\\:hidden").forEach((el) => {
      el.classList.toggle("hidden", true);
    });
  } else {
    document.querySelectorAll(".authed\\:hidden").forEach((el) => {
      el.classList.toggle("hidden", true);
    }); // true hidden jika belum login
    document.querySelectorAll(".guest\\:hidden").forEach((el) => {
      el.classList.toggle("hidden", false);
    });
  }
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-brand-50 to-white dark:from-neutral-900 dark:to-neutral-950 text-neutral-800 dark:text-neutral-200"
  >
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped></style>
