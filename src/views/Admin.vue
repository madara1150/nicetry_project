<template>
    <div class="min-h-screen" style="background-image: url(https://cdn.discordapp.com/attachments/911172780781891614/1089188257331433543/black-and-white-city-silhouette-background-abstract-skyline-of-city-buildings-with-blue-sky-illustration-vector.png)">
   <NavAdmin />

   <div>

       <div class="inline-flex rounded-md shadow-sm mt-5 ml-[10%] max-[600px]:ml-2" role="group" id="group">
           <button @click="deposit()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
               Deposit
           </button>
           <button @click="withdraw()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
               Withdraw
           </button>
           <button @click="post()" type="button" class="px-7 py-3 text-sm font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
               Post
           </button>
           <button @click="account()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
               Account
           </button>
       </div>


       <!-- Deposit -->
       <div class="relative overflow-x-auto ml-[10%] mt-7 max-[600px]:ml-2 max-[600px]:px-2" id="deposit">
           <table class="w-[90%] text-sm text-left text-gray-600 text-center">
               <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
                   <tr class="">
                       <th scope="col" class="px-6 py-3">
                           topup
                       </th>
                       
                   </tr>
               </thead>

               <tbody>
                   <tr v-for="val, i in topup" :key="i" class="border border-gray-600 bg-white">
                    <div v-if="val.Topup != null">
                        <td class="px-6 py-3">
                           {{ val.Topup.user_id }}
                       </td>
                       <td class="px-6 py-3 text-green-600">
                           {{ val.Topup.amount }}
                       </td>
                       <td class="px-6 py-3">
                           <a :href="val.filePath" target="_blank" rel="noopener noreferrer">{{val.filePath }}</a>
                       </td>
                       <td class="px-6 py-3">
                           {{ val.Topup.bank_topup }}
                       </td>
                       <td class="px-6 py-3">
                           <input type="checkbox" @click="checkTopup(val)" class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 w-4 h-4 focus:ring-2">
                       </td>
                       <td class="px-6 py-3">
                        {{ val.Topup.status ? "success": "wail.." }}
                       </td>
                    </div>
                       
                   </tr>

               </tbody>

           </table>
       </div>

       <!-- withdraw -->
       <div class="relative overflow-x-auto ml-[10%] mt-7 hidden max-[600px]:ml-2 max-[600px]:px-2" id="withdraw">
           <table class="w-[90%] text-sm text-left text-gray-700 text-center">
               <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
                   <tr>
                       <th scope="col" class="px-6 py-3">
                           account
                       </th>
                       <th scope="col" class="px-6 py-3">
                           amount
                       </th>
                       <th scope="col" class="px-6 py-3">
                           bank number
                       </th>
                       <th scope="col" class="px-6 py-3">
                           confirm
                       </th>
                       <th scope="col" class="px-6 py-3">
                           Status
                       </th>
                   </tr>
               </thead>
               
               <tbody>
                   <tr v-for="val, i in withdraws" :key="i" class="border border-gray-600 bg-white">
                       <td class="px-6 py-3">
                           {{ val.user_id }}
                       </td>
                       <td class="px-6 py-3 text-red-500">
                           {{ val.amount }}
                       </td>
                       <td class="px-6 py-3">
                           {{val.acc_num}}
                       </td>
                       <td class="px-6 py-3">
                           <input type="checkbox" @click="checkWithdraw(val)" class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 w-4 h-4 focus:ring-2">
                       </td>
                       <td class="px-6 py-3">
                        {{ val.status ? "success" : "wait" }}
                       </td>
                   </tr>
               </tbody>
           </table>
       </div>

       <!-- post -->
       <div class="relative overflow-x-auto ml-[10%] mt-7 hidden max-[600px]:ml-2 max-[600px]:px-2" id="post">
           <table class="w-[90%] text-sm text-left text-gray-800 text-center">
               <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
                   <tr>
                       <th scope="col" class="px-6 py-3">
                           account
                       </th>
                       <th scope="col" class="px-6 py-3">
                           post
                       </th>
                       <th scope="col" class="px-6 py-3">
                           reason
                       </th>
                       <th scope="col" class="px-6 py-3">
                           confirm
                       </th>
                   </tr>
               </thead>

               <tbody>
                   <tr v-for="val, i in posts" :key="i" class="border border-gray-600 bg-white">
                       <td class="px-6 py-3">
                           {{val.user_id}}
                       </td>
                       <td class="px-6 py-3">
                           {{val.post_id}}
                       </td>
                       <td class="px-6 py-3">
                           {{ val.reson }}
                       </td>
                       <td class="px-6 py-3">
                           <input type="checkbox" @click="checkReport(val)" class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 w-4 h-4 focus:ring-2">
                       </td>
                   </tr>
               </tbody>

           </table>
       </div>

       <!-- account -->
       <div class="relative overflow-x-auto ml-[10%] mt-7 hidden max-[600px]:ml-2 max-[600px]:px-2" id="account">
           <table class="w-[90%] text-sm text-left text-gray-800 text-center">
               <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
                   <tr>
                       <th scope="col" class="px-6 py-3">
                           ID
                       </th>
                       <th scope="col" class="px-6 py-3">
                           Username
                       </th>
                       <th scope="col" class="px-6 py-3">
                           nice Coin
                       </th>
                   </tr>
               </thead>

               <tbody>
                   <tr v-for="val, i in users" :key="i" class="border border-gray-600 bg-white">
                       <td class="px-6 py-3">
                           {{val.id}}
                       </td>
                       <td class="px-6 py-3">
                           {{ val.username }}
                       </td>
                       <td class="px-6 py-3">
                           {{ val.coin }}
                       </td>
                   </tr>
               </tbody>
           </table>
       </div>



   </div>



   </div>
</template>

<script>
import {
  ref as storageRef,

  uploadBytes,
} from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
import { useFetchStore } from "../store/index";
import { storeToRefs } from "pinia";
import NavUser from '@/components/NavUser.vue';
import NavAdmin from '@/components/NavAdmin.vue';
import gsap from 'gsap';
import axios from 'axios';
export default {
   name: "Admin",
   components:{
       NavUser,
       NavAdmin
   },
   data(){
       return{
           madara:'',
           topup:[],
           withdraws:[],
           posts:[],
           users:[],
       }
   },
   methods: {
    async checkReport(val){
            const report = await axios.put(`http://localhost:5000/api/reports/updatestatus/${val.id}`)
            const del = await axios.delete(`http://localhost:5000/api/posts/delete/${val.post_id}`)
            
        },
        async checkWithdraw(val){
            const withdraw = await axios.put(`http://localhost:5000/api/withdraws/change/${val.id}`)
            const user = await axios.get(`http://localhost:5000/api/users/user/${val.user_id}`)
            const addMoney = await axios.put(`http://localhost:5000/api/users/updatemoney/${val.user_id}`,{
                coin: user.data.coin - val.amount
            })
        },
        async checkTopup(val){
            const update = await axios.put(`http://localhost:5000/api/topups/change/${val.Topup.id}`,)
            const user = await axios.get(`http://localhost:5000/api/users/user/${val.Topup.user_id}`)
            const addMoney = await axios.put(`http://localhost:5000/api/users/updatemoney/${val.Topup.user_id}`,{
                coin: user.data.coin + val.Topup.amount
            })
        },
        async user(){
            const users = await axios.get(`http://localhost:5000/api/users/user`)
            this.users = users.data
            
            
        },
        async report(){
            const reportAll = await axios.get(`http://localhost:5000/api/reports/report`)
            this.posts = reportAll.data
            
            
        },
        async topupp(){
            const topup = await axios.get(`http://localhost:5000/api/topups/all`)
            this.topup = topup.data
            console.log(topup.data);
        },
        async withdraww(){
            const withdraw = await axios.get(`http://localhost:5000/api/withdraws/withdraw`)
            this.withdraws = withdraw.data
        },


       deposit(){
            
           let ans1 = document.getElementById('deposit');
           let ans2 = document.getElementById('withdraw');
           ans2.style.display = 'none';
           let ans3 = document.getElementById('post');
           ans3.style.display = 'none';
           let ans4 = document.getElementById('account');
           ans4.style.display = 'none';
           this.topupp()
           return ans1.style.display = 'block'
           
       },
       withdraw(){
           let ans1 = document.getElementById('deposit');
           ans1.style.display = 'none';
           let ans2 = document.getElementById('withdraw');
           let ans3 = document.getElementById('post');
           ans3.style.display = 'none';
           let ans4 = document.getElementById('account');
           ans4.style.display = 'none';
           return ans2.style.display = 'block'
       },
       post(){
        this.report()
           let ans1 = document.getElementById('deposit');
           ans1.style.display = 'none';
           let ans2 = document.getElementById('withdraw');
           ans2.style.display = 'none';
           let ans3 = document.getElementById('post');
           let ans4 = document.getElementById('account');
           ans4.style.display = 'none';
           return ans3.style.display = 'block'
       },
       account(){
           let ans1 = document.getElementById('deposit');
           ans1.style.display = 'none';
           let ans2 = document.getElementById('withdraw');
           ans2.style.display = 'none';
           let ans3 = document.getElementById('post');
           ans3.style.display = 'none';
           let ans4 = document.getElementById('account');
           return ans4.style.display = 'block'
       }
   },
   mounted(){
    this.topupp()
    this.withdraww()
    this.report()
    this.user()
    const token = localStorage.getItem('token')
       if(!token){
        this.$router.push('/login')
       }
       if(this.me.role === "USER"){
        this.$router.push('/main')
       }

     let tl = gsap.timeline()
     tl.from('#group', {y:-100,duration:0.5,autoAlpha:0})
     .from('#deposit', {x:100,duration:1.5,autoAlpha:0})
     .from('#withdraw', {x:-100,duration:0.5,autoAlpha:0})
     .from('#post', {x:-100,duration:0.5,autoAlpha:0})
     .from('#account', {x:-100,duration:0.5,autoAlpha:0})
     
   },
   setup() {
    const storage = useFirebaseStorage();
    const apiStore = useFetchStore();
    const { data } = storeToRefs(apiStore);
    async function fetchData() {
      await apiStore.fetchData();
    }

    return {
      me: data,
      fetchData,
      storage
    };
  },
}
</script>

<style>

</style>