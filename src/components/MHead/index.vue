<template>
  <div id="m-head" class='m-head'>
    <div class="iconfont icon-fanhui icon"
      @click='goBack'
    ></div>
    <h3 class="title">{{title}}</h3>
  </div>
</template>
<script>
export default {
  name: 'm-head',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data: () => ({

  }),
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>
<style lang='stylus'>
  @import '~common/stylus/variable.styl'
  .m-head {
    display: flex
    align-items: center
    position: fixed
    width: 100%
    height: 1.08rem
    background-color: $color-header-background
    .title {
      font-size: .36rem
      color: $color-text
      margin: 0 auto
    }
    .icon {
      position: absolute
      height: 100%
      line-height: 1.08rem
      padding: 0 .1rem
      color: $color-text
      font-weight: 500
      font-size: 22px
      text-align: center
    }
  }
</style>
