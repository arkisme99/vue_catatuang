import { useRouter } from "vue-router";

export const toLogin = async (): Promise<void> => {
  const router = useRouter();
  await router.push({ path: "/login" });
};
