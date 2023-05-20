<template>
  <div>
    <div class="w-full h-full">
      <!-- profile -->
      <div :class="myClassColor">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
          class="rounded-full"
          style="width: 6vh; height: 6vh"
          alt="Avatar"
        />
        <h1 class="text-white ml-2 text-[2vh]">
          {{ user.first_name }} {{ user.last_name }}
        </h1>
      </div>

      <!-- body -->
      <div class="flex justify-center">
        <div
          class="flex flex-col rounded-b bg-white shadow-lg md:flex-row w-full"
        >
          <div class="flex flex-col justify-start w-full">
            <!-- carousel https://source.unsplash.com/800x600/?boat -->
            <div class="carousel-container">
              <div
                class="carousel-track w-[700px] h-[400px]"
                :style="trackStyles"
              >
                <div
                  class="carousel-slide w-[700px] h-[400px]"
                  :style="slideStyles"
                >
                  <img :src="image[currentIndex]" class="w-[100%] h-[400px]" />
                </div>
              </div>
              <div class="carousel-controls">
                <button
                  class="carousel-control"
                  @click="prevSlide"
                  :disabled="currentIndex === 0"
                >
                  &lt;
                </button>
                <button
                  class="carousel-control"
                  @click="nextSlide"
                  :disabled="currentIndex === image.length - 1"
                >
                  &gt;
                </button>
              </div>
            </div>

            <!-- content -->
            <div class="p-3">
              {{ myObject.info }}
              <div class="flex">
                <p class="text-[1.5vh]">
                  created {{ myObject.CreateAt.substring(0, 10) }} :
                </p>
                <p class="text-[1.5vh]">
                  {{ myObject.CreateAt.substring(11, 16) }}
                </p>
              </div>
            </div>

            <div class="flex pt-2 p-3 bg-whtie">
              <!-- like -->
              <img
                @click="clickLike"
                src="../image/heart-regular.svg"
                alt=""
                :class="[like == 1 ? 'w-[5%] mx-2' : 'w-[5%] mx-2 hidden']"
              />

              <img
                @click="clickLike"
                src="../image/heart-solid.svg"
                alt=""
                :class="[like == -1 ? 'w-[5%] mx-2' : 'w-[5%] mx-2 hidden']"
              />

              <img
                src="../image/comment-regular.svg"
                @click="openCommentModal"
                class="w-[5%] mx-2': 'w-[5%] mx-2"
              />

              <!-- comment -->
              <div
                class="fixed inset-0 flex items-center left-[14%] justify-center z-50 w-[72%]"
                v-if="isCommentModalOpen"
              >
                <div
                  class="bg-white rounded-lg shadow-lg h-[60%] overflow-y-scroll"
                >
                  <!-- แสดงความคิดเห็น -->
                  <div class="bg-gray-700 p-5 rounded">
                    <h2 class="text-lg font-semibold mb-2 text-white">
                      Comment
                    </h2>
                  </div>
                  <div class="rounded mx-3">
                    <div
                      v-for="(comment, index) in comment"
                      :key="index"
                      class="mt-2 rounded px-2"
                    >
                      <div class="p-2 bg-red-500 rounded-t-lg">
                        <h1
                          class="ml-2 text-white flex text-lg"
                          @load="checkProfile(comment.user_id)"
                        >
                          {{ comment.User.first_name }}&nbsp;
                          {{ comment.User.last_name }}
                        </h1>
                        <p class="text-[10px] text-white m-3">Created : {{ comment.createAt }}</p>
                      </div>

                      <div class="bg-gray-200 rounded-b-lg p-2">
                        <h1>{{ comment.info }}</h1>
                      </div>
                    </div>
                  </div>

                  <!-- ฟอร์มเขียนความคิดเห็น -->
                  <form @submit.prevent="submitComment" class="mt-2 mx-2">
                    <textarea
                      v-model="newComment"
                      class="w-full h-20 border border-gray-300 rounded p-2 mb-2"
                      placeholder="เขียนความคิดเห็น"
                    ></textarea>
                    <button
                      class="bg-red-500 text-white px-4 py-2 rounded"
                      type="submit"
                    >
                      send comment
                    </button>
                    <button
                      class="bg-black text-white px-10 py-2 rounded ml-2"
                      @click="openCommentModal"
                    >
                      close
                    </button>
                  </form>
                </div>
              </div>

              <!-- report -->
                <img
                  src="../image/triangle-exclamation-solid.svg" class="w-[5%] mx-2"
                  @click="swReport"
                />
           
              <!-- modal report -->
              <div
                class="fixed inset-0 flex items-center left-[14%] justify-center z-50 w-[72%]"
                v-if="swReported">
                <div
                  class="bg-white rounded-lg shadow-lg p-4 h-[45%] w-[50%] overflow-y-scroll"
                >

                  <div class="flex text-3xl content-center justify-center mt-3 w-full">
                    <h1 class="">Nice</h1>
                    <h1 class="text-red-600">Try</h1>
                  </div>

                  <div class="text-3xl content-center justify-center mt-3 w-full flex mb-3">
                    <span class="flex">Report to &nbsp;<p class="text-red-500"> {{ user.first_name }}</p></span>
                  </div>
                  <hr>

                  <div class="m-auto w-full px-16">
                  <div class="flex items-center mb-4 m-auto w-full mt-2">
                          <input
                            id="default-checkbox"
                            v-model="reported1"
                            type="checkbox"
                            value="Picture is 18+"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            for="default-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900"
                            >Picture is 18+</label
                          >
                        </div>

                        <div class="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            v-model="reported2"
                            value="Chest , virus"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            for="default-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900"
                            >Chest , virus</label
                          >
                        </div>

                        <div class="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            v-model="reported3"
                            value="casino, bacara"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            for="default-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900"
                            >casino, bacara</label
                          >
                        </div>

                        <div class="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            v-model="reported4"
                            value="wrong rule"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            for="default-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900"
                            >wrong rule</label
                          >
                        </div>
                  </div>

                  <!-- from donate -->
                  <form @submit.prevent="submitReport" class="mt-2 w-full px-20">
                      <hr>
                    <div class="w-full m-auto mx-14 mt-3">
                      <button
                      class="bg-red-500 text-white px-4 py-2 rounded"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                    <button
                      class="bg-black text-white px-10 py-2 rounded ml-2"
                      @click="swReport"
                    >
                      close
                    </button>
                    </div>
                    
                  </form>
                </div>
              </div>


              <!-- donate -->
                <img src="../image/circle-dollar-to-slot-solid.svg" @click="swDonate" class="w-[5%] mx-2"  alt="" />
             

              <!-- modal donate -->
              <div
                class="fixed inset-0 flex items-center left-[14%] justify-center z-50 w-[72%]"
                v-if="swDonated">
                <div
                  class="bg-white rounded-lg shadow-lg p-4 h-[45%] w-[50%] overflow-y-scroll"
                >
                 
                  <div class="bg-gray-700 p-5 rounded">
                    <h2 class="text-lg font-semibold mb-2 text-white text-center">
                      Donate
                    </h2>
                  </div>

                  <div class="flex text-3xl content-center justify-center mt-3 w-full">
                    <h1 class="">Nice</h1>
                    <h1 class="text-red-600">Try</h1>
                  </div>

                  <div class="text-3xl content-center justify-center mt-3 w-full flex">
                    <span class="flex">Donate to &nbsp;<p class="text-red-500"> {{ user.first_name }}</p></span>
                  </div>
                  
                  

                  <!-- from donate -->
                  <form @submit.prevent="submitDonate" class="mt-2 w-full px-20">
                    <div class="relative mb-4 flex flex-wrap items-stretch mt-5 mb-10">
                        <span
                          class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700"
                          >$</span
                        >
                        <input
                          type="number" v-model="donated"
                          class="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                           />
                      </div>
                      <hr>
                    <div class="w-full m-auto mx-14 mt-3">
                      <button
                      class="bg-red-500 text-white px-4 py-2 rounded"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                    <button
                      class="bg-black text-white px-10 py-2 rounded ml-2"
                      @click="swDonate"
                    >
                      close
                    </button>
                    </div>
                    
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tsThisType } from "@babel/types";
import axios from "axios";

import { useFetchStore } from "../store/index";
import { storeToRefs } from "pinia";

export default {
  name: "CardPost",
  setup() {
    const apiStore = useFetchStore();
    const { data } = storeToRefs(apiStore);
    async function fetchData() {
      await apiStore.fetchData();
    }

    return {
      fetchData,
      me: data,
    };
  },
  computed: {},
  components: {},
  props: {
    myObject: {
      type: Object,
    },
    myId: {
      type: String,
    },
  },

  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      user: "",
      image: [],
      checklike: "",
      like: 1,
      isCommentModalOpen: false,
      myClassColor: "flex items-center p-2 rounded-t-xl w-full bg-black",
      currentIndex: 0,
      comment: [],
      newComment: "",
      reported1: "",
      reported2: "",
      reported3: "",
      reported4: "",
      reported5: "",
      donated: 0,
      swDonated:false,
      swReported:false
    };
  },
  methods: {
    swReport(){
      if(this.swReported == true){
        this.swReported = false
      }else{
        this.swReported = true

      }
    },
    swDonate(){
      if(this.swDonated == true){
        this.swDonated = false
      }else{
        this.swDonated = true

      }
    },
    async submitDonate() {
      this.swDonated = false
      const donatee = await axios.post(
        `http://localhost:5000/api/donate/create/${this.myObject.id}/${this.me.id}`,
        {
          amount: this.donated,
        }
      );
      const getOwner = await axios.get(`http://localhost:5000/api/users/user/${this.me.id}`)

      const ans = getOwner.data.coin - this.donated
      const delmoney = await axios.put(`http://localhost:5000/api/users/updatemoney/${this.me.id}`,{
        coin: ans
      })
      const getCoustomer = await axios.get(`http://localhost:5000/api/users/user/${this.myObject.user_id}`)
      const ans2 = getCoustomer.data.coin + this.donated
      const delmoney2 = await axios.put(`http://localhost:5000/api/users/updatemoney/${this.myObject.user_id}`,{
        coin: ans2
      })
      this.fetchData()
      this.$router.go(0)
    },
    async submitReport() {
      const strings = [];
      strings.push(this.reported1);
      strings.push(this.reported2);
      strings.push(this.reported3);
      strings.push(this.reported4);
      strings.push(this.reported5);
      const report = [
        "Picture is 18+",
        "Chest , virus",
        "casino, bacara",
        "wrong rule",
        "spam",
      ];

      for (let i = 0; i < strings.length; i++) {
        if (strings[i] == true) {
          strings[i] = report[i];
        } else {
          strings[i] = "";
        }
      }

      const reportCreate = await axios.post(
        `http://localhost:5000/api/reports/create/${this.myObject.id}/${this.myId}`,
        {
          reson: String(strings),
        }
      );
        this.swReported = false
        this.reported1 = ""
        this.reported2 = ""
        this.reported3 = ""
        this.reported4 = ""
        this.reported5 = ""
    },
    openCommentModal() {
      if (this.isCommentModalOpen == true) {
        this.isCommentModalOpen = false;
      } else {
        this.isCommentModalOpen = true;
      }
    },
    async submitComment() {
      const createlike = await axios.post(
        `http://localhost:5000/api/comments/create/${this.myObject.id}/${this.myId}`,
        {
          info: this.newComment,
        }
      );
      this.fetchComment();
      this.newComment = "";
    },
    async clickLike() {
      this.like *= -1;
      if (this.like == 1) {
        const createlike = await axios.post(
          `http://localhost:5000/api/likes/create/${this.myObject.id}/${this.me.id}`,
          {
            state: false,
          }
        );
        const dislike = await axios.put(
          `http://localhost:5000/api/posts/dislike/${this.myObject.id}`
        );
      } else {
        const createlike = await axios.post(
          `http://localhost:5000/api/likes/create/${this.myObject.id}/${this.me.id}`,
          {
            state: true,
          }
        );
        const addLike = await axios.put(
          `http://localhost:5000/api/posts/addlike/${this.myObject.id}`
        );
      }
    },

    async fetchLike() {
      try {
        const fetchlike = await axios.get(
          `http://localhost:5000/api/likes/getlike/${this.myObject.id}`,
          {
            user_id: this.myId.id,
          }
        );
        const data = fetchlike.data;
        if (data.length != 0) {
          this.checklike = data[0].state;
          if (this.checklike) {
            this.like = -1;
          } else {
            this.like = 1;
          }
        } else {
          const createlike = await axios.post(
            `http://localhost:5000/api/likes/create/${this.myObject.id}/${this.me.id}`
          );
          const ans = createlike.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    checkLavel() {
      if (this.myObject.like > 100) {
        this.myClassColor =
          "flex items-center p-2 rounded-t-xl w-full bg-gray-600";
      }
      if (this.myObject.like > 500) {
        this.myClassColor =
          "flex items-center p-2 rounded-t-xl w-full bg-green-600";
      }
      if (this.myObject.like > 1000) {
        this.myClassColor =
          "flex items-center p-2 rounded-t-xl w-full bg-blue-600";
      }
      if (this.myObject.like > 5000) {
        this.myClassColor =
          "flex items-center p-2 rounded-t-xl w-full bg-red-600";
      }
      if (this.myObject.like > 10000) {
        this.myClassColor =
          "flex items-center p-2 rounded-t-xl w-full bg-yellow-600";
      }
    },

    nextSlide() {
      if (this.currentIndex < this.image.length - 1) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    async fetchName() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/user/${this.myId}`
        );
        const data = response.data;
        this.user = data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchImage() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/images/getpostimage/${this.myObject.id}`
        );
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
          this.image[i] = data[i].filePath;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchComment() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/checkcomment/${this.myObject.id}`
        );
        const data = response.data;
        this.comment = [...data];
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchName();
    this.checkLavel();
    this.fetchImage();
    this.fetchLike();
    this.fetchComment();
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  flex-shrink: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.carousel-control {
  font-size: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 1rem;
  outline: none;
}
</style>