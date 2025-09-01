import { alertError, handleError } from "@/lib/alert";
import { Category, CategoryResponse } from "@/model/CategoryModel";
import { CategoryService } from "@/services/CategoryService";
import { reactive, ref } from "vue";

export function useCategoryIndex() {
  const isLoading = ref<boolean>(false);
  const page = ref<number>(1);
  const size = ref<number>(9);
  const cateList = ref<Category[]>([]);

  const category = reactive({
    name: "",
    type: "",
  });

  //load search category
  async function loadData(): Promise<void> {
    isLoading.value = true;

    try {
      const response: { ok: boolean; data: CategoryResponse } =
        await CategoryService.search({
          name: category.name,
          type: category.type,
          page: page.value,
          size: size.value,
        });

      if (response.ok) {
        cateList.value = response.data.data;
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  //search category

  return { isLoading, loadData, cateList };
}
