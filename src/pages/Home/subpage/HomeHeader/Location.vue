<template>
  <div id="location-content" class="location-content">
    <i class="iconfont icon-dingwei1 location-logo"></i>
    <span class="location-city">全聚德</span>
    <i class="iconfont icon-icon location-arrow"></i>
  </div>
</template>
<script>
export default {
  name: "location-content",
  data: () => ({

  })
}
</script>
<style lang='stylus' scoped>
  @import '~common/stylus/mixins.styl'
  .location-content {
    display: flex
    justify-content: space-between
    align-items: center;
    height: 100%
    .location-logo {
      font-size: .5rem
    }
    .location-city {
      font-size: .34rem
      font-weight: 300
      no-wrap()
    }
    .location-arrow {
      font-size: .5rem
    }
  }
</style>
