import { alertSuccess, handleError } from "@/lib/alert";
import MENUPATH from "@/lib/menuEnum";
import removeEmptyObject from "@/lib/removeEmptyObject";
import { AuthService } from "@/services/AuthService";
import { useAuthStore } from "@/stores/auth";
import { useFlashStore } from "@/stores/flash";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

export function useProfile() {
  const user = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const isLoading = ref<boolean>(false);
  const router = useRouter();
  const authStore = useAuthStore();
  const flashStore = useFlashStore();

  async function getProfile(): Promise<boolean> {
    try {
      const response = await AuthService.getProfile();
      const responseBody = await response.json();

      user.name = responseBody.data.name;
      user.email = responseBody.data.email;

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async function handleSubmitProfile(): Promise<void> {
    isLoading.value = true;

    try {
      const response = await AuthService.updateProfile(removeEmptyObject(user));

      if (response.ok) {
        const responseBody = response.data;
        authStore.setData(responseBody.data);
        alertSuccess("Update profile sukses");
        // await router.push({ path: MENUPATH.PROFILE });
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  return { user, isLoading, getProfile, handleSubmitProfile };
}
