import { alertError } from "@/lib/alert";
import { ApiFetchResponse, ApiResponse } from "@/model/ApiModel";
import { LoginUserResponse, ProfileUser } from "@/model/UserModel";
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

  const { setData } = authStore;
  const { setFlash } = flashStore;

  async function handleSubmit(): Promise<void> {
    isLoading.value = true;

    try {
      const response: { ok: boolean; data: LoginUserResponse } =
        await AuthService.login(user);
      //   console.log(`Response Login: ${response.ok}`);

      if (response.ok) {
        const bodyResponse = response.data;
        // console.log(`oke : ${bodyResponse}`);

        setData(bodyResponse.data);
        await setFlash("Login sukses", "success");
        // await router.push({ path: "/dashboard" });
        const redirect =
          (router.currentRoute.value.query.redirect as string) || "/dashboard";
        await router.push(redirect);
      }
    } catch (e: unknown) {
      if (e instanceof Promise) {
        //tidak eksekusi apapun karena sudah dihandle sama apiFetch
      } else if (e instanceof Error) {
        alertError(e.message);
      } else {
        alertError(String(e));
      }
    } finally {
      isLoading.value = false;
    }
  }

  return { user, handleSubmit, isLoading };
}
