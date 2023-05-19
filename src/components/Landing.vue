<template>
  <div id="container">
    
    <div class="text-center pt-3 mb-2" id="NameLanding">
    <span class="text-white text-4xl">NICE</span
      
      ><span class="text-red-500 text-4xl">TRY</span>
    </div>

    <hr class="h-px my-8 bg-gray-200 border-0" />

    <div class="flex px-64 max-[600px]:flex-col max-[600px]:px-0 mt-20 justify-center">
      <div class="w-[50%] max-[600px]:w-[100%]" id="PostOne">
        <CardPost class="drop-shadow-[0_45px_45px_rgba(0,255,255,0.6)]" />
      </div>

    
      <div class="mx-3 flex items-center justify-center w-[45%] max-[600px]:w-full max-[600px]:mt-5" id="ContentOne">
          <a class="block w-[90%] bg-white rounded shadow hover:bg-gray-100">
          <h5 class="mb-2 text-2xl font-bold tracking-tight p-5 text-white bg-gradient-to-br from-gray-800 via-gray-800 to-slate-700 rounded-t text-center">POST</h5>
          <h3 class="text-xl text-gray-700 p-5 rounded-b" id="text-a">This is a sample post. You can post your own lifestyle. You can include up to 3 photos showing what others don't know about you. Supporters will come to support you.</h3>
          </a>
        </div>

    </div>

    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        
    <div class="flex px-64 max-[600px]:flex-col max-[600px]:px-0 mt-20 justify-center" >

      <div class="mx-10 flex items-center justify-center " id="contentTwo" >
          <a class="block max-w-sm bg-white rounded shadow hover:bg-gray-100">
          <h5 class="mb-2 text-2xl font-bold tracking-tight p-5 text-white bg-gradient-to-br from-gray-800 via-gray-800 to-slate-700 rounded-t text-center">POST</h5>
          <p class="font-normal text-gray-700 p-5 rounded-b">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, delectus.</p>
          </a>
        </div>

      <div class="w-[45%] max-[600px]:w-[100%] max-[600px]:mt-5" id="postTwo">
        <TopDonate class="drop-shadow-[0_45px_45px_rgba(0,255,255,0.6)]" />
      </div>

    </div>

    <div class="flex px-64 max-[600px]:flex-col max-[600px]:px-0 mt-20 justify-center" >

        <div class="w-[60%]">
            
        </div>

    </div>   

    </div>
</template>

<script>
import gsap from 'gsap';
import CardPost from "../components/CardPost.vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import TopDonate from './TopDonate.vue';


export default {
  name: "Landing",
  components: {
    CardPost,
    TopDonate,

  },
  methods:{
    
  },
  data(){
    return{
    }
  },
  mounted() {

    let word = ["This is a sample post. You can post your own lifestyle. You can include up to 3 photos showing what others don't know about you. Supporters will come to support you."]

    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#container',
        scrub:true,
        start: "top center",
        pin:'#container',
        end:'+=200',
        
      }})

      tl.from('#NameLanding',{x:-100, opacity:0,autoAlpha:0},0)
      .from('#PostOne',{x:-300,duration:1.5})
      .from('#ContentOne',{x:300, duration:1.5})

      let masterTl = gsap.timeline({repeat:-1})

      word.forEach(words => {
        let tll = gsap.timeline({repeat:1,yoyo:true})
        tll.to('#text-a',{duration:1,text:words})
        masterTl.add(tll)
      });
      

  },
  created(){
    
  }
};
</script>

<style>
</style>