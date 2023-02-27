<template>
    <NavBarBtn />
    <div class="container mx-auto bg-[#F5E9CF] px-4">
        
        <div class="text-center pt-20">
          <input class="h-8 mr-3 text-center"  style="width: 153px;" type="text" placeholder="first name">
            <input class="w-36 h-8 text-center" style="width: 153px;" type="text" placeholder="last name"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="text" placeholder="username"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="text" placeholder="password"> <br>
            <input class="w-80 mt-3 h-8 text-center" type="email" placeholder="email"> <br> <br>
            <button class="mt-2 w-80 bg-[#4D455D] h-8 text-[#FFFFFF] cursor-pointer transition-all rounded hover:w-96 hover:h-9">APPLY</button>
        </div>
    </div>


    
</template>

<script>
import NavBarBtn from "../components/NavBarBtn.vue";
export default {
    name: 'register',
    components: {

    NavBarBtn
},
}
</script>

<style>

</style>