import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { AuthService } from "../services/AuthService";
import { alertError, alertSuccess } from "../lib/alert";
import { handleFetchError } from "../lib/handleError";

export function useRegister() {
  const router = useRouter();

  const user = reactive({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const isLoading = ref(false);

  async function handleSubmit() {
    if (user.password !== user.password_confirmation) {
      alertError("Password dan konfirmasi password tidak sama");
      return;
    }

    isLoading.value = true;

    const response = await AuthService.register(user);
    const responseBody = await response.json();

    if (response.status === 201) {
      await alertSuccess("Pendaftaran berhasil");
      await router.push({
        path: "/login",
      });
    } else {
      isLoading.value = false;
      await handleFetchError(response, responseBody);
    }
  }

  return { user, handleSubmit, isLoading };
}
