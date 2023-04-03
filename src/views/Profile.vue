<template>
  <div>
    <NavUser />

    <!-- profile -->
    <div class="">
        <div class="flex items-center justify-center p-5">
          <img src="https://source.unsplash.com/800x600/?nature" alt="" class="rounded-full h-32 w-32">
          <div class="p-5">
            <h1 class="text-3xl">Nutaya</h1>
            <h1 class="text-xl">TANATHIP SINGHANON</h1>
            <h1 class="text-xl">Tel 202101204124124</h1>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import NavUser from '@/components/NavUser.vue';
export default {
    name: 'Profile',
    components:{
      NavUser
    }

}
</script>

<style>

</style>