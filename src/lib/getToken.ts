import { useAuthStore } from "@/stores/auth";

export const getToken = (): string | null => {
  const authStore = useAuthStore();
  return authStore?.authToken ?? null;
};
