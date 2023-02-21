<template>
  <section class="bg-[#7DB9B6]">
    <NavBarBtn :switchSignIn=true :switchSignUp=true @showIn="SignIn" @showUp="SignUp" />

    <div class="container mx-auto bg-[#F5E9CF] px-4">
        <div class="text-center pt-20 text-3xl">
            <h1>What is NiceTry?</h1>
            <br>
            <h1>It is a website that can showcase your work.</h1>
            <br>
            <h1>Even if no one seesit, we see it.</h1>
        </div>

        <div class="text-center pt-20">
          <input type="text" placeholder="username" class="w-80 h-8 text-center bg-[#FFFAFA] rounded"> <br>
          <input type="text" placeholder="password" class="w-80 h-8 text-center bg-[#FFFAFA] rounded" style="margin-top:15px;"><br>
          <br>
          <button class="w-80 h-8 bg-[#4D455D] text-[#FFFFFF] rounded transition-all hover:w-96 hover:h-9">LOGIN</button>
        </div>

        <div class="text-center pt-20">
          <input class="h-8 mr-3 text-center"  style="width: 153px;" type="text" placeholder="first name">
            <input class="w-36 h-8 text-center" style="width: 153px;" type="text" placeholder="last name"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="text" placeholder="username"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="text" placeholder="password"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="email" placeholder="email"> <br> <br>
            <button class="mt-2 w-80 bg-[#4D455D] h-8 text-[#FFFFFF] cursor-pointer transition-all rounded hover:w-96 hover:h-9">APPLY</button>
        </div>
    </div>


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
      switchSignIn:true,
      switchSignUp:false,
      
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
