<script setup>

import { useFetchStore } from '@/store/index'
const store = useFetchStore()
store.fetchData()
</script>

<template>
  <section class="min-h-screen">
    <router-view />
  </section>
</template>

<script>

export default {
  name: "App",
  components: {


  },
  methods:{
      
    
  },
  data(){
    return {
      
      
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Kanit', sans-serif;
  
}


  
</style>
