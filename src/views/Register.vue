<template>
    <NavBarBtn />
    <div class="container mx-auto bg-[#F5E9CF] px-4">
        
        <div class="text-center pt-20">
          <input class="h-8 mr-3 text-center"  style="width: 153px;" type="text" placeholder="first name">
            <input class="w-36 h-8 text-center" style="width: 153px;" type="text" placeholder="last name"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="text" placeholder="username"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="text" placeholder="password"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="email" placeholder="email"> <br> <br>
            <button class="mt-2 w-80 bg-[#4D455D] h-8 text-[#FFFFFF] cursor-pointer transition-all rounded hover:w-96 hover:h-9 shadow-lg shadow-gray-600">APPLY</button>
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
    ]
  }
}
}
</script>

<style>

</style>