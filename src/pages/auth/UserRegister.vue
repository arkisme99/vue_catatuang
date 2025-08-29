<script lang="ts" setup>
import BaseInput from "@/components/BaseInput.vue";
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import SectionBoxMain from "@/components/SectionBoxMain.vue";
import { useRegister } from "@/composable/useRegister";

const { user, handleSubmit, isLoading } = useRegister();
</script>

<template>
  <!-- Register -->
  <SectionBoxMain id="view-register" wmax="max-w-xl" title="Daftar Akun">
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
          icon="fas fa-user"
          :afocus="true"
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
          icon="fas fa-user-circle"
        />
      </div>
      <div class="grid md:grid-cols-1 gap-4">
        <BaseInput
          id="regEmail"
          name="regEmail"
          label="Email Valid"
          type="email"
          required
          placeholder="you@email.com"
          v-model="user.email"
          autocomplete="off"
          icon="fas fa-envelope"
        />
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <BaseInput
          id="regPassword"
          name="regPassword"
          label="Kata Sandi"
          type="password"
          placeholder="Min. 6 karakter"
          minlength="6"
          v-model="user.password"
          icon="fas fa-lock"
        />
        <BaseInput
          id="regPassword2"
          name="regPassword2"
          label="Ulangi Sandi"
          type="password"
          placeholder="Sama seperti kata sandi"
          minlength="6"
          v-model="user.password_confirmation"
          icon="fas fa-lock"
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
  </SectionBoxMain>
</template>

<style scoped></style>
