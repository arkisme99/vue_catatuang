import { alertError, alertWarning } from "@/lib/alert";
import { ApiResponse } from "@/model/ApiModel";
import { SweetAlertResult } from "sweetalert2";

export async function handleFetchError<T extends ApiResponse>(
  response: Response,
  responseBody: T
): Promise<SweetAlertResult | void | null> {
  if (response.status == 400) {
    // Error 400 Validasi
    const errors =
      (responseBody?.errors || [])
        .map((err) => `<b>${err.path?.join?.(".")}</b>: ${err.message}`)
        .join("<br>") || responseBody?.message;

    return await alertWarning(errors);
  } else if (response.status == 401) {
    // return await alertWarning(responseBody?.message || "Unauthorized");
    return null;
  } else {
    // Error 5xx (server error)
    return await alertError(
      `${response.status} : ${
        responseBody?.message
          ? responseBody.message
          : responseBody?.error
          ? responseBody.error
          : "Terjadi kesalahan di server"
      }`
    );
  }
}
