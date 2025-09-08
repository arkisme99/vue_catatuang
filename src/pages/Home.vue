<template>
  <!-- Main -->
  <main class="max-w-6xl mx-auto px-4 py-10 space-y-12">
    <!-- Landing (pre-login home) -->
    <section id="view-landing" class="animate-fadeUp">
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
            Selamat Datang di
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-sunset-500 to-amber-400"
              >Meja Auth</span
            >
          </h1>
          <template v-if="isLoggedIn">
            <h2 class="text-3xl font-bold">Halo, {{ name }} 👋</h2>
          </template>
          <p class="text-lg text-neutral-600 dark:text-neutral-300 max-w-prose">
            Template halaman Login, Register, Home setelah login, dan Profile.
            Responsif, dukung dark mode, dengan animasi hover lembut pada kartu
            & form.
          </p>
          <template v-if="!isLoggedIn">
            <div class="flex gap-3">
              <RouterLink
                data-route="register"
                to="/register"
                class="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-brand-500 to-sunset-600 shadow-soft hover:opacity-90 transition"
                >Mulai Daftar</RouterLink
              >
              <RouterLink
                data-route="login"
                to="/login"
                class="px-5 py-3 rounded-xl border border-black/10 dark:border-white/10 hover:border-brand-500/60 transition"
                >Masuk</RouterLink
              >
            </div>
          </template>
        </div>
        <div
          class="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden card-hover"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-brand-500/80 via-sunset-600/70 to-rose-500/70 mix-blend-multiply"
          ></div>
          <svg
            viewBox="0 0 600 600"
            class="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stop-color="#ff5733" />
                <stop offset="50%" stop-color="#ff6a00" />
                <stop offset="100%" stop-color="#f59e0b" />
              </linearGradient>
            </defs>
            <g fill="url(#g)" opacity="0.85">
              <circle cx="120" cy="120" r="90"></circle>
              <circle cx="480" cy="180" r="120"></circle>
              <circle cx="300" cy="420" r="140"></circle>
            </g>
          </svg>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";

const authStore = useAuthStore();
const isLoggedIn = computed(() => authStore.isAuthenticated);
const name = computed(() => authStore.user?.name ?? "Pengguna");
</script>

<style scoped></style>
