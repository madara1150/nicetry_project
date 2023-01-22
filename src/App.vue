<template>
  <section>
      <NavBarBtn />
      <containerMain />


  </section>
</template>

<script>

import ContainerMain from "./containers/ContainerMain.vue";
import NavBarBtn from "./components/NavBarBtn.vue";
export default {
  name: "App",
  components: {

    ContainerMain,
    NavBarBtn
  },
  methods:{
   
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
#content{
  width: 100%;
  height: 100%;
  background: red;
}

  
</style>
