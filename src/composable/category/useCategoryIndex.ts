import { handleError } from "@/lib/alert";
import { Category, CategoryListResponse } from "@/model/CategoryModel";
import { CategoryService } from "@/services/CategoryService";
import { reactive, ref, watch } from "vue";

export function useCategoryIndex() {
  const isLoading = ref<boolean>(false);
  const page = ref<number>(1);
  const totalPage = ref<number>(1);
  const size = ref<number>(9);
  const pages = ref<number[]>([]);

  const cateList = ref<Category[]>([]);

  const category = reactive({
    name: "",
    type: "",
  });

  watch(totalPage, (value) => {
    const data: number[] = [];
    for (let i = 1; i <= value; i++) {
      data.push(i);
    }
    pages.value = data;
  });

  //load search category
  async function loadData(): Promise<void> {
    isLoading.value = true;

    try {
      const response: { ok: boolean; data: CategoryListResponse } =
        await CategoryService.search({
          name: category.name,
          type: category.type,
          page: page.value,
          size: size.value,
        });

      if (response.ok) {
        cateList.value = response.data.data;
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

  return {
    isLoading,
    loadData,
    cateList,
    category,
    page,
    totalPage,
    pages,
    handleChangePage,
    handleSearch,
  };
}
