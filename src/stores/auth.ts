import { useLocalStorage } from "@vueuse/core";
import { ProfileUser } from "@/model/UserModel";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { AuthService } from "@/services/AuthService";

export const useAuthStore = defineStore("auth", () => {
  const PROFILE_KEY = "profile-user";
  const AUTH_TOKEN = "session-token";

  const authToken = useLocalStorage<string | null>(AUTH_TOKEN, null);
  const authProfile = useLocalStorage<ProfileUser | null>(PROFILE_KEY, null);
  const isTokenValid = ref<boolean>(false);

  // Watch token changes, auto logout jika token diubah manual
  watch(authToken, async (newVal, oldVal) => {
    if (oldVal && newVal !== oldVal) {
      // console.warn("Token di localStorage diubah manual!");
      logout();
    }
  });

  async function checkToken(): Promise<void> {
    if (!authToken.value) {
      await AuthService.logout();
      logout();
    }
    try {
      const response = await AuthService.getProfile();

      const responseBody = await response.json();
      if (!response.ok) {
        return;
      }
      setData(responseBody.data);
    } catch (e) {
      await AuthService.logout();
      logout();
      throw e;
    }
  }
  async function checkTokenOnMain(): Promise<void> {
    if (!authToken.value) {
      logout();
    }
    try {
      const response = await AuthService.getProfile();

      const responseBody = await response.json();
      if (!response.ok) {
        return;
      }
      setData(responseBody.data);
    } catch (e) {
      logout();
      throw e;
    }
  }

  function setData(data: ProfileUser): void {
    if (data.token) {
      authToken.value = data.token;
    }
    authProfile.value = data;
    isTokenValid.value = true;
    console.log(`setData: ${isTokenValid.value}`);
  }

  function logout(): void {
    authToken.value = null;
    authProfile.value = null;
    isTokenValid.value = false;
  }

  return {
    authToken,
    authProfile,
    isTokenValid,
    setData,
    checkToken,
    checkTokenOnMain,
    logout,
  };
});
