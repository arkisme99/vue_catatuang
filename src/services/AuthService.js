import { apiFetch } from "../lib/api";
import { useAuthStore } from "../stores/auth";

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

  async getProfile() {
    const authStore = useAuthStore();
    const token = authStore.authToken;
    return await fetch(`${import.meta.env.VITE_API_PATH}/auth/profile`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-API-TOKEN": token,
      },
    });
  },
};
