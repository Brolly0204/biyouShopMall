<template>
  <div class="tabs">
    <nav class="tab-list border-1px">
      <ul>
        <li>
          <router-link to='/home'>
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to='/classify'>
            <i class="iconfont icon-leimupinleifenleileibie"></i>
            <span>分类</span>
          </router-link>
        </li>
        <li>
          <router-link to='/shopcart'>
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
          </router-link>
        </li>
        <li>
          <router-link to='/personal'>
            <i class="iconfont icon-icon-yxj-empty-my"></i>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "footertab",
  data: () => ({

  })
}
</script>
<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixins'
  .tabs {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 20;
    .tab-list {
      border-top-1px(rgba(187, 187, 187, 0.8));

      ul {
        display: flex;
        height: 1.18rem;
        li {
          flex: 1;
          a {
            display: flex;
            height: 1.18rem;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: $color-text-d
            &.router-link-active {
              color: $color-text-active;
            }
            i {
              display: block;
              font-size: .44rem;
              margin-bottom: .1rem;
            }
            span {
              font-size: .26rem;
            }
          }
        }
      }
    }
  }
</style>
