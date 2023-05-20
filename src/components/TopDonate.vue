<template>
  <div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg rounded">
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-white uppercase bg-gray-800">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
            </tr>
        </thead>
        <tbody class="">
            <tr v-for="i,index in donate" :key="index" class="bg-gray-900 border-b hover:bg-gray-700">
                <td class="px-6 py-4 font-semibold text-gray-200 hover:text-red-200">
                    {{i.User.first_name}} {{ i.User.last_name }}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-200 hover:text-red-200">
                    ${{ i.amount }}
                </td>
            </tr>

        </tbody>

    </table>
</div>

  </div>
</template>

<script>
import axios from "axios";
export default {
    props: {
    myObject: {
      type: Object,
    }
  },
  data(){
    return{
        donate:[],
    }
  },
  methods:{
    async fetchTopDonate(){
        const res = await axios.get(`http://localhost:5000/api/donate/topdonate/${this.myObject.id}`)
        this.donate = res.data
    }
    
  },
  mounted(){
    this.fetchTopDonate()
  }
}
</script>

<style>

</style>