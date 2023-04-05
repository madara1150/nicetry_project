<template>
    <div>
      <div class="w-full h-full">
        <!-- profile -->
        <div :class="[`flex items-center p-2 rounded-t-xl w-full ${colorBar}`]">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-full"
            style="width: 5vh; height: 5vh;"
            alt="Avatar"
          />
          <h1 class="text-white ml-2 text-[1vh]">MADARA UCHIHA</h1>
  
         
        </div>
  
        <!-- body -->
        <div class="flex justify-center">
          <div
            class="flex flex-col rounded-b bg-white shadow-lg md:flex-row w-full"
          >
            <div class="flex flex-col justify-start w-full">
              <!-- carousel -->
              <div
                id="carouselExampleCrossfade"
                class="relative"
                data-te-carousel-init
                data-te-carousel-slide
              >
                <div
                  class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                  data-te-carousel-indicators
                >
                  <button
                    type="button"
                    data-te-target="#carouselExampleCrossfade"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCrossfade"
                    data-te-slide-to="1"
                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCrossfade"
                    data-te-slide-to="2"
                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div
                  class="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
                >
                  <div
                    class="relative float-left -mr-[100%] w-full h-[100px] max-[600px]:h-[100px] max-[600px]:w-[300px] !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-fade
                    data-te-carousel-item
                    data-te-carousel-active
                  >
                    <img
                      src="https://source.unsplash.com/800x600/?nature"
                      class="block w-full"
                      alt="Wild Landscape"
                    />
                  </div>
                  <div
                    class="relative float-left -mr-[100%] hidden w-full h-[100px] max-[200px]:h-[200px] max-[600px]:w-[300px] !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-fade
                    data-te-carousel-item
                  >
                    <img
                      src="https://source.unsplash.com/800x600/?tree"
                      class="block w-full"
                      alt="Camera"
                    />
                  </div>
                  <div
                    class="relative float-left -mr-[100%] hidden w-full h-[100px] max-[200px]:h-[200px] max-[600px]:w-[300px] !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-fade
                    data-te-carousel-item
                  >
                    <img
                      src="https://source.unsplash.com/800x600/?nature"
                      class="block w-full"
                      alt="Exotic Fruits"
                    />
                  </div>
                </div>
                <button
                  class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCrossfade"
                  data-te-slide="prev"
                >
                  <span class="inline-block h-8 w-8">
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
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Previous</span
                  >
                </button>
                <button
                  class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCrossfade"
                  data-te-slide="next"
                >
                  <span class="inline-block h-8 w-8">
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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                  <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Next</span
                  >
                </button>
  
                <div class="w-full p-5 overflow-y-scroll h-20 mt-2 max-[600px]:mt-0 max-[100px]:h-0">
                  <p class="overflow-y-scroll h-20">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi aut maiores placeat impedit quia ducimus eius voluptate beatae aliquam sunt doloremque laborum illo tenetur voluptas molestiae enim animi, necessitatibus explicabo.
                  </p>
              </div>
  
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
                          <div class="overflow-scroll h-96">
  
                            <div class="mt-2 overflow-scroll" v-for="val, i in 4" :key="i">
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
                        <form action="" class="mt-5 bg-black p-5">
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
    name: "CardLanding",
    data(){
      return{
        like: 1,
        colorBar: this.color == '' ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-slate-700': this.color
      }
    },
    props:['color']
  };
  </script>
  
  <style></style>
  