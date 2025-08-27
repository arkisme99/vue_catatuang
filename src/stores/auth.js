import { AuthService } from "../services/AuthService";
import { handleFetchError } from "../lib/handleError";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  //   const AUTH_KEY = "session";
  const PROFILE_KEY = "profile-user";
  const AUTH_TOKEN = "session-token";

  const authToken = ref(localStorage.getItem(AUTH_TOKEN) || null);
  const isTokenValid = ref(false);

  function setProfile(profile) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }

  function setToken(token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  async function checkToken() {
    const response = await AuthService.getProfile();
    const responseBody = await response.json();

    if (response.status === 200) {
      setProfile(responseBody.data);
      setToken(responseBody.data.token);
      isTokenValid.value = true;
    } else {
      isTokenValid.value = false;
      await handleFetchError(response, responseBody);
      logout();
    }
  }

  function logout() {
    // localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(PROFILE_KEY);
    localStorage.removeItem(AUTH_TOKEN);
  }

  return {
    authToken,
    isTokenValid,
    checkToken,
    setToken,
    logout,
  };
});
