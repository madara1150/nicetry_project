<template>
  <div class="w-80 h-96 bg-[#E96479] rounded shadow-lg shadow-gray-600">
      
    <!-- วงกลม -->
    <div class="flex justify-center h-52 items-center ">
      <div class="w-40 h-40 rounded-full bg-[#7DB9B6]">
        <img :src="user.img" class="w-40 h-40 rounded-full">
      </div>
    </div>
    
    <div class="text-center mt-5 bg-[#4D455D] p-5  pt-9 text-white pb-12">
      <h1>Thank you! for   {{ user.name }}</h1>
    
      <h1 class="flex">Donated to post Owner {{ user.OwnPost }} </h1>
      <h1 class="text-green-500">{{ user.donate }} Nice coin!!!</h1>
      
    </div>
   
  </div>
</template>

<script>
export default {
    name:'TopPost',
    props:['user']
}
</script>

<style>

</style>