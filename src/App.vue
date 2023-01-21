<template>
  <section>
      <NavBarBtn />
      <containerLogin />


  </section>
</template>

<script>

import ContainerLogin from "./components/ContainerLogin.vue";
import NavBarBtn from "./components/NavBarBtn.vue";
export default {
  name: "App",
  components: {

    ContainerLogin,
    NavBarBtn
  },
  methods:{
   
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kanit&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Kanit", sans-serif;
  
}
#content{
  width: 100%;
  height: 100%;
  background: red;
}

  
</style>
