import { alertSuccess, handleError } from "@/lib/alert";
import { CategoryTypeEnum } from "@/lib/categoryTypeEnum";
import { enumToOptions } from "@/lib/enumToOption";
import { TransactionResponse } from "@/model/TransactionModel";
import { TransactionService } from "@/services/TransactionService";
import { reactive, ref } from "vue";
import { useCategoryIndex } from "../category/useCategoryIndex";

export function useTransactionCreate() {
  const isLoading = ref<boolean>(false);

  const transaction = reactive({
    transaction_date: "",
    description: "",
    month: "",
    year: "",
    amount: "",
    category_id: "",
  });

  async function handleSubmit(): Promise<void> {
    isLoading.value = true;
    try {
      const response: { ok: boolean; data: TransactionResponse } =
        await TransactionService.create({
          transaction_date: transaction.transaction_date,
          description: transaction.description,
          month: Number(transaction.month),
          year: Number(transaction.year),
          amount: Number(transaction.amount),
          category_id: Number(transaction.category_id),
        });

      if (response.ok) {
        //clear reactive
        transaction.transaction_date = "";
        transaction.description = "";
        transaction.month = "";
        transaction.year = "";
        transaction.amount = "";
        transaction.category_id = "";

        alertSuccess("Tambah Transaksi Sukses");
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  //get category

  const { loadDataToOptions } = useCategoryIndex();

  // const categoryOptions = enumToOptions(CategoryTypeEnum);

  return { isLoading, transaction, handleSubmit, loadDataToOptions };
}
