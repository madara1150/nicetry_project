<template>
   <div>
    <NavUser />

    <div>

        <div class="inline-flex rounded-md shadow-sm mt-5 ml-[10%]" role="group">
            <button @click="deposit()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                Deposit
            </button>
            <button @click="withdraw()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                Withdraw
            </button>
            <button @click="transfer()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                Transfer
            </button>
        </div>

        
        <div class="relative overflow-x-auto ml-[10%] mt-7" id="deposit">
            <table class="w-[90%] text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date & Time
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nice coin
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
            </table>
        </div>

        <div class="relative overflow-x-auto ml-[10%] mt-7 hidden" id="withdraw">
            <table class="w-[90%] text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date & Time
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nice coin
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
            </table>
        </div>

        <div class="relative overflow-x-auto ml-[10%] mt-7 hidden" id="transfer">
            <table class="w-[90%] text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date & Time
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nice coin
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Account
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>



    </div>
</template>

<script>
import NavUser from '../components/NavUser.vue'
export default {
    name:'Deposit',
    components:{
        NavUser
    },
    methods: {
        deposit(){
            let ans1 = document.getElementById('deposit');
            let ans2 = document.getElementById('withdraw');
            ans2.style.display = 'none';
            let ans3 = document.getElementById('transfer');
            ans3.style.display = 'none';
            return ans1.style.display = 'block'
        },
        withdraw(){
            let ans1 = document.getElementById('deposit');
            ans1.style.display = 'none';
            let ans2 = document.getElementById('withdraw');
            let ans3 = document.getElementById('transfer');
            ans3.style.display = 'none';
            return ans2.style.display = 'block'
        },
        transfer(){
            let ans1 = document.getElementById('deposit');
            ans1.style.display = 'none';
            let ans2 = document.getElementById('withdraw');
            ans2.style.display = 'none';
            let ans3 = document.getElementById('transfer');
            return ans3.style.display = 'block'
        }
    }
}
</script>

<style>

</style>