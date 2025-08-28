<script setup>
import { onBeforeMount } from "vue";
import Navbar from "./Navbar.vue";
import { useThemeStore } from "../stores/theme";

// Jalankan saat komponen mount
onBeforeMount(async () => {
  const themeStore = useThemeStore();
  // console.log(`Theme: ${themeStore.theme}`);
  themeStore.applyTheme(themeStore.theme);
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-brand-50 to-white dark:from-neutral-900 dark:to-neutral-950 text-neutral-800 dark:text-neutral-200"
  >
    <Navbar />
    <main class="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
