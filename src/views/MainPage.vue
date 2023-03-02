<template>
    <div class="sticky top-0">
        <NavUser />
    </div>
    
    <section class="bg-[#7DB9B6] min-h-screen">
       
        <div class="container mx-auto bg-[#F5E9CF] px-5 pt-7">
            <div class="flex justify-center">
                <div class=" w-3/6 h-64 bg-[#E96479] rounded text-center p-5 shadow-lg shadow-slate-700">
                <input type="textarea" class="w-full h-32 rounded" v-model="content">
                <input type="file" class="w-full rounded mt-2 h-10 text-white">
                <button class="w-full h-10 bg-[#4D455D] rounded text-white mt-2 hover:h-12 shadow-lg shadow-gray-600" @click="updatePost()">POST</button>
            </div>
            </div>
            
            

            
            <div class="grid mt-20 w-full grid-cols-1 place-items-center gap-y-10 pb-5" v-for="i,index in data_lo">
                
                <PostUser :data="i" />
  
                
                
            </div>
            
        </div>
        
        
    </section>

</template>

<script>
import NavUser from '@/components/NavUser.vue';
import PostUser from '@/components/PostUser.vue';
import Post from '../data/post.json';
export default {
    name: 'MainPage',
    components:{
        NavUser,
        PostUser
    },
    data(){
        return {
            data: Post,
            data_lo: "",
            content:"",
            id: 110
        }
    },
    created(){
        const myJSON = JSON.stringify(Post);
        localStorage.setItem("data", myJSON);
        this.update()
    },
    methods:{
        update(){
            let madara = localStorage.getItem("data")
            this.data_lo = JSON.parse(madara);
        },
        updatePost(){
            let val = {id: this.id,user_id:101,content:this.content,img:"https://mir-s3-cdn-cf.behance.net/projects/404/93a1b7150592603.Y3JvcCwxNjI2LDEyNzEsMCwxNTI.png",createdAt: "23-11-25",
    like : 10}
            this.data_lo.push(val)
            this.id += 1
            this.content = ""
        }
    }
}
</script>

<style>

</style>