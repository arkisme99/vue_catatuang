<template>
  <SectionGrid
    id="transaction"
    title="Tambah Transaksi"
    cols="3"
    :back-button="true"
    :back-button-to="MENUPATH.TRANSAKSI"
  >
    <BoxCard
      classnew="md:col-span-3 mb-10"
      title="Tambah"
      toggleBtn
      :isOpen="true"
    >
      <form
        v-on:submit.prevent="handleSubmit"
        id="transactionForm"
        class="space-y-4 px-5 py-3 animate-slideToRight"
      >
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            label="Tanggal Transaksi"
            id="pfDate"
            name="pfDate"
            type="date"
            placeholder="Masukan Tanggal Transaksi"
            autocomplete="off"
            icon="fas fa-calendar-alt"
            v-model="transaction.transaction_date"
            required
          />
          <BaseInput
            label="Deskripsi"
            id="pfDeskripsi"
            name="pfDeskripsi"
            placeholder="Deskripsi Transaksi"
            autocomplete="off"
            icon="fas fa-file-text"
            v-model="transaction.description"
            required
          />
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            label="Bulan"
            id="pfMonth"
            name="pfMonth"
            type="text"
            placeholder="Masukan Bulan Transaksi"
            autocomplete="off"
            icon="fas fa-calendar-alt"
            v-model="transaction.month"
            required
          />
          <BaseInput
            label="Tahun"
            id="pfTahun"
            name="pfTahun"
            placeholder="Masukan Tahun Transaksi"
            autocomplete="off"
            icon="fas fa-file-text"
            v-model="transaction.year"
            required
          />
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            label="Total"
            id="pfAmount"
            name="pfAmount"
            type="text"
            placeholder="Masukan Total Transaksi"
            autocomplete="off"
            icon="fas fa-cash-register"
            v-model="transaction.amount"
            required
          />
          <BaseSelect
            label="Kategori"
            id="pfTipe"
            name="pfTipe"
            placeholder="Pilih Kategori"
            v-model="transaction.category_id"
            :options="categoryOptions"
            required
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
import { useTransactionCreate } from "@/composable/transaction/useTransactionCreate";
import MENUPATH from "@/lib/menuEnum";
import { onMounted, ref } from "vue";

const { isLoading, transaction, handleSubmit, loadDataToOptions } =
  useTransactionCreate();

const categoryOptions = ref<{ label: string; value: string | number }[]>([]);

onMounted(async () => {
  categoryOptions.value = await loadDataToOptions();
});
</script>

<style scoped></style>
