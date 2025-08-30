<template>
  <!-- Profile -->
  <SectionGrid id="profile" title="Profile" cols="4">
    <BoxCard classnew="md:col-span-1">
      <div class="flex items-center gap-4">
        <AvatarInitial :initials="initialsName(authProfile?.name ?? '')" />
        <div>
          <p class="font-semibold">{{ authProfile?.name }}</p>
          <p class="text-sm text-neutral-500">{{ authProfile?.email }}</p>
        </div>
      </div>
    </BoxCard>

    <BoxCard classnew="md:col-span-3">
      <div class="flex flex-wrap gap-3 mb-6">
        <ButtonTab
          @click="activeTab = 'profil'"
          :active="activeTab === 'profil'"
          ><i class="fas fa-user-circle"></i> Data Profil</ButtonTab
        >
        <ButtonTab
          @click="activeTab = 'password'"
          :active="activeTab === 'password'"
          ><i class="fas fa-lock"></i> Ubah Password</ButtonTab
        >
      </div>

      <div
        class="p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10"
      >
        <form
          id="profileForm"
          class="space-y-4 animate-slideToRight"
          v-if="activeTab === 'profil'"
          v-on:submit.prevent="handleSubmitProfile"
        >
          <div class="grid md:grid-cols-2 gap-4">
            <BaseInput
              label="Nama Lengkap"
              id="pfName"
              name="pfName"
              type="text"
              placeholder="Masukan Nama (Opsional)"
              v-model="user.name"
              autocomplete="off"
              icon="fas fa-user-circle"
              :afocus="true"
            />
            <BaseInput
              label="Email Valid"
              id="pfEmail"
              name="pfEmail"
              type="email"
              placeholder="Masukan Email Valid (Opsional)"
              v-model="user.email"
              autocomplete="off"
              icon="fas fa-envelope"
            />
          </div>
          <div class="grid md:grid-cols-5 gap-4">
            <ButtonSave :loading="isLoading">
              <i class="fas fa-save"></i> Simpan
            </ButtonSave>
          </div>
        </form>
        <form
          id="passwordForm"
          class="space-y-4 animate-slideToRight"
          v-else
          v-on:submit.prevent="handleSubmitProfile"
        >
          <div class="grid md:grid-cols-2 gap-4">
            <BaseInput
              label="Password Baru"
              id="pfPassword"
              name="pfPassword"
              type="password"
              placeholder="Masukan Password Baru"
              v-model="user.password"
              required
              autocomplete="off"
              icon="fas fa-lock"
              :afocus="true"
            />
            <BaseInput
              label="Konfirmasi Password"
              id="pfPasswordConfirmation"
              name="pfPasswordConfirmation"
              type="password"
              placeholder="Masukan Konfirmasi Password"
              v-model="user.password_confirmation"
              required
              autocomplete="off"
              icon="fas fa-lock"
            />
          </div>
          <div class="grid md:grid-cols-5 gap-4">
            <ButtonSave :loading="isLoading">
              <i class="fas fa-save"></i> Simpan
            </ButtonSave>
          </div>
        </form>
      </div>
    </BoxCard>
  </SectionGrid>
</template>

<script setup lang="ts">
import AvatarInitial from "@/components/AvatarInitial.vue";
import BaseInput from "@/components/BaseInput.vue";
import BoxCard from "@/components/BoxCard.vue";
import ButtonSave from "@/components/ButtonSave.vue";
import ButtonTab from "@/components/ButtonTab.vue";
import SectionGrid from "@/components/SectionGrid.vue";
import { useProfile } from "@/composable/useProfile";
import { initialsName } from "@/lib/initialsName";
import { ref } from "vue";

const activeTab = ref<string>("profil");

const { user, isLoading, getProfile, handleSubmitProfile, authProfile } =
  useProfile();

getProfile();
</script>

<style scoped></style>
