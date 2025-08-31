<template>
  <SectionGrid id="category" title="Kategori" cols="3">
    <BoxCard classnew="md:col-span-3 mb-10" title="Pencarian" toggleBtn>
      <form id="profileForm" class="space-y-4 animate-slideToRight">
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            label="Nama Kategori"
            id="pfName"
            name="pfName"
            type="text"
            placeholder="Cari Nama Kategori"
            autocomplete="off"
            icon="fas fa-box"
          />
          <BaseInput
            label="Tipe Kategori"
            id="pfTipe"
            name="pfTipe"
            placeholder="Masukan Email Valid (Opsional)"
            autocomplete="off"
            icon="fas fa-tags"
          />
        </div>
        <div class="grid md:grid-cols-5 gap-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <ButtonSubmit> <i class="fas fa-search"></i> Cari </ButtonSubmit>
        </div>
      </form>
    </BoxCard>
    <!-- Data -->
    <div class="md:col-span-3">
      <div class="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl">
        <div class="flex justify-between items-center mb-4">
          <h4 class="text-xl font-semibold mb-6">Data Kategori</h4>
          <ButtonSave><i class="fas fa-add"></i> Tambah Data </ButtonSave>
        </div>
      </div>
    </div>
    <BoxCard classnew="mb-3">
      Gaji Kantor
      <p class="text-sm text-gray-500">Tipe: Pemasukan</p>
      <span
        class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
        >Aktif</span
      >
      <div class="mt-4 flex justify-end space-x-2">
        <ButtonEdit />
        <ButtonDelete />
      </div>
    </BoxCard>
    <BoxCard classnew="mb-3">
      Gaji Freelance
      <p class="text-sm text-gray-500">Tipe: Pemasukan</p>
      <span
        class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
        >Aktif</span
      >
      <div class="mt-4 flex justify-end space-x-2">
        <ButtonEdit />
        <ButtonDelete />
      </div>
    </BoxCard>
    <BoxCard classnew="mb-3">
      Token Listrik
      <p class="text-sm text-gray-500">Tipe: Pengeluaran</p>
      <span
        class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
        >Aktif</span
      >
      <div class="mt-4 flex justify-end space-x-2">
        <ButtonEdit />
        <ButtonDelete />
      </div>
    </BoxCard>
    <BoxCard classnew="mb-3">
      Gaji Kantor
      <p class="text-sm text-gray-500">Tipe: Pemasukan</p>
      <span
        class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
        >Aktif</span
      >
      <div class="mt-4 flex justify-end space-x-2">
        <ButtonEdit />
        <ButtonDelete />
      </div>
    </BoxCard>
    <BoxCard classnew="mb-3">
      Gaji Freelance
      <p class="text-sm text-gray-500">Tipe: Pemasukan</p>
      <span
        class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
        >Aktif</span
      >
      <div class="mt-4 flex justify-end space-x-2">
        <ButtonEdit />
        <ButtonDelete />
      </div>
    </BoxCard>
    <BoxCard classnew="mb-3">
      Token Listrik
      <p class="text-sm text-gray-500">Tipe: Pengeluaran</p>
      <span
        class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
        >Aktif</span
      >
      <div class="mt-4 flex justify-end space-x-2">
        <ButtonEdit />
        <ButtonDelete />
      </div>
    </BoxCard>
    <div class="md:col-span-3">
      <Pagination />
    </div>
  </SectionGrid>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import BoxCard from "@/components/BoxCard.vue";
import ButtonDelete from "@/components/ButtonDelete.vue";
import ButtonEdit from "@/components/ButtonEdit.vue";
import ButtonSave from "@/components/ButtonSave.vue";
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import InputTypeButton from "@/components/InputTypeButton.vue";
import Pagination from "@/components/Pagination.vue";
import SectionGrid from "@/components/SectionGrid.vue";
</script>

<style scoped></style>
