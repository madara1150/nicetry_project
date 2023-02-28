<template>
    <NavBarBtn />
    <div class="container mx-auto bg-[#F5E9CF] px-4 min-h-screen">
       

        <div class="text-center pt-20">
          <input type="text" placeholder="username" class="w-80 h-8 text-center bg-[#FFFAFA] rounded" v-model="username"> <br>
          <input type="password" placeholder="password" class="w-80 h-8 text-center bg-[#FFFAFA] rounded" style="margin-top:15px;" v-model="pwd"><br>
          <br>
          <button class="w-80 h-8 bg-[#4D455D] text-[#FFFFFF] rounded transition-all hover:w-96 hover:h-9 shadow-lg shadow-gray-600" @click="loginCheck()">LOGIN</button>
        </div>  

        <div class="mt-16 pb-5 flex flex-row gap-10 justify-center">
          <TopPost :user="users[0]" />
          <TopPost :user="users[1]" />
          <TopPost :user="users[2]" />
        </div>


    </div>
</template>

<script>
import NavBarBtn from "../components/NavBarBtn.vue";
import TopPost from "@/components/TopPost.vue";
export default {
    name: 'login',
    
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

NavBarBtn,
TopPost
},
data(){
  return{
    users:[
      {name:'ธนายุธ งงๆไป',donate:52000,OwnPost:'Tanathip tokyo',img:'https://www.sosyncd.com/wp-content/uploads/2022/07/134.png'},
      {name:'ธนาธร ไปแล้ว',donate:60000,OwnPost:'Nutaya Eiei',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpLzFgZaiZIHornQhfVuB6Rz6keJCwUlc-g&usqp=CAU'},
      {name:'ธนาคาร ไปไหน',donate:72000,OwnPost:'Madara wow',img:'https://freepngimg.com/save/120089-uchiha-madara-free-download-image/860x901'}
    ],
    username:'',
    pwd:''
  }
}
}
</script>

<style>

</style>