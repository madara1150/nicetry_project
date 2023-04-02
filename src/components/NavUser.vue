<template>
  <nav
    class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-4 dark:bg-neutral-100 lg:flex-wrap lg:justify-start">
    <div class="flex w-full flex-wrap items-center justify-between px-6">
      <!-- phone -->
     
      <button
        class="block border-0 bg-transparent py-2 px-2.5 text-red-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button" @click="this.$router.push('/')">
        <span class="w-7 flex">
          <h1 class="text-black" style="font-size:2vh">NICE</h1>
          <h1 class="text-red-500" style="font-size:2vh">TRY</h1>
        </span>
      </button>

      <!-- desktop -->
      <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
        <a class="mt-2 mr-2 flex items-center hover:text-neutral-900 focus:text-black dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
         @click="this.$router.push('/')">
          <h1 class="text-[#1F2937] pl-3" style="font-size: 3vh">NICE</h1>
          <h1 class="text-red-500" style="font-size: 3vh">TRY</h1>
        </a>
      </div>

      <!-- bell -->
      <div class="relative flex items-center">
        <a class="mr-4 text-neutral-500 hover:text-red-500 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          href="#">
          <span class="w-[7%]">
                <img src="../image/bell-regular.svg" class="w-5 h-[7%]">
          </span>

        </a>

      <!-- upload -->
      <div class="relative flex items-center">
        <a class="mr-4 text-neutral-500 hover:text-red-500 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          href="#">

          <span class="w-5 text-black text-[2vh]">
              Upload
          </span>

        </a>

      <!-- credit  -->
      <div class="relative flex items-center">
        <a class="max-[600px]:hidden mr-4 text-neutral-500 hover:text-red-500 focus:text-neutral-700 disabled:text-black/30 [&.active]:text-black/90"
          href="#">

          <!-- btn credit -->
          <span class="w-5">
            <button type="button" data-te-toggle="modal" data-te-target="#exampleModal" data-te-ripple-init data-te-ripple-color="light"
              class="inline-block w-32 truncate rounded bg-[#F9FAFB] px-6 pt-2.5 pb-2 text-[2vh] font-medium uppercase leading-normal text-[#1F2937] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#9FA6B2] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#9FA6B2] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
           {{ nice }} nice
            </button>
          </span>
        </a>
        
        <!-- modal -->
        <div data-te-modal-init class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div data-te-modal-dialog-ref class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
            <div class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
              <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                <h5 class="text-xl font-medium leading-normal text-neutral-800 " id="exampleModalLabel">
                  Modal title
                </h5>
                <button type="button" class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss
                  aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="relative flex-auto p-4" data-te-modal-body-ref>
                Modal body text goes here.
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button type="button" class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>


        <div class="relative">

            <!-- profile Desktop -->
            <div class="">
              <img src="https://source.unsplash.com/800x600/?nature" class="rounded-full w-14 h-14" id="profile">
              <ul class="absolute list-none w-[20em] bg-gradient-to-br from-black via-gray-800 to-rose-800 top-[100%] invisible right-0 rounded p-5 text-white" id="menu">
                <li class="text-l p-3" id="menu-items"></li>
                <li class="cursor-pointer rounded p-3 hover:bg-red-500 pb-2" id="menu-items"><a href="/register"><p class="text-2xl">Proflie</p></a></li>
                <li class="text-l cursor-pointer rounded pl-3 p-1" id="menu-items" data-te-toggle="modal" data-te-target="#exampleModal" data-te-ripple-init data-te-ripple-color="light"><a href="#"><span class="text-l">{{nice}} nice.</span></a></li>
                <li class="text-2xl cursor-pointer rounded p-3 hover:bg-red-500" id="menu-items"><a href="">History</a></li>
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
export default {
 name: 'NavUser',
 data(){
  return{
    toggleMoblie: -1,
    nice: 640000000000
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