<template>
    <div>
  
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg rounded">
      <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-white uppercase bg-gray-800">
              <tr>
                  
                  <th scope="col" class="px-6 py-3">
                      Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Amount
                  </th>
              </tr>
          </thead>
          <tbody class="">
              <tr v-for="i,index in 5" :key="index" class="bg-gray-900 border-b hover:bg-gray-700">
                  <td class="px-6 py-4 font-semibold text-gray-200 hover:text-red-200">
                      Madara Uchiha
                  </td>
                  <td class="px-6 py-4 font-semibold text-gray-200 hover:text-red-200">
                      $1000
                  </td>
              </tr>
  
          </tbody>
  
      </table>
  </div>
  
    </div>
  </template>
  
  <script>

  export default {
     
    
    data(){
      return{

      }
    },
    methods:{

      
    },
    mounted(){

    }
  }
  </script>
  
  <style>
  
  </style>