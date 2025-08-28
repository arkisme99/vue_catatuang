import { alertError } from "@/lib/alert";
import { CreateUserResponse } from "@/model/UserModel";
import { AuthService } from "@/services/AuthService";
import { useFlashStore } from "@/stores/flash";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

export function useRegister() {
  const user = reactive({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const isLoading = ref<boolean>(false);
  const router = useRouter();
  const flashStore = useFlashStore();

  const { setFlash } = flashStore;

  async function handleSubmit(): Promise<void> {
    if (user.password !== user.password_confirmation) {
      await alertError("Password dan konfirmasi password tidak sama");
      return;
    }

    isLoading.value = true;
    try {
      const response: { ok: boolean; data: CreateUserResponse } =
        await AuthService.register(user);
      // console.log(`Response: ${response}`);
      if (response.ok) {
        await setFlash("Pendaftaran berhasil", "success");
        await router.push({
          path: "/login",
        });
      }
    } catch (e) {
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
