<template>
     <div class="min-h-screen" style="background-image: url(https://cdn.discordapp.com/attachments/911172780781891614/1089188257331433543/black-and-white-city-silhouette-background-abstract-skyline-of-city-buildings-with-blue-sky-illustration-vector.png)">
    <NavAdmin />

    <div>

        <div class="inline-flex rounded-md shadow-sm mt-5 ml-[10%] max-[600px]:ml-2" role="group" id="group">
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

        <!-- Deposit -->
        <div class="relative overflow-x-auto ml-[10%] mt-7 max-[600px]:ml-2 max-[600px]:px-2" id="deposit">
            <table class="w-[90%] text-sm text-left text-gray-600 text-center">
                <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
                    <tr class="">
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

                <tbody>
                    <tr v-for="val, i in 5" :key="i" class="border border-gray-600 bg-white">
                        <td class="px-6 py-3">
                            11102
                        </td>
                        <td class="px-6 py-3 text-green-600">
                            500
                        </td>
                        <td class="px-6 py-3">
                            /img/slip.png
                        </td>
                        <td class="px-6 py-3">
                            Kbank
                        </td>
                        <td class="px-6 py-3">
                            <input type="checkbox" class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 w-4 h-4 focus:ring-2">
                        </td>
                    </tr>

                </tbody>

            </table>
        </div>

        <!-- withdraw -->
        <div class="relative overflow-x-auto ml-[10%] mt-7 hidden max-[600px]:ml-2 max-[600px]:px-2" id="withdraw">
            <table class="w-[90%] text-sm text-left text-gray-700 text-center">
                <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
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
                
                <tbody>
                    <tr v-for="val, i in 5" :key="i" class="border border-gray-600 bg-white">
                        <td class="px-6 py-3">
                            11023
                        </td>
                        <td class="px-6 py-3 text-red-500">
                            10000
                        </td>
                        <td class="px-6 py-3">
                            Madara
                        </td>
                        <td class="px-6 py-3">
                            1012124124121241
                        </td>
                        <td class="px-6 py-3">
                            madara uchiha
                        </td>
                        <td class="px-6 py-3">
                            <input type="checkbox" class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 w-4 h-4 focus:ring-2">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- post -->
        <div class="relative overflow-x-auto ml-[10%] mt-7 hidden max-[600px]:ml-2 max-[600px]:px-2" id="post">
            <table class="w-[90%] text-sm text-left text-gray-800 text-center">
                <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Informer
                        </th>
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

                <tbody>
                    <tr v-for="val, i in 5" :key="i" class="border border-gray-600 bg-white">
                        <td class="px-6 py-3">
                            100034
                        </td>
                        <td class="px-6 py-3">
                            101101
                        </td>
                        <td class="px-6 py-3">
                            109
                        </td>
                        <td class="px-6 py-3">
                            18+,chest,...
                        </td>
                        <td class="px-6 py-3">
                            <input type="checkbox" class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 w-4 h-4 focus:ring-2">
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>

        <!-- account -->
        <div class="relative overflow-x-auto ml-[10%] mt-7 hidden max-[600px]:ml-2 max-[600px]:px-2" id="account">
            <table class="w-[90%] text-sm text-left text-gray-800 text-center">
                <thead class="text-sm text-gray-200 uppercase bg-gradient-to-br from-rose-800 via-slate-800 to-gray-900">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" class="px-6 py-3">
                            nice Coin
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Edit
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="val, i in 5" :key="i" class="border border-gray-600 bg-white">
                        <td class="px-6 py-3">
                            100324
                        </td>
                        <td class="px-6 py-3">
                            madara123t
                        </td>
                        <td class="px-6 py-3">
                            10020
                        </td>
                        <td class="px-6 py-3">
                            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" 
                            data-te-toggle="modal" 
                            data-te-target="#exampleModal"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- modal -->
        <div
            data-te-modal-init
            class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div
                data-te-modal-dialog-ref
                class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                <div
                class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                    <h5
                    class="text-xl font-medium leading-normal text-neutral-800"
                    id="exampleModalLabel">
                    USER
                    </h5>
                    <button
                    type="button"
                    class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-te-modal-dismiss
                    aria-label="Close">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div class="relative flex-auto p-4" data-te-modal-body-ref>
                    
                    <div>
                        <form action="">

                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">First name</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John">
                                </div>
                                <div>
                                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe">
                                </div>
                            </div>

                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Nice coin</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe">

                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe">
                        
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Tel</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe">
                        </form>
                    </div>
                </div>
                <div
                    class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                    <button
                    type="button"
                    class="inline-block rounded bg-gray-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-gary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    data-te-modal-dismiss
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Close
                    </button>
                    <button
                    type="button"
                    class="ml-1 inline-block rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Save changes
                    </button>
                </div>
                </div>
            </div>
        </div>


    </div>



    </div>
</template>

<script>
import NavUser from '@/components/NavUser.vue';
import NavAdmin from '@/components/NavAdmin.vue';
import gsap from 'gsap';
export default {
    name: "Admin",
    components:{
        NavUser,
        NavAdmin
    },
    data(){
        return{
            madara:''
        }
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
            // console.log(this.madara);
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
    },
    mounted(){
      let tl = gsap.timeline()
      tl.from('#group', {y:-100,duration:0.5,autoAlpha:0})
      .from('#deposit', {x:100,duration:1.5,autoAlpha:0})
      .from('#withdraw', {x:-100,duration:0.5,autoAlpha:0})
      .from('#post', {x:-100,duration:0.5,autoAlpha:0})
      .from('#account', {x:-100,duration:0.5,autoAlpha:0})
      
    }
}
</script>

<style>

</style>