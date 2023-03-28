<template>

  <nav
    class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-4 dark:bg-neutral-100 lg:flex-wrap lg:justify-start">
    <div class="flex w-full flex-wrap items-center justify-between px-6">
      <!-- phone -->
     
      <button @click="nextHome()"
        class="block border-0 bg-transparent py-2 px-2.5 text-red-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button">
        <span class="w-7 flex">
          <h1 class="text-black" style="font-size:2vh">NICE</h1>
          <h1 class="text-red-500" style="font-size:2vh">TRY</h1>
        </span>
      </button>

      <!-- desktop -->
      <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
        <a  @click="nextHome()" class="mt-2 mr-2 flex items-center hover:text-neutral-900 focus:text-black dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
          href="#">
          <h1 class="text-[#1F2937] pl-3" style="font-size: 3vh">NICE</h1>
          <h1 class="text-red-500" style="font-size: 3vh">TRY</h1>
        </a>
      </div>

      <!-- sign in sign up -->
      <div class="relative flex items-center">
        <a class="mr-4 text-neutral-500 hover:text-red-500 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          href="#">

          <!-- btn Sign In -->
          <span class="w-5">
            <button type="button"
              class="inline-block rounded bg-[#F9FAFB] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-[#1F2937] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#9FA6B2] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#9FA6B2] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              Sign In
            </button>
          </span>
        </a>


        <div class="relative">

            <!-- btn Sign Up -->
          <a class="hidden-arrow mr-4 flex items-center text-red-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#">
            <span class="[&>svg]:w-5">
              <button type="button" @click="nextRegister()"
                class="inline-block rounded bg-neutral-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-500 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-500 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]">
                Sign Up
              </button>
            </span>
          </a>


        </div>
      </div>
    </div>
  </nav>

<!-- black line -->
  <div class="w-full flex justify-center">
    <div class="bg-black" style="width: 80%; background-color: black; height: 2px"></div>
  </div>

</template>

<script>
export default {
  name: "NavBarBtn",
  data() {
    return {};
  },
  methods: {
    nextRegister(){
      this.$router.push('/register')
    },
    nextHome(){
      this.$router.push('/')
    }
  },
};
</script>

<style scoped></style>
