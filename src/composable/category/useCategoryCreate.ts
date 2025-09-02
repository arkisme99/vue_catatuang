import { alertSuccess, handleError } from "@/lib/alert";
import { CategoryTypeEnum } from "@/lib/categoryTypeEnum";
import { enumToOptions } from "@/lib/enumToOption";
import { CategoryResponse } from "@/model/CategoryModel";
import { CategoryService } from "@/services/CategoryService";
import { reactive, ref } from "vue";

export function useCategoryCreate() {
  const isLoading = ref<boolean>(false);

  const category = reactive({
    date: "",
    description: "",
    total: "",
    type: CategoryTypeEnum.Income,
  });

  async function handleSubmit(): Promise<void> {
    isLoading.value = true;
    try {
      const response: { ok: boolean; data: CategoryResponse } =
        await CategoryService.create(category);

      if (response.ok) {
        //clear reactive
        category.name = "";
        category.type = CategoryTypeEnum.Income;
        alertSuccess("Tambah Kategori Sukses");
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  const categoryOptions = enumToOptions(CategoryTypeEnum);

  return { isLoading, category, handleSubmit, categoryOptions };
}
