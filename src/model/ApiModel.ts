export interface ApiError {
  path?: (string | number)[];
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
  errors?: ApiError[];
  [key: string]: unknown;
}

export interface ApiFetchResponse<T extends ApiResponse> {
  ok: boolean;
  status: number;
  data: T;
}
