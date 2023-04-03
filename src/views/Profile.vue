<template>
  <div class="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-rose-900 w-full h-full">
    <div class="sticky top-0 z-10">
      <NavUser />
    </div>
    

    <!-- profile -->
    <div class="max-[600px]:flex-col ">
        <div class="flex ml-[10%] mt-5 max-[600px]:flex-col max-[600px]:justify-center max-[600px]:ml-0 max-[600px]:">
          <img src="https://source.unsplash.com/800x600/?nature" alt="" class="max-[600px]:m-auto shadow-sm shadow-white/50 rounded-full h-36 w-36">
          <div class="p-5 max-[600px]:p-3 max-[600px]:text-center">
            <h1 class="text-3xl text-white">Nutaya</h1>
            <h1 class="text-sm mt-3 text-white">TANATHIP SINGHANON</h1>
            <h1 class="text-sm mt-3 text-white">Tel 202101204124124</h1>
          </div>
          <button
            type="button"
            class="max-[600px]:m-auto max-[600px]:mt-2 max-[600px]: max-[600px]:h-[10%] max-[600px]:w-[40%] max-[600px]:text-xs inline-block rounded bg-white mt-[8%] ml-[48%] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:bg-gray-400 focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
            Edit Profile
          </button>
 
        </div>
    </div>
    <div class="flex justify-center">
      <hr class="h-0.5 my-8 w-[80%] bg-white border-0">
    </div>
    

    <div>
        <div class="w-[70%] mx-auto max-[600px]:w-[100%]">
            <div class="flex justify-center max-[600px]:p-5" v-for="val,i in 2" :key="i">
                <div class="flex justify-center content-center mt-10 max-[600px]:flex-col mb-5">
                    <CardPost  class="w-[50%] mr-10 max-[600px]:w-full" :color="''" />
                    <TopDonate class="w-[35%] h-[40%] mt-5 max-[600px]:w-full" />
                </div>
            </div>

            <!-- test level post -->
            <div class="flex justify-center max-[600px]:p-5" v-for="val,i in 10" :key="i">
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
import NavUser from '@/components/NavUser.vue';
import CardPost from '@/components/CardPost.vue';
import TopDonate from '@/components/TopDonate.vue';
export default {
    name: 'Profile',
    components:{
      NavUser,
      CardPost,
      TopDonate
    }

}
</script>

<style>

</style>