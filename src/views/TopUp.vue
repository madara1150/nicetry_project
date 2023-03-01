<template>
  <NavUser/>
  <div class="container pt-5 mx-auto bg-[#F5E9CF] px-4 min-h-screen">
    <div class="flex">
        <div class="bg-[#E96479] box-border h-14 w-3/5 text-center rounded items-center flex justify-center "><h1 class="text-white text-2xl">Hi! Tanathip Singhanon 1100 Nice</h1></div>
        <button class="bg-[#4D455D] box-border h-12 w-28 rounded" style="margin-left: 3%; margin-top: 0.5%;"><h1 class="text-white text-lg">withdraw</h1></button>
    </div>
      <div class="grid grid-cols-2 gap-10">
        <div>
            <div class="bg-[#4D455D] box-border h-14 w-100 text-center items-center flex justify-center mt-12 rounded"><h1 class="text-white text-2xl">Topup</h1></div>
            <div v-for="i in 10">
                <div class="bg-[#FFFAFA] box-border h-14 w-100 text-center items-center flex justify-center rounded border-solid border border-black"><h1 class="text-2xl"></h1></div>
            </div>
        </div>
        <div>
            <div class="bg-[#FFFFFF] box-border h-96 mt-12 ml-14 w-5/6 rounded pt-5">
                <div><h1 style="margin-left:5%; " class="text-lg">payment receipt</h1></div>
                <img class="h-40 w-40 mt-3" style="margin-left:35%" src="https://cdn.discordapp.com/attachments/911172780781891614/1080514917263753257/IMG_3587.jpg">
                <h3 style="margin-left:35%" class="mt-2">NiceTry company.co.th</h3>
                <hr class="mt-2">
                <div class="flex">
                    <h1 style="margin-left:10%" class="text-xl mt-3">100 Nice</h1>
                    <h1 style="margin-left:45%;" class="text-xl mt-3">139.00 Baht</h1>
                </div>
                <input style="margin-left:10%" type="file" class="block w-full text-sm text-slate-500 mt-4
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#7DB9B6] file:text-white
                    "/>
            </div>
            <div><button class="bg-[#E96479] box-border h-14 w-60 rounded mt-5 ml-60"><h1 class="text-white text-2xl" @click="topup *= -1">Confirm</h1></button></div>
            <div><button class="bg-[#4D455D] box-border h-14 w-3/4 rounded mt-5 ml-20"><h1 class="text-white text-2xl">History of Nice coin</h1></button></div>
        </div>

        <div class='w-2/4 h-2/4 ml-40 fixed bg-red-500'>
            <div class="w-1/2">

            </div>
        </div>

      </div>
  </div>
</template>

<script>
import NavUser from '@/components/NavUser.vue';
export default {
    Name : 'TopUp',
    components:{
        NavUser
    },
    data(){
        return {
            topup: -1,
        }
    }
}
</script>

<style>

</style>