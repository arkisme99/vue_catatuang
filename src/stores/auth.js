import { AuthService } from "../services/AuthService";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", () => {
  const PROFILE_KEY = "profile-user";
  const AUTH_TOKEN = "session-token";

  const authToken = useLocalStorage(AUTH_TOKEN, "");
  const authProfile = useLocalStorage(PROFILE_KEY, "");
  const isTokenValid = ref(false);

  async function checkToken() {
    try {
      const response = await AuthService.getProfile();

      const responseBody = await response.json();
      if (!response.ok) {
        isTokenValid.value = false;
        logout();
        return;
      }

      authToken.value = responseBody.data.token;
      authProfile.value = JSON.stringify(responseBody.data.user);
      isTokenValid.value = true;
    } catch (e) {
      isTokenValid.value = false;
      logout();
      console.log(e);
    }
  }

  function logout() {
    authToken.value = "";
    authProfile.value = "";
  }

  return {
    authToken,
    isTokenValid,
    checkToken,
    logout,
  };
});
