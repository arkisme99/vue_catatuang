import { ProfileUser } from "@/model/UserModel";
import { AuthService } from "@/services/AuthService";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as ProfileUser | null,
    isAuthenticated: false,
    loading: false,
    accessToken: null as string | null,
  }),

  actions: {
    async fetchUser() {
      this.loading = true;
      try {
        const response = await AuthService.getProfile();
        this.user = response.data.data;
        this.isAuthenticated = true;
      } catch (err) {
        this.user = null;
        this.isAuthenticated = false;
      } finally {
        this.loading = false;
      }
    },

    /* async login(payload: LoginUserRequest) {
      try {
        const response = await AuthService.login(payload);
        this.accessToken = response.data.data.token ?? null;
        await this.fetchUser();
      } catch (err) {
        throw err;
      }
    }, */

    async logout() {
      try {
        await AuthService.logout();
      } finally {
        this.user = null;
        this.isAuthenticated = false;
      }
    },

    async refresh() {
      try {
        const response = await AuthService.refresh();
        this.accessToken = response.data.data.token ?? null;
        await this.fetchUser();
      } catch (err) {
        // this.logout();
      }
    },
  },
});
