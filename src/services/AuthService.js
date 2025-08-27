import { useAuthStore } from "../stores/auth";

export const AuthService = {
  async register({ name, username, email, password }) {
    return await fetch(`${import.meta.env.VITE_API_PATH}/auth/register`, {
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
    });
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
