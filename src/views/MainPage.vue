<template>
  <div>
<NavUser />
    

    <div class="flex justify-center" v-for="val,i in 3" :key="i">
        <div class="flex justify-center content-center mt-10">
            <CardPost  class="w-[34%] mr-10"/>
            <TopDonate class="w-[35%] h-[40%] mt-5" />
        </div>
    </div>

  </div>
</template>

<script>
import CardPost from '@/components/CardPost.vue';
import NavUser from '@/components/NavUser.vue';
import TopDonate from '@/components/TopDonate.vue';
export default {

    name:'MainPage',
    components:{
        CardPost,
        NavUser,
        TopDonate
    }
}
</script>

<style>

</style>