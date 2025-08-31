<template>
  <h3
    class="w-[80%] mx-auto text-3xl text-center bg-slate-300 rounded-full font-bold mt-16"
  >
    My Portfolio
  </h3>
  <p
    class="text-center mt-2 bg-green-500 w-40 mx-auto py-1 rounded-xl text-black"
  >
    Some of my projects
  </p>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <NuxtLink target="blanket" to="https://hamo.wuaze.com/"
        ><img class="rounded h-[250px]" src="/test.PNG" />
        <h1 class="text-center text-xl font-bold mt-5">Stocks Project</h1>
      </NuxtLink>
    </swiper-slide>
    <swiper-slide>
      <NuxtLink target="blanket" to="https://drokola.wuaze.com/"
        ><img class="rounded h-[250px]" src="/1.PNG" />
        <h1 class="text-center text-xl font-bold mt-5">Stocks Project</h1>
      </NuxtLink>
    </swiper-slide>
    <swiper-slide>
      <NuxtLink target="blanket" to="https://seifnashaat.wuaze.com/"
        ><img class="rounded h-[250px]" src="/Capture.PNG" />
        <h1 class="text-center text-xl font-bold mt-5">Stocks Project</h1>
      </NuxtLink>
    </swiper-slide>

  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow],
    };
  },
};
</script>
<style>
#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
