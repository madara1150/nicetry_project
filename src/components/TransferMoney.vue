<template>
    <div>

       
        <div class="w-[90%] h-20 flex overflow-scroll">
            <div class="p-3 bg-white w-[60%]" v-for="val,i in bank">
                <img :src="require('../image/th/'+val.img)" class="w-10 h-28" alt="">
                <p>{{ val.nice_name }}</p>
            </div>
        </div>
          

    


    </div>
</template>

<script>
import bank from '../data/banks.json'
export default {
    
    name: 'TransferMoney',
    data(){
        return {
            bank_img:['baac.png','bay.png','bbl.png','bnp.png','boa.png','cacib.png','cimb.png','citi.png','db.png','ghb.png','gsb.png','hsbc.png','ibank.png','icbc.png','jpm.png','kbank.png','kk.png','ktb.png','lhb.png','mb.png','mega.png','mufg.png','rbs.png','sc.png','scb.png','smbc.png','tbank.png','tcrb.png','tisco.png','tmb.png','ttb.png','uob.png'],
            bank:bank
        }
    },
    computed:{
    },
    methods:{
    }

}
</script>

<style>

</style>