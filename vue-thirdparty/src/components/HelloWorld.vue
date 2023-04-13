<template>
  <div class="hello">
    <!-- clickable:true是否可点击触发转换图片 -->
    <Swiper class="MySwiper" :modules="modules" :pagination="{ clickable:true }">
      <!-- 制作轮播图 -->
      <SwiperSlide>
        <img src="../assets/logo.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/logo.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/logo.png" alt="">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import {Pagination} from 'swiper';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
import { click } from 'dom7';

export default {
  name: 'HelloWorld',
  data() {
    return {
      modules:[ Pagination ],
    }
  },
  components:{
    Swiper,
    SwiperSlide,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 10%;
}
</style>
