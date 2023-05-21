<template>
  <nav
    class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-4 lg:flex-wrap lg:justify-start">
    <div class="flex w-full flex-wrap items-center justify-between px-6">
      <!-- phone -->
     
      <button
        class="block border-0 bg-transparent py-2 px-2.5 text-red-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden cursor-pointer"
        type="button" @click="this.$router.push('/main')">
        <span class="w-7 flex">
          <h1 class="text-black" style="font-size:2vh">NICE</h1>
          <h1 class="text-red-500" style="font-size:2vh">TRY</h1>
        </span>
      </button>

      <!-- desktop -->
      <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto cursor-pointer">
        <a class="mt-2 mr-2 flex items-center hover:text-neutral-900 focus:text-black lg:mt-0"
         @click="this.$router.push('/main')">
          <h1 class="text-[#1F2937] pl-3" style="font-size: 3vh">NICE</h1>
          <h1 class="text-red-500" style="font-size: 3vh">TRY</h1>
        </a>
      </div>

      <!-- bell -->
      <div class="relative flex items-center">
        
        <button class="max-[600px]:w-[16%] w-[7%] mr-3" data-te-toggle="modal" @click="sumReport" data-te-target="#aleart" data-te-ripple-init data-te-ripple-color="light">
              <img src="../image/bell-regular.svg" class="w-5 h-[7%]">
        </button>

        <!-- modal aleart -->
        <div data-te-modal-init class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="aleart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            
            <div data-te-modal-dialog-ref class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
              <div class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                  <h5 class="text-xl font-medium leading-normal text-neutral-800 " id="exampleModalLabel">
                    aleart
                  </h5>

                  <button type="button" class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss
                    aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <!-- content -->
                <div class="relative flex-auto p-4 h-96 overflow-y-auto" data-te-modal-body-ref>
                  <div class="w-full bg-red-500 flex items-center text-white rounded-[2px] border-b-2 p-5 border-black" v-for="val,i in reportRemove" :key="i" >
                    <h1 v-if="reportRemove.length != 0" class="mt-2 break-words">{{ reportRemove.message }}</h1>
                  </div>
                  <div class="w-full bg-red-500 flex items-center text-white rounded-[2px] border-b-2 p-5 border-black" v-for="val,i in reportAll" :key="i">
                    <h1 class="mt-2 break-words">เติมเงินจำนวน {{ val.amount }} ราคา {{ val.topup_package }} สำเร็จ</h1>
                  </div>

                </div>

                <!-- footer -->
                <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                  <button type="button" class="inline-block rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-600 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>


      <!-- upload -->
      <div class="relative flex items-center">

          <button class="w-16 text-black text-[2vh] mr-5 max-[600px]:mr-1" data-te-toggle="modal" data-te-target="#uploadPost" data-te-ripple-init data-te-ripple-color="light">
              Upload
          </button>
        

         <!-- modal post -->
          <div data-te-modal-init class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="uploadPost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            
            <div data-te-modal-dialog-ref class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
              <div class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                  <h5 class="text-xl font-medium leading-normal text-neutral-800 " id="exampleModalLabel">
                    Post your content
                  </h5>

                  <button type="button" class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss
                    aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <!-- content -->
                <div class="relative flex-auto p-4" data-te-modal-body-ref>
                  
                  <div class="grid grid-cols-2 gap-4 px-5">

                    <div>
                      <img :src="!picture[0] ? 'data:image/png;base64,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' : picture[0]" alt="">
                      <img :src="!picture[1] ? 'data:image/png;base64,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' : picture[1]" class="mt-2">
                    </div>
                    <img  class="h-full" :src="!picture[2] ? 'data:image/png;base64,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' : picture[2]" alt="">
                  </div>

                  <!-- input content -->
                
                  <div class="p-5">
                    
                    <form @submit.prevent="onUpload">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Write your content</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your content here..." v-model="info" ></textarea>

                    <!-- file -->
                    <label class="block mb-2 text-sm font-medium text-gray-900 mt-5" for="file_input">Upload file</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="file_input" type="file" @change="previewImage" accept="image/*" multiple >
                    <p class="mt-1 text-[10%] text-gray-500" id="file_input_help">SVG, PNG, JPG.</p>
                    <button type="sumbit" class="inline-block rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-600 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                      Post
                  </button>
                  </form>
                  </div>

                </div>

              </div>
            </div>
          </div>


      <!-- credit  -->
      <div class="relative flex items-center">
        <a class="max-[600px]:hidden mr-4 text-neutral-500 hover:text-red-500 focus:text-neutral-700 disabled:text-black/30 [&.active]:text-black/90"
          href="#">

          <!-- btn credit -->
          <span class="w-5">
            <button type="button" @click="swTopup"
              class="inline-block w-32 truncate rounded bg-[#F9FAFB] px-6 pt-2.5 pb-2 text-[2vh] font-medium uppercase leading-normal text-[#1F2937] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#9FA6B2] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#9FA6B2] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
           {{ me.coin }} nice
            </button>
          </span>
        </a>
        
        <!-- modal -->
        <div
                class="fixed inset-0 flex items-center left-[14%] justify-center z-50 w-[72%]"
                v-if="swTopuped">
                <div
                  class="bg-white rounded-lg shadow-lg p-4 h-[60%] w-[60%] overflow-y-scroll"
                >

                  <div class="flex text-3xl content-center justify-center mt-3 w-full mb-3">
                    <h1 class="">Nice</h1>
                    <h1 class="text-red-600">Try</h1>
                  </div>

                  
                  <hr>

                
                <div class="grid grid-cols-2 gap-4 px-5 mt-5" v-for="val,i in niceTopup" :key="i">
                  <h1> {{val.nice}} Nice</h1>
                  <button type="submit" @click="setPromotion(val)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2">{{val.price}} Baht</button>
                </div>


              <hr>

              <div class="w-full mt-2">
                <button class="bg-black text-white px-10 py-2 rounded ml-[75%] m-auto" @click="swTopup">Close</button>
              </div>

                </div>
              </div>


        <div class="relative z-40">

            <!-- profile Desktop -->
            <div class="">
              <img src="https://source.unsplash.com/800x600/?nature" class="rounded-full w-14 h-14" id="profile">
              <ul class="absolute list-none w-[20em] bg-gradient-to-br from-black via-gray-800 to-rose-800 top-[100%] invisible right-0 rounded p-5 text-white" id="menu">
                <li class="text-l p-3" id="menu-items"></li>
                <li class="cursor-pointer rounded p-3 hover:bg-red-500 pb-2" id="menu-items"><a href="/profile"><p class="text-2xl">Proflie</p></a></li>
                <li class="text-l cursor-pointer rounded pl-3 p-1" id="menu-items" data-te-toggle="modal" data-te-target="#topup" data-te-ripple-init data-te-ripple-color="light"><a href="/withdraw"><span class="text-l">{{me.coin}} nice.</span></a></li>
                <li class="text-2xl cursor-pointer rounded p-3 hover:bg-red-500" id="menu-items"><a href="/deposit">History</a></li>
                <li class="text-2xl cursor-pointer rounded p-3 bg-red-400 hover:bg-red-800" id="menu-items" @click="Logout" ><a href="/login" @click="Logout" >Log out</a></li>
              </ul>
            </div>


        </div>
      </div>
    </div>
    </div>
    </div>
  </nav>

<!-- black line -->
  <div class="w-full flex justify-center">
    <div class="bg-black" style="width: 80%; background-color: black; height: 2px"></div>
  </div>

</template>

<script>
import axios from 'axios';

import { useFetchStore } from "../store/index";
import { storeToRefs } from "pinia";


import gsap from 'gsap';
import promotion from '../data/topupPackage.json'
import {ref as storageRef,uploadBytes,} from "firebase/storage";
import { useFirebaseStorage } from "vuefire";

export default {
  setup() {
    const storage = useFirebaseStorage();
    const apiStore = useFetchStore();
    const { data } = storeToRefs(apiStore);
    async function fetchData() {
      await apiStore.fetchData();
    }
    async function Logout(){
      await apiStore.Logout()
    }

    return {
      fetchData,
      me: data,
      Logout,
      storage
    };
  },
 name: 'NavUser',
 data(){
  return{
    toggleMoblie: -1,
    nice: 640000000000,
    niceTopup:promotion,
    imageData: [],
      picture: [],
      info:'',
      reportAll:[],
      reportRemove:[],
      swTopuped:false,
  }
 },

 methods:{
  swTopup(){

    if(this.swTopuped == true){
        this.swTopuped = false
      }else{
        this.swTopuped = true

      }
  },
  setPromotion(val){
    localStorage.setItem('pro', JSON.stringify(val))
    this.$router.push('/topup')
  },
  sumReport(){
    this.fetchTopup()
    this.fetchReport()
  },
  async fetchTopup(){
    const topup = await axios.get(`http://localhost:5000/api/topups/checktopup/${this.me.id}`)
    const data = topup.data
    console.log(data);
    this.reportAll = [...data]
  },
  async fetchReport(){
    const report = await axios.get(`http://localhost:5000/api/reports/reported/${this.me.id}`)
    this.reportRemove = report.data
    console.log(this.reportRemove);
  },
  previewImage(event) {
    for(let i=0;i<3;i++){
      this.picture[i] = URL.createObjectURL(event.target.files[i])
        this.imageData[i] = event.target.files[i]
        console.log(this.imageData[i])
        console.log(this.picture[i]);
      }
      
      
    },
    async onUpload() {
      try {
        const response = await axios.post(`http://localhost:5000/api/posts/create`,
        {
          user_id: this.me.id,
          info:this.info,
          like: 0
        })
        for(let i=0;i<3;i++){
        const datexx = new Date().getTime().toString() + ".jpg"
        const imageDB = await axios.post(`http://localhost:5000/api/images/createpost`,{
          post_id: response.data.id,
          filePath: `https://firebasestorage.googleapis.com/v0/b/nicetry-webpro.appspot.com/o/${datexx}?alt=media`
        })
        console.log(imageDB);
        const starsRef = storageRef(this.storage, `${datexx}`)
        await uploadBytes(starsRef, this.imageData[i])
        }
        this.$router.go(0)


        
      } catch (err) {
        alert(err)
      }
    },
 },
 created(){
 },
 mounted(){
  this.fetchTopup()
  this.fetchReport()
    let menuOpen = false;

    //create timeline
    let tl = gsap.timeline({
      paused:true,
      defaults: { duration: 0.3, ease: "power1.inOut" }});

    // use timeline
    tl.fromTo(
        "#menu",
        { visibility: "hidden" },
        { visibility: "visible" },
        0
      ).fromTo("#menu-items",
    { opacity: 0, y: "0.5em", stagger: 0.1 },
    { opacity: 1, y: "0em", stagger: 0.1 }
    );
    
    // add Event profile image (click)
    
    document.querySelector("#profile").addEventListener("click", () => {
      if (!menuOpen) {
        tl.play();
        menuOpen = true;
      } else {
        tl.reverse();
        menuOpen = false;
      }
    });
 }
}
</script>

<style>

</style>