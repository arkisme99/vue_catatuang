<script setup>
import BaseInput from "../../components/BaseInput.vue";
import ButtonSubmit from "../../components/ButtonSubmit.vue";
import { useRegister } from "../../composable/useRegister";

const { user, handleSubmit, isLoading } = useRegister();
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-10 space-y-12">
    <!-- Register -->
    <section id="view-register" class="animate-fadeUp">
      <div class="max-w-md mx-auto">
        <div
          class="p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover"
        >
          <h2 class="text-2xl font-semibold mb-6">Daftar</h2>
          <form
            id="registerForm"
            class="space-y-4"
            v-on:submit.prevent="handleSubmit"
          >
            <div class="grid md:grid-cols-2 gap-4">
              <BaseInput
                id="regName"
                name="regName"
                label="Nama Lengkap"
                type="text"
                placeholder="Nama lengkap"
                required
                v-model="user.name"
                autocomplete="off"
              />
              <BaseInput
                id="regUsername"
                name="regUsername"
                label="Username"
                type="text"
                placeholder="masukan username"
                required
                v-model="user.username"
                autocomplete="off"
              />
            </div>
            <BaseInput
              id="regEmail"
              name="regEmail"
              label="Email Valid"
              type="email"
              required
              placeholder="you@email.com"
              v-model="user.email"
              autocomplete="off"
            />
            <div class="grid md:grid-cols-2 gap-4">
              <BaseInput
                id="regPassword"
                name="regPassword"
                label="Kata Sandi"
                type="password"
                placeholder="Min. 6 karakter"
                minlength="6"
                v-model="user.password"
              />
              <BaseInput
                id="regPassword2"
                name="regPassword2"
                label="Ulangi Sandi"
                type="password"
                placeholder="Sama seperti password"
                minlength="6"
                v-model="user.password_confirmation"
              />
            </div>

            <ButtonSubmit :loading="isLoading"> Buat Akun </ButtonSubmit>

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
