<template>
    <NavAdmin />
  <div class="container pt-5 mx-auto w-full bg-[#F5E9CF] pl-10 pt-16 px-4 min-h-screen">
    
    <div class="w-56 h-14 bg-[#4D455D] rounded text-center text-white mr-auto" style="margin-left:">
        <h1 class="text-2xl p-3">Hi! Admin</h1>
    </div>
   
    <div class="grid grid-cols-2 w-full gap-32 px-20">

        <div class="w-full h-28 bg-red-500 mt-10 rounded flex justify-center items-center text-white hover:bg-gray-500" @click="userpage()">
            <h1 class="text-4xl">USERS (10)</h1>
    </div>

    <div class="w-full h-28 bg-red-500 mt-10 rounded flex justify-center items-center text-white hover:bg-gray-500" @click="userpage()">
        <h1 class="text-4xl">TOPUP</h1>
    </div>

    </div>
    
    <div class="w-full px-20">
        <div class="w-full h-32 m-auto bg-red-500 mt-10 rounded flex justify-center items-center text-white hover:bg-gray-500" @click="userpage()">
        <h1 class="text-4xl">POST (100)</h1>
    </div>
    </div>
    
    <!-- <div class="bg-[#4D455D] box-border h-14 w-100 text-center items-center flex justify-center mt-12 rounded">
        <h1 class="text-white text-2xl">LOG</h1>
    </div>
    <div v-for="i in 5">
        <div class="bg-[#FFFAFA] box-border h-14 w-100 text-center items-center flex justify-center rounded border-solid border border-black"><h1 class="text-2xl"></h1>
                <button class="bg-[#E96479] box-border h-12 w-20 rounded" style="margin-left: 83%; margin-top: 0.1%;"><h1 class="text-white text-lg">Del</h1></button>
                <button class="bg-[#7DB9B6] box-border h-12 w-20 rounded" style="margin-left: 1%; margin-top: 0.1%;"><h1 class="text-white text-lg">Edit</h1></button>
        </div>
    </div> -->

    <TableAdmin />
    



  </div>
</template>

<script>
import NavAdmin from '@/components/NavAdmin.vue';
import TableAdmin from '../components/TableAdmin.vue'
export default {
    name:'Admin',
    components:{
        NavAdmin,
        TableAdmin
    },
    methods:{
        userpage(){
            this.$router.push('/usepage')
        },
        
    }

}
</script>

<style>

</style>