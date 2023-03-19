<template>
  <section class="min-h-screen bg-gradient-to-tl from-slate-100 via-gray-100 to-slate-300">
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
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Abril Fatface', cursive;
  
}
body{
  min-height: 100vh;
}


  
</style>
