<template>
  <div class="sticky top-0 z-10 ">
    <NavBar />
  </div>
  <div class="flex justify-center max-[600px]:flex-col min-h-screen" style="background-image: url(https://cdn.discordapp.com/attachments/911172780781891614/1089188257331433543/black-and-white-city-silhouette-background-abstract-skyline-of-city-buildings-with-blue-sky-illustration-vector.png)">
    <div class="w-[35%] max-[600px]:w-full">
      <div class="text-center" id="start">
        <p class="text-5xl mt-14 text-center" >GET <span class="text-red-600">STARTED</span></p>
        <p class="text-lg mt-3 text-center text-gray-300">create your account now.</p>
      </div>
      
      <!-- input -->
      <form class="w-full flex justify-center" id="form">
        <div class="w-[90%]">
            <div class="flex">
                <input type="text" v-model="fname" @blur="v$.fname.$touch" id="fname" class="mt-7 drop-shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5" placeholder="Enter your name" required>
                <input type="text" id="lname" class="ml-4 mt-7 drop-shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5" placeholder="Enter your lastname" required>
            </div>
            <div class="text-red-500" v-if="v$.fname.$error">Name must 8 characters</div>
            <div>
              <input type="text" id="username" class="mt-7 drop-shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block h-12 p-2.5" placeholder="Enter your username" required>
              <input type="password" id="pass" class="mt-7 drop-shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block h-12 p-2.5" placeholder="Enter your password" required>
              <input type="text" id="email" class="mt-7 drop-shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block h-12 p-2.5" placeholder="Enter your email" required>
              <input type="number" id="" class="mt-7 drop-shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block h-12 p-2.5" placeholder="Enter your phone number" required>
              <input type="text" id="" class="mt-7 drop-shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block h-12 p-2.5" placeholder="Enter your contact">

            </div>
            <button type="button" class="mt-7 drop-shadow-lg w-full h-12 text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">SIGN UP</button>
            <p id="helper-text-explanation" class="mt-2 text-sm text-center text-white">Do you have an account? <a href="/Login" class="font-medium text-red-600 hover:underline bg-gray-100 p-1.5 rounded-[20%]">Sign In</a></p>
          </div>
      </form>
    </div>

    <div class="mb-0 lg:mb-0 max-[600px]:w-full max-[600px]:ml-0 px-10 w-[35%] mt-20 ml-[7%]" id="image-main">

      <!-- image -->
      <div id="carouselExampleSlidesOnly" class="relative w-full h-max rounded" data-te-carousel-init data-te-carousel-slide>
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded">

            <div class="rounded relative float-left -mr-[100%] w-full h-full max-[600px]:h-80 max-[600px]:w-80 transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item data-te-carousel-active>
              <img src="https://images.unsplash.com/photo-1528491836309-55b4a140b78a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" class="block w-full max-[600px]:h-80 h-[450px] max-[600px]:w-80" alt="Wild Landscape" />
            </div>

            <div class="rounded relative float-left -mr-[100%] hidden w-full max-[600px]:h-80 max-[600px]:w-80 transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item>
              <img src="https://images.unsplash.com/photo-1598810132152-e70c939a1dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" class="block w-full max-[600px]:h-80 max-[600px]:w-80 h-[450px]"  alt="Camera" />
            </div>

            <div class="rounded relative float-left -mr-[100%] hidden w-full max-[600px]:h-80 max-[600px]:w-80 transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item>
              <img src="https://images.unsplash.com/photo-1598495494482-172d89ff078c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80" class="block w-full max-[600px]:h-80 max-[600px]:w-80 h-[450px]" alt="Exotic Fruits" />
            </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script>
import NavBar from '@/components/Nav.vue';
import gsap from 'gsap';
import { useVuelidate } from '@vuelidate/core'
import { required,minLength } from '@vuelidate/validators'
export default {
  setup () {
    return { 
      v$: useVuelidate() 
    }
  },
  data(){
    return{
      fname:''
    }
  },
    components: {
       NavBar
       },

    mounted(){
      let tl = gsap.timeline()
      tl.from('#start', {x:100,duration:1.5,autoAlpha:0})
      .from('#form', {x:-100,duration:0.5,autoAlpha:0})
      .from('#image-main', {x:-100,duration:0.5,autoAlpha:0})
    },

    validations () {
      return{
        fname: { required,minLength: minLength(8), },
      }
    }
}
</script>

<style scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>