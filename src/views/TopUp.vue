<template>
  <NavUser/>
  <div class="container pt-5 mx-auto bg-[#F5E9CF] px-4 min-h-screen">
    
    <div class="flex">

        <div class="bg-[#E96479] box-border h-14 w-3/5 text-center rounded items-center flex justify-center ">
            <h1 class="text-white text-2xl">Hi! Tanathip Singhanon 1100 Nice</h1>
        </div>
        
        <button class="bg-[#4D455D] box-border h-12 w-28 rounded" style="margin-left: 3%; margin-top: 0.5%;" @click="withdraw *= -1">
            <h1 class="text-white text-lg">withdraw</h1>
        </button>

        <div :class="[withdraw == -1 ? 'hidden': '','w-1/3 h-1/3 left-1/3 top-1/3 fixed bg-[#4D455D]']">
            <div class="w-10 h-10 rounded-full bg-red-600 fixed text-2xl text-center flex items-center justify-center" style="left:65%;top:32%" @click="withdraw *= -1">
                X
            </div>

            <div class="w-5/6 h-5/6 bg-[#E96479] my-7 mx-14 text-center pt-10">
                
                <div :class="[ty == -1 ? '' : 'hidden']">
                    <h1 class="text-white text-3xl">Promtpay</h1>
                    <div class="mt-2">
                        <input type="number" class="w-80 text-2xl rounded">
                     </div>
                
                    <h1 class="text-white mt-5 text-3xl">amount</h1>
                        <div class="mt-2">
                        <input type="number" class="w-80 text-2xl rounded">
                     </div>

                    <button class="w-32 h-12 bg-[#7DB9B6] p-2 m-2 mt-5 rounded text-white" @click="tys()">Apply</button>
                </div>

                <div :class="[ty == -1 ? 'hidden' : '','flex items-center w-full h-3/4 justify-center']">
                    <h1 class="text-4xl text-white"> SUCCESS</h1>
                </div>
               
            </div>

        </div>


    </div>
      <div class="grid grid-cols-2 gap-10">
        <div>
            
            <div class="bg-[#4D455D] box-border h-14 w-100 text-center items-center flex justify-center mt-12 rounded">
                <h1 class="text-white text-2xl">Topup</h1>
            </div>
            
            <div v-for="i in 10">
                
                <div class="bg-[#FFFAFA] box-border h-14 w-100 text-center items-center flex justify-center rounded border-solid border border-black">
                    <h1 class="text-2xl"></h1>
                </div>

            </div>
        </div>
        <div>
            <div class="bg-[#FFFFFF] box-border h-96 mt-12 ml-14 w-5/6 rounded pt-5">
                <div><h1 style="margin-left:5%; " class="text-lg">payment receipt</h1></div>
                <img class="h-40 w-40 mt-3" style="margin-left:35%" src="https://cdn.discordapp.com/attachments/911172780781891614/1080514917263753257/IMG_3587.jpg">
                <h3 style="margin-left:35%" class="mt-2">NiceTry company.co.th</h3>
                <hr class="mt-2">
                <div class="flex">
                    <h1 style="margin-left:10%" class="text-xl mt-3">100 Nice</h1>
                    <h1 style="margin-left:45%;" class="text-xl mt-3">139.00 Baht</h1>
                </div>
                <input style="margin-left:10%" type="file" class="block w-full text-sm text-slate-500 mt-4
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#7DB9B6] file:text-white
                    "/>
            </div>
            <div>
                <button class="bg-[#E96479] box-border h-14 w-60 rounded mt-5 ml-60">
                <h1 class="text-white text-2xl" @click="paymentThank()">Confirm</h1>
            </button>
        </div>

            <div>
                <button class="bg-[#4D455D] box-border h-14 w-3/4 rounded mt-5 ml-20">
                    <h1 class="text-white text-2xl" @click="changeHistory()">History of Nice coin</h1>
                </button>
            </div>
        </div>

        <div :class="[topup == -1 ? 'hidden' : '','w-1/3 h-1/3 left-1/3 top-1/3 fixed bg-[#4D455D]']">
            <div class="w-5/6 h-4/5 bg-[#E96479] my-9 mx-12 text-center pt-20">
                <h1 class="text-white text-6xl">Thank You!</h1>
                <h1 class="text-white mt-5 text-3xl">Success 1000 Nice</h1>
            </div>
        </div>

      </div>
  </div>
</template>

<script>
import NavUser from '@/components/NavUser.vue';
export default {
    Name : 'TopUp',
    components:{
        NavUser
    },
    data(){
        return {
            topup: -1,
            withdraw: -1,
            ty: -1,
        }
    },
    methods:{
        paymentThank(){
            this.topup = 1
            setTimeout(()=>{
                this.topup = -1
                this.$router.push('/history')
            },3000)
        },
        changeHistory(){
            this.$router.push('/history')
        },
        tys(){
            this.ty = 1
            setTimeout(()=>{
                this.ty = -1
                this.withdraw *= -1
                this.$router.push('/history')
                
            },3000)
        }
    }
}
</script>

<style>

</style>