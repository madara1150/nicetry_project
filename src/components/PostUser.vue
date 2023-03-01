<template>
    <div class="w-4/6 bg-red-700 rounded-b">
        
        <nav class="bg-[#E0E0E0] w-full p-3 rounded-b">
            <div class="flex rounded-b">
                <img src="https://www.sosyncd.com/wp-content/uploads/2022/07/134.png" class="w-14 h-12 rounded-full" @click="profile *= -1">
                
                
                <div :class="[profile == -1 ? 'hidden' : '','w-96 h-64 bg-[#4D455D] absolute ml-16 mt-6 flex rounded']">
                    <div class="w-10 h-10 bg-[#ffffff] absolute ml-80 left-10 bottom-56 rounded-full grid grid-cols-2 text-center text-3xl pt-1 pl-3" @click="profile *= -1">X</div>
                    
                    <div class="w-3/5 h-56 bg-[#E96479] mx-4 my-4 p-2 rounded relative">
                        <h1 class="text-white mt-5">{{ fname }} {{ lname }}</h1>
                        <h1 class="text-white mt-3">tel: 0414149149</h1>
                        <h1 class="text-white mt-3">madara@madada.com</h1>
                    </div>
                    <div class="text-center">
                        <img src="https://sketchok.com/images/articles/06-anime/023-naruto/08/09.jpg" class="w-44 rounded p-3 h-44">
                        <h1 class="text-white">Nice Id: 5555</h1>
                    </div>
                </div>


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
                    <img src="../image/ellipsis-vertical-solid.svg" class="w-10 h-10 hover:h-12" @click="setting *= -1">
                    <!-- setting post -->

                        <div :class="[setting == -1 ? 'hidden' : '' ,'w-30 rounded p-2 h-24 bg-[#4D455D] rounded text-white text-center']" style="margin-left:-20px;">
                            <h1 class="p-2 hover:text-gray-300">Delete Post</h1>
                            <h1 class="p-2 hover:text-gray-300">Edit Post</h1>
                        </div>

                </div>
                
            </div>        
        </div>

        <!-- modal comment -->
        <div :class="[colse == -1 ? 'hidden': '','fixed z-1 left-1/4 top-1/4 w-2/4 h-1/2 bg-[#ffffff] overflow-auto']">
            
            <!-- exit -->
            <div class="w-10 h-10 bg-green-500 rounded-full fixed text-center cursor-pointer hover:w-12 hover:h-12  text-2xl hover:text-3xl text-white" style="left:74%;top:24%" @click="colse *= -1">x</div>



            <div class="w-full h-full flex p-2">
                <input type="text" class='w-2/6 h-10 bg-[#E96479] text-white fixed bottom-1/4'>
                <button class="w-1/6 h-10 bg-gray-600 text-white fixed bottom-1/4" style="left:58%">send</button>
            </div>
            
        </div>

        <!-- modal donate -->
        <div :class="[donate == -1 ? 'hidden': '','fixed z-1 left-1/4 top-1/4 rounded w-2/4 h-1/2 bg-[#4D455D] overflow-auto flex justifly-items-center']">
            
            <div class="w-10 h-10 bg-green-500 rounded-full fixed text-center  text-2xl text-white cursor-pointer hover:w-12 hover:h-12 justifly-center hover:text-3xl" style="left:74%;top:24%" @click="donate *= -1">x</div>
            <div class="w-3/4 m-5 bg-[#E96479] rounded ml-6 p-5 text-center" style="height: 93%;width: 95%;">
                <div :class="[ty == -1 ? '' : 'hidden']">
                    <h1 class="text-6xl mt-32 text-white">Donate to {{ fname }}</h1>
                    <h1 class="text-3xl mt-10 text-white">You have {{ coin }} Nice</h1>
                    <input type="number" class="w-96 h-10 mt-10 mr-2"> 
                    <button class="w-32 h-10 p-2 mt-10 bg-[#F5E9CF] rounded shadow-lg shadow-gray-600 hover:w-36 transition-all" @click="thankyou()">Donate</button>
                </div>

                <div :class="[ty == -1 ? 'hidden' : '']">
                    <h1 class="text-4xl text-white mt-32">Donated to Tanathip</h1>
                    <h1 class="text-6xl text-white mt-5">Thank You for donate</h1>
                </div>
           
            </div>
            
        </div>


        <!-- last donate -->
        <div>
            <h1 class="text-white text-3xl p-5 ml-5 rounded">Last Donate</h1>
            <div class="grid grid-cols-3">
                
                <div class="p-3">
                    <img src="https://www.sosyncd.com/wp-content/uploads/2022/07/134.png" class="w-20 h-20 ml-32 rounded-full">
                    <div class="text-center">
                        <h1 class="ml-10 text-white">TANTATHIP</h1>
                    <h1 class="ml-10 text-white">40000</h1>
                    </div>
                   
                </div>

                <div class="p-3">
                    <img src="https://www.sosyncd.com/wp-content/uploads/2022/07/134.png" class="w-20 h-20 ml-32 rounded-full">
                    <div class="text-center">
                        <h1 class="ml-10 text-white">TANTATHIP</h1>
                    <h1 class="ml-10 text-white">40000</h1>
                    </div>
                </div>

                <div class="p-3">
                    <img src="https://www.sosyncd.com/wp-content/uploads/2022/07/134.png" class="w-20 h-20 ml-32 rounded-full">
                    <div class="text-center">
                        <h1 class="ml-10 text-white">TANTATHIP</h1>
                    <h1 class="ml-10 text-white">40000</h1>
                    </div>
                </div>

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
            coin: 1000,
            setting: -1,
            profile: -1,
            ty: -1,
        }
    },
    methods:{
        thankyou(){
            this.ty *= -1
        }
    }
}
</script>

<style>

</style>