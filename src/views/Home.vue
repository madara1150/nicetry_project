<template>

  <!-- nav => no sign IN -->
  <div class="sticky top-0 z-10 ">
    <NavBarBtn />
  </div>
 

  <section class="w-full min-h-screen">

    <div class="px-6 py-12 md:px-12 bg-neutral-100 text-gray-800 bg-gradient-to-tl from-slate-100 via-gray-100 to-slate-400 text-center lg:text-left pt-24">
      <div class="mx-auto xl:px-32 w-full h-full" style="height:60%;padding-bottom:10%;width:100%;">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-15 lg:mt-0">
            
            <!-- text -->
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style="font-size:8vh">
              Even if no one see it,<br />
              <span class="text-[#D42A46]" >We see it.</span>
            </h1>

            <!-- card -->
            <div class="flex justify-center" style="width:100%;">
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
                  <h5 class="mb-2 text-xl font-medium text-white dark:text-white">
                    Card title
                  </h5>

                  <p class="mb-4 text-base text-text-white dark:text-white">
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
          <div class="mb-0 lg:mb-0">

            <!-- image -->
            <div id="carouselExampleSlidesOnly" class="relative w-full h-max bg-red-500 rounded" data-te-carousel-init data-te-carousel-slide>
              <div class="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded">
    
                  <div class="rounded relative float-left -mr-[100%] w-full h-full transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item data-te-carousel-active>
                    <img src="https://m.media-amazon.com/images/M/MV5BM2JjYmUyN2MtODIyOC00ZmNiLWI5YTUtN2NiMWQzNmM3OGU1XkEyXkFqcGdeQXVyNDk3NDEzMzk@._V1_FMjpg_UX1000_.jpg" class="block w-full"  style="height:450px" alt="Wild Landscape" />
                  </div>
    
                  <div class="rounded relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-54caf0d24d3f87fb42b6532614ae7f9c-lq" class="block w-full " style="height:450px"  alt="Camera" />
                  </div>
    
                  <div class="rounded relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] h-max w-96 ease-in-out motion-reduce:transition-none" data-te-carousel-item>
                    <img src="https://cdnb.artstation.com/p/assets/images/images/038/151/293/large/sajol-hasan-madara-sammm.jpg?1622314122" class="block w-full"  style="height:450px" alt="Exotic Fruits" />
                  </div>


              </div>
            </div>

          </div>
          
        </div>
      </div>
     
    </div>

    <!-- team -->
  <div class="w-full h-full px-6 mx-auto bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-rose-800 via-rose-400 to-rose-100 py-4">

<!-- Section: Design Block -->
<section class="text-gray-800 text-center" style=padding:3%;>
  <h2 class="text-3xl font-bold text-white mb-20">Meet the Team</h2>


  <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-2 ">
    <div class="mb-0 md:mb-0 mt-10 p-5">
      <div class="rounded-lg shadow-lg h-full block bg-white">

        <div class="flex justify-center">

          <!-- picture-1 -->
          <div class="flex justify-center" style="margin-top: -75px">
            <img src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/329434095_1313872372792537_4223617559295648608_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH_4r5CBKeU-5Uk02z4DTrVft9OfO_026h-30587_TbqGpCJ5K6sSytAbmkgpyKJK20ifMn98-tHHmowmnsmfLc&_nc_ohc=y4Q_qhowRloAX82us3n&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfBDgBIX1IbOvnzupdnTagPs_veVv1PUDQNF7KspH4TKLA&oe=641C78F0" class="rounded-full mx-auto shadow-lg" alt="" style="width: 150px" />
          </div>
        </div>

        <!-- profile -->
        <div class="p-6">
          <h5 class="text-lg font-bold mb-4">Nutaya Nitiapaitham</h5>
          <p class="mb-6">Developer</p>
          <ul class="list-inside flex mx-auto justify-center">
            <a href="#!" class="px-2">

              <!-- icon fackbook -->

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4 text-blue-600">
                <path fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>

            </a>

             <a href="#!" class="px-2">
              <!-- icon IG -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
              <path fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>

          </a>

             <a href="#!" class="px-2">

              <!-- icon github -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-4 h-4 text-blue-600">
                <path fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
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
            <img src="https://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/322455600_1040961817296407_4012442380635093034_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHfV50jXGuqzBTPSywYQQqmogu3AQwM0RqiC7cBDAzRGlWodyWznPayXsrip3LEs_M_8qdEpPIOgANm8LANZJ_R&_nc_ohc=sLOjugd7V1EAX9V42Zg&_nc_ht=scontent.fbkk29-9.fna&oh=00_AfBXeTPbien8EjLzX0b9ZhAgpcjWr_6SSK_0ZXf335VT-A&oe=641E1195" class="rounded-full mx-auto shadow-lg"
              style="width: 150px" />
          </div>

        </div>
        <div class="p-6 pt-10">
          <!-- profile -->
          <h5 class="text-lg font-bold mb-4">Tanathip Singhanon</h5>
          <p class="mb-6">Developer</p>
          <ul class="list-inside flex mx-auto justify-center">
            <a href="#!" class="px-2">

              <!-- icon fackbook -->

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4 text-blue-600">
                <path fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>

            </a>

             <a href="#!" class="px-2">
              <!-- icon IG -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
              <path fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>

          </a>

             <a href="#!" class="px-2">

              <!-- icon github -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-4 h-4 text-blue-600">
                <path fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>


            </a>


          </ul>
        </div>
      </div>
    </div>

    
  </div>
</section>


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