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

export interface CategoryResponse extends ApiResponse {
  data: Category[];
}
