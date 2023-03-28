<template>
  <div>
    
    <div class="flex justify-center">
        <div class="w-[70%] p-3 bg-red-500 overflow-x-scroll">
           
            <div class="flex w-[300%]">
                <a href="" v-for="val,i in bank" class="p-2">
                    <img  :src="require('../image/th/'+val.img)" class="h-32 w-[150px]" href="madara">
                    <div class="w-[150px]">
                        <p>{{ val.nice_name }}</p>
                    </div>
                </a>
            </div>
                
            
            
            
        </div>
    </div>
    

  </div>
</template>

<script>
import bank from '../data/banks.json'
export default {
    name:'TopUp',
    data(){
        return{
            bank:bank
        }
    }
}
</script>

<style>

</style>