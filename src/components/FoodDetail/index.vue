<template>
  <transition name='move'>
    <div class='food-detail' v-show="showFlag">
      <Scroll ref='scroll'
              :click='true'
      >
        <div class="food-container">
          <div class="food-content">
            <div class="header-image">
              <img :src="food.image">
              <i class="iconfont icon-fanhui back"
                 @click='hide($event)'
              ></i>
            </div>
            <div class="food-info">
              <h4 class="title">{{food.name}}</h4>
              <p class="detail">
                <span class="sellCount">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
              </p>
              <div class="price">
                <span class="now">￥{{food.price}}</span><s class="old" v-if='food.oldPrice'>￥{{food.oldPrice}}</s>
              </div>
              <div class="buy">
                加入购物车
              </div>
            </div>
            <Split></Split>
          </div>
          <div v-if='food.info' class="food-describe">
            <h4 class='title'>商品介绍</h4>
            <p class="info">{{food.info}}</p>
          </div>
          <Split v-if='food.info'></Split>
          <div class='food-evaluate'>
            <h4 class="title">商品评价</h4>
            <ul class="ratings">
              <li  class="rating-item  border-1px" v-for='rating in food.ratings'>
                <div class="user">
                  <span class="date">{{rating.rateTime}}</span>
                  <div class="userInfo">
                    <span>{{rating.username}}</span>
                    <img :src="rating.avatar" width="12" height="12">
                  </div>
                </div>
                <p class="ratText">
                  <i class="iconfont"
                     :class='{"icon-dianzan_active": rating.rateType === 0, "icon-ai46": rating.rateType === 1}'
                  ></i>
                  {{rating.text}}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Scroll>
    </div>
  </transition>
</template>
<script>
import Scroll from '@/components/Scroll'
import Split from '@/components/Split'
export default {
  name: 'food-detail',
  props: {
    food: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    showFlag: false
  }),
  methods: {
    show() {
      this.showFlag = true
      this.$nextTick(() => {
        this.$refs.scroll._initScroll()
        console.log(this.food);
      })
    },
    hide(event) {
      if (event && !event._constructed) return;
      this.showFlag = false
    }
  },
  components: {
    Scroll,
    Split
  }
}
</script>
<style lang='stylus'>
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixins.styl'
  .food-detail {
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100%
    background-color: #fff
    z-index: 99
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active {
      transition: all .2s linear
    }
    &.move-enter, &.move-leave-to {
      transform: translate3d(100%, 0, 0)
    }
    .scroll-wrapper {
      width: 100%
      height: 100%
      .food-content {
        .header-image {
          position: relative
          height: 0
          padding-top: 100%
          img {
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: 100%
          }
          .back {
            position: absolute
            top: 0
            left: 0
            padding: 10px
            color: #fefefe
            font-size: 20px
            font-weight: 800
          }
        }
        .food-info {
          position: relative
          padding: 18px
          box-sizing: border-box
          .title {
            font-size: 14px
            font-weight: 700
            color: #07111b
          }
          .detail {
            font-size: 10px
            color: $color-text-info
            margin: 8px 0 8px
            .sellCount {
              margin-right: 8px
            }
          }
          .price {
            line-height: 24px
            .now {
              font-size: 14px
              color: #f01414
              margin-right: 8px
            }
            .old {
              font-size: 10px
              color: #93999f
            }
          }
          .buy {
            position: absolute
            right: 18px
            bottom: 18px
            height: 24px
            padding: 0 12px
            box-sizing: border-box
            line-height: 24px
            color: #fff
            font-size: 10px
            border-radius: 12px
            background: #00a0dc;
          }
        }
      }
      .food-describe {
        box-sizing: border-box
        padding: 18px
        .title {
          font-size: 14px
          margin-bottom: 8px
        }
        .info {
          padding: 0 8px;
          font-size: 12px;
          font-weight: 200;
          color: #4d555d;
          line-height: 24px;
        }
      }
      .food-evaluate {
        box-sizing: border-box
        padding: 18px
        .title {
          font-size: 14px
        }
        .ratings {
          .rating-item {
            box-sizing: border-box
            padding: 16px 0
            border-bottom-1px($color-defalut-border)
            .user {
              position: relative
              font-size: 14px
              color: $color-text-9
              .userInfo {
                position: absolute
                right: 0
                top: 0
              }
            }
            .ratText {
              margin-top: 10px
              font-size: 14px
              .icon-ai46 {
                font-size: 12px
                color: #93999f;
              }
              .icon-dianzan_active {
                color: #00a0dc;
              }
            }
          }
        }
      }
    }
  }
</style>
