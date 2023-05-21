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
            hello word
          </h1>
        </div>
  
        <!-- body -->
        <div class="flex justify-center">
          <div
            class="flex flex-col rounded-b bg-white shadow-lg md:flex-row w-full"
          >
            <div class="flex flex-col justify-start w-full">

              <div class="carousel-container">
                <div
                  class="carousel-track w-[700px] h-[400px]"
                  :style="trackStyles"
                >
                  <div
                    class="carousel-slide w-[700px] h-[400px]"
                    :style="slideStyles"
                  >
                    <img src="https://cdn.dribbble.com/userupload/6404271/file/original-a93266d08f3427fe7ae4417606536d3b.jpg?compress=1&resize=2048x1536&vertical=center" class="w-[100%] h-[400px]" />
                  </div>
                </div>
                <div class="carousel-controls">
                  <button
                    class="carousel-control"


                  >
                    &lt;
                  </button>
                  <button
                    class="carousel-control"


                  >
                    &gt;
                  </button>
                </div>
              </div>
  
              <!-- content -->
              <div class="p-3">
                Hello word
                <div class="flex">
                  <p class="text-[1.5vh]">
                    created 2002-20-20
                  </p>
                  <p class="text-[1.5vh]">
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
                  @click="like *= -1"
                  src="../image/heart-solid.svg"
                  alt=""
                  :class="[like == -1 ? 'w-[5%] mx-2' : 'w-[5%] mx-2 hidden']"
                />
  
                <img
                  src="../image/comment-regular.svg"
                  class="w-[5%] mx-2': 'w-[5%] mx-2"
                />
  

  

                  <img
                    src="../image/triangle-exclamation-solid.svg" class="w-[5%] mx-2"

                  />
             
                <!-- modal report -->
                
  
  
                <!-- donate -->
                  <img src="../image/circle-dollar-to-slot-solid.svg" class="w-[5%] mx-2"  alt="" />
               
  
                <!-- modal donate -->

  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>

export default {
  data(){
    return{
        like:1,
        myClassColor: "flex items-center p-2 rounded-t-xl w-full bg-black",
      currentIndex: 0,
    }
  },
  methods:{
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
  },
}
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