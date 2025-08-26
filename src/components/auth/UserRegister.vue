<script setup></script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-10 space-y-12">
    <!-- Register -->
    <section id="view-register" class="animate-fadeUp">
      <div class="max-w-md mx-auto">
        <div
          class="p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover"
        >
          <h2 class="text-2xl font-semibold mb-6">Daftar</h2>
          <form id="registerForm" class="space-y-4">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="regName" class="block text-sm font-medium mb-1"
                  >Nama</label
                >
                <input
                  id="regName"
                  required
                  class="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-800 px-3 py-2 focus-brand"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label for="regUsername" class="block text-sm font-medium mb-1"
                  >Username</label
                >
                <input
                  id="regUsername"
                  required
                  class="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-800 px-3 py-2 focus-brand"
                  placeholder="arkchannel"
                />
              </div>
            </div>
            <div>
              <label for="regEmail" class="block text-sm font-medium mb-1"
                >Email</label
              >
              <input
                id="regEmail"
                type="email"
                required
                class="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-800 px-3 py-2 focus-brand"
                placeholder="you@mail.com"
              />
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="regPassword" class="block text-sm font-medium mb-1"
                  >Kata Sandi</label
                >
                <input
                  id="regPassword"
                  type="password"
                  required
                  minlength="6"
                  class="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-800 px-3 py-2 focus-brand"
                  placeholder="Min. 6 karakter"
                />
              </div>
              <div>
                <label for="regPassword2" class="block text-sm font-medium mb-1"
                  >Ulangi Sandi</label
                >
                <input
                  id="regPassword2"
                  type="password"
                  required
                  minlength="6"
                  class="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-800 px-3 py-2 focus-brand"
                  placeholder="Sama seperti di kiri"
                />
              </div>
            </div>
            <button
              class="w-full py-2.5 rounded-xl text-white bg-gradient-to-r from-brand-500 to-sunset-600 shadow-soft hover:opacity-90 transition"
            >
              Buat Akun
            </button>
            <p class="text-sm text-center">
              Sudah punya akun?
              <RouterLink
                to="/login"
                data-route="login"
                class="text-brand-600 hover:underline"
              >
                Masuk
              </RouterLink>
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
