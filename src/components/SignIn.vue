<template>
  <section>
    <div>
       
    </div>
  </section>
</template>

<script>
export default {
    name: "SignIn",
    props:{
      switchSignIn:{
        type:Boolean
      }

    }
}
</script>

<style scoped> 
      input{
        width: 300px;
        height: 30px;
      }
      button{
        width: 300px;
        height: 30px;
        background:#B8CBA9;
        border: none;
        color: #974747;
        cursor: pointer;
        transition: all 0.5s;
        text-align: center;
        border-radius: 5px;
      }
      button:hover{
        width: 330px;
        height: 35px;
        
        
      }
      input{
        text-align: center;
        background:#D6D5D1;
        border: none;
        border-radius: 5px;
      }
      input::placeholder {
        text-align: center;
        color: #A49797;
}
</style>