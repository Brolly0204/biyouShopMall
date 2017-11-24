<template>
  <div class="swiper">
    <swiper :options='swiperOptions' class="swiper-content">
      <swiper-slide  class="wrapper" v-for="slide in swiperSlides" :key="slide.id">
        <img :src='slide.img'>
      </swiper-slide>
      <div class="swiper-pagination" slot='pagination'></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'slide',
  props: {
    swiperSlides: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    swiperOptions: {
      autoplay: 3000,
      loop: true,
      pagination: '.swiper-pagination',
      autoplayDisableOnInteraction: false
    }
  }),
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="stylus">
  @import 'swiper/dist/css/swiper.css'
  .swiper {
    position: relative
    height: 0
    padding-top: 48.8%
    .swiper-content {
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      img {
        display: block
        width: 100%
        height: 100%
      }
    }
  }
</style>
