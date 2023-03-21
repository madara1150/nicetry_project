<template>
  <div>

    <div class="flex max-[600px]:flex-col">
        <div class="w-[40%] max-[600px]:w-[100%]">
            <CardPost />
        </div>
        <div class="ml-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sunt eius a ea tempore! Voluptatibus eligendi voluptatum et ipsum iste.
        </div>
    </div>
    
    

  </div>
</template>

<script>
import CardPost from '../components/CardPost.vue';
export default {
    name:"Landing",
    components:{
        CardPost
    }
}
</script>

<style>

</style>