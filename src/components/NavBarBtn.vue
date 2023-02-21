<template>
  <section class="bg-[#4D455D]">
    <div class="flex items-center">
        <div class="ml-6 text-4xl p-2">
            <label class="text-[#FF9494]">N</label>
            <label class="text-[#ffffff]">ice</label>
            <label class="text-[#9BFFFF]">T</label>
            <label class="text-[#ffffff]">ry</label>
        </div>
        <div class="absolute right-0 mr-10">
          <button class="mr-3 py-2.5 px-8 rounded-md bg-[#E4DCCF] transition-all hover:cursor-pointer hover:scale-105" @click="SsignIn(switchSignIn)">Sign In</button>
          <button class="py-2.5 px-8 rounded-md bg-[#E4DCCF] transition-all hover:cursor-pointer hover:scale-105" @click="SsignUp(switchSignUp)">Sign Up</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'NavBarBtn',
    props:{
        switchSignIn:{
            type:Boolean,
        },
        switchSignUp:{
            type:Boolean,
        }
    },
    methods:{
      SsignIn(switchSignIn){
        this.$emit("showIn", switchSignIn)
      },
      SsignUp(switchSignUp){
        this.$emit("showUp", switchSignUp)
      }
    }
}
</script>

<style scoped>
    
   
    
</style>