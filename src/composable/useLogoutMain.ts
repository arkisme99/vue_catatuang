import { alertError } from "@/lib/alert";
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";

export function useLogoutMain() {
  const isLoading = ref<boolean>(false);
  const authStore = useAuthStore();

  async function handleLogoutOnMain(): Promise<void> {
    isLoading.value = true;
    try {
      authStore.logout();
    } catch (e: unknown) {
      if (e instanceof Promise) {
      } else if (e instanceof Error) {
        alertError(e.message);
      } else {
        alertError(String(e));
      }
    } finally {
      isLoading.value = false;
    }
  }

  return { handleLogoutOnMain, isLoading };
}
