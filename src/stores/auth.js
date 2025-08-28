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
    //ini digunakan di route untuk guard
    // console.log(`cekToken start`);
    try {
      const response = await AuthService.getProfile();

      const responseBody = await response.json();
      if (!response.ok) {
        // console.log(`Token: gagal`);
        logout();
        return;
      }
      // console.log(`Token: ${responseBody.data}`);
      await setData(responseBody.data);
      return "OK";
    } catch (e) {
      logout();
      throw e;
    }
  }

  async function setData(data) {
    if (data.token) {
      authToken.value = data.token;
    }
    authProfile.value = data;
    isTokenValid.value = true;
  }

  function logout() {
    authToken.value = "";
    authProfile.value = "";
    authProfile.value = "";
    isTokenValid.value = false;
  }

  return {
    authToken,
    authProfile,
    isTokenValid,
    setData,
    checkToken,
    logout,
  };
});
