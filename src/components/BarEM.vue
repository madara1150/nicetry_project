<template>
  <section>
      <div>
        <div id="font">
            <label id="label1">N</label>
        <label id="label2">ice</label>
        <label id="label3">T</label>
        <label id="label2">ry</label>
        </div>  
        <div id="button">
            <ButtonBar name='Sign In' />
            <ButtonBar name='Sign Up' />
        </div>
        
      </div>
      

  </section>
</template>

<script>

import ButtonBar from './ButtonBar.vue';
export default {
    name: 'BarEM',
    components:{
        ButtonBar
    }
}
</script>

<style scoped>
    div{
        display: flex;
        align-items: center;

        height: 70px;
        width: 100%;
        background: #7D9D9C;
    }
    #label1{
        color: #FF9494;
    }
    #label2{
        color: #FFFFFF;

    }
    #label3{
        color: #9BFFFF;
    }
    #font{
        font-size: 40px;
        margin-left: 2%;;
    }
    #button{
        display: flex;
        justify-content: right;
        margin: 2%;
    }
    
</style>