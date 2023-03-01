<template>
    <div class="sticky top-0">
        <NavUser />
    </div>
    
    <section class="bg-[#7DB9B6] min-h-screen">
       
        <div class="container mx-auto bg-[#F5E9CF] px-5 pt-7">
            <div class="flex justify-center">
                <div class=" w-3/6 h-64 bg-[#E96479] rounded text-center p-5 shadow-lg shadow-slate-700">
                <input type="textarea" class="w-full h-32 rounded">
                <input type="file" class="w-full rounded mt-2 h-10 text-white">
                <button class="w-full h-10 bg-[#4D455D] rounded text-white mt-2 hover:h-12 shadow-lg shadow-gray-600">POST</button>
            </div>
            </div>
            
            

            
            <div class="grid mt-20 w-full grid-cols-1 place-items-center gap-y-10 pb-5">
                
                <PostUser />
                <PostUser />    
                
                
            </div>
            
        </div>
        
        
    </section>

</template>

<script>
import NavUser from '@/components/NavUser.vue';
import PostUser from '@/components/PostUser.vue';
export default {
    name: 'MainPage',
    components:{
        NavUser,
        PostUser
    }
}
</script>

<style>

</style>