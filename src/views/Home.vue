<template>

  <!-- nav => no sign IN -->
  <div class="sticky top-0 z-10">
    <NavBarBtn />
  </div>
 

  <section class="h-full">

    <div class="px-6 py-12 md:px-12 bg-neutral-100 pb-1 text-gray-800 bg-gradient-to-tl from-slate-100 via-gray-100 to-slate-400 text-center lg:text-left pt-20">
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
                class="flex flex-col rounded-lg shadow-lg dark:bg-white bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-rose-800 via-rose-400 to-rose-100 md:max-w-xl md:flex-row"
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


  <!-- team -->
  <div class="w-full h-full mt-32 px-6 mx-auto bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-rose-800 via-rose-400 to-rose-100 py-10">

<!-- Section: Design Block -->
<section class="text-gray-800 text-center">
  <h2 class="text-3xl font-bold text-white mb-20">Meet the Team</h2>

  <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-2 ">
    <div class="mb-0 md:mb-0 mt-10 p-5">
      <div class="rounded-lg shadow-lg h-full block bg-white">

        <div class="flex justify-center">

          <!-- picture-1 -->
          <div class="flex justify-center" style="margin-top: -75px">
            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="rounded-full mx-auto shadow-lg" alt="" style="width: 150px" />
          </div>
        </div>

        <!-- profile -->
        <div class="p-6">
          <h5 class="text-lg font-bold mb-4">Marta Smith</h5>
          <p class="mb-6">Frontend Developer</p>
          <ul class="list-inside flex mx-auto justify-center">
            <a href="#!" class="px-2">

                <!-- icon -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-4 h-4 text-blue-600">
                <path fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>


            </a>

            <a href="#!" class="px-2">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 text-blue-600">
                <path fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              
              </svg>
            </a>

            <a href="#!" class="px-2">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                
                <path fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>

            </a>
          </ul>

        </div>
      </div>
    </div>

    <div class="mb-24 md:mb-0 mt-10 p-5">
      <div class="rounded-lg shadow-lg h-full block bg-white">
        <div class="flex justify-center">

          <!-- img -->
          <div class="flex justify-center" style="margin-top: -75px">
            <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg"
              style="width: 150px" />
          </div>

        </div>
        <div class="p-6 pt-10">
          <!-- profile -->
          <h5 class="text-lg font-bold mb-4">Darren Randolph</h5>
          <p class="mb-6">Marketing expert</p>
          <ul class="list-inside flex mx-auto justify-center">
            <a href="#!" class="px-2">

              <!-- icon -->

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4 text-blue-600">
                <path fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>

            </a>
            <a href="#!" class="px-2">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 text-blue-600">
                <path fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>

            </a>
            <a href="#!" class="px-2">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                <path fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>

            </a>
          </ul>
        </div>
      </div>
    </div>

    
  </div>
</section>


</div>

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