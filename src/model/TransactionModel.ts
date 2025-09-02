import { ApiResponse } from "./ApiModel";

export interface Transaction {
  id: number;
  transaction_date: string;
  category_id: number;
  description: string;
  month: number;
  year: number;
  amount: number;
  created_at?: string;
  updated_at?: string;
}

export interface SearchTransactionRequest {
  transaction_date?: string;
  description?: string;
  month?: number;
  year?: number;
  amount?: number;
  page?: number;
  size?: number;
}

export interface CreateTransactionRequest extends Transaction {}

export interface TransactionListResponse extends ApiResponse {
  data: Transaction[];
  paging: {
    current_page: number;
    total_page: number;
    size: number;
  };
}

export interface TransactionResponse extends ApiResponse {
  data: Transaction;
}
