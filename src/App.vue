<template>
  <section class="min-h-screen">
    <router-view />
  </section>
</template>

<script>


import NavBarBtn from "./components/NavBarBtn.vue";
import gsap from "gsap";
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
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Abril Fatface', cursive;
  
}


  
</style>
