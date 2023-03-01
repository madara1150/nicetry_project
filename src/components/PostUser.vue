<template>
    <div class="w-4/6 bg-red-700 rounded-b">
        
        <nav class="bg-[#E0E0E0] w-full p-3 rounded-b">
            <div class="flex rounded-b">
                <img src="https://www.sosyncd.com/wp-content/uploads/2022/07/134.png" class="w-14 h-12 rounded-full">
            <h1 class="mt-2 ml-5 text-2xl">{{ fname }} {{ lname }}</h1>
            </div>    
        </nav>

        <div class="w-full bg-[#FFFAFA] rounded-b">
            <div class="p-5 place-items-center">
                <img :src="img" class="place-items-center grid grid-cols-1 m-auto" >
                <div class="p-5 px-16">{{ content }}</div>
            </div>
        </div>

        <div class="w-full rounded-b">
            <div class="w-full h-16 rounded-b bg-[#E96479]">
                <div class="w-3/6 flex p-3 ml-4 gap-5">
                    <div class="w-10 h-10">
                        <img src="../image/heart-regular.svg" :class="[sw == -1 ?'w-10 h-10 absolute hover:h-12' : 'w-10 h-10 hidden hover:h-12']" @click="sw *= -1">
                        <img src="../image/heart-solid.svg" :class="[sw == -1 ? 'w-10 h-10 hidden hover:h-12' : 'w-10 h-10 absolute hover:h-12']" @click="sw *= -1">

                    </div>
                    <img src="../image/comment-regular.svg" class="w-10 h-10 hover:h-12" @click="colse *= -1">
                    <img src="../image/circle-dollar-to-slot-solid.svg" class="w-10 h-10 hover:h-12" @click="donate *= -1">
                    <img src="../image/ellipsis-vertical-solid.svg" class="w-10 h-10 hover:h-12">
                </div>
                
            </div>        
        </div>

        <!-- modal comment -->
        <div :class="[colse == -1 ? 'hidden': '','fixed z-1 left-1/4 top-1/4 w-2/4 h-1/2 bg-[#ffffff] overflow-auto']">
            
            <!-- exit -->
            <div class="w-10 h-10 bg-green-500 rounded-full fixed text-center text-2xl text-white" style="left:74%;top:24%" @click="colse *= -1">x</div>



            <div class="w-full h-full flex p-2">
                <input type="text" class='w-2/6 h-10 bg-red-600 text-white fixed bottom-1/4'>
                <button class="w-1/6 h-10 bg-gray-600 text-white fixed bottom-1/4" style="left:58%">send</button>
            </div>
            
        </div>

        <!-- modal donate -->
        <div :class="[donate == -1 ? '': '','fixed z-1 left-1/4 top-1/4 rounded w-2/4 h-1/2 bg-[#4D455D] overflow-auto flex justifly-items-center']">
            
            <div class="w-10 h-10 bg-green-500 rounded-full fixed text-center  text-2xl text-white" style="left:74%;top:24%" @click="donate *= -1">x</div>
            <div class="w-3/4 m-5 bg-[#E96479] rounded ml-6 p-5 text-center" style="height: 93%;width: 95%;">
            <h1 class="text-6xl mt-20 text-white">Donate to {{ fname }}</h1>
            <h1 class="text-3xl mt-10 text-white">You have {{ coin }} Nice</h1>
            <input type="number" class="w-96 h-10 mt-10 mr-2"> 
            <button class="w-32 h-10 p-2 mt-10 bg-[#F5E9CF] rounded">Donate</button>
            </div>
            
        </div>


    </div>
</template>

<script>
export default {
    name:'PostUser',
    data(){
        return {
            fname:'Tanathip',
            lname:'Uchiha',
            img:'https://sites.google.com/site/hokage7legend/_/rsrc/1441832488514/prawati-ho-kha-ngea/asdasd.jpg',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            sw: -1,
            colse: -1,
            donate: -1,
            fname: 'Tanathip',
            coin: 1000
        }
    }
}
</script>

<style>

</style>