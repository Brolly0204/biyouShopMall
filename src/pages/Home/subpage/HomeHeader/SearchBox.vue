<template>
  <div id="search-content" class="search-content">
    <i class="iconfont icon-sousuo sousuo"></i>
    <div class="search-box">
      <router-link tag='div' to='/search'>
        搜索商品
      </router-link>
    </div>
    <i class="iconfont icon-saoma saoma"></i>
  </div>
</template>
<script>
export default {
  name: "search-content",
  data: () => ({

  })
}
</script>
<style lang='stylus' scoped>
  @import '~common/stylus/variable.styl'
  .search-content {
    display: flex
    align-items: center
    position: relative;
    height: 100%
    box-sizing: border-box;
    .sousuo {
      position: absolute
      left: .3rem
    }
    .saoma {
      position: absolute
      right: .2rem
    }
    .search-box {
      flex: 1
      width: 100%
      height: .68rem
      margin-left: .1rem
      font-size: .32rem
      font-weight: 300
      padding-left: .75rem
      line-height: .68rem
      border-radius: 30px
      background-color: $color-search-backgorund
    }
  }
</style>
