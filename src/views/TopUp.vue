<template>
  <div>
    <NavUser />

    <div>
        <h1 class="text-[3vh]">Please select the payment bank</h1>
    </div>
    
    <div class="flex justify-center">
        <!-- overflow banks -->
        <div class="w-[80%] p-3 bg-gray-400 overflow-x-scroll rounded">
            <div class="flex w-[300%]">
                <a v-for="val,i in bank" class="p-2" @click="CheckOutput(val.img)">
                    <img  :src="require('../image/th/'+val.img)" class="h-32 w-[150px] rounded" href="madara">
                    <div class="w-[150px]">
                    </div>
                </a>
            </div>
                
            
            
            
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
            bank:bank
        }
    },
    components:{
        NavUser
    },
    mounted(){
    },
    methods:{
        CheckOutput(el){
            console.log(el);
        }
    }
}
</script>

<style>

</style>