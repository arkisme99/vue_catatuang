import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { alertError } from "../lib/alert";
import { useFlashStore } from "../stores/flash";
import { AuthService } from "../services/AuthService";

export function useLogout() {
  const isLoading = ref(false);
  const router = useRouter();
  const authStore = useAuthStore();
  const flashStore = useFlashStore();

  async function handleLogout() {
    isLoading.value = true;
    try {
      const response = await AuthService.logout();

      if (response.ok) {
        authStore.logout();
        await flashStore.setFlash("Logout sistem sukses", "success");
        await router.push({ path: "/login" });
      }
    } catch (e) {
      alertError(e);
    } finally {
      isLoading.value = false;
    }
  }

  return { handleLogout, isLoading };
}
