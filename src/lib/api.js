import { handleFetchError } from "./handleError";

export async function apiFetch(url, options) {
  const response = await fetch(url, options);

  const bodyResponse = await response.json();

  if (!response.ok) {
    // return await handleFetchError(response, bodyResponse);
    throw handleFetchError(response, bodyResponse);
  }

  return response;
}
