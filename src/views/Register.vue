<template>
    <NavBarBtn />
    <div class="container min-h-screen mx-auto bg-[#F5E9CF] px-4">
        
        <div class="text-center pt-32">
          <h1 class="text-3xl">REGISTER</h1>
          <input class="h-8 mr-3 text-center mt-5"  style="width: 153px;" type="text" placeholder="first name" v-model="fname">
            <input class="w-36 h-8 text-center" style="width: 153px;" type="text" placeholder="last name" v-model="lname"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="text" placeholder="username" v-model="username"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="text" placeholder="password" v-model="password"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="email" placeholder="email" v-model="email"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="number" placeholder="tel" v-model="tel"> <br>
             <br>
            <button class="mt-2 w-80 bg-[#4D455D] h-8 text-[#FFFFFF] cursor-pointer transition-all rounded hover:w-96 hover:h-9 shadow-lg shadow-gray-600" @click="saveProfile">APPLY</button>
        </div>

        <div class="mt-60 pb-5 flex flex-row gap-10 justify-center">
          <TopPost :user="users[0]" />
          <TopPost :user="users[1]" />
          <TopPost :user="users[2]" />
        </div>


    </div>


    
</template>

<script>
import NavBarBtn from "../components/NavBarBtn.vue";
import TopPost from "@/components/TopPost.vue";
import user from "../data/user.json"
export default {
    name: 'register',
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
    fname:'',
    lname:'',
    username:'',
    password:'',
    email:'',
    tel:'',
    id:108,
    data:user,
    user:''
  }
},
methods:{
  saveProfile(){
    let obj = {id:108,
    username:this.username,
    password:this.password,
    email:this.email,
    created_at:"20-20-20",
    fname:this.fname,
    lname:this.lname,
    role:"user",
    tel:this.tel,
    img:"https://www.sugoijp.com/upload_file/travel/160929091510_385810_318867721458395_1254235447_n_c.jpg"
    }
    this.data.push(obj)
    const myJSON = JSON.stringify(this.data);
    localStorage.setItem("madara", myJSON);
    this.id += 1
    alert("success")
    this.$router.push('/login')
  }
},
created(){
  let madara = localStorage.getItem("madara")
   this.user = JSON.parse(madara);
}

}
</script>

<style>

</style>