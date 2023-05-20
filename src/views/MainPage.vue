<template>
  <div>
<NavUser class="z-40" />
    
    <div class="bg-gradient-to-br from-rose-900 via-black to-rose-700 w-full h-full">
        <div class="w-[70%] mx-auto bg-gray-200 max-[600px]:w-[100%]">

            <div class="flex justify-center max-[600px]:p-5 w-full" v-for="val,i in post" :key="i">
                <div class="flex justify-center content-center mt-10 max-[600px]:flex-col mb-5 w-full">
                    <CardPost  class="w-[50%] mr-10 max-[600px]:w-full" :myObject="val" :myId="val.user_id" />
                    <TopDonate class="w-[35%] h-[40%] mt-5 max-[600px]:w-full" :myObject="val"  />
                </div>
            </div>

        </div>
        
    </div>


    

  </div>
</template>

<script>
import CardPost from '@/components/CardPost.vue';
import NavUser from '@/components/NavUser.vue';
import TopDonate from '@/components/TopDonate.vue';

import axios from 'axios';
import { useFetchStore } from "../store/index";
import { storeToRefs } from "pinia";

export default {

    name:'MainPage',
    components:{
        CardPost,
        NavUser,
        TopDonate
    },
    setup() {
    const apiStore = useFetchStore()
    const { data } = storeToRefs(apiStore)

    return {
      me: data
    };
  },
    data(){
        return{
            post:[],
        }
    },
    mounted(){
        this.fetchPost()
    },
    methods:{
        async fetchPost() {
  try {
    const response = await axios.get(`http://localhost:5000/api/posts/mainpost`);
    const data = response.data;
    for(let i=0;i<data.length;i++){
        this.post[i] = data[i]
    }
  } catch (error) {
    console.error(error);

  }
}
    }
}
</script>

<style>

</style>