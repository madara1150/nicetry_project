<template>
  <div>
    <NavUser />

    <div>
        <h1 class="text-[3vh] text-center mt-5" @click="clearSelect()">Please select the payment bank</h1>
    </div>
    
    <div class="flex justify-center mt-5">

        <!-- overflow banks -->
        <div class="w-[80%] p-2 bg-gradient-to-br from-black via-gray-800 to-rose-800 overflow-x-scroll rounded">
            <div class="flex w-[120%]">
                <a v-for="val,i in bank" class="p-2 px-4 bg-white hover:bg-[#B8B0B0]" :id="i" @click="CheckOutput(val.img,i)">
                    <img  :src="require('../image/th/'+val.img)" class="h-32 w-[100px] rounded" href="madara">
                    <div class="w-[100px]">
                    </div>
                </a>
            </div>
        </div>
    </div>
    
    <div class="flex justify-center">

        <div class="w-[40%] bg-red-500">
            
        </div>

        <div class="w-[30%]">
            <label class="block mb-2 text-sm font-medium text-gray-900">Bank</label>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Bank" disabled :value="selectBank">
        </div>

        
    </div>
    
   
  </div>
</template>

<script>
import bank from '../data/banks.json'
import NavUser from '../components/NavUser.vue'
import gsap from 'gsap';
export default {
    name:'TopUp',
    data(){
        return{
            bank:bank,
            selectBank:''
        }
    },
    components:{
        NavUser
    },
    mounted(){
    },
    methods:{
        CheckOutput(el,index){
            console.log(el)
            this.selectBank = index
            this.clearSelect()
            document.getElementById(index).style.backgroundColor = "#B8B0B0"
         
        },
        clearSelect(){
            let arr = Object.keys(bank)
            for(let i =0 ;i<arr.length;i++){
                document.getElementById(arr[i]).style.backgroundColor = "white"
            }
                
        }
    }
}
</script>

<style>

</style>