import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { AuthService } from "../services/AuthService";
import { useAuthStore } from "../stores/auth";
import { alertError } from "../lib/alert";
import { useFlashStore } from "../stores/flash";

export function useLogin() {
  const user = reactive({
    username: "",
    password: "",
  });

  const isLoading = ref(false);
  const router = useRouter();
  const authStore = useAuthStore();
  const flashStore = useFlashStore();

  async function handleSubmit() {
    isLoading.value = true;

    try {
      const response = await AuthService.login(user);
      //   console.log(`Response Login: ${response.ok}`);

      if (response.ok) {
        const bodyResponse = response.data;
        // console.log(`oke : ${bodyResponse}`);

        await authStore.setData(bodyResponse.data);
        await flashStore.setFlash("Login sukses", "success");
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
      isLoading.value = false;
    }
  }

  return { user, handleSubmit, isLoading };
}
