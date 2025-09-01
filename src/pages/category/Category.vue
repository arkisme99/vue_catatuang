<template>
  <SectionGrid id="category" title="Kategori" cols="3">
    <BoxCard classnew="md:col-span-3 mb-10" title="Pencarian" toggleBtn>
      <form
        v-on:submit.prevent="handleSearch"
        id="searchForm"
        class="space-y-4 animate-slideToRight"
      >
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            label="Nama Kategori"
            id="pfName"
            name="pfName"
            type="text"
            placeholder="Cari Nama Kategori"
            autocomplete="off"
            icon="fas fa-box"
            v-model="category.name"
          />
          <BaseInput
            label="Tipe Kategori"
            id="pfTipe"
            name="pfTipe"
            placeholder="Masukan Email Valid (Opsional)"
            autocomplete="off"
            icon="fas fa-tags"
            v-model="category.type"
          />
        </div>
        <div class="grid md:grid-cols-5 gap-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <ButtonSubmit :loading="isLoading">
            <i class="fas fa-search"></i> Cari
          </ButtonSubmit>
        </div>
      </form>
    </BoxCard>
    <div class="md:col-span-3">
      <div class="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl">
        <div class="flex justify-between items-center mb-4">
          <h4 class="text-xl font-semibold mb-6">Data Kategori</h4>
          <ButtonAdd :to="`${MENUPATH.KATEGORI}/create`">Tambah Data</ButtonAdd>
        </div>
      </div>
    </div>

    <!-- Data -->
    <BoxCard v-for="category in cateList" :key="category.id" classnew="mb-3">
      {{ category.name }}
      <p class="text-sm text-gray-500">
        Tipe: <i class="">{{ category.type }}</i>
      </p>
      <span
        class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
        >{{ category.updated_at }}</span
      >
      <div class="mt-4 flex justify-end space-x-2">
        <ButtonEdit :to="`${MENUPATH.KATEGORI}/${category.id}/edit`" />
        <ButtonDelete @click.prevent="confirmDelete(category.id)" />
      </div>
    </BoxCard>
    <div class="md:col-span-3">
      <Pagination
        :page="page"
        :totalPage="totalPage"
        :pages="pages"
        :handlePage="handleChangePage"
      />
    </div>
  </SectionGrid>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import BoxCard from "@/components/BoxCard.vue";
import ButtonAdd from "@/components/ButtonAdd.vue";
import ButtonDelete from "@/components/ButtonDelete.vue";
import ButtonEdit from "@/components/ButtonEdit.vue";
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import Pagination from "@/components/Pagination.vue";
import SectionGrid from "@/components/SectionGrid.vue";
import { useCategoryIndex } from "@/composable/category/useCategoryIndex";
import MENUPATH from "@/lib/menuEnum";
import { onBeforeMount } from "vue";

const {
  isLoading,
  loadData,
  cateList,
  category,
  page,
  totalPage,
  pages,
  handleChangePage,
  handleSearch,
  confirmDelete,
} = useCategoryIndex();

onBeforeMount(async () => {
  loadData();
});
</script>

<style scoped></style>
