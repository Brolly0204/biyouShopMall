<template>
  <div id="home-header" class="home-header">
    <div class="location">
      <Location></Location>
    </div>
    <div class="search">
      <SearchBox></SearchBox>
    </div>
  </div>
</template>
<script>
import Location from './Location';
import SearchBox from './SearchBox'
export default {
  name: "home-header",
  data: () => ({

  }),
  components: {
    Location,
    SearchBox
  }
}
</script>
<style lang="stylus">
  @import '~common/stylus/variable.styl'
  .home-header {
    display: flex
    width: 100%
    height: 1.08rem
    box-sizing: border-box
    padding: 0 .4rem
    color: $color-text
    background-color: $color-header-background
    .location {
      width: 2.42rem
    }
    .search {
      flex: 1
    }
  }
</style>
