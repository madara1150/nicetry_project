<template>
  <nav
    class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-4 lg:flex-wrap lg:justify-start">
    <div class="flex w-full flex-wrap items-center justify-between px-6">
      <!-- phone -->
     
      <button
        class="block border-0 bg-transparent py-2 px-2.5 text-red-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden cursor-pointer"
        type="button" @click="this.$router.push('/main')">
        <span class="w-7 flex">
          <h1 class="text-black" style="font-size:2vh">NICE</h1>
          <h1 class="text-red-500" style="font-size:2vh">TRY</h1>
        </span>
      </button>

      <!-- desktop -->
      <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto cursor-pointer">
        <a class="mt-2 mr-2 flex items-center hover:text-neutral-900 focus:text-black lg:mt-0"
         @click="this.$router.push('/main')">
          <h1 class="text-[#1F2937] pl-3" style="font-size: 3vh">NICE</h1>
          <h1 class="text-red-500" style="font-size: 3vh">TRY</h1>
        </a>
      </div>

      <!-- bell -->
      <div class="relative flex items-center">
        
        <button class="max-[600px]:w-[16%] w-[7%] mr-3" data-te-toggle="modal" data-te-target="#aleart" data-te-ripple-init data-te-ripple-color="light">
              <img src="../image/bell-regular.svg" class="w-5 h-[7%]">
        </button>

        <!-- modal aleart -->
        <div data-te-modal-init class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="aleart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            
            <div data-te-modal-dialog-ref class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
              <div class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                  <h5 class="text-xl font-medium leading-normal text-neutral-800 " id="exampleModalLabel">
                    aleart
                  </h5>

                  <button type="button" class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss
                    aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <!-- content -->
                <div class="relative flex-auto p-4 h-96 overflow-y-auto" data-te-modal-body-ref>
                  
                  <div class="w-full bg-red-500 flex items-center text-white rounded-[2px] border-b-2 p-5 border-black" v-for="val,i in 10" :key="i">
                    <h1 class="mt-2 break-words">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus enim explicabo non provident sed fugit inventore quasi doloribus culpa eaque.</h1>
                  </div>

                </div>

                <!-- footer -->
                <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                  <button type="button" class="inline-block rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-600 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

      

      <!-- upload -->
      <div class="relative flex items-center">

          <button class="w-16 text-black text-[2vh] mr-5 max-[600px]:mr-1" data-te-toggle="modal" data-te-target="#uploadPost" data-te-ripple-init data-te-ripple-color="light">
              Upload
          </button>
        

         <!-- modal post -->
          <div data-te-modal-init class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="uploadPost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            
            <div data-te-modal-dialog-ref class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
              <div class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                  <h5 class="text-xl font-medium leading-normal text-neutral-800 " id="exampleModalLabel">
                    Post your content
                  </h5>

                  <button type="button" class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss
                    aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <!-- content -->
                <div class="relative flex-auto p-4" data-te-modal-body-ref>
                  
                  <div class="grid grid-cols-2 gap-4 px-5">

                    <div>
                      <img src="https://source.unsplash.com/800x600/?mountain" alt="">
                      <img src="https://source.unsplash.com/800x600/?tree" alt="" class="mt-2">
                    </div>
                    <img  class="h-full" src="https://source.unsplash.com/800x600/?boat" alt="">
                  </div>

                  <!-- input content -->
                  <div class="p-5">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Write your content</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your content here..."></textarea>

                    <!-- file -->
                    <label class="block mb-2 text-sm font-medium text-gray-900 mt-5" for="file_input">Upload file</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="file_input" type="file" multiple>
                    <p class="mt-1 text-[10%] text-gray-500" id="file_input_help">SVG, PNG, JPG.</p>

                  </div>

                </div>

                <!-- footer -->
                <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                  <button type="button" class="inline-block rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-600 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>


      <!-- credit  -->
      <div class="relative flex items-center">
        <a class="max-[600px]:hidden mr-4 text-neutral-500 hover:text-red-500 focus:text-neutral-700 disabled:text-black/30 [&.active]:text-black/90"
          href="#">

          <!-- btn credit -->
          <span class="w-5">
            <button type="button" data-te-toggle="modal" data-te-target="#topup" data-te-ripple-init data-te-ripple-color="light"
              class="inline-block w-32 truncate rounded bg-[#F9FAFB] px-6 pt-2.5 pb-2 text-[2vh] font-medium uppercase leading-normal text-[#1F2937] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#9FA6B2] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#9FA6B2] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
           {{ nice }} nice
            </button>
          </span>
        </a>
        
        <!-- modal -->
        <div data-te-modal-init class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="topup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          
          <div data-te-modal-dialog-ref class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
            <div class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
              <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                <h5 class="text-xl font-medium leading-normal text-neutral-800 " id="exampleModalLabel">
                  TOP UP
                </h5>

                <button type="button" class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss
                  aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- content -->
              <div class="relative flex-auto p-4" data-te-modal-body-ref>
                
                <div class="grid grid-cols-2 gap-4 px-5" v-for="val,i in niceTopup" :key="i">
                  
                  <h1> {{val.nice}} Nice</h1>
                  <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2">{{val.price}} Baht</button>
                
                </div>

              </div>

              <!-- footer -->
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button type="button" class="inline-block rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-600 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>


        <div class="relative z-40">

            <!-- profile Desktop -->
            <div class="">
              <img src="https://source.unsplash.com/800x600/?nature" class="rounded-full w-14 h-14" id="profile">
              <ul class="absolute list-none w-[20em] bg-gradient-to-br from-black via-gray-800 to-rose-800 top-[100%] invisible right-0 rounded p-5 text-white" id="menu">
                <li class="text-l p-3" id="menu-items"></li>
                <li class="cursor-pointer rounded p-3 hover:bg-red-500 pb-2" id="menu-items"><a href="/profile"><p class="text-2xl">Proflie</p></a></li>
                <li class="text-l cursor-pointer rounded pl-3 p-1" id="menu-items" data-te-toggle="modal" data-te-target="#topup" data-te-ripple-init data-te-ripple-color="light"><a href="#"><span class="text-l">{{nice}} nice.</span></a></li>
                <li class="text-2xl cursor-pointer rounded p-3 hover:bg-red-500" id="menu-items"><a href="/deposit">History</a></li>
                <li class="text-2xl cursor-pointer rounded p-3 bg-red-400 hover:bg-red-800" id="menu-items"><a href="">Log out</a></li>
              </ul>
            </div>


        </div>
      </div>
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
import gsap from 'gsap';
import promotion from '../data/topupPackage.json'
export default {
 name: 'NavUser',
 data(){
  return{
    toggleMoblie: -1,
    nice: 640000000000,
    niceTopup:promotion
  }
 },
 mounted(){
    let menuOpen = false;

    //create timeline
    let tl = gsap.timeline({
      paused:true,
      defaults: { duration: 0.3, ease: "power1.inOut" }});

    // use timeline
    tl.fromTo(
        "#menu",
        { visibility: "hidden" },
        { visibility: "visible" },
        0
      ).fromTo("#menu-items",
    { opacity: 0, y: "0.5em", stagger: 0.1 },
    { opacity: 1, y: "0em", stagger: 0.1 }
    );
    
    // add Event profile image (click)
    document.querySelector("#profile").addEventListener("click", () => {
      if (!menuOpen) {
        tl.play();
        menuOpen = true;
      } else {
        tl.reverse();
        menuOpen = false;
      }
    });
 }
}
</script>

<style>

</style>