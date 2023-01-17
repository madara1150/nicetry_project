<template>
  <section>
    <input type="text"> <br />
    <input type="password"> <br /> <br />
    <button>LOGIN</button>
  </section>
</template>

<script>
export default {
    name: 'LoginForm'
}
</script>

<style scoped>
    button{
        width: 300px;
    }
    input{
        margin-top: 0.5%;
        width: 300px;
    }
</style>