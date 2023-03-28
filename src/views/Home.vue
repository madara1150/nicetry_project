<template>

  <!-- nav => no sign IN -->
  <div class="sticky top-0 z-10 ">
    <NavBarBtn />
  </div>
 

  <section class="w-full min-h-screen" >

    <div id="container2" class="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left pt-64" style="background-image: url(https://media.discordapp.net/attachments/911172780781891614/1089188257331433543/black-and-white-city-silhouette-background-abstract-skyline-of-city-buildings-with-blue-sky-illustration-vector.png?width=2120&height=1060);">
      <div class="mx-auto xl:px-32 w-full h-full" style="height:60%;padding-bottom:10%;width:100%;">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center max-[600px]:items-center">
          <div class="mt-15 lg:mt-0">
            
            <!-- text -->
            <div id="text-main">
              <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style="font-size:8vh">
              Even if no one see it,<br />
              <span class="text-[#D42A46]" >We see it.</span>
            </h1>
            </div>
            

            <!-- card -->
            <div class="flex justify-center" style="width:100%;" id="card-main">
              <div
                class="flex flex-col rounded-lg shadow-lg dark:bg-white bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-rose-800 via-rose-400 to-rose-100 md:max-w-xl md:flex-row"
                style="border-top-right-radius: 40%;width:100%;">

                <!-- img-card -->
                <div class="flex justify-center" style="width:70%;height:70%;">



                  <img
                    class="h-40 w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-l-lg mt-5 ml-2"
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"  />
                
                  </div>

                <div class="flex flex-col justify-start p-6">

                  <!-- content card -->
                  <h5 class="mb-2 text-xl font-medium text-white">
                    Card title
                  </h5>

                  <p class="mb-4 text-base text-white">
                    This is a wider card with supporting text below as a natural
                  </p>

                  <div class="flex justify-center space-x-2 mt-5">

                    <!-- facebook -->
                    <button
                      type="button"
                      class="inline-block rounded bg-neutral-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-300 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-300 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]">
                      FACEBOOK
                    </button>

                    <!-- IG -->
                    <button
                      type="button"
                      class="inline-block rounded bg-neutral-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-500 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-500 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-500 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-500 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-500 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]" >
                      INSTAGRAM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- post -->
          <div class="mb-0 lg:mb-0 max-[600px]:w-80" id="image-main">

            <!-- image -->
            <div id="carouselExampleSlidesOnly" class="relative w-full h-max bg-red-500 rounded" data-te-carousel-init data-te-carousel-slide>
              <div class="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded">
    
                  <div class="rounded relative float-left -mr-[100%] w-full h-full max-[600px]:h-80 max-[600px]:w-80 transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item data-te-carousel-active>
                    <img src="https://m.media-amazon.com/images/M/MV5BM2JjYmUyN2MtODIyOC00ZmNiLWI5YTUtN2NiMWQzNmM3OGU1XkEyXkFqcGdeQXVyNDk3NDEzMzk@._V1_FMjpg_UX1000_.jpg" class="block w-full max-[600px]:h-80 h-[450px] max-[600px]:w-80" alt="Wild Landscape" />
                  </div>
    
                  <div class="rounded relative float-left -mr-[100%] hidden w-full max-[600px]:h-80 max-[600px]:w-80 transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-54caf0d24d3f87fb42b6532614ae7f9c-lq" class="block w-full max-[600px]:h-80 max-[600px]:w-80 h-[450px]"  alt="Camera" />
                  </div>
    
                  <div class="rounded relative float-left -mr-[100%] hidden w-full max-[600px]:h-80 max-[600px]:w-80 transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item>
                    <img src="https://cdnb.artstation.com/p/assets/images/images/038/151/293/large/sajol-hasan-madara-sammm.jpg?1622314122" class="block w-full max-[600px]:h-80 max-[600px]:w-80 h-[450px]" alt="Exotic Fruits" />
                  </div>


              </div>
            </div>

          </div>
          
        </div>
      </div>
     
    </div>

    <!-- nav bottom -->
  <div class="w-full h-full px-6 mx-auto bg-gradient-to-br from-black via-gray-800 to-rose-800 py-4">

    <div class="w-[100%]">
      <Landing />
    </div>
    


  </div>
     
    
  </section>


  

</template>

<script>
import gsap from 'gsap';
import Landing from '../components/Landing.vue';
import NavBarBtn from "../components/NavBarBtn.vue";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: "Home",
  methods: {
    
  },
  components: {
    NavBarBtn,
    Landing
   
   
  },
  data() {
    return {};
  },

  mounted(){

    gsap.registerPlugin(ScrollTrigger);
    
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#container2',
        scrub:true,
        start: "-10%",
        end:'+=250',
      }
    })

    tl.from('#text-main', {y:-700,duration:1.5})
    .from('#card-main', {x:-900,duration:1.5})
    .from('#image-main',{x:1000,duration:1.5})
    
  }
};
</script>

<style>
</style>