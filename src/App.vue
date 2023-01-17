<template>
  <section>
    <BarEM />
    
    <ContainerLogin />
  </section>
</template>

<script>
import BarEM from "./components/BarEM.vue";
import ContainerLogin from "./components/ContainerLogin.vue";
export default {
  name: "App",
  components: {
    BarEM,
    ContainerLogin
  },
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
