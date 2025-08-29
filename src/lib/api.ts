import { handleFetchError } from "@/lib/handleError";
import { ApiFetchResponse, ApiResponse } from "@/model/ApiModel";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";

export async function apiFetch<T extends ApiResponse>(
  url: string,
  options: RequestInit
): Promise<ApiFetchResponse<T>> {
  const response = await fetch(url, options);

  const bodyResponse = await response.json();

  if (!response.ok) {
    //cek jika status unauthorized maka bersihkan state token (logout())
    if (response.status == 401) {
      const authStore = useAuthStore();
      authStore.logout();
      router.push({ path: "/login" });
    }
    throw handleFetchError(response, bodyResponse);
  }

  // return response;
  return { ok: response.ok, status: response.status, data: bodyResponse };
}
