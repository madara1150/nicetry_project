<template>
  <section>
        <div id="window">
            <div id="container">
                <div id="contents">
                    hello
                </div>
                
            </div>
        </div>
  </section>
</template>

<script>

export default {
    name:'ContainerLogin',
    components:{
        
    }
}
</script>

<style scoped>
    #window{
        width: 100%;
        height: 100%;
        background: #E4DCCF;
    }
    #container{
        margin-left: 15%;
        
        width: 70%;
        height: 100%;
        background: #F0EBE3;
    }
    #contents{
        padding: 3%;
        display: flex;
        justify-content: center;
    }
</style>