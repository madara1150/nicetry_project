<template>
    <div>
  <NavAdmin class="z-40" />
      
      <div class="bg-gradient-to-br from-rose-900 via-black to-rose-700 w-full h-full">
          <div class="w-[70%] mx-auto bg-gray-200 max-[600px]:w-[100%]">
              <div class="flex justify-center max-[600px]:p-5" v-for="val,i in 2" :key="i">
                  <div class="flex justify-center content-center mt-10 max-[600px]:flex-col mb-5">
                      <CardPost  class="w-[50%] mr-10 max-[600px]:w-full" :color="''" id="post" />
                      <TopDonate class="w-[35%] h-[40%] mt-5 max-[600px]:w-full" id="topdonate" />
                  </div>
              </div>
  
              <!-- test level post -->
              <div class="flex justify-center max-[600px]:p-5" v-for="val,i in 2" :key="i">
                  <div class="flex justify-center content-center mt-10 max-[600px]:flex-col mb-5">
                      <CardPost  class="w-[50%] mr-10 max-[600px]:w-full" :color="'bg-red-700'" />
                      <TopDonate class="w-[35%] h-[40%] mt-5 max-[600px]:w-full" />
                  </div>
              </div>
  
          </div>
          
      </div>
  
  
      
  
    </div>
  </template>
  
    <script>

    import CardPost from '@/components/CardPost.vue';
    import TopDonate from '@/components/TopDonate.vue';
    import NavAdmin from '@/components/NavAdmin.vue';
    import gsap from 'gsap';
    export default {
    
        name:'MainPage',
        components:{
            CardPost,
            NavAdmin,
            TopDonate
        },
        mounted(){
            let tl = gsap.timeline()
            tl.from('#post', {x:100,duration:1.5,autoAlpha:0})
            .from('#topdonate', {x:-50,duration:0.5,autoAlpha:0})
            }
    }
    </script>
    
    <style>
    
    </style>