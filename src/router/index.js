import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/store";
import Admin from "@/views/Admin.vue";
import Deposit from "@/views/Deposit.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import MainPage from "@/views/MainPage.vue";
import Profile from "@/views/Profile.vue";
import Register from "@/views/Register.vue";
import TopUp from "@/views/TopUp.vue";
import WithDraw from "@/views/WithDraw.vue";

const routes = [
  { path: "/", name: "Home", component: Home, meta: { guestOnly: true } },
  { path: "/login", name: "Login", component: Login, meta: { guestOnly: true, hideNav: true } },
  { path: "/register", name: "Register", component: Register, meta: { guestOnly: true, hideNav: true } },
  { path: "/main", name: "MainPage", component: MainPage, meta: { requiresAuth: true } },
  { path: "/profile", name: "Profile", component: Profile, meta: { requiresAuth: true } },
  { path: "/topup", name: "TopUp", component: TopUp, meta: { requiresAuth: true } },
  { path: "/withdraw", name: "WithDraw", component: WithDraw, meta: { requiresAuth: true } },
  { path: "/deposit", name: "Deposit", component: Deposit, meta: { requiresAuth: true } },
  { path: "/admin", name: "Admin", component: Admin, meta: { requiresAuth: true, adminOnly: true } },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach(async (to) => {
  const store = useUserStore();
  if (!store.ready) {
    await store.fetchUser();
  }
  if (to.meta.requiresAuth && !store.user) {
    return "/login";
  }
  if (to.meta.guestOnly && store.user) {
    return store.isAdmin ? "/admin" : "/main";
  }
  if (to.meta.adminOnly && !store.isAdmin) {
    return "/main";
  }
});

export default router;
