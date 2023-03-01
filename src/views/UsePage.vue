<template>
  <NavUser/>
  <div class="container pt-5 mx-auto bg-[#F5E9CF] px-4 min-h-screen">
    <div class="bg-[#E96479] box-border h-14 w-40 text-center rounded items-center flex justify-center "><h1 class="text-black text-2xl">Hi! Admin</h1></div>
    <div class="bg-[#4D455D] box-border h-14 w-100 text-center items-center flex justify-center mt-12 rounded"><h1 class="text-white text-2xl">user</h1></div>
    <div v-for="i in 5">
        <div class="bg-[#FFFAFA] box-border h-14 w-100 text-center items-center flex justify-center rounded border-solid border border-black"><h1 class="text-2xl"></h1>
                <button class="bg-[#E96479] box-border h-12 w-20 rounded" style="margin-left: 83%; margin-top: 0.1%;"><h1 class="text-white text-lg">Del</h1></button>
                <button class="bg-[#7DB9B6] box-border h-12 w-20 rounded" style="margin-left: 1%; margin-top: 0.1%;"><h1 class="text-white text-lg">Edit</h1></button>
        </div>
    </div>

    <div class="bg-[#4D455D] box-border h-14 w-100 text-center items-center flex justify-center mt-12 rounded"><h1 class="text-white text-2xl">topup</h1></div>
    <div v-for="i in 5">
        <div class="bg-[#FFFAFA] box-border h-14 w-100 text-center items-center flex justify-center rounded border-solid border border-black"><h1 class="text-2xl"></h1>
                <button class="bg-[#E96479] box-border h-12 w-20 rounded" style="margin-left: 83%; margin-top: 0.1%;"><h1 class="text-white text-lg">Del</h1></button>
                <button class="bg-[#7DB9B6] box-border h-12 w-20 rounded" style="margin-left: 1%; margin-top: 0.1%;"><h1 class="text-white text-lg">Edit</h1></button>
        </div>
    </div>

    <div class="bg-[#4D455D] box-border h-14 w-100 text-center items-center flex justify-center mt-12 rounded"><h1 class="text-white text-2xl">donate</h1></div>
    <div v-for="i in 5">
        <div class="bg-[#FFFAFA] box-border h-14 w-100 text-center items-center flex justify-center rounded border-solid border border-black"><h1 class="text-2xl"></h1>
                <button class="bg-[#E96479] box-border h-12 w-20 rounded" style="margin-left: 83%; margin-top: 0.1%;"><h1 class="text-white text-lg">Del</h1></button>
                <button class="bg-[#7DB9B6] box-border h-12 w-20 rounded" style="margin-left: 1%; margin-top: 0.1%;"><h1 class="text-white text-lg">Edit</h1></button>
        </div>
    </div>

    <div class="bg-[#4D455D] box-border h-14 w-100 text-center items-center flex justify-center mt-12 rounded"><h1 class="text-white text-2xl">post</h1></div>
    <div v-for="i in 5">
        <div class="bg-[#FFFAFA] box-border h-14 w-100 text-center items-center flex justify-center rounded border-solid border border-black"><h1 class="text-2xl"></h1>
                <button class="bg-[#E96479] box-border h-12 w-20 rounded" style="margin-left: 83%; margin-top: 0.1%;"><h1 class="text-white text-lg">Del</h1></button>
                <button class="bg-[#7DB9B6] box-border h-12 w-20 rounded" style="margin-left: 1%; margin-top: 0.1%;"><h1 class="text-white text-lg">Edit</h1></button>
        </div>
    </div>

    <div class="bg-[#4D455D] box-border h-14 w-100 text-center items-center flex justify-center mt-12 rounded"><h1 class="text-white text-2xl">comment</h1></div>
    <div v-for="i in 5">
        <div class="bg-[#FFFAFA] box-border h-14 w-100 text-center items-center flex justify-center rounded border-solid border border-black"><h1 class="text-2xl"></h1>
                <button class="bg-[#E96479] box-border h-12 w-20 rounded" style="margin-left: 83%; margin-top: 0.1%;"><h1 class="text-white text-lg">Del</h1></button>
                <button class="bg-[#7DB9B6] box-border h-12 w-20 rounded" style="margin-left: 1%; margin-top: 0.1%;"><h1 class="text-white text-lg">Edit</h1></button>
        </div>
    </div>

  </div>
</template>

<script>
import NavUser from '@/components/NavUser.vue';
export default {
    Name : 'UsePage',
    components:{
        NavUser
    }
}
</script>

<style>

</style>