<template>
  <section>
        <div id="window">
            <div id="container">
                <div class="contents" v-show="false">
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
                
                
                <div class="contents" v-show="switchSignIn">
                    <SignIn />

                </div>
               
               
                <div class="contents" v-show="switchSignUp">
                    <SignUp />
                </div>
                <br><br>
               
                <div style="text-align:center;">
                    <label style="font-size:20px;">
                        Would you like to show off your work?
                    </label>
                </div>
                    <br>
               
                <div id="post" style="display:flex;">
                    <TopPost />
                    <TopPost />
                    <TopPost />
                </div>
            
            </div>
        </div>
  </section>
</template>

<script>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import TopPost from "../components/TopPost.vue";
export default {
    name:'ContainerMain',
    components:{
        SignIn,
        SignUp,
        TopPost
    },
    props:{
        switchSignIn:{
            type: Boolean,
        },
        switchSignUp:{
            type: Boolean,
        }
    }
}
</script>

<style scoped>
    #window{
        width: 100%;
        height: 100%;
        background: #E4DCCF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #container{
        
        width: 70%;
        height: 100%;
        background: #F0EBE3;
        padding-bottom: 100px;
    }
    .contents{
        text-align: center;
        padding-top:7%;
        height: 100%;
        justify-content: center;
    }
    #post{
        justify-content: center;
        align-items: center;
    }
</style>