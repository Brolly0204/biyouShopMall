<template>
  <div id="home" class="home">
    <HomeHeader></HomeHeader>
    <Scroll ref='scroll'
      :probeType='2'
      :listenScroll='true'
      @scroll='listenScroll'
      >
      <div class="main">
        <!-- 轮播banner -->
        <Swiper :swiperSlides='swiperSlides'></Swiper>
        <!-- 分类menu -->
        <ClassifyMenu></ClassifyMenu>
        <!-- 折扣优惠 DiscountList -->
        <DiscountList></DiscountList>
        <DiscountList></DiscountList>
        <DiscountList></DiscountList>
        <DiscountList></DiscountList>
        <DiscountList></DiscountList>
      </div>
    </Scroll>
  </div>
</template>
<script>
import HomeHeader from './subpage/HomeHeader'
import Swiper from '@/components/Swiper'
import ClassifyMenu from './subpage/ClassifyMenu'
import DiscountList from './subpage/DiscountList'
import Scroll from '@/components/Scroll'
import {getSlides} from '@/api/home'
import {ERR_OK} from '@/api/config'
export default {
  name: "home",
  mounted() {
    //do something after mounting vue instance
    getSlides().then(res => {
      if (res.status === ERR_OK) {
        this.swiperSlides = res.data.slides
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    })
  },
  data: () => ({
    title: 'hello home',
    swiperSlides: [],
  }),
  methods: {
    listenScroll(pos) {
    },
    _initScroll() {
      this.$refs.scroll._initScroll()
    }
  },
  components: {
    HomeHeader,
    Swiper,
    ClassifyMenu,
    DiscountList,
    Scroll
  }
}
</script>
<style lang="stylus">
  @import '~common/stylus/variable.styl'
  .home {
    position: relative
    width: 100%
    height: 100%
    background-color: $color-content-background
    .scroll-wrapper {
      width: 100%
      position: absolute
      top: 1.08rem
      bottom: 1.18rem
      overflow: hidden
    }
  }
</style>
