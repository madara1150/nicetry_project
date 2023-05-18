<template>
  <div class="sticky top-0 z-10">
    <NavBar />
  </div>
  <div
    class="flex justify-center max-[600px]:flex-col min-h-screen"
    style="
      background-image: url(https://cdn.discordapp.com/attachments/911172780781891614/1089188257331433543/black-and-white-city-silhouette-background-abstract-skyline-of-city-buildings-with-blue-sky-illustration-vector.png);
    "
  >
    <div class="w-[35%] max-[600px]:w-full">
      <div id="welcomeback">
        <p class="text-5xl mt-14 text-center">
          WELCOME <span class="text-red-600">BACK</span>
        </p>
        <p class="text-lg mt-3 text-center text-gray-300">
          Please enter your detail
        </p>
      </div>

      <!-- input -->
      <form class="w-full" id="image">
        <div class="w-[90%]">
          <div>
            <input
              type="text"
              id="username"
              class="ml-5 mt-7 drop-shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5"
              placeholder="Enter your username"
              v-model="username"
              required
            />
            <input
              type="password"
              id="pass"
              class="ml-5 mt-7 drop-shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5"
              placeholder="Enter your password"
              v-model="password"
              required
            />
          </div>
          <button
            @click="login()"
            type="button"
            class="ml-5 mt-7 drop-shadow-lg w-full h-12 text-white bg-gray-900 hover:bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            SIGN IN {{ me }}
          </button>
          <p
            id="helper-text-explanation"
            class="text-center mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Don't have an account?
            <a href="/Register" class="font-medium text-red-600 hover:underline"
              >Sign Up</a
            >
          </p>
        </div>
      </form>
    </div>

    <div
      class="mb-0 lg:mb-0 max-[600px]:w-full max-[600px]:ml-0 px-10 w-[35%] mt-20 ml-[7%]"
      id="image-main"
    >
      <!-- image -->
      <div
        id="carouselExampleSlidesOnly"
        class="relative w-full h-max rounded"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div
          class="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded"
        >
          <div
            class="rounded relative float-left -mr-[100%] w-full h-full max-[600px]:h-80 max-[600px]:w-80 transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src="https://images.unsplash.com/photo-1528491836309-55b4a140b78a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              class="block w-full max-[600px]:h-80 h-[450px] max-[600px]:w-80"
              alt="Wild Landscape"
            />
          </div>

          <div
            class="rounded relative float-left -mr-[100%] hidden w-full max-[600px]:h-80 max-[600px]:w-80 transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="https://images.unsplash.com/photo-1598810132152-e70c939a1dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              class="block w-full max-[600px]:h-80 max-[600px]:w-80 h-[450px]"
              alt="Camera"
            />
          </div>

          <div
            class="rounded relative float-left -mr-[100%] hidden w-full max-[600px]:h-80 max-[600px]:w-80 transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="https://images.unsplash.com/photo-1598495494482-172d89ff078c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80"
              class="block w-full max-[600px]:h-80 max-[600px]:w-80 h-[450px]"
              alt="Exotic Fruits"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Nav.vue";
import gsap from "gsap";

import { useFetchStore } from "../store/index";
import { storeToRefs } from "pinia";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: { NavBar },
  mounted() {
    let tl = gsap.timeline();
    tl.from("#welcomeback", { x: 100, duration: 1.5, autoAlpha: 0 })
      .from("#image", { x: -100, duration: 0.5, autoAlpha: 0 })
      .from("#image-main", { x: -100, duration: 0.5, autoAlpha: 0 });
  },
  setup() {
    const apiStore = useFetchStore();
    const { data } = storeToRefs(apiStore);
    async function fetchData() {
      await apiStore.fetchData();
    }

    return {
      fetchData,
      me: data,
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.axios.post(
          "http://localhost:5000/api/users/login",
          {
            username: this.username,
            password: this.password,
          }
        );
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          this.fetchData();
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>