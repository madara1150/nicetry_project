<template>
    <div class="min-h-screen bg-[length:100%_120%] max-[600px]:min-h-max " style="background-image: url(https://cdn.discordapp.com/attachments/911172780781891614/1090455311028060170/pngwing.com.png)">
        <NavUser />

    <div>
        <h1 class="text-[3vh] text-center mt-5 max-[600px]:hidden" @click="clearSelect()">Please select the payment bank</h1>
    </div>
    
    <div class="flex justify-center mt-5 max-[600px]:mt-1">

        <!-- overflow banks -->
        <div class="w-[80%] p-2 bg-gradient-to-br from-black via-gray-800 to-rose-800 overflow-x-scroll rounded max-[600px]:hidden" id="banks">
            <div class="flex w-[120%]">
                <a v-for="val,i in bank" class="p-2 px-4 bg-white hover:bg-[#B8B0B0]" :key="i" :id="i" @click="CheckOutput(val.nice_name,i)">
                    <img  :src="require('../image/th/'+val.img)" class="h-24 w-[100px] rounded-full" href="madara">
                    <div class="w-[100px]">
                    </div>
                </a>
            </div>
        </div>

       
    </div>
    
    <div class="flex justify-center mt-10 max-[600px]:w-full max-[600px]:flex-col max-[600px]:p-5 max-[600px]:mt-5">
        <form action="" class="w-[30%] max-[600px]:w-full">
            <div>
                <!-- Bank -->
                
                <!-- desktop -->
                <h1 class="flex max-[600px]:hidden">BANK : <p class="text-red-500 pl-2">{{selectBank }}</p></h1>

                <!-- phone -->
                <select name="" id="" class="min-[600px]:hidden bg-gray-200 text-black mb-2 p-2 rounded w-full" v-model="selectBank">
                    <option value="">Please Select Bank ...</option>
                    <option :value="val.nice_name" v-for="val,i in bank" :key="i">{{ val.nice_name }}</option>
                </select>

                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Bank Account name</label>
                <input  v-model="nameAccount" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required>
                
                <!-- bank number -->
                <label for="first_name" class="block mb-2 mt-5 text-sm font-medium text-gray-900">Bank Account Number</label>
                <input v-model="numberAccount" type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="number" required>
                
                <!-- amount -->
                <label for="first_name" class="block mb-2 mt-5 text-sm font-medium text-gray-900">Amount</label>
                <div class="flex max-[600px]:block">
                    <input v-model="amountAccount" type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-40 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 max-[600px]:w-full" placeholder="amount" required>
                    <div>
                        <button type="submit" class="text-white bg-black border border-gray-300 focus:outline-none hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 ml-5 max-[600px]:w-full max-[600px]:ml-0 max-[600px]:mt-5">Submit</button>
                    </div>
                </div>
                
            </div>
        </form>

        <!-- Receipt -->
        <div class="w-[35%] ml-5 rounded p-16 text-gray-400 sqcode text-xl bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-black via-rose-900 to-black max-[600px]:w-full max-[600px]:p-5 max-[600px]:ml-0 max-[600px]:mt-5 max-[600px]:text-[90%]" id="qrcode">
            <h1 class="pb-2 text-white">Payment Receipt</h1>
            <hr>
            <h1 class="flex mt-2 text-[80%]">Account name : <p class="ml-2 text-white">{{ nameAccount }}</p></h1>
            <h1 class="flex text-[80%]">Account number : <p class="ml-2 text-white">{{ numberAccount }}</p></h1>
            <h1 class="flex text-[70%]">Bank : <p class="ml-2 text-white">{{ selectBank }}</p></h1>
            <div class="pt-20">
                <h1 class="flex justify-between pb-2">WithDraw <p class="justify-between"><span class="text-white">{{ amountAccount }}</span> Nice</p></h1>
                <hr>
            </div>
        </div>

    </div>
   
    

        
    </div>
</template>

<script>
import NavUser from '@/components/NavUser.vue';
import bank from '../data/banks.json'
import gsap from 'gsap';
export default {
    name :"WithDraw",
    components:{
        NavUser
    },
    data(){
        return{
            bank:bank,
            selectBank:'',
            nameAccount:'',
            numberAccount:'',
            amountAccount:0,
        }
    },
    methods:{
        CheckOutput(el,index){
            console.log(el)
            this.selectBank = el
            this.clearSelect()
            document.getElementById(index).style.backgroundColor = "#B8B0B0"
         
        },
        clearSelect(){
            let arr = Object.keys(bank)
            for(let i =0 ;i<arr.length;i++){
                document.getElementById(arr[i]).style.backgroundColor = "white"
            }
                
        }
    },
    mounted(){
      let tl = gsap.timeline()
      tl.from('#banks', {y:-100,duration:1.5,autoAlpha:0})
      .from('#qrcode', {x:-100,duration:0.5,autoAlpha:0})
    }
    
}
</script>

<style>

</style>