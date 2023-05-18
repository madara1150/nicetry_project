import { defineStore } from "pinia";
import axios from "./../plugin/axios";
export const useFetchStore = defineStore("user", {
  state: () => ({ data: {} }),

  actions: {
    async fetchData() {
      try {
        const data = await axios.get("/users/me")
        this.data = data.data.user;
      } catch (err) {
        console.error(err);
      }
    },

    async Logout() {
      localStorage.setItem('token', "")
      this.data = ""
    }

  },
  getters: {
    fetchMe: (state) => state.data,
  }
});