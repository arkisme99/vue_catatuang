import { useAuthStore } from "../stores/auth";

export const getToken = () => {
  const authStore = useAuthStore();
  return authStore.authToken;
};
