<template>
  <SectionGrid
    id="category"
    title="Tambah Kategori"
    cols="3"
    :back-button="true"
    :back-button-to="MENUPATH.KATEGORI"
  >
    <BoxCard
      classnew="md:col-span-3 mb-10"
      title="Tambah"
      toggleBtn
      :isOpen="true"
    >
      <form
        v-on:submit.prevent="handleSubmit"
        id="categoryForm"
        class="space-y-4 px-5 py-3 animate-slideToRight"
      >
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            label="Nama Kategori"
            id="pfName"
            name="pfName"
            type="text"
            placeholder="Nama Kategori"
            autocomplete="off"
            icon="fas fa-box"
            :afocus="true"
            v-model="category.name"
          />
          <BaseSelect
            label="Tipe Kategori"
            id="pfTipe"
            name="pfTipe"
            placeholder="Pilih tipe: income / outcome"
            v-model="category.type"
            :options="categoryOptions"
          />
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          <ButtonSave :loading="isLoading"
            ><i class="fas fa-save"></i> Simpan
          </ButtonSave>
        </div>
      </form>
    </BoxCard>
  </SectionGrid>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BoxCard from "@/components/BoxCard.vue";
import ButtonSave from "@/components/ButtonSave.vue";
import SectionGrid from "@/components/SectionGrid.vue";
import { useCategoryCreate } from "@/composable/category/useCategoryCreate";
import MENUPATH from "@/lib/menuEnum";

const { isLoading, category, handleSubmit, categoryOptions } =
  useCategoryCreate();
</script>

<style scoped></style>
