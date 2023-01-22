<template>
  <section>
    <div id="nav">
        <div id="logo">
            <label style="color:#FF9494;">N</label>
            <label style="color:#ffffff;">ice</label>
            <label style="color:#9BFFFF;">T</label>
            <label style="color:#ffffff;">ry</label>
        </div>
        <div id="btn">
          <button style="margin-right:11px;" @click="SsignIn(switchSignIn)">Sign In</button>
          <button @click="SsignUp(switchSignUp)">Sign Up</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'NavBarBtn',
    props:{
        switchSignIn:{
            type:Boolean,
        },
        switchSignUp:{
            type:Boolean,
        }
    },
    methods:{
      SsignIn(switchSignIn){
        this.$emit("showIn", switchSignIn)
      },
      SsignUp(switchSignUp){
        this.$emit("showUp", switchSignUp)
      }
    }
}
</script>

<style scoped>
    section{
    width: 100%;
    background: #576F72;
    }
    #nav{
      display: flex;
      align-items: center;
    }
    #btn{
      position: absolute;
      right: 0;
      margin-right: 50px;
    }
    #logo{
      margin-left: 30px;
        font-size: 40px;
        padding: 7px;
    }
    button{
      padding: 10px 30px;
      border-radius: 7px;
      border: none;
      background: #E4DCCF;
      transition: all 0.5s;
      
    }
    button:hover{
      cursor: pointer;
      transform:scale(1.15);
    }
</style>