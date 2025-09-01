import { CategoryTypeEnum } from "@/lib/categoryTypeEnum";
import { ApiResponse } from "./ApiModel";

export interface Category {
  id: string;
  name: string;
  type: string;
  images?: string;
  created_at?: string;
  updated_at?: string;
}

export interface SearchCategoryRequest {
  name?: string;
  type?: string;
  page?: number;
  size?: number;
}

export interface CreateCategoryRequest {
  name: string;
  type: CategoryTypeEnum;
}

export interface CategoryListResponse extends ApiResponse {
  data: Category[];
  paging: {
    current_page: number;
    total_page: number;
    size: number;
  };
}

export interface CategoryResponse extends ApiResponse {
  data: Category;
}
