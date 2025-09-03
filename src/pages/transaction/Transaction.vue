<template>
  <SectionGrid id="transaction" title="Transaksi" cols="3">
    <BoxCard classnew="md:col-span-3 mb-10" title="Pencarian" toggleBtn>
      <form
        v-on:submit.prevent="handleSearch"
        id="searchForm"
        class="space-y-4 animate-slideToRight"
      >
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            label="Tanggal Transaksi"
            id="pfName"
            name="pfName"
            type="text"
            placeholder="Cari Tanggal Transaksi"
            autocomplete="off"
            icon="fas fa-calendar-alt"
            v-model="transaction.transaction_date"
          />
          <BaseInput
            label="Deskripsi"
            id="pf"
            name="pf"
            placeholder="Cari Deskripsi"
            autocomplete="off"
            icon="fas fa-file-text"
            v-model="transaction.description"
          />
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            label="Total"
            id="pfAmount"
            name="pfAmount"
            type="text"
            placeholder="Cari Total"
            autocomplete="off"
            icon="fas fa-cash-register"
            v-model="transaction.amount"
          />
          <BaseInput
            label="Bulan"
            id="pfBulan"
            name="pfBulan"
            placeholder="Cari Bulan"
            autocomplete="off"
            icon="fas fa-tags"
            v-model="transaction.month"
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
          <h4 class="text-xl font-semibold mb-6">Data Transaksi</h4>
          <ButtonAdd :to="`${MENUPATH.TRANSAKSI}/create`"
            >Tambah Data</ButtonAdd
          >
        </div>
      </div>
    </div>

    <!-- Data -->
    <BoxCard
      v-for="transaction in transactionList"
      :key="transaction.id"
      classnew="mb-3"
    >
      {{ transaction.description }}
      <p class="text-sm text-gray-500">
        Kategori: <i class="">{{ transaction.category_id }}</i>
      </p>
      <p>Total: {{ transaction.amount }}</p>
      <span
        class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
        >{{ transaction.updated_at }}</span
      >
      <div class="mt-4 flex justify-end space-x-2">
        <ButtonEdit :to="`${MENUPATH.TRANSAKSI}/${transaction.id}/edit`" />
        <ButtonDelete @click.prevent="confirmDelete(transaction.id)" />
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
import { useTransactionIndex } from "@/composable/transaction/useTransactionIndex";

import MENUPATH from "@/lib/menuEnum";
import { onBeforeMount } from "vue";

const {
  isLoading,
  loadData,
  transactionList,
  transaction,
  page,
  totalPage,
  pages,
  handleChangePage,
  handleSearch,
  confirmDelete,
} = useTransactionIndex();

onBeforeMount(async () => {
  loadData();
});
</script>

<style scoped></style>
