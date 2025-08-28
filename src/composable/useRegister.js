import { reactive, ref } from "vue";
import { AuthService } from "../services/AuthService";
import { alertError } from "../lib/alert";
import { useRouter } from "vue-router";
import { useFlashStore } from "../stores/flash";

export function useRegister() {
  const user = reactive({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const isLoading = ref(false);
  const router = useRouter();
  const flashStore = useFlashStore();

  async function handleSubmit() {
    if (user.password !== user.password_confirmation) {
      alertError("Password dan konfirmasi password tidak sama");
      return;
    }

    isLoading.value = true;
    try {
      const response = await AuthService.register(user);
      // console.log(`Response: ${response}`);
      if (response.ok) {
        await flashStore.setFlash("Pendaftaran berhasil", "success");

        await router.push({
          path: "/login",
        });
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
