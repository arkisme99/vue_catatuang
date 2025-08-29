import { useLocalStorage } from "@vueuse/core";
import { ProfileUser } from "@/model/UserModel";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { AuthService } from "@/services/AuthService";
// import { useLogoutMain } from "@/composable/useLogoutMain";
// import { useLogout } from "@/composable/useLogout";

export const useAuthStore = defineStore("auth", () => {
  const PROFILE_KEY = "profile-user";
  const AUTH_TOKEN = "session-token";

  // const authToken = ref<string | null>(null);
  const authToken = useLocalStorage<string | null>(AUTH_TOKEN, null);
  const authProfile = useLocalStorage<ProfileUser | null>(PROFILE_KEY, null);
  const isTokenValid = ref<boolean>(false);
  // const uLogout = useLogout();
  // const uLogoutMain = useLogoutMain();
  // const { handleLogout } = uLogout;
  // const { handleLogoutOnMain } = uLogoutMain;

  // Watch token changes, auto logout jika token diubah manual
  watch(authToken, async (newVal, oldVal) => {
    console.warn("Masuk ke watch");
    if (oldVal && newVal !== oldVal) {
      console.warn("Token di localStorage diubah manual!");
      // await handleLogout();
      // await AuthService.logout();
      logout();
    }
  });

  async function checkToken(): Promise<void> {
    if (!authToken.value) {
      // await handleLogout();
      await AuthService.logout();
      logout();
    }
    // console.log(`cekToken start`);
    try {
      const response = await AuthService.getProfile();

      const responseBody = await response.json();
      if (!response.ok) {
        return;
      }
      // console.log(`Token: ${responseBody.data}`);
      setData(responseBody.data);
    } catch (e) {
      // await handleLogout();
      await AuthService.logout();
      logout();
      throw e;
    }
  }
  async function checkTokenOnMain(): Promise<void> {
    if (!authToken.value) {
      logout();
    }
    // console.log(`cekToken start`);
    try {
      const response = await AuthService.getProfile();

      const responseBody = await response.json();
      if (!response.ok) {
        return;
      }
      // console.log(`Token: ${responseBody.data}`);
      setData(responseBody.data);
    } catch (e) {
      logout();
      throw e;
    }
  }

  function setData(data: ProfileUser): void {
    // console.log(`setData: ${JSON.stringify(data)}`);
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
