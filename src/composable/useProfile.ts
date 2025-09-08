import { alertError, alertSuccess, handleError } from "@/lib/alert";
import removeEmptyObject from "@/lib/removeEmptyObject";
import { UpdateProfileRequest } from "@/model/UserModel";
import { AuthService } from "@/services/AuthService";
import { useAuthStore } from "@/stores/auth";
import { reactive, ref } from "vue";

export function useProfile() {
  const user = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const isLoading = ref<boolean>(false);
  const authStore = useAuthStore();

  // const aStore = storeToRefs(authProfile?.name?);

  async function getProfile(): Promise<void> {
    const response = await authStore.fetchUser();

    user.name = authStore.user?.name ?? "";
    user.email = authStore.user?.email ?? "";
    return response;
  }

  async function handleSubmitProfile(): Promise<void> {
    isLoading.value = true;
    const { password_confirmation, ...rest } = user;
    const payload: UpdateProfileRequest = rest;

    if (payload.password !== "" || user.password_confirmation !== "") {
      if (payload.password !== user.password_confirmation) {
        alertError("Password dan konfirmasi password tidak sama");
        isLoading.value = false;
        return;
      }

      //remove name, email and password_confirmation
      delete payload.name;
      delete payload.email;
    }

    try {
      const response = await AuthService.updateProfile(
        removeEmptyObject(payload)
      );

      if (response.ok) {
        const responseBody = response.data;
        // authStore.setData(responseBody.data);
        authStore.user = responseBody.data;

        //clear reactive user
        user.name = responseBody.data.name ?? "";
        user.email = responseBody.data.email ?? "";
        user.password = "";
        user.password_confirmation = "";

        alertSuccess("Update profile sukses");
      }
    } catch (e) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    user,
    isLoading,
    getProfile,
    handleSubmitProfile,
    authStore,
  };
}
