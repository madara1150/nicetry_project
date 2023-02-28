<template>
    <div class="w-3/4 bg-red-700 rounded-b">
        
        <nav class="bg-[#E0E0E0] w-full p-3 rounded-b">
            <div class="flex rounded-b">
                <img src="https://www.sosyncd.com/wp-content/uploads/2022/07/134.png" class="w-12 h-12 rounded-full">
            <h1 class="mt-2 ml-5 text-2xl">{{ fname }} {{ lname }}</h1>
            </div>    
        </nav>

        <div class="w-full bg-[#FFFAFA] rounded-b">
            <div class="p-5 place-items-center">
                <img :src="img" class="place-items-center grid grid-cols-1 m-auto" >
                <div class="p-5 px-16">{{ content }}</div>
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
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    }
}
</script>

<style>

</style>