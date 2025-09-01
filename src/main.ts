import { createApp } from "vue";
import App from "@/App.vue";
import { createPinia } from "pinia";
import router from "@/router";
import { useAuthStore } from "./stores/auth";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

// Check token saat app start
const authStore = useAuthStore();
await authStore.checkTokenOnMain();
// console.log(`main: ${authStore.isTokenValid}`);

app.use(router);

app.mount("#app");
