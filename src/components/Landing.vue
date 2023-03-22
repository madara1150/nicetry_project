<template>
  <div>
    <div class="text-center pt-3 mb-2">
        <span class="text-white text-4xl">NICE</span><span class="text-red-500 text-4xl">TRY</span>
    </div>

    <hr class="h-px my-8 bg-gray-200 border-0">

    <div class="flex px-64 max-[600px]:flex-col max-[600px]:px-0 mt-20" >

        <div class="w-[45%] max-[600px]:w-[100%]">
            <CardPost class="drop-shadow-[0_45px_45px_rgba(0,255,255,0.6)]" />
        </div>
        <div class="ml-10 text-white w-[55%] p-10 flex items-center max-[600px]:w-full max-[600px]:ml-0">
            <p class="max-[600px]:inline-block">
                Our website can share lifestyle freely. Show what you have to others.
            </p>
        </div>
    </div>
    
    

  </div>
</template>

<script>
import CardPost from '../components/CardPost.vue';
export default {
    name:"Landing",
    components:{
        CardPost
    }
}
</script>

<style>

</style>