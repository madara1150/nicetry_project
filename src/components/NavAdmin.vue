<template>
  <nav
        class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-4 lg:flex-wrap lg:justify-start">
        <div class="flex w-full flex-wrap items-center justify-between px-6">
          <!-- phone -->
        
          <button
            class="cursor-pointer block border-0 bg-transparent py-2 px-2.5 text-red-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
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
            
          

            <!-- modal aleart -->
            

          

          <!-- upload -->
          <div class="relative flex items-center">

            
            


              



          <!-- admin  -->
          <div class="relative flex items-center">
            <a class="max-[600px]:hidden mr-4 text-neutral-500 hover:text-red-500 focus:text-neutral-700 disabled:text-black/30 [&.active]:text-black/90"
              href="/admin">

              <!-- btn admin -->
              <span class="w-5">
                <button type="button" @click="this.$router.push('/admin')"
                  class="inline-block w-24 truncate rounded bg-[#F9FAFB] px-2 pt-2.5 pb-2 flex justify-center text-[2vh] font-medium uppercase leading-normal text-[#1F2937] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#9FA6B2] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#9FA6B2] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                <img src="../image/screwdriver-wrench-solid.svg" class="w-[30%] h-[30%]">
                </button>
              </span>
            </a>
            


            <div class="relative z-40">

                <!-- profile Desktop -->
                <div class="cursor-pointer">
                  <img src="https://source.unsplash.com/800x600/?nature" class="rounded-full w-14 h-14" id="profile">
                  <ul class="absolute list-none w-[20em] bg-gradient-to-br from-black via-gray-800 to-rose-800 top-[100%] invisible right-0 rounded p-5 text-white" id="menu">
                    <li class="text-l p-3" id="menu-items"></li>
                    <li class="cursor-pointer rounded p-3 hover:bg-red-500 pb-2" id="menu-items"><a href="/admin"><p class="text-2xl">Admin</p></a></li>
                    <li class="text-2xl cursor-pointer rounded p-3 bg-red-400 hover:bg-red-800" id="menu-items"><a href="">Log out</a></li>
                  </ul>
                </div>


            </div>
          </div>
        </div>
        </div>
        </div>
      </nav>
</template>

<script>
import gsap from 'gsap';
export default {
  name: 'NavAdmin',
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