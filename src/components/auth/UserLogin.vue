<template>
  <!-- Main -->
  <main class="max-w-6xl mx-auto px-4 py-10 space-y-12">
    <!-- Login -->
    <section id="view-login" class="animate-fadeUp">
      <div class="max-w-md mx-auto">
        <div
          class="p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover"
        >
          <h2 class="text-2xl font-semibold mb-6">Masuk</h2>
          <form id="loginForm" class="space-y-4">
            <div>
              <label for="loginEmail" class="block text-sm font-medium mb-1"
                >Email</label
              >
              <input
                id="loginEmail"
                type="email"
                required
                class="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-800 px-3 py-2 focus-brand"
                placeholder="you@mail.com"
              />
            </div>
            <div>
              <label for="loginPassword" class="block text-sm font-medium mb-1"
                >Kata Sandi</label
              >
              <input
                id="loginPassword"
                type="password"
                required
                class="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-800 px-3 py-2 focus-brand"
                placeholder="••••••••"
              />
            </div>
            <div class="flex items-center justify-between text-sm">
              <label class="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  class="rounded border-black/20 dark:border-white/20"
                />
                Ingat saya
              </label>
              <a href="#" class="text-brand-600 hover:underline">Lupa sandi?</a>
            </div>
            <button
              class="w-full py-2.5 rounded-xl text-white bg-gradient-to-r from-brand-500 to-sunset-600 shadow-soft hover:opacity-90 transition"
            >
              Masuk
            </button>
            <p class="text-sm text-center">
              Belum punya akun?
              <RouterLink
                to="/register"
                data-route="register"
                class="text-brand-600 hover:underline"
              >
                Daftar
              </RouterLink>
            </p>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped></style>
