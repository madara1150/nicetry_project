import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import MainPage from '../views/MainPage.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import TopUp from '../views/TopUp.vue'
import Deposit from '../views/Deposit.vue'
import withdraw from '../views/WithDraw.vue'
import Profile from '../views/Profile.vue'
import Admin from '../views/Admin.vue'
import MainAdmin from '../views/MainAdmin.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/main",
    name: "MainPage",
    component: MainPage,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "/topup",
    name: "TopUp",
    component: TopUp,
  },
  {
    path: "/deposit",
    name: "Deposit",
    component: Deposit,
  },
  {
    path: "/withdraw",
    name: "WithDraw",
    component: withdraw,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/postadmin",
    name: "MainAdmin",
    component: MainAdmin,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;