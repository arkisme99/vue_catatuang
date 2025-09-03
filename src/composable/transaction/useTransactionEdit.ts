import { alertSuccess, handleError } from "@/lib/alert";
import { TransactionResponse } from "@/model/TransactionModel";
import { TransactionService } from "@/services/TransactionService";
import { reactive, ref } from "vue";
import { useCategoryIndex } from "../category/useCategoryIndex";
import { formatDate, formatDateToInput } from "@/lib/format-date";

export function useTransactionEdit() {
  const isLoading = ref<boolean>(false);
  const transaction = reactive({
    transaction_date: "",
    description: "",
    month: "",
    year: "",
    amount: "",
    category_id: "",
  });

  async function getData(id: number): Promise<void> {
    isLoading.value = true;
    try {
      const response: { ok: boolean; data: TransactionResponse } =
        await TransactionService.get(id);
      if (response.ok) {
        transaction.transaction_date = formatDateToInput(
          response.data.data.transaction_date
        );
        transaction.description = response.data.data.description;
        transaction.month = response.data.data.month.toString();
        transaction.year = response.data.data.year.toString();
        transaction.amount = response.data.data.amount.toString();
        transaction.category_id = response.data.data.category_id.toString();
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  async function handleSubmit(id: number): Promise<void> {
    isLoading.value = true;
    try {
      const response: { ok: boolean; data: TransactionResponse } =
        await TransactionService.update(id, {
          transaction_date: transaction.transaction_date,
          description: transaction.description,
          month: Number(transaction.month),
          year: Number(transaction.year),
          amount: Number(transaction.amount),
          category_id: Number(transaction.category_id),
        });

      if (response.ok) {
        transaction.transaction_date = formatDateToInput(
          response.data.data.transaction_date
        );
        transaction.description = response.data.data.description;
        transaction.month = response.data.data.month.toString();
        transaction.year = response.data.data.year.toString();
        transaction.amount = response.data.data.amount.toString();
        transaction.category_id = response.data.data.category_id.toString();

        alertSuccess("Update Transaksi Sukses");
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  const { loadDataToOptions } = useCategoryIndex();

  return { isLoading, transaction, getData, loadDataToOptions, handleSubmit };
}
