import { alertConfirm, alertSuccess, handleError } from "@/lib/alert";
import {
  Transaction,
  TransactionListResponse,
  TransactionResponse,
} from "@/model/TransactionModel";
import { TransactionService } from "@/services/TransactionService";
import { reactive, ref, watch } from "vue";

export function useTransactionIndex() {
  const isLoading = ref<boolean>(false);
  const page = ref<number>(1);
  const totalPage = ref<number>(1);
  const size = ref<number>(9);
  const pages = ref<number[]>([]);

  const transactionList = ref<Transaction[]>([]);

  const transaction = reactive({
    transaction_date: "",
    description: "",
    month: "",
    year: "",
    amount: "",
  });

  watch(totalPage, (value) => {
    const data: number[] = [];
    for (let i = 1; i <= value; i++) {
      data.push(i);
    }
    pages.value = data;
  });

  //load search transaction
  async function loadData(): Promise<void> {
    isLoading.value = true;

    try {
      const response: { ok: boolean; data: TransactionListResponse } =
        await TransactionService.search({
          transaction_date: transaction.transaction_date,
          description: transaction.description,
          month: Number(transaction.month),
          year: Number(transaction.year),
          amount: Number(transaction.amount),
          page: page.value,
          size: size.value,
        });

      if (response.ok) {
        transactionList.value = response.data.data;
        totalPage.value = response.data.paging.total_page;
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  //change page
  async function handleChangePage(value: number) {
    page.value = value;
    await loadData();
  }

  async function handleSearch() {
    page.value = 1;
    await loadData();
  }

  async function handleDeleteData(id: number): Promise<void> {
    isLoading.value = true;

    try {
      const response: { ok: boolean; data: TransactionResponse } =
        await TransactionService.delete(id);

      if (response.ok) {
        alertSuccess("Hapus data sukses");
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  async function confirmDelete(id: number): Promise<void> {
    const alConfirm: { isConfirmed: boolean } = await alertConfirm(
      "Hapus data ini ?",
      "Ya, Hapus",
      "Tidak, Jangan dulu"
    );

    if (alConfirm.isConfirmed) {
      await handleDeleteData(id);
      await loadData();
    }
  }

  return {
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
  };
}
