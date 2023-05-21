
<template>
  <div
    class="min-h-screen max-[600px]:min-h-max bg-[length:100%_100%]"
    style="
      background-image: url(https://cdn.discordapp.com/attachments/911172780781891614/1090455311028060170/pngwing.com.png);
    "
  >
    <NavUser />

    <div>
      <h1
        class="text-[3vh] text-center mt-5 max-[600px]:hidden"
        @click="clearSelect()"
      >
        Please select the payment bank
      </h1>
    </div>

    <div class="flex justify-center mt-5 max-[600px]:mt-1">
      <!-- overflow banks -->
      <div
        class="w-[80%] p-2 bg-gradient-to-br from-black via-gray-800 to-rose-800 overflow-x-scroll rounded max-[600px]:hidden"
        id="banks"
      >
        <div class="flex w-[120%]">
          <a
            v-for="(val, i) in bank"
            class="p-2 px-4 bg-white hover:bg-[#B8B0B0]"
            :key="i"
            :id="i"
            @click="CheckOutput(val.nice_name, i)"
          >
            <img
              :src="require('../image/th/' + val.img)"
              class="h-24 w-[100px] rounded-full"
              href="madara"
            />
            <div class="w-[100px]"></div>
          </a>
        </div>
      </div>
    </div>

    <div
      class="flex justify-center mt-20 text-white max-[600px]:flex-col max-[600px]:mt-5"
      id="qrcode"
    >
      <!-- qrcode -->
      <div
        class="w-[25%] max-[600px]:w-[75%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-800 via-rose-800 to-black mx-10 rounded"
      >
        <h1 class="text-center p-5">Payment Receipt</h1>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-200 border-0 rounded" />
        <div class="flex justify-center p-2">
          <img src="https://cdn.discordapp.com/attachments/1030819283787333652/1109704077446742157/IMG_2974.jpg" class="w-[200px] h-[200px]" />
        </div>
        <h1 class="text-center text-[1vh]">NiceTry Company.co.th</h1>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-200 border-0 rounded" />

        <div class="flex justify-center p-5">
          <span class="pr-[12vh]">{{ pro.nice}} nice</span>
          <span>{{ pro.price }} Baht</span>
        </div>
      </div>

      <!-- ------ -->

      <form
        @submit.prevent="onUpload"
        class="w-[30%] max-[600px]:w-[75%] max-[600px]:mt-5 max-[600px]:ml-[10%] p-5 rounded"
      >
        <!-- bank -->
        <div class="contrast-50 max-[600px]:hidden">
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Bank"
            disabled
            :value="selectBank"
            

          />
        </div>

        <select v-model="bank_topup"
          name=""
          id=""
          class="min-[600px]:hidden bg-gray-600 text-white p-2 rounded w-full"
        >
          <option value="">Please Select Bank ...</option>
          <option :value="val.nice_name" v-for="(val, i) in bank" :key="i">
            {{ val.nice_name }}
          </option>
        </select>

        <!-- Account name -->
        <div class="mt-5">
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Account Name" 
          />
        </div>

        <!-- account num -->
        <div class="mt-5">
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Account Number" v-model="bank_num"
          />
        </div>

        <!-- time -->
        <div class="mt-5">
          <!-- date time amount  -->
          <div class="flex">
            <input
              type="date"
              class="bg-gray-50 mr-3 border w-[27%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="date" v-model="time1"
            />
            <input
              type="time"
              class="bg-gray-50 mr-3 border w-[22%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="time" v-model="time2"
            />
            <input
              type="number" :value="pro.nice" disabled
              class="bg-gray-50 border w-[29%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Amount"
            />
          </div>
        </div>

        <!-- input file -->
        <div class="mt-5">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Upload file</label
          >
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            id="file_input"
            type="file"
            @change="previewImage"
            accept="image/*"
          />
        </div>

        <!-- btn submit -->
        <div class="mt-5">
          <button
            type="submit"
            class="text-gray-100 bg-gray-800 border border-gray-300 focus:outline-none hover:bg-gray-500 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-16 py-2.5 mr-2 mb-2 max-[600px]:w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script>
import bank from "../data/banks.json";
import NavUser from "../components/NavUser.vue";
import gsap from "gsap";
import {
  ref as storageRef,

  uploadBytes,
} from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
import axios from 'axios';

import { useFetchStore } from "../store/index";
import { storeToRefs } from "pinia";
export default {
  name: "TopUp",
  setup() {
    const storage = useFirebaseStorage();
    const apiStore = useFetchStore();
    const { data } = storeToRefs(apiStore);
    async function fetchData() {
      await apiStore.fetchData();
    }
    return {storage,me:data,fetchData};
  },
  data() {
    return {
      bank: bank,
      selectBank: "",
      imageData: null,
      picture: null,
      pro:'',
      amount:'',
      bank_topup:'',
      bank_num:'',
      topup_package:'',

    };
  },
  components: {
    NavUser,
  },
  mounted() {

  },
  methods: {
  
    previewImage(event) {
      this.picture = URL.createObjectURL(event.target.files[0])
      this.imageData = event.target.files
    },
    async onUpload() {
      try {
        const datexx = new Date().getTime().toString() + ".jpg"
        const starsRef = storageRef(this.storage, `${datexx}`)
        await uploadBytes(starsRef, this.imageData)

        const commitTopup = await axios.post(`http://localhost:5000/api/topups/create/${this.me.id}`,{
          bank_num: this.bank_num,
          amount: this.pro.nice,
          bank_topup: this.selectBank,
          topup_package: this.pro.price,
          topup_time: this.time1+"T"+this.time2
        })

        const imageDB = await axios.post(`http://localhost:5000/api/images/createtopup`,{
          topup_id: commitTopup.data.id,
          filePath: `https://firebasestorage.googleapis.com/v0/b/nicetry-webpro.appspot.com/o/${datexx}?alt=media`
        })

      } catch (err) {
        alert(err)
      }
    },
    CheckOutput(el, index) {
      this.selectBank = el;
      this.clearSelect();
      document.getElementById(index).style.backgroundColor = "#B8B0B0";
    },
    clearSelect() {
      let arr = Object.keys(bank);
      for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.backgroundColor = "white";
      }
    },
  },
  mounted() {
    let tl = gsap.timeline();
    tl.from("#banks", { y: -100, duration: 1.5, autoAlpha: 0 }).from(
      "#qrcode",
      { x: -100, duration: 0.5, autoAlpha: 0 }
    );

    const storedUser = localStorage.getItem('pro')
    this.pro = JSON.parse(storedUser)
    console.log(this.pro);
    
  },
};
</script>
  
  <style>
</style>