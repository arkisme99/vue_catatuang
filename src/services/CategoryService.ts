import { apiFetch } from "@/lib/api";
import { getToken } from "@/lib/getToken";
import { ApiFetchResponse } from "@/model/ApiModel";
import { CategoryResponse, SearchCategoryRequest } from "@/model/CategoryModel";

export const CategoryService = {
  async search({
    name,
    type,
    page,
    size,
  }: SearchCategoryRequest): Promise<ApiFetchResponse<CategoryResponse>> {
    const token = getToken();

    let url = `${import.meta.env.VITE_API_PATH}/categories`;
    const params = new URLSearchParams();

    if (name) {
      params.append("name", name);
    }
    if (type) {
      params.append("type", type);
    }
    if (page) {
      params.append("page", page.toString());
    }
    if (size) {
      params.append("size", size.toString());
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    return await apiFetch<CategoryResponse>(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        ...(token && { "X-API-TOKEN": token }),
      },
    });
  },
};
