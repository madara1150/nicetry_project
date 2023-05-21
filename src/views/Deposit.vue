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
                             Package
                         </th>
                     </tr>
                 </thead>
 
                 <!-- deposit -->
                 <tbody>
                     <tr v-for="val, i in topup" :key="i" class="border border-gray-600 bg-white">
                         <td class="px-6 py-3">
                         {{val.status?'success': 'wait...'}}
                     </td>
                     <td class="px-6 py-3">
                         {{ val.topup_time }}
                     </td>
                     <td class="px-6 py-3">
                         {{ val.amount }}
                     </td>
                     <td class="px-6 py-3">
                        {{val.topup_package }}
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
                             bank
                         </th>
                         <th scope="col" class="px-6 py-3">
                             account number
                         </th>
                     </tr>
                 </thead>
 
                 <!-- withdraw -->
                 <tbody>
                     <tr v-for="val, i in withdraws" :key="i" class="border border-gray-600 bg-white">
                         <td class="px-6 py-3">
                            {{val.status?"success":"wait..." }}
                         </td>
                         <td class="px-6 py-3">
                             {{ val.createAt }}
                         </td>
                         <td class="px-6 py-3">
                             {{ val.amount }}
                         </td>
                         <td class="px-6 py-3">
                            {{ val.bank_name }}
                         </td>
                         <td class="px-6 py-3">
                             {{ val.acc_num }}
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
                             Post
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
                     <tr v-for="val, i in donate" :key="i" class="border border-gray-600 bg-white">
                         <td class="px-6 py-3">
                             {{ val.post_id }}
                         </td>
                         <td class="px-6 py-3">
                            {{ val.CreateAt }}
                         </td>
                         <td class="px-6 py-3">
                             {{ val.amount }}
                         </td>
                         <td class="px-6 py-3">
                             {{ val.User.username }}
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
 import axios from 'axios';

import { useFetchStore } from "../store/index";
import { storeToRefs } from "pinia";
 export default {
     name:'Deposit',
     components:{
         NavUser
     },
     data(){
        return{
            topup:'',
            donate:'',
            withdraws:"",
            token:""

        }
     },
     setup() {

    const apiStore = useFetchStore();
    const { data } = storeToRefs(apiStore);
    async function fetchData() {
      await apiStore.fetchData();
    }
    return {me:data,fetchData};
  },
     methods: {
        async fetchWithdraw(){
            const withdraw = await axios.get(`http://localhost:5000/api/withdraws/withdraw/${this.me.id}`)
            this.withdraws = withdraw.data

        },
        async fetchTopup(){
            const topupp = await axios.get(`http://localhost:5000/api/topups/topup/${this.me.id}`)
            this.topup = topupp.data
        },
        async fetchDonate(){
            const donatee = await axios.get(`http://localhost:5000/api/donate/getdonate/${this.me.id}`)
            this.donate = donatee.data
        },
         deposit(){
            this.fetchTopup()
             let ans1 = document.getElementById('deposit');
             let ans2 = document.getElementById('withdraw');
             ans2.style.display = 'none';
             let ans3 = document.getElementById('transfer');
             ans3.style.display = 'none';
             return ans1.style.display = 'block'
         },
         withdraw(){
            this.fetchWithdraw()
             let ans1 = document.getElementById('deposit');
             ans1.style.display = 'none';
             let ans2 = document.getElementById('withdraw');
             let ans3 = document.getElementById('transfer');
             ans3.style.display = 'none';
             return ans2.style.display = 'block'
         },
         transfer(){
            this.fetchDonate()
             let ans1 = document.getElementById('deposit');
             ans1.style.display = 'none';
             let ans2 = document.getElementById('withdraw');
             ans2.style.display = 'none';
             let ans3 = document.getElementById('transfer');
             return ans3.style.display = 'block'
         }
     },
     mounted(){
        this.fetchTopup()
       let tl = gsap.timeline()
       tl.from('#group', {x:100,duration:0.5,autoAlpha:1})
       .from('#deposit', {x:-100,duration:0.5,autoAlpha:1})
 
       const token = localStorage.getItem('token')
       if(!token){
        this.$router.push('/login')
       }

     }
 }
 </script>
 
 <style>
 
 </style>