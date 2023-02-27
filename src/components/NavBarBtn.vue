<template>
  <section class="bg-[#4D455D]">
    <div class="flex items-center">
        <div class="ml-6 text-4xl p-2" @click="Shome(numHome * -1)">
            <label class="text-[#FF9494]">N</label>
            <label class="text-[#ffffff]">ice</label>
            <label class="text-[#9BFFFF]">T</label>
            <label class="text-[#ffffff]">ry</label>
        </div>
        <div class="absolute right-0 mr-10">
          <button class="mr-3 py-2.5 px-8 rounded-md bg-[#E4DCCF] transition-all hover:cursor-pointer hover:scale-105" @click="SsignIn(numIn * -1)">Sign In</button>
          <button class="py-2.5 px-8 rounded-md bg-[#E4DCCF] transition-all hover:cursor-pointer hover:scale-105" @click="SsignUp(numUp * -1)">Sign Up</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'NavBarBtn',
    data(){
      return{
        
      }
    },
    methods:{
      SsignIn(val){
        this.$router.push('/login')
       
      },
      SsignUp(val){
        this.$router.push('/register')
    },
    Shome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
    
   
    
</style>