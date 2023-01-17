<template>
  <section>
      <button>
          {{name}}
      </button>
  </section>
</template>

<script>
export default {
    name: 'ButtonBar',
    data(){
        return{
            NameButton: ""
        }
    },
    props:["name"]
}
</script>

<style scoped>
    section{
        margin-left: 1%;
    }
    button{
        background: #E4DCCF;
        width: 80px;
        height: 40px;
        padding: 5px;
        border-radius: 7px;
        border: 1px solid black;
        box-shadow: 0 0 0 0.25 rgba(0, 0, 0, alpha);
        cursor: pointer;
        text-decoration: none;
    }
</style>