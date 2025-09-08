import { handleError } from "@/lib/alert";
import MENUPATH from "@/lib/menuEnum";
import { LoginUserResponse } from "@/model/UserModel";
import { AuthService } from "@/services/AuthService";
import { useAuthStore } from "@/stores/auth";
import { useFlashStore } from "@/stores/flash";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

export function useLogin() {
  const user = reactive({
    username: "",
    password: "",
  });

  const isLoading = ref<boolean>(false);
  const router = useRouter();
  const authStore = useAuthStore();
  const flashStore = useFlashStore();

  const { setFlash } = flashStore;

  async function handleSubmit(): Promise<void> {
    isLoading.value = true;

    try {
      const response: { ok: boolean; data: LoginUserResponse } =
        await AuthService.login(user);
      //   console.log(`Response Login: ${response.ok}`);

      if (response.ok) {
        const bodyResponse = response.data;
        authStore.accessToken = bodyResponse.data.token ?? null;
        await authStore.fetchUser();
        // console.log(`oke : ${bodyResponse}`);

        await setFlash("Login sukses", "success");
        // await router.push({ path: "/dashboard" });
        const redirect =
          (router.currentRoute.value.query.redirect as string) ||
          MENUPATH.DASHBOARD;
        await router.push(redirect);
      }
    } catch (e: unknown) {
      handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  return { user, handleSubmit, isLoading };
}
