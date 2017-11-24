<template>
  <div class="shopcart">
    <m-head :title='title'></m-head>

    <Scroll ref='scroll' :click='true'>
      <div>
        <div class='prompt' v-if="shopCart.length === 0">
          <h3>暂未选购商品</h3>
        </div>
        <ul class="food-list" v-else>
            <li class="food-item" v-for="(food, index) in shopCart" :key="index">
              <div class="select">
                <input type="checkbox" name="" value="">
              </div>
              <div class="icon">
                <img :src="food.icon" alt="">
              </div>
              <div class="content">
                <h4 class="title">{{food.name}}</h4>
                <p class="price">
                  <span class='text'>单价</span> ￥{{food.price}}
                </p>
                <p class="price">
                  <span class='text'>小计</span> ￥{{food.price * food.count}}
                </p>
              </div>
              <div class="cartcontrol">
                <Cartcontrol :food='food' @decrease='delFood' ></Cartcontrol>
              </div>
            </li>
            <li class="total">
              <span>共{{foodCount}}件商品</span>
              <span>合计：￥{{foodTotal | formatPrice}}</span>
            </li>
          </ul>
      </div>
    </Scroll>
    <div class="accounts border-1px">
      <div class="accounts-count">
        <span class="text">合计：</span>￥<span class="price">{{foodTotal | formatPrice}}</span>
      </div>
      <div class='accounts-btn'>
        去结算
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
import Scroll from '@/components/Scroll'
import Cartcontrol from '@/components/Cartcontrol'

export default {
  name: "shopcart",
  activated() {
    this.$nextTick(() => {
      if (this.$refs.scroll) {
        this.$refs.scroll._initScroll()
      }
    })
  },
  data: () => ({
    title: 'shopcart'
  }),
  methods: {
    ...mapMutations({
      delFoods: 'DEL_FOOD'
    }),
    delFood(food) {
      if (food.count <= 0) {
        this.delFoods(food)
      }
    }
  },
  computed: {
    ...mapState(['shopCart']),
    ...mapGetters(['foodCount', 'foodTotal'])
  },
  filters: {
    formatPrice(value) {
      return value.toFixed(2)
    }
  },
  components: {
    Scroll,
    Cartcontrol
  }
}
</script>
<style lang="stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixins.styl'

  .shopcart {
    position: relative
    width: 100%
    height: 100%
    .prompt {
      h3 {
        margin: 50px 0
        font-size: 28px
        text-align: center
      }
    }
    .scroll-wrapper {
      position: absolute
      top: 1.08rem
      bottom: 2.36rem
      width: 100%
      overflow: hidden
      .food-list {
        .food-item {
          position: relative
          display: flex
          box-sizing: border-box
          padding: .2rem 0 .2rem .3rem
          .icon {
            width: 1.6rem
            height: 1.6rem
            margin: 0 .3rem
            img {
              width: 100%
              height: 100%
            }
          }
          .content {
            .title {
              font-size: .32rem
            }
            .price {
              margin-top: 10px
              font-size: 14px
              color: $color-text-price
              .text {
                color: $color-text-info
              }
            }
          }
          .cartcontrol {
            position: absolute
            right: .2rem
            bottom: 0
          }
        }
        .total {
          font-size: 16px
          text-align: right
          padding: 10px 20px 0 0
        }
      }
    }
    .accounts {
      position: fixed
      left: 0
      bottom: 1.18rem
      width: 100%
      height: 1.18rem
      display: flex
      .accounts-count {
        flex: 1
        padding-left: 18px
        color: $color-text-price
        font-size: 16px
        line-height: 1.18rem
        .price {
          font-size: 22px
        }
      }
      .accounts-btn {
        width: 1.97rem
        height: 100%
        line-height: 1.18rem
        font-size: 0.36rem
        font-weight: 300
        text-align: center
        color: $color-text
        background-color: $color-header-background
      }
    }
  }
</style>
