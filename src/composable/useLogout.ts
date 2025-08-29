import { alertError, handleError } from "@/lib/alert";
import { AuthService } from "@/services/AuthService";
import { useAuthStore } from "@/stores/auth";
import { useFlashStore } from "@/stores/flash";
import { ref } from "vue";
import { useRouter } from "vue-router";

export function useLogout() {
  const isLoading = ref<boolean>(false);
  const authStore = useAuthStore();
  const flashStore = useFlashStore();
  const router = useRouter();

  async function handleLogout(): Promise<void> {
    isLoading.value = true;
    try {
      const response = await AuthService.logout();

      if (response.ok) {
        authStore.logout();
        await flashStore.setFlash("Logout sistem sukses", "success");
        await router.push({
          path: "/login",
        });
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  return { handleLogout, isLoading };
}
