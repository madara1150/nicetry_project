<template>

  <!-- nav => no sign IN -->
  <NavBarBtn />

  <section class="h-full min-h-full" >

    <div class="px-6 py-12 min-h-full md:px-12 bg-neutral-100 text-gray-800 bg-gradient-to-tl from-slate-100 via-gray-100 to-slate-400 text-center lg:text-left pt-16">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0">
            
            <!-- text -->
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" >
              Even if no one see it,<br />
              <span class="text-[#D42A46]">We see it.</span>
            </h1>

            <!-- card -->
            <div class="flex justify-center ">
              <div
                class="flex flex-col rounded-lg shadow-lg dark:bg-white bg-gradient-to-tl from-pink-100 via-gray-100 to-rose-200 md:max-w-xl md:flex-row"
                style="border-top-right-radius: 40%">

                <!-- img-card -->
                <div class="flex justify-center">



                  <img
                    class="h-40 w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-l-lg mt-5 ml-2"
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" />
                
                  </div>

                <div class="flex flex-col justify-start p-6">

                  <!-- content card -->
                  <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-black">
                    Card title
                  </h5>

                  <p class="mb-4 text-base text-black dark:text-black">
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
          <div class="mb-12 lg:mb-0">

            <!-- image -->
            <div id="carouselExampleSlidesOnly" class="relative w-full h-full bg-red-500 rounded" data-te-carousel-init data-te-carousel-slide>
              <div class="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded">
    
                  <div class="rounded relative float-left -mr-[100%] w-full h-full transition-transform duration-[600ms] h-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item data-te-carousel-active>
                    <img src="https://m.media-amazon.com/images/M/MV5BM2JjYmUyN2MtODIyOC00ZmNiLWI5YTUtN2NiMWQzNmM3OGU1XkEyXkFqcGdeQXVyNDk3NDEzMzk@._V1_FMjpg_UX1000_.jpg" class="block w-full h-full" alt="Wild Landscape" />
                  </div>
    
                  <div class="rounded relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] h-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-54caf0d24d3f87fb42b6532614ae7f9c-lq" class="block w-full h-full " alt="Camera" />
                  </div>
    
                  <div class="rounded relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] h-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item>
                    <img src="https://cdnb.artstation.com/p/assets/images/images/038/151/293/large/sajol-hasan-madara-sammm.jpg?1622314122" class="block w-full" alt="Exotic Fruits" />
                  </div>


              </div>
            </div>

          </div>
        
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import NavBarBtn from "../components/NavBarBtn.vue";
import TopPost from "@/components/TopPost.vue";

export default {
  name: "Home",
  methods: {},
  components: {
    NavBarBtn,
    TopPost,
   
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>