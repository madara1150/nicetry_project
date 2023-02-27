<template>
    <NavBarBtn />
    <div class="container mx-auto bg-[#F5E9CF] px-4">
       

        <div class="text-center pt-20">
          <input type="text" placeholder="username" class="w-80 h-8 text-center bg-[#FFFAFA] rounded" v-model="username"> <br>
          <input type="password" placeholder="password" class="w-80 h-8 text-center bg-[#FFFAFA] rounded" style="margin-top:15px;" v-model="pwd"><br>
          <br>
          <button class="w-80 h-8 bg-[#4D455D] text-[#FFFFFF] rounded transition-all hover:w-96 hover:h-9" @click="loginCheck()">LOGIN</button>
        </div>  
    </div>
</template>

<script>
import NavBarBtn from "../components/NavBarBtn.vue";
export default {
    name: 'login',
    data(){
        return{
            username:'',
            pwd:''
        }
    },
    methods:{
        loginCheck(){
            if(this.username === 'madara' && this.pwd === 'boat'){
                this.$router.push('/main')
            }else if(this.username === '' || this.pwd === ''){
                alert('please input username & password')
            }
            else{
                alert('wrong password')
            }
        }
    },
    components: {

NavBarBtn
},
}
</script>

<style>

</style>