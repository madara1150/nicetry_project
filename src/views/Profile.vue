<template>
  <div
    class="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] min-h-screen from-gray-800 via-gray-900 to-rose-900 w-full h-full"
  >
    <NavUser />

    <!-- profile -->
    <div class="max-[600px]:flex-col">
      <div
        class="flex ml-[10%] mt-5 max-[600px]:flex-col max-[600px]:justify-center max-[600px]:ml-0 max-[600px]:"
        id="img"
      >
        <img
          src="https://source.unsplash.com/800x600/?nature"
          alt=""
          class="max-[600px]:m-auto shadow-sm shadow-white/50 rounded-full h-36 w-36"
        />
        <div
          class="p-5 max-[600px]:p-3 max-[600px]:text-center w-[50%] max-[600px]:w-full"
        >
          <h1 class="text-3xl text-white">{{ me.username }}</h1>
          <h1 class="text-sm mt-3 text-white">
            {{ me.first_name }} {{ me.last_name }}
          </h1>
          <h1 class="text-sm mt-3 text-white">{{ me.info }}</h1>
        </div>

        <div class="w-[50%] max-[600px]:w-full max-[600px]:justify-center">
          <button
            type="button"
            data-te-toggle="modal"
            data-te-target="#editprofile"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="max-[600px]:w-1/2 max-[600px]:ml-[50%] max-[600px]:mt-2 max-[600px]: max-[600px]:h-[10%] max-[600px]:w-[40%] max-[600px]:text-xs inline-block rounded bg-white mt-[8%] ml-[48%] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <!-- modal -->
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editprofile"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div
            class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none"
          >
            <div
              class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4"
            >
              <h5
                class="text-xl font-medium leading-normal text-neutral-800"
                id="exampleModalLabel"
              >
                USER
              </h5>
              <button
                type="button"
                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="relative flex-auto p-4" data-te-modal-body-ref>
              <div>
                <form @submit.prevent="onUpload" >
                  <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900"
                        >First name</label
                      >
                      <input
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Change name"
                      />
                    </div>
                    <div>
                      <label
                        for="last_name"
                        class="block mb-2 text-sm font-medium text-gray-900"
                        >Last name</label
                      >
                      <input

                        v-model="last_name"
                        type="text"
                        id="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Change Lastname"
                      />
                    </div>
                  </div>

                  <label
                    
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Password</label
                  >
                  <input
                    v-model="password"
                    type="password"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Change your password"
                  />
                  

                  <label
                    
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Email</label
                  >
                  <input

                    v-model="email"
                    type="email"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Change your email"
                  />

                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Tel</label
                  >
                  <input
                    v-model="phone_number"
                    type="text"
                    id="last_name"

                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Change phone number"
                  />
                  <button
                type="submit"
                class="ml-1 inline-block mt-5 rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Save changes
              </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <hr class="h-0.5 my-8 w-[80%] bg-white border-0" />
    </div>

    <div class="">

      <div
        class="w-[70%] mx-auto max-[600px]:w-[100%] bg-gray-200 rounded min-h-screen"
      >
        <div class="pt-96" v-if="swPost">
          <h1 class="text-4xl text-black text-center">ไม่มีโพสต์</h1>
        </div>
        <div
          class="flex justify-center max-[600px]:p-5"
          v-for="i in post"
          :key="i"
        >
          <div
            class="flex justify-center content-center mt-10 max-[600px]:flex-col mb-5"
          >
            <CardPost
              v-if="me.id"
              class="w-[50%] mr-10 max-[600px]:w-full"
              :color="''"
              id="post"
              :my-object="i"
              :myId="me.id"
            />
            <TopDonate
              class="w-[35%] h-[40%] mt-5 max-[600px]:w-full"
              :my-object="i"
              id="top"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavUser from "@/components/NavUser.vue";
import CardPost from "@/components/CardPost.vue";
import TopDonate from "@/components/TopDonate.vue";
import axios from "axios";
import {
  ref as storageRef,

  uploadBytes,
} from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
import { useFetchStore } from "../store/index";
import { storeToRefs } from "pinia";
import gsap from "gsap";
export default {
  name: "Profile",
  components: {
    NavUser,
    CardPost,
    TopDonate,
  },
  setup() {
    const storage = useFirebaseStorage();
    const apiStore = useFetchStore();
    const { data } = storeToRefs(apiStore);
    async function fetchData() {
      await apiStore.fetchData();
    }

    return {
      me: data,
      fetchData,
      storage
    };
  },
  mounted() {
    const token = localStorage.getItem('token')
       if(!token){
        this.$router.push('/login')
       }
    this.fetchPost();
    let tl = gsap.timeline();
    tl.from("#img", { y: -100, duration: 0.5, autoAlpha: 1 });
  },
  methods: {
    async fetchImageUser(){
      const image = await axios.get(`http://localhost:5000/api/images/getuserimage/${this.myObject.user_id}`)
      const data = image.data



    },
    async onUpload() {
      try {

        const update = await axios.put(`http://localhost:5000/api/users/update`,{
          id: this.me.id,
          phone_number:this.phone_number,
          email:this.email,
          first_name:this.first_name,
          last_name:this.last_name,
          password : this.password

        })
        this.$router.go(0)
      } catch (err) {
        alert(err.response.data.message)
      }
    },
    async fetchPost() {
      await this.fetchData();
      try {
        const response = await axios.get(
          `http://localhost:5000/api/posts/postUserId/${this.me.id}`
        );
        const data = response.data;
        this.post = data;
        if(this.post.length){
          this.swPost = false
        }
        else{
          this.swPost = true
        }
      } catch (error) {
        console.error(error);
      }
    },
  },

  created() {
    this.fetchImageUser()
  },
  data() {
    return {
      myData: {
        name: "John",
        age: 25,
        imageData:'',
        picture:'',
        phone_number:'',
        email:'',
        first_name:'',
        last_name:'',
      },
      profile:'',
      post: [],
      swPost:false,
    };
  },
};
</script>

<style>
</style>