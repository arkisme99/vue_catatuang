import { handleFetchError } from "@/lib/handleError";
import { ApiFetchResponse, ApiResponse } from "@/model/ApiModel";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";

export async function apiFetch<T extends ApiResponse>(
  url: string,
  options: RequestInit = {},
  token?: string | null
): Promise<ApiFetchResponse<T>> {
  const auth = useAuthStore();

  const config: RequestInit = {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    credentials: "include",
  };

  const response = await fetch(url, config);

  const bodyResponse = await response.json();

  if (!response.ok) {
    if (response.status == 401) {
      /* try {
        await auth.refresh();
        const retryConfig: RequestInit = {
          ...config,
          headers: {
            ...config.headers,
            ...(auth.accessToken
              ? { Authorization: `Bearer ${auth.accessToken}` }
              : {}),
          },
        };
        const retry = await fetch(url, retryConfig);
        const retryJson = await retry.json();
        return { ok: retry.ok, status: retry.status, data: retryJson };
      } catch (err) {
        auth.logout();
        router.push({ path: "/login" });
      } */
      // auth.logout();
      // await auth.refresh();
      // console.log("masuk ke sini dulu");
      // //cek ada refrehsh token
      // await auth.refresh();
      // console.log(`token: ${auth.accessToken}`);
      router.push({ path: "/login" });
    }
    throw handleFetchError(response, bodyResponse);
  }

  // return response;
  return { ok: response.ok, status: response.status, data: bodyResponse };
}
