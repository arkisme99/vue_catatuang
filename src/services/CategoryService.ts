import { apiFetch } from "@/lib/api";
import { getToken } from "@/lib/getToken";
import { ApiFetchResponse } from "@/model/ApiModel";
import {
  CategoryListResponse,
  CategoryResponse,
  CreateCategoryRequest,
  SearchCategoryRequest,
} from "@/model/CategoryModel";

export const CategoryService = {
  async search({
    name,
    type,
    page,
    size,
  }: SearchCategoryRequest): Promise<ApiFetchResponse<CategoryListResponse>> {
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

    return await apiFetch<CategoryListResponse>(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        ...(token && { "X-API-TOKEN": token }),
      },
    });
  },

  async create(
    category: CreateCategoryRequest
  ): Promise<ApiFetchResponse<CategoryResponse>> {
    const token = getToken();
    return await apiFetch(`${import.meta.env.VITE_API_PATH}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token && { "X-API-TOKEN": token }),
      },
      body: JSON.stringify(category),
    });
  },
};
