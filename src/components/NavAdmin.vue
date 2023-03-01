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
            <button class="mr-1 py-2 px-8 rounded-md bg-[#E4DCCF] transition-all hover:cursor-pointer" @click="totopup()">{{ money}} Nice</button>
            
            <div class="w-10 h-10 bg-[#E4DCCF] rounded mr-1" @click="admin()">
                <img src="../image/screwdriver-wrench-solid.svg" class="w-8 h-8 p-1 ml-1 mt-1">

            </div>
            
            <div class="relative inline-block">
              <div class="py-2.5 px-10 rounded bg-[#E4DCCF] hover:cursor-pointer" @click="this.sw *= -1"><img src="../image/user-solid.svg" class="w-5 h-5" /></div>
              
              <div :class="[sw == -1 ? 'hidden absolute z-10 bg-[#FFFAFA] rounded right-1 top-12' : 'block absolute z-10 bg-[#FFFAFA] rounded right-1 top-12']" > 
                  <div class="w-60 h-32 text-center grid grid-cols-1 place-items-center">
                      
                      <div class="bg-[#7DB9B6] w-16 h-16 rounded-full p-5 mt-5">
                      </div>
  
                      <p class="mt-2 p-3">{{name}} {{ lname }}</p>
                  </div>
  
                  <div class="bg-[#4D455D] h-16 w-60 text-center text-[#FFFFFF] pt-2 items-center pt-5" @click="edit *= -1">profile</div>
                  <div class="bg-[#E96479] h-16 w-60 text-center text-[#FFFFFF] pt-2 items-center pt-5" @click="logOut()">Log</div>
              </div>
            </div>
              
            <!-- edit profile -->
            <div :class="[edit == -1 ? 'hidden' : '','w-2/6 fixed top-1/4 h-3/6 bg-[#4D455D] rounded flex']" style="left:35%;">
              <div class="w-10 h-10 rounded-full pt-2 pl-4 bg-[#ffffff] fixed bottom-3/4 mb-40 left-2/4" style="margin-left:17%;top:23%" @click="edit *= -1">X</div>
              <div class="bg-[#E96479] mt-7 ml-6 rounded p-5" style="width:92%;height: 90%;">
              
                <div class="grid-cols-2 grid w-full h-44 gap-5 mt-10">
                  <div class="w-full text-white">
                  <h1 class="">name</h1>
                  <input type="text" class="w-full h-12 text-black text-xl">
                  <h1 class="">Email</h1>
                  <input type="text" class="w-full h-12 text-black text-xl">
                </div>
                  
                <div class="w-full text-white">
                  <h1>Last Name</h1>
                  <input type="text" class="w-full h-12 text-black text-xl">
                  <h1>Phone</h1>
                  <input type="text" class="w-full h-12 text-black text-xl">
                </div>
  
                </div>
                
                <div class="text-white">
                  <h1>Address</h1>
                  <input type="textarea" class="w-full h-28">
                </div>
  
                <button class="mt-10 absolute right-24 p-3 bg-[#7DB9B6] w-28 rounded text-white">SAVE</button>
  
              </div>
  
            </div>
  
  
          </div>
      </div>
    </section>
  
  </template>
  
  <script>
  export default {
      name:'NavAdmin',
      data(){
          return{
              money: 5000,
              name:'Tanathip',
              lname: 'Singhanon',
              sw: -1,
              edit: -1,
          }
      },
      methods:{
        totopup(){
          this.$router.push('/')
        },
        logOut(){
          this.$router.push('/login')
        },
        admin(){
            this.$router.push('/usepage')
        }
      }
  }
  </script>
  
  <style scoped>
      
  </style>