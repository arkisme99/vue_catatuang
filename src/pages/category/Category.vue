<template>
  <SectionGrid id="category" title="Kategori" cols="3">
    <BoxCard classnew="md:col-span-3 mb-10">
      <div
        class="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] lg:grid-cols-[2fr_3fr_1fr] xl:grid-cols-[1.5fr_3fr_1fr] gap-4"
      >
        <div class="flex flex-wrap gap-3">
          <InputTypeButton
            placeholder="Cari kategori..."
            buttonLabel="Search"
            @submit=""
          />
        </div>
        <div></div>
        <ButtonSave><i class="fas fa-add"></i> Tambah Data </ButtonSave>
      </div>
    </BoxCard>
    <!-- Data -->
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
import InputTypeButton from "@/components/InputTypeButton.vue";
import Pagination from "@/components/Pagination.vue";
import SectionGrid from "@/components/SectionGrid.vue";
</script>

<style scoped></style>
