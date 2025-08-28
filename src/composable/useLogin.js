import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { AuthService } from "../services/AuthService";
import { useAuthStore } from "../stores/auth";

export function useLogin() {
  const user = reactive({
    username: "",
    password: "",
  });

  const isLoading = ref(false);
  const router = useRouter();
  const authStore = useAuthStore();

  async function handleSubmit() {
    isLoading.value = true;

    try {
      const response = await AuthService.login(user);

      if (response.ok) {
        const responseBody = response.json();
        console.log(`Response Login: ${responseBody}`);

        authStore.authToken = responseBody.data.token;
        await router.push({ path: "/dashboard" });
      }
    } catch (e) {
      if (e instanceof Promise) {
        //tidak eksekusi apapun karena sudah dihandle sama apiFetch
      } else {
        console.log(e);
        alertError(e);
      }
    } finally {
      isLoading.value = true;
    }
  }

  return { user, handleSubmit, isLoading };
}
