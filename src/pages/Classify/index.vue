<template>
<div id="classify" class="classify-container">
  <div class="header">
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <input class='search-box' type="text" placeholder="搜索商品">
    </div>
  </div>
  <div class="goods">
      <!-- 食品类型 -->
      <Scroll ref='menuScroll'
              :click='true'
      >
        <ul class="menu-wrapper">
            <li v-for='(item, index) in foods' :key='item.type'
                class="menu-item border-side-1px"
                :class="{'active': currentIndex === index}"
                @click='selectMenu(index, $event)'

            >
              <span class="border-1px text">
                {{item.name}}
              </span>
            </li>
          </ul>
      </Scroll>
      <!-- 分类食品 -->
      <div class="goods-wrapper">
        <Scroll ref='foodScroll'
                :click='true'
                :probeType='3'>
          <ul class="foods-wrapper">
            <li v-for='food in foods'
                :key='food.type'
                class="food-list"
                ref='foodList'
            >
              <h3 class="title">{{food.name}}</h3>
              <ul class="food-container">
                <li v-for='item in food.foods'
                    class='food-item border-1px'
                    @click='selectFood(item, $event)'
                >
                  <div class="icon">
                    <img :src="item.icon" alt="">
                  </div>
                  <div class="content">
                    <h4 class="name">{{item.name}}</h4>
                    <p v-if='item.desc' class="desc">{{item.description}}</p>
                    <div class="sellInfo">
                      <span class="sellCount">月售{{item.sellCount}}份</span>
                      <span class="rating">好评率{{item.rating}}%</span>
                    </div>
                    <div class="price">
                      <span class="now">￥{{item.price}}</span><s v-if='item.oldPrice' class="old">￥{{item.oldPrice}}</s>
                    </div>
                  </div>
                  <div class="cartcontrol">
                    <Cartcontrol @increase='addFood'
                                 @decrease='delFood'
                                 :food='item'
                    ></Cartcontrol>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </Scroll>
      </div>
  </div>
  <FoodDetail ref='food' :food='food'></FoodDetail>
</div>
</template>
<script>
import Scroll from '@/components/Scroll'
import FoodDetail from '@/components/FoodDetail'
import Cartcontrol from '@/components/Cartcontrol'
import {getFoods} from '@/api/classify'
import {mapMutations} from 'vuex'

export default {
  name: "classify",
  data: () => ({
    title: 'hello classify',
    foods: [],
    listHeight: [],
    food: {},
    scrollY: 0
  }),
  deactivated() {
    this.$refs.food.hide()
  },
  created() {
    getFoods().then(res => {
      if (res.data.errno === 0) {
        this.foods = res.data.data
        this.$nextTick(() => {
          this._initScroll()
          this._calculateHeight()
        })
      }
    })
  },
  methods: {
    ...mapMutations({
      addFoods: 'ADD_FOOD',
      delFoods: 'DEL_FOOD'
    }),
    addFood(food) {
      this.addFoods(food)
    },
    delFood(food) {
      if (food.count <= 0) {
        this.delFoods(food)
      }
    },
    selectFood(food, event) {
      if (!event._constructed) return;
      this.food = food
      this.$refs.food.show()
    },
    selectMenu(index, event) {
      if (!event._constructed) return
      let el = this.$refs.foodList[index]
      this.foodScroll.scrollToElement(el, 300)
    },
    _initScroll() {
      this.$refs.menuScroll._initScroll()
      this.$refs.foodScroll._initScroll()
      this.foodScroll.on('scroll', (pos) => {
        this.scrollY = pos.y
      })
    },
    _calculateHeight() {
      let foodList = this.$refs.foodList
      let height = 0
      this.listHeight.push(0)
      for (let i = 0; i < foodList.length; i++) {
        height += foodList[i].clientHeight
        this.listHeight.push(height)
      }
    }
  },
  computed: {
    foodScroll() {
      return this.$refs.foodScroll.scroll
    },
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        let scrollY = Math.ceil(Math.abs(this.scrollY))
        if (!height2 || (scrollY >= height1 && scrollY < height2)) {
          return i
        }
      }
      return 0
    }
  },
  components: {
    Scroll,
    FoodDetail,
    Cartcontrol
  },
}
</script>
<style lang="stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixins.styl'
  .classify-container {
    width: 100%
    height: 100%
    .header {
      position: fixed
      width: 100%
      align-items: center
      height: 1.08rem
      line-height: 1.08rem
      background-color: $color-header-background
      text-align: center
      z-index: 99
      .search {
        position: relative
        display: flex
        align-items: center
        height: 1.08rem
        i {
          position: absolute
          left: .3rem
          font-size: .4rem
          color: $color-text
        }
        .search-box {
          width: 7.22rem
          height: .7rem
          margin: 0 auto
          font-size: .28rem
          border: none
          outline: none
          box-sizing: border-box
          border-radius: 50px
          padding-left: .7rem
          background-color: $color-search-backgorund
          &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
            color: #f5f5f5
          }
          &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
             color: #f5f5f5
          }
          &::-moz-placeholder { /* Mozilla Firefox 19+ */
             color: #f5f5f5
          }
          &:-ms-input-placeholder { /* Internet Explorer 10-11 */
             color: #f5f5f5
          }
        }
      }
    }
    .goods {
      display: flex
      position: absolute
      top: 1.08rem
      bottom: 1.18rem
      width: 100%
      .menu-wrapper {
        width: 1.7rem
        .menu-item {
          display: table
          width: 1.7rem
          height: 1rem
          text-align: center
          font-size: .24rem
          font-weight: 300
          color: $color-text-9
          border-right-1px($color-text-d)
          &.active {
            border-left: 2px solid $color-text-active
            color: $color-text-active
            border-none()
            .text {
              position: relative
              left: -2px
            }
          }
          .text {
            display: table-cell
            vertical-align: middle
            width: 1.7rem
            padding: 0 15px
            box-sizing: border-box
            border-bottom-1px($color-text-d)
          }
        }
      }
      .goods-wrapper {
        flex: 1
        height: 100%
        .scroll-wrapper {
          height: 100%
          .foods-wrapper {
            .food-list {
              .title {
                height: 26px
                padding-left: 14px
                line-height: 26px
                font-size: .24rem
                border-left: 2px solid #d9dde1
                background-color: #f3f5f7;
                color: #93999f
              }
              .food-container {
                padding: 0 0.36rem
                box-sizing: border-box
                .food-item {
                  position: relative
                  display: flex
                  padding: 18px 0
                  border-bottom-1px(rgba(7,17,27,0.1))
                  &:last-child {
                    border-none()
                  }
                  .icon {
                    width: 1.14rem
                    height: 1.14rem
                    img {
                      width: 100%
                      height: 100%
                    }
                  }
                  .content {
                    flex: 1
                    padding-left: 0.2rem
                    .name {
                      height: 14px
                      line-height: 14px
                      font-size: 14px
                      margin-bottom: 8px
                    }
                    .desc {
                      width: 50%
                      font-size: 10px
                      color: $color-text-info
                      margin-bottom: 8px
                      no-wrap()
                    }
                    .sellInfo {
                      font-size: 10px
                      color: $color-text-info
                    }
                    .price {
                      font-weight: 700
                      line-height: 10px
                      .now {
                        margin-right: 8px
                        font-size: 14px
                        color: #f01414
                      }
                      .old {
                        font-size: 10px
                        color: $color-text-info
                      }
                    }
                  }
                  .cartcontrol {
                    position: absolute
                    right: 0
                    bottom: 0
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
