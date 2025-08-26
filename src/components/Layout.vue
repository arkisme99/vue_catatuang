<script setup>
import { onMounted } from "vue";
import Navbar from "./Navbar.vue";

const THEME_KEY = "pref-theme";
const root = document.documentElement;

const AUTH_KEY = "session";
const isAuthed = localStorage.getItem(AUTH_KEY);
const PROFILE_KEY = "profile-user";

function applyTheme(t) {
  t === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
}

function toggleTheme() {
  const t = root.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem(THEME_KEY, t);
  applyTheme(t);
}

function toggleMobileMenu() {
  document.getElementById("mobileMenu")?.classList.toggle("hidden");
}

// Jalankan saat komponen mount
onMounted(() => {
  applyTheme(
    localStorage.getItem(THEME_KEY) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  document
    .getElementById("themeToggle")
    ?.addEventListener("click", toggleTheme);
  document
    .getElementById("menuBtn")
    ?.addEventListener("click", toggleMobileMenu);

  if (isAuthed === "authenticated") {
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
