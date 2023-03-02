<template>
  <NavUser/>
  <div class="container pt-5 mx-auto bg-[#F5E9CF] px-4 min-h-screen">
        <div class="bg-[#E96479] box-border h-14 w-80 text-center rounded items-center flex justify-center ">
            <h1 class="text-white text-2xl">Hi! Tanathip Singhanon</h1>


            <div class="bg-[#E96479] box-border h-14 w-60 text-center rounded absolute items-center flex justify-center" style="right:13%">
                <h1 class="text-white text-2xl">1100 Nice</h1>
            </div>
        </div>
       
       
        <div class="bg-[#4D455D] box-border h-14 w-100 text-center items-center flex justify-center mt-12 rounded">
            <h1 class="text-white text-2xl">History of Nice coin</h1>
        </div>
       
       
        <div v-for="i in 10">
            <div class="bg-[#FFFAFA] box-border h-14 w-100 text-center items-center flex justify-center rounded border-solid border border-black">
                <h1 class="text-2xl"></h1>
            </div>
        </div>
        
  </div>
</template>

<script>
import NavUser from '@/components/NavUser.vue';
export default {
    Name : 'History',
    components:{
        NavUser
    }
}
</script>

<style>

</style>