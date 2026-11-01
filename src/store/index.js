import { defineStore } from "pinia";
import api from "@/api";

export const useUserStore = defineStore("user", {
  state: () => ({ user: null, ready: false }),

  getters: {
    isAdmin: (state) => state.user?.role === "ADMIN",
  },

  actions: {
    async fetchUser() {
      this.ready = true;
      if (!localStorage.getItem("token")) {
        this.user = null;
        return;
      }
      try {
        const { data } = await api.get("/users/me");
        this.user = data.user;
      } catch (err) {
        if (err.response?.status === 401) {
          this.logout();
        }
      }
    },

    async login(username, password) {
      const { data } = await api.post("/users/login", { username, password });
      localStorage.setItem("token", data.token);
      this.user = data.user;
    },

    logout() {
      localStorage.removeItem("token");
      this.user = null;
    },
  },
});
