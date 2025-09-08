import { apiFetch } from "@/lib/api";
import { getToken } from "@/lib/getToken";
import { ApiFetchResponse } from "@/model/ApiModel";
import {
  CreateTransactionRequest,
  SearchTransactionRequest,
  TransactionListResponse,
  TransactionResponse,
} from "@/model/TransactionModel";

export const TransactionService = {
  async search({
    transaction_date,
    description,
    month,
    year,
    amount,
    page,
    size,
  }: SearchTransactionRequest): Promise<
    ApiFetchResponse<TransactionListResponse>
  > {
    const token = getToken();

    let url = `${import.meta.env.VITE_API_PATH}/transactions`;
    const params = new URLSearchParams();

    if (transaction_date) {
      params.append("transaction_date", transaction_date);
    }
    if (description) {
      params.append("description", description);
    }
    if (month) {
      params.append("month", month.toString());
    }
    if (year) {
      params.append("year", year.toString());
    }
    if (amount) {
      params.append("amount", amount.toString());
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

    return await apiFetch<TransactionListResponse>(
      url,
      {
        method: "GET",
      },
      token
    );
  },

  async create(
    transaction: CreateTransactionRequest
  ): Promise<ApiFetchResponse<TransactionResponse>> {
    const token = getToken();
    return await apiFetch(
      `${import.meta.env.VITE_API_PATH}/transactions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      },
      token
    );
  },

  async delete(id: number): Promise<ApiFetchResponse<TransactionResponse>> {
    const token = getToken();
    return await apiFetch(
      `${import.meta.env.VITE_API_PATH}/transactions/${id}`,
      {
        method: "DELETE",
      },
      token
    );
  },

  async get(id: number): Promise<ApiFetchResponse<TransactionResponse>> {
    const token = getToken();
    return await apiFetch(
      `${import.meta.env.VITE_API_PATH}/transactions/${id}`,
      {
        method: "GET",
      },
      token
    );
  },

  async update(
    id: number,
    transaction: CreateTransactionRequest
  ): Promise<ApiFetchResponse<TransactionResponse>> {
    const token = getToken();
    return await apiFetch(
      `${import.meta.env.VITE_API_PATH}/transactions/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      },
      token
    );
  },
};
