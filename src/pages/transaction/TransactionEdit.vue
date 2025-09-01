<template>
  <SectionGrid
    id="category"
    title="Ubah Kategori"
    cols="3"
    :back-button="true"
    :back-button-to="MENUPATH.KATEGORI"
  >
    <BoxCard
      classnew="md:col-span-3 mb-10"
      title="Ubah"
      toggleBtn
      :isOpen="true"
    >
      <form
        v-on:submit.prevent="handleSubmit(id)"
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
            ><i class="fas fa-save"></i> Ubah
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
import { useCategoryEdit } from "@/composable/category/useCategoryEdit";
import MENUPATH from "@/lib/menuEnum";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const { isLoading, category, getData, categoryOptions, handleSubmit } =
  useCategoryEdit();

const route = useRoute();
const id = Number(route.params.id);

onBeforeMount(async () => {
  await getData(id);
});
</script>

<style scoped></style>
