import { handleFetchError } from "@/lib/handleError";
import { ApiFetchResponse, ApiResponse } from "@/model/ApiModel";

export async function apiFetch<T extends ApiResponse>(
  url: string,
  options: RequestInit
): Promise<ApiFetchResponse<T>> {
  const response = await fetch(url, options);

  const bodyResponse = await response.json();

  if (!response.ok) {
    // return await handleFetchError(response, bodyResponse);
    throw handleFetchError(response, bodyResponse);
  }

  // return response;
  return { ok: response.ok, status: response.status, data: bodyResponse };
}
