<template>
  <section class="bg-[#7DB9B6]">
    <router-view />
  </section>
</template>

<script>


import NavBarBtn from "./components/NavBarBtn.vue";
export default {
  name: "App",
  components: {

    NavBarBtn
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
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sofia Sans', sans-serif;
  
}


  
</style>
