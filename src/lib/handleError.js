import { alertError, alertWarning } from "./alert";

export async function handleFetchError(response, responseBody) {
  if (response.status >= 400 && response.status < 500) {
    // Error 4xx (client error)
    const errors =
      (responseBody?.errors || [])
        .map((err) => `<b>${err.path?.join?.(".")}</b>: ${err.message}`)
        .join("<br>") || responseBody?.message;

    await alertWarning(errors);
  } else if (response.status >= 500) {
    // Error 5xx (server error)
    await alertError(responseBody?.message || "Terjadi kesalahan server");
  }
}
