import { alertError, alertWarning } from "@/lib/alert";
import { ApiResponse } from "@/model/ApiModel";
import { SweetAlertResult } from "sweetalert2";

export async function handleFetchError<T extends ApiResponse>(
  response: Response,
  responseBody: T
): Promise<SweetAlertResult> {
  if (response.status >= 400 && response.status < 500) {
    // Error 4xx (client error)
    const errors =
      (responseBody?.errors || [])
        .map((err) => `<b>${err.path?.join?.(".")}</b>: ${err.message}`)
        .join("<br>") || responseBody?.message;

    return await alertWarning(errors);
  } else {
    // Error 5xx (server error)
    return await alertError(
      `${response.status} : ${
        responseBody?.message || "Terjadi kesalahan di server"
      }`
    );
  }
}
