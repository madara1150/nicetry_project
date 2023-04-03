<template>
     <div>
    <NavUser />

    <div>

        <div class="inline-flex rounded-md shadow-sm mt-5 ml-[10%]" role="group">
            <button @click="deposit()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                Deposit
            </button>
            <button @click="withdraw()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                Withdraw
            </button>
            <button @click="post()" type="button" class="px-7 py-3 text-sm font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                Post
            </button>
            <button @click="account()" type="button" class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                Account
            </button>
        </div>

        
        <div class="relative overflow-x-auto ml-[10%] mt-7" id="deposit">
            <table class="w-[90%] text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            account
                        </th>
                        <th scope="col" class="px-6 py-3">
                            amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            slip
                        </th>
                        <th scope="col" class="px-6 py-3">
                            form
                        </th>
                        <th scope="col" class="px-6 py-3">
                            confirm
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
                            account
                        </th>
                        <th scope="col" class="px-6 py-3">
                            amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            bank number
                        </th>
                        <th scope="col" class="px-6 py-3">
                            bank name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            confirm
                        </th>
                    </tr>
                </thead>
            </table>
        </div>

        <div class="relative overflow-x-auto ml-[10%] mt-7 hidden" id="post">
            <table class="w-[90%] text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            account
                        </th>
                        <th scope="col" class="px-6 py-3">
                            post
                        </th>
                        <th scope="col" class="px-6 py-3">
                            reason
                        </th>
                        <th scope="col" class="px-6 py-3">
                            confirm
                        </th>
                    </tr>
                </thead>
            </table>
        </div>

        <div class="relative overflow-x-auto ml-[10%] mt-7 hidden" id="account">
            <table class="w-[90%] text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Informer
                        </th>
                        <th scope="col" class="px-6 py-3">
                            account
                        </th>
                        <th scope="col" class="px-6 py-3">
                            reason
                        </th>
                        <th scope="col" class="px-6 py-3">
                            edit user
                        </th>
                    </tr>
                </thead>
            </table>
        </div>


    </div>



    </div>
</template>

<script>
import NavUser from '@/components/NavUser.vue';
export default {
    name: "Admin",
    components:{
        NavUser,
    },
    methods: {
        deposit(){
            let ans1 = document.getElementById('deposit');
            let ans2 = document.getElementById('withdraw');
            ans2.style.display = 'none';
            let ans3 = document.getElementById('post');
            ans3.style.display = 'none';
            let ans4 = document.getElementById('account');
            ans4.style.display = 'none';
            return ans1.style.display = 'block'
        },
        withdraw(){
            let ans1 = document.getElementById('deposit');
            ans1.style.display = 'none';
            let ans2 = document.getElementById('withdraw');
            let ans3 = document.getElementById('post');
            ans3.style.display = 'none';
            let ans4 = document.getElementById('account');
            ans4.style.display = 'none';
            return ans2.style.display = 'block'
        },
        post(){
            let ans1 = document.getElementById('deposit');
            ans1.style.display = 'none';
            let ans2 = document.getElementById('withdraw');
            ans2.style.display = 'none';
            let ans3 = document.getElementById('post');
            let ans4 = document.getElementById('account');
            ans4.style.display = 'none';
            return ans3.style.display = 'block'
        },
        account(){
            let ans1 = document.getElementById('deposit');
            ans1.style.display = 'none';
            let ans2 = document.getElementById('withdraw');
            ans2.style.display = 'none';
            let ans3 = document.getElementById('post');
            ans3.style.display = 'none';
            let ans4 = document.getElementById('account');
            return ans4.style.display = 'block'
        }
    }
}
</script>

<style>

</style>