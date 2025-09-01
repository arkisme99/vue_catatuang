import { alertSuccess, handleError } from "@/lib/alert";
import { CategoryTypeEnum } from "@/lib/categoryTypeEnum";
import { enumToOptions } from "@/lib/enumToOption";
import { CategoryResponse } from "@/model/CategoryModel";
import { CategoryService } from "@/services/CategoryService";
import { reactive, ref } from "vue";

export function useCategoryEdit() {
  const isLoading = ref<boolean>(false);
  const category = reactive({
    name: "",
    type: CategoryTypeEnum.Income,
  });

  async function getData(id: number): Promise<void> {
    isLoading.value = true;
    try {
      const response: { ok: boolean; data: CategoryResponse } =
        await CategoryService.get(id);
      if (response.ok) {
        category.name = response.data.data.name;
        if (response.data.data.type === CategoryTypeEnum.Income) {
          category.type = CategoryTypeEnum.Income;
        } else {
          category.type = CategoryTypeEnum.Outcome;
        }
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
      const response: { ok: boolean; data: CategoryResponse } =
        await CategoryService.update(id, category);

      if (response.ok) {
        category.name = response.data.data.name;
        if (response.data.data.type === CategoryTypeEnum.Income) {
          category.type = CategoryTypeEnum.Income;
        } else {
          category.type = CategoryTypeEnum.Outcome;
        }
        alertSuccess("Update Kategori Sukses");
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  const categoryOptions = enumToOptions(CategoryTypeEnum);
  return { isLoading, category, getData, categoryOptions, handleSubmit };
}
