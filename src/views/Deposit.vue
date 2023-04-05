<template>
    <div class="min-h-screen" style="background-image: url(https://cdn.discordapp.com/attachments/911172780781891614/1089188257331433543/black-and-white-city-silhouette-background-abstract-skyline-of-city-buildings-with-blue-sky-illustration-vector.png)">
     <NavUser />
 
     <div>
 
         <div class="inline-flex rounded-md shadow-sm mt-5 ml-[10%]" role="group" id="group">
             <button @click="deposit()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                 Deposit
             </button>
             <button @click="withdraw()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                 Withdraw
             </button>
             <button @click="transfer()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                 Transfer
             </button>
         </div>
 
         <!-- deposit -->
         <div class="relative overflow-x-auto ml-[10%] mt-7 max-[600px]:ml-2" id="deposit">
             <table class="w-[90%] text-sm text-left text-gray-700">
                 <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
                     <tr>
                         <th scope="col" class="px-6 py-3">
                             Status
                         </th>
                         <th scope="col" class="px-6 py-3">
                             Date & Time
                         </th>
                         <th scope="col" class="px-6 py-3">
                             Nice coin
                         </th>
                         <th scope="col" class="px-6 py-3">
                             Price
                         </th>
                     </tr>
                 </thead>
 
                 <!-- deposit -->
                 <tbody>
                     <tr v-for="val, i in 5" :key="i" class="border border-gray-600 bg-white">
                         <td class="px-6 py-3">
                         wait...
                     </td>
                     <td class="px-6 py-3">
                         2022-02-02
                     </td>
                     <td class="px-6 py-3">
                         300
                     </td>
                     <td class="px-6 py-3">
                         399.0
                     </td>
                     </tr>
                     
                 </tbody>
 
             </table>
         </div>
 
         <!-- withdraw -->
         <div class="relative overflow-x-auto ml-[10%] mt-7 hidden max-[600px]:ml-2" id="withdraw">
             <table class="w-[90%] text-sm text-left text-gray-700">
                 <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
                     <tr>
                         <th scope="col" class="px-6 py-3">
                             Status
                         </th>
                         <th scope="col" class="px-6 py-3">
                             Date & Time
                         </th>
                         <th scope="col" class="px-6 py-3">
                             Nice coin
                         </th>
                         <th scope="col" class="px-6 py-3">
                             Price
                         </th>
                     </tr>
                 </thead>
 
                 <!-- withdraw -->
                 <tbody>
                     <tr v-for="val, i in 5" :key="i" class="border border-gray-600 bg-white">
                         <td class="px-6 py-3">
                             wait...
                         </td>
                         <td class="px-6 py-3">
                             2022-02-02
                         </td>
                         <td class="px-6 py-3">
                             300
                         </td>
                         <td class="px-6 py-3">
                             399.0
                         </td>
                     </tr>
                 </tbody>
             </table>
         </div>
 
         <!-- transfer -->
         <div class="relative overflow-x-auto ml-[10%] mt-7 hidden max-[600px]:ml-2" id="transfer">
             <table class="w-[90%] text-sm text-left text-gray-700">
                 <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
                     <tr>
                         <th scope="col" class="px-6 py-3">
                             Status
                         </th>
                         <th scope="col" class="px-6 py-3">
                             Date & Time
                         </th>
                         <th scope="col" class="px-6 py-3">
                             Nice coin
                         </th>
                         <th scope="col" class="px-6 py-3">
                             Account
                         </th>
                     </tr>
                 </thead>
                 <!-- transfer -->
                 <tbody>
                     <tr v-for="val, i in 5" :key="i" class="border border-gray-600 bg-white">
                         <td class="px-6 py-3">
                             wait...
                         </td>
                         <td class="px-6 py-3">
                             2002-02-02
                         </td>
                         <td class="px-6 py-3">
                             -300
                         </td>
                         <td class="px-6 py-3">
                             100012
                         </td>
                     </tr>
                    
                 </tbody>
             </table>
         </div>
     </div>
 
 
 
     </div>
 </template>
 
 <script>
 import NavUser from '../components/NavUser.vue'
 import gsap from 'gsap';
 export default {
     name:'Deposit',
     components:{
         NavUser
     },
     methods: {
         deposit(){
             let ans1 = document.getElementById('deposit');
             let ans2 = document.getElementById('withdraw');
             ans2.style.display = 'none';
             let ans3 = document.getElementById('transfer');
             ans3.style.display = 'none';
             return ans1.style.display = 'block'
         },
         withdraw(){
             let ans1 = document.getElementById('deposit');
             ans1.style.display = 'none';
             let ans2 = document.getElementById('withdraw');
             let ans3 = document.getElementById('transfer');
             ans3.style.display = 'none';
             return ans2.style.display = 'block'
         },
         transfer(){
             let ans1 = document.getElementById('deposit');
             ans1.style.display = 'none';
             let ans2 = document.getElementById('withdraw');
             ans2.style.display = 'none';
             let ans3 = document.getElementById('transfer');
             return ans3.style.display = 'block'
         }
     },
     mounted(){
       let tl = gsap.timeline()
       tl.from('#group', {x:100,duration:0.5,autoAlpha:1})
       .from('#deposit', {x:-100,duration:0.5,autoAlpha:1})
 
       
     }
 }
 </script>
 
 <style>
 
 </style>