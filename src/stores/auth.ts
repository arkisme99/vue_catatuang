import { useLocalStorage } from "@vueuse/core";
import { ProfileUser } from "@/model/UserModel";
import { defineStore } from "pinia";
import { ref } from "vue";
import { AuthService } from "@/services/AuthService";

export const useAuthStore = defineStore("auth", () => {
  const PROFILE_KEY = "profile-user";
  const AUTH_TOKEN = "session-token";

  const authToken = useLocalStorage<string | null>(AUTH_TOKEN, null);
  const authProfile = useLocalStorage<ProfileUser | null>(PROFILE_KEY, null);
  const isTokenValid = ref<boolean>(false);

  async function checkToken(): Promise<"OK"> {
    //ini digunakan di route untuk guard
    // console.log(`cekToken start`);
    try {
      const response = await AuthService.getProfile();

      const responseBody = await response.json();
      if (!response.ok) {
        throw new Error("Invalid token");
      }
      // console.log(`Token: ${responseBody.data}`);
      await setData(responseBody.data);
      return "OK";
    } catch (e) {
      logout();
      throw e;
    }
  }

  async function setData(data: ProfileUser): Promise<void> {
    if (data.token) {
      authToken.value = data.token;
    }
    authProfile.value = data;
    isTokenValid.value = true;
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
    logout,
  };
});
