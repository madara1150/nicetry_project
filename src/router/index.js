import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import MainPage from '../views/MainPage.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import History from '../views/History.vue'
import TopUp from '../views/TopUp.vue'
import UsePage from '../views/UsePage.vue'


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
    path: "/topUp",
    name: "TopUp",
    component: TopUp,
  },
  {
    path: "/usepage",
    name: "usePage",
    component: UsePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;