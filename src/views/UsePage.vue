<template>
  <NavAdmin/>
  <div class="container pt-5 mx-auto bg-[#F5E9CF] px-4 min-h-screen">
    <div v-for="i in 3">
        <TableAdmin />
    </div>
    
   

    



  </div>
</template>

<script>
import NavAdmin from '@/components/NavAdmin.vue';
import TableAdmin from '@/components/TableAdmin.vue';
export default {
    Name : 'UsePage',
    components:{
        NavAdmin,
        TableAdmin
    }
}
</script>

<style>

</style>