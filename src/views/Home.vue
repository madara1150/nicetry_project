<template>
  <NavBarBtn />
  <section class="bg-[#7DB9B6] h-full min-h-screen">
    

    <!-- home -->
    <div class="container mx-auto bg-[#F5E9CF] px-4 min-h-screen">
        <div class="text-center pt-20 text-3xl">
            <h1>What is NiceTry?</h1>
            <br>
            <h1>It is a website that can showcase your work.</h1>
            <br>
            <h1>Even if no one seesit, we see it.</h1>
        </div>

        <div class="mt-16 pb-5 flex flex-row gap-10 justify-center">
          <TopPost :user="users[0]" />
          <TopPost :user="users[1]" />
          <TopPost :user="users[2]" />
        </div>

    </div>


  </section>
</template>

<script>
import NavBarBtn from "../components/NavBarBtn.vue";
import TopPost from "@/components/TopPost.vue";
export default {
    name:'Home',
    methods:{

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
    ]
  }
}
}
</script>

<style>

</style>