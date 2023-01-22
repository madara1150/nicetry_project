<template>
  <section>
      <NavBarBtn :switchSignIn=true :switchSignUp=true @showIn="SignIn" @showUp="SignUp" />
      <containerMain :switchSignIn=switchSignIn :switchSignUp=switchSignUp />


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
    SignIn(check){
      
      if(check === true){
        if(this.switchSignUp == true && this.switchSignIn == false){
          this.switchSignIn = true
          this.switchSignUp = false
        }
        else if(this.switchSignUp == true && this.switchSignIn == true){
          this.switchSignUp = false
          this.switchSignIn = true
        }
        else if(this.switchSignUp == false && this.switchSignIn == true){
          this.switchSignIn = true
        }
        else{
          this.switchSignIn = true
        }
      }
    },
    SignUp(check){
      if(check === true){
        if(this.switchSignUp == true && this.switchSignIn == false){
          
          this.switchSignUp = true
        }
        else if(this.switchSignUp == true && this.switchSignIn == true){
          this.switchSignUp = true
          this.switchSignIn = false
        }
        else if(this.switchSignUp == false && this.switchSignIn == true){
          this.switchSignUp = true
          this.switchSignIn = false
        }
        else{
          this.switchSignUp = true
        }
      }
  },
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
#content{
  width: 100%;
  height: 100%;
  background: red;
}

  
</style>
