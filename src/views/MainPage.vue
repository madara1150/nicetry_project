<template>
    <div class="sticky top-0">
        <NavUser />
    </div>
    
    <section class="bg-[#7DB9B6] min-h-screen">
       
        <div class="container mx-auto bg-[#F5E9CF] px-5 pt-7">
            <div class="flex justify-center ">
                <div class=" w-3/6 h-20 bg-[#E96479] rounded text-center p-5 shadow-lg shadow-slate-700">
                <h1 class="text-4xl text-white">Post your content</h1></div>
            </div>
            
            

            
            <div class="grid mt-7 w-full grid-cols-1 place-items-center gap-y-10 pb-5">
                
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