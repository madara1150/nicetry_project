<template>
  <div>
    <div class="w-full h-full">
      <!-- profile -->
      <div :class="[`flex items-center p-2 rounded-t-xl w-full ${colorBar}`]">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
          class="rounded-full"
          style="width: 6vh; height: 6vh;"
          alt="Avatar"
        />
        <h1 class="text-white ml-2 text-[2vh]">MADARA UCHIHA</h1>

       
      </div>

      <!-- body -->
      <div class="flex justify-center">
        <div
          class="flex flex-col rounded-b bg-white shadow-lg md:flex-row w-full"
        >
          <div class="flex flex-col justify-start w-full">
            <!-- carousel https://source.unsplash.com/800x600/?boat -->
            <div class="carousel-container">
              <div class="carousel-track w-[700px] h-[400px]" :style="trackStyles">
                <div class="carousel-slide w-[700px] h-[400px]"  :style="slideStyles" >
                  <img :src="slides[currentIndex].imageSrc" class="w-[100%] h-[400px]">
                </div>
              </div>
              <div class="carousel-controls">
                <button class="carousel-control" @click="prevSlide" :disabled="currentIndex === 0">
                  &lt;
                </button>
                <button class="carousel-control" @click="nextSlide" :disabled="currentIndex === slides.length - 1">
                  &gt;
                </button>
              </div>
              </div>
              
              <!-- content -->
              <div class="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolor rem. Voluptatem veniam hic beatae consequuntur doloremque quas porro ipsum, ut, facilis nesciunt repellat, quaerat veritatis assumenda impedit sequi maxime!
              </div>
            
            <div class="flex pt-2 p-3 bg-whtie">

              <!-- like -->
                <img @click="like *= -1"
                src="../image/heart-regular.svg"
                alt=""
                :class="[like == 1 ? 'w-[5%] mx-2': 'w-[5%] mx-2 hidden']"
               />

              <img @click="like *= -1"
                src="../image/heart-solid.svg"
                alt=""
                :class="[like == -1 ? 'w-[5%] mx-2': 'w-[5%] mx-2 hidden']"
              />

             
              <!-- comment -->
              <button class="w-[5%] mx-2"> <img
                src="../image/comment-regular.svg"
                data-te-toggle="modal" data-te-target="#exampleModalLg" data-te-ripple-init data-te-ripple-color="light"/>
              </button>

              <!-- modal comment -->
              <div
                data-te-modal-init
                class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModalLg"
                tabindex="-1"
                aria-labelledby="exampleModalLgLabel"
                aria-modal="true"
                role="dialog">
                <div
                  data-te-modal-dialog-ref
                  class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] max-[600px]:max-w-[370px]">
                  <div
                    class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                    <div
                      class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                      <h5
                        class="text-xl font-medium leading-normal text-neutral-800"
                        id="exampleModalLgLabel">
                        Comment
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

                    <!-- content -->
                    <div class="relative p-4 bg-white">
                        <div class="overflow-y-scroll h-96">

                          <div class="mt-2" v-for="val, i in 4" :key="i">
                            <div class="flex items-center bg-gradient-to-br from-gray-800 via-gray-800 to-slate-700 rounded p-2">
                              <img src="https://source.unsplash.com/800x600/?nature" alt="" class="rounded-full w-10 h-10">
                              <div>
                                <h1 class="ml-3 text-white">MADARA UCHIHA</h1>
                                <h1 class="text-[10%] ml-3 text-white">12 JAN 2002</h1>
                              </div>
                            
                            </div>
                            <div class="p-3 bg-gray-200">
                              <h1 class="text-black text-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe similique exercitationem autem minus dolores numquam. Suscipit, nihil voluptate itaque accusantium ipsa consequuntur deserunt obcaecati consectetur. Perferendis quasi hic voluptatibus!</h1>
                            </div>
                          <hr>
                        </div>
                      </div>
                      <form action="" class="mt-5 bg-black p-5 rounded">
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-300 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" placeholder="Write your comment..."></textarea>
                        <button type="button" class="mt-2 focus:outline-none text-black bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Add comment</button>
                      </form>

                    </div>

                  </div>
                </div>
              </div>

              <!-- report -->
              <button class="w-[5%] mx-2">
                <img
                src="../image/triangle-exclamation-solid.svg"
                alt=""
                data-te-toggle="modal" data-te-target="#report" data-te-ripple-init data-te-ripple-color="light"
              />
              </button>

              <!-- modal report -->
              <div data-te-modal-init class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="report" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          
                <div data-te-modal-dialog-ref class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                  <div class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                    <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                      <h5 class="text-xl font-medium leading-normal text-neutral-800 " id="exampleModalLabel">
                        REPORT
                      </h5>

                      <button type="button" class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss
                        aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <!-- content -->
                    <div class="relative flex-auto p-4 px-10" data-te-modal-body-ref>
                      
                      <div class="flex items-center mb-4">
                          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Picture is 18+</label>
                      </div>

                      <div class="flex items-center mb-4">
                          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Chest , virus</label>
                      </div>

                      <div class="flex items-center mb-4">
                          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">casino, bacara</label>
                      </div>

                      <div class="flex items-center mb-4">
                          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">wrong rule</label>
                      </div>

                      <div class="flex items-center mb-4">
                          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">spam</label>
                      </div>

                    </div>

                    <!-- footer -->
                    <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                      <button type="button" class="inline-block rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-600 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light" data-te-toggle="modal" data-te-target="#thankyou">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- thank you reported -->
              <div
                data-te-modal-init
                class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="thankyou"
                tabindex="-1"
                aria-labelledby="exampleModalSmLabel"
                aria-modal="true"
                role="dialog">
                <div
                  data-te-modal-dialog-ref
                  class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[300px]">
                  <div
                    class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                    <div
                      class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                      <h5
                        class="text-xl font-medium leading-normal text-neutral-800"
                        id="exampleModalSmLabel">
                        Reported
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
                    <div class="relative p-4 text-center">
                      <div class="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Thank You for Reported.
                    </div>
                  </div>
                </div>
              </div>


              <!-- donate -->
              <button class="w-[5%] mx-2" data-te-toggle="modal" data-te-target="#donate" data-te-ripple-init data-te-ripple-color="light">
                <img
                src="../image/circle-dollar-to-slot-solid.svg"
                alt=""
              />
              </button>

              <!-- modal donate -->
              <div
                  data-te-modal-init
                  class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                  id="donate"
                  tabindex="-1"
                  aria-labelledby="exampleModalLgLabel"
                  aria-modal="true"
                  role="dialog">
                  <div
                    data-te-modal-dialog-ref
                    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] max-[600px]:max-w-[370px]">
                    <div
                      class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                      <div
                        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                        <h5
                          class="text-xl font-medium leading-normal text-neutral-800"
                          id="exampleModalLgLabel">
                          Donate
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

                      <!-- content -->
                      <div class="relative p-4 bg-white">
                        <div class="p-5 text-2xl max-[600px]:text-[90%] text-center">
                            <h1 class="text-black text-3xl">Nice<span class="text-red-500">TRY</span></h1>
                            <p class="text-gray-700">Donate to Madara Uchiha?</p> <br>
                            <div class="mt-2">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Put your Nice coin</label>
                                <div class="flex max-[600px]:flex-col">
                                  <input type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nicecoin" required>
                                  <button type="button" class="py-2.5 px-20 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 ml-5 max-[600px]:mt-2 max-[600px]:w-full max-[600px]:ml-0" data-te-modal-dismiss data-te-toggle="modal" data-te-target="#thankyouDonate" data-te-ripple-init>Donate</button>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
        <!-- thank you Donate -->
                <div
                  data-te-modal-init
                  class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                  id="thankyouDonate"
                  tabindex="-1"
                  aria-labelledby="exampleModalSmLabel"
                  aria-modal="true"
                  role="dialog">
                  <div
                    data-te-modal-dialog-ref
                    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[300px]">
                    <div
                      class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                      <div
                        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                        <h5
                          class="text-xl font-medium leading-normal text-neutral-800"
                          id="exampleModalSmLabel">
                          Donated
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
                      <div class="relative p-4">
                        <div class="flex justify-center">

                          <!-- True -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>

                        </div>
                          <h1 class="text-center">Thank You for Donate.</h1>  
                        
                      </div>
                    </div>
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

export default {
  
  name: "CardPost",
  setup() {
    const $firebase = inject('$firebase');
    return {
      $firebase
    }
  },
  computed:{
    // trackStyles() {
    //   return {
    //     transform: `translateX(-${this.currentIndex * 100}%)`
    //   };
    // },
    // slideStyles() {
    //   return {
    //     width: `calc(100% / ${this.slides.length})`
    //   };
    // }
  },
  components: {
    
  },
  
  data(){
    return{
      imageData: null,
      picture: null,
      uploadValue: 0,
      
      like: 1,
      colorBar: this.color == '' ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-slate-700': this.color,
      slides: [
        { imageSrc: 'https://source.unsplash.com/800x600/?boat', imageAlt: 'Image 1' },
        { imageSrc: 'https://source.unsplash.com/800x600/?tree', imageAlt: 'Image 2' },
        { imageSrc: 'https://source.unsplash.com/800x600/?mountain', imageAlt: 'Image 3' },
        
      ],
      currentIndex: 0
    }
  },
  methods:{
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    async uploadFile(event) {
      try {

        this.picture = null;

        const file = event.target.files[0];
        const datexx = new Date().getTime().toString() + ".jpg";
        const starsRef = storageRef(storage, `post/${datexx}`);
        await uploadBytes(starsRef, file);
       
      } catch (error) {
        console.log(error);
      }
    },
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  },
  props:['color']
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