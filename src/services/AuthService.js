import { apiFetch } from "../lib/api";
import { getToken } from "../lib/getToken";

export const AuthService = {
  async register({ name, username, email, password }) {
    const result = await apiFetch(
      `${import.meta.env.VITE_API_PATH}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      }
    );
    // console.log(`Result: ${result}`);
    return result;
  },

  async login({ username, password }) {
    const result = await apiFetch(
      `${import.meta.env.VITE_API_PATH}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-API-TOKEN": getToken(),
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    return result;
  },

  async getProfile() {
    //pakai fetch biasa karena apipFetch semua error fetch keluar alert
    return await fetch(`${import.meta.env.VITE_API_PATH}/auth/profile`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-API-TOKEN": getToken(),
      },
    });
  },
};
