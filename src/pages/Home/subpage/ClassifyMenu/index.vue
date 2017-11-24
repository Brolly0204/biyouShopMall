<template>
  <div class="classify-menu">
    <ul class="classify-list">
      <li class="classify-list-item">
        <div class="recommend"></div>
        <h4 class="recommend-title">推荐美食</h4>
      </li>
      <li class="classify-list-item">
        <div class="delicious"></div>
        <h4 class="delicious-title">自选美味</h4>
      </li>
      <li class="classify-list-item">
        <div class="game"></div>
        <h4 class="game-title">游戏生活</h4>
      </li>
      <li class="classify-list-item">
        <div class="menu"></div>
        <h4 class="menu-title">美味菜谱</h4>
      </li>
      <li class="classify-list-item">
        <div class="group"></div>
        <h4 class="group-title">组合美味</h4>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "classify-menu",
  data: () => ({

  })
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixins.styl'
.classify-menu {
  width: 100%
  height: 2rem
  background-color: $color-text
  .classify-list {
    display: flex
    justify-content: center
    align-items: center
    height: 100%
    .classify-list-item {
      flex: 1
      text-align: center
      div {
        width: 1.04rem
        height: 1.04rem
        background-size: 1.04rem 1.04rem
        margin: 0 auto
        &.recommend {
          bg-image('./images/recommend')
        }
        &.delicious {
          bg-image('./images/delicious')
        }
        &.game {
          bg-image('./images/game')
        }
        &.menu {
          bg-image('./images/menu')
        }
        &.group {
          bg-image('./images/group')
        }
      }
      h4 {
        margin-top: .2rem;
        font-size: $font-size-small
        &.recommend-title {
          color: #60edab
        }
        &.delicious-title {
          color: #9fe164
        }
        &.game-title {
          color: #fbcb38
        }
        &.menu-title {
          color: #ff923d
        }
        &.group-title {
          color: #ff4952
        }
      }
    }
  }
}
</style>
