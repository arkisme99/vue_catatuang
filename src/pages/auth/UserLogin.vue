<template>
  <SectionBoxMain id="view-login" title="Masuk">
    <form id="loginForm" class="space-y-4" v-on:submit.prevent="handleSubmit">
      <BaseInput
        label="Username"
        id="loginEmail"
        name="username"
        required
        placeholder="Masukan username valid"
        icon="fas fa-user-circle"
        autocomplete="off"
        v-model="user.username"
        :afocus="true"
      />
      <BaseInput
        label="Kata Sandi"
        id="loginPassword"
        name="password"
        type="password"
        required
        placeholder="••••••••"
        icon="fas fa-lock"
        autocomplete="off"
        v-model="user.password"
      />
      <ButtonSubmit :loading="isLoading">
        <i class="fas fa-door-open"></i> Masuk
      </ButtonSubmit>
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
  </SectionBoxMain>
</template>

<script lang="ts" setup>
import BaseInput from "@/components/BaseInput.vue";
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import SectionBoxMain from "@/components/SectionBoxMain.vue";
import { useLogin } from "@/composable/useLogin";

const { user, isLoading, handleSubmit } = useLogin();
</script>

<style scoped></style>
