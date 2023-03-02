<template>
  <div class="bg-[#4D455D] box-border h-14 w-100 text-center items-center flex justify-center mt-12 rounded">
        <h1 class="text-white text-2xl">LOG</h1>
       </div>


    <div :class="[edit == -1 ? 'hidden' : '','w-1/3 h-1/3 bg-[#4D455D] fixed top-1/3 left-1/3']">
        <div class="fixed text-white w-10 h-10 bg-red-500 rounded-full flex justify-center items-center" style="left:65%;top:32%" @click="edit *= -1">
            X
        </div>

        <div class="w-5/6 h-5/6 bg-[#E96479] mx-14 my-8 p-5 text-center">
            <h1 class="text-2xl text-white">EDIT</h1>
            <div>
                <input type="text" class="w-full h-10 mt-2">
            </div>

            <div>
                <input type="text" class="w-full h-10 mt-2">
            </div>
            <div>
                <input type="text" class="w-full h-10 mt-2">
            </div>
            
            <div>
                <input type="text" class="w-full h-10 mt-2">
            </div>
            
        </div>
    </div>
    
    
    <div v-for="i in 5">
        <div class="bg-[#FFFAFA] box-border h-14 w-100 text-center items-center flex justify-center rounded border-solid border border-black">
            <h1 class="text-2xl"></h1>
                <button class="bg-[#E96479] box-border h-12 w-20 rounded" style="margin-left: 83%; margin-top: 0.1%;">
                    <h1 class="text-white text-lg" @click="">Del</h1>
                </button>
                <button class="bg-[#7DB9B6] box-border h-12 w-20 rounded" style="margin-left: 1%; margin-top: 0.1%;">
                    <h1 class="text-white text-lg" @click="edit *= -1">Edit</h1>
                </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableAdmin',
    data(){
        return {
            edit: -1,

        }
    }
}
</script>

<style>

</style>