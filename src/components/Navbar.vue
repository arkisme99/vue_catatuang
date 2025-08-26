<template>
  <header
    class="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-white/40 dark:border-white/5"
  >
    <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div
          class="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-sunset-600 shadow-soft"
        ></div>
        <a href="index.php"
          ><span class="text-lg font-semibold tracking-tight"
            >Catat Uang</span
          ></a
        >
      </div>

      <div class="hidden md:flex items-center gap-2" id="navLinks">
        <RouterLink
          data-route="landing"
          to="/"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition"
          >Home</RouterLink
        >
        <a
          data-route="home"
          href="dashboard.php"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition authed:hidden"
          >Dashboard</a
        >
        <a
          data-route="profile"
          href="profile.php"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition authed:hidden"
          >Profile</a
        >
        <a
          data-route="kategori"
          href="kategori.php"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition authed:hidden"
          >Kategori</a
        >
        <RouterLink
          data-route="login"
          to="/login"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition guest:hidden"
          >Login</RouterLink
        >
        <RouterLink
          data-route="register"
          to="/register"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition guest:hidden"
          >Register</RouterLink
        >
        <RouterLink
          id="logoutBtn"
          to="javascript:void(0)"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition authed:hidden"
          >Logout</RouterLink
        >
      </div>

      <div class="flex items-center gap-2">
        <button
          id="themeToggle"
          class="group inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-black/10 dark:border-white/10 hover:border-brand-500/50 dark:hover:border-brand-500/50 transition"
        >
          <svg
            class="h-5 w-5 block dark:hidden"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
            <path
              d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"
            />
          </svg>
          <svg
            class="h-5 w-5 hidden dark:block"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
          <!-- <span class="text-sm">Tema</span> -->
        </button>
        <button
          id="menuBtn"
          class="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          aria-label="Toggle menu"
        >
          <svg
            id="burgerIcon"
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
    <!-- Mobile links -->
    <div
      id="mobileMenu"
      class="md:hidden hidden border-t border-black/5 dark:border-white/10"
    >
      <div class="max-w-6xl mx-auto px-4 py-2 flex flex-wrap gap-2">
        <button
          data-route="landing"
          href="index.php"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          Home
        </button>
        <a
          data-route="home"
          href="dashboard.php"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition authed:hidden"
          >Dashboard</a
        >
        <a
          data-route="profile"
          href="profile.php"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition authed:hidden"
          >Profile</a
        >
        <a
          data-route="kategori"
          href="kategori.php"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition authed:hidden"
          >Kategori</a
        >
        <a
          data-route="login"
          href="login.php"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition guest:hidden"
          >Login</a
        >
        <a
          data-route="register"
          href="register.php"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition guest:hidden"
          >Register</a
        >
        <a
          id="logoutBtnMobile"
          href="javascript:void(0)"
          class="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition authed:hidden"
          >Logout</a
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
