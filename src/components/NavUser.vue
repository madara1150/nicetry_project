<template>
  <section class="bg-[#4D455D]">
    <div class="flex items-center">
        <div class="ml-6 text-4xl p-2" @click="l">
            <label class="text-[#FF9494]">N</label>
            <label class="text-[#ffffff]">ice</label>
            <label class="text-[#9BFFFF]">T</label>
            <label class="text-[#ffffff]">ry</label>
        </div>
        <div class="absolute right-0 mr-5 flex">
          <button class="mr-3 py-2.5 px-8 rounded-md bg-[#E4DCCF] transition-all hover:cursor-pointer" @click="s">{{ money}} Nice</button>
          
          <div class="relative inline-block">
            <div class="py-2.5 px-10 rounded bg-[#E4DCCF] hover:cursor-pointer" @click="this.sw *= -1"><img src="../image/user-solid.svg" class="w-5 h-5" /></div>
            
            <div :class="[sw == -1 ? 'hidden absolute z-10 bg-[#FFFAFA] rounded right-1 top-12' : 'block absolute z-10 bg-[#FFFAFA] rounded right-1 top-12']" id="chil"> 
                <div class="w-48 h-28 text-center ">
                    
                    <div class="bg-[#7DB9B6] w-16 h-14 rounded-full absolute left-16 top-3">
                    </div>

                    <p class="absolute top-20 text-center left-6">{{name}} {{ lname }}</p>
                </div>

                <div class="bg-[#4D455D] h-16 w-48 text-center text-[#FFFFFF] pt-2 items-center pt-5">profile</div>
                <div class="bg-[#E96479] h-16 w-48 text-center text-[#FFFFFF] pt-2 items-center pt-5">Log</div>
            </div>
          </div>
            
        </div>
    </div>
  </section>

</template>

<script>
export default {
    name:'NavUser',
    data(){
        return{
            money: 5000,
            name:'Tanathip',
            lname: 'Singhanon',
            sw: -1
        }
    }
}
</script>

<style scoped>
    
</style>