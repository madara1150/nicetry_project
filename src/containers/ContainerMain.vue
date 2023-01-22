<template>
  <section>
        <div id="window">
            <div id="container">
                <div id="contents" v-show="true">
                    <label style="font-size:40px">
                        What is NiceTry?
                    </label> <br><br><br>
                    <label style="font-size:40px;">
                        It is a website that can showcase your work.
                    </label><br>
                    <label style="font-size:40px;">
                        Even if no  one sees it, we see it.
                    </label>
                </div>
                <div id="contents" v-show="false">
                    <SignIn />

                </div>
            </div>
        </div>
  </section>
</template>

<script>
import SignIn from "../components/SignIn.vue";
export default {
    name:'ContainerMain',
    components:{
        SignIn
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
        text-align: center;
        padding-top:7%;
        height: 100%;
        justify-content: center;
    }
</style>