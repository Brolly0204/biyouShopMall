<template>
  <div class='discount-container'>
    <!-- 限时秒杀 SecKill -->
    <div class="discount-seckill border-side-1px">
      <h2 class="big-title">限时秒杀</h2>
      <h3 class="small-title">秒杀抢不停</h3>
      <div class="picture"></div>
    </div>

    <!-- 折扣列表 Discount-->
    <ul class="discount-list">
      <li class="border-side-1px">
        <h3 class='big-title'>安全鸡蛋</h3>
        <h4 class="small-title">1元秒杀</h4>
        <div class="picture"></div>
      </li>
      <li>
        <h3 class='big-title'>美味蛋糕</h3>
        <h4 class="small-title">美味折扣</h4>
        <div class="picture"></div>
      </li>
      <li class="border-side-1px">
        <h3 class='big-title'>新鲜果汁</h3>
        <h4 class="small-title">0.9元优惠</h4>
        <div class="picture"></div>
      </li>
      <li>
        <h3 class='big-title'>喷香米饭</h3>
        <h4 class="small-title">今日特惠</h4>
        <div class="picture"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'discount',
  data: () => ({

  })
}
</script>
<style lang="stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixins.styl'
  .discount-container {
    display: flex
    width: 100%
    height: 4rem
    background-color: $color-default-background
    margin-top: $content-module-gap

    .discount-seckill {
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      width: 3rem
      text-align: center
      border-right-1px($color-defalut-border)

      .big-title {
        font-weight: bold
        font-size: .46rem
        color: #fa6f21
      }
      .small-title {
        font-size: .18rem
        color: #666666
        margin-top: .16rem
      }
      .picture {
        width: 1.86rem
        height: 1.52rem
        margin-top: .4rem
        background-size: 1.86rem 1.52rem
        bg-image('./images/discount_1')
      }
    }

    .discount-list {
      display: flex
      flex-wrap: wrap
      flex: 1
      background-position: 50% 50%
      background-size: 1rem 1px
      background-color: $color-default-background
      background-repeat: no-repeat;
      bg-image('./images/line')
      li {
        width: 50%
        height: 2rem
        text-align: center;
        .big-title {
          margin-top: 0.14rem
          font-size: .3rem
        }
        .small-title {
          margin-top: 0.15rem
          font-size: .22rem
          color: $color-text-9
        }
        .picture {
          margin: 0.15rem auto 0 auto
        }
        &:nth-of-type(1) {
          border-right-1px($color-defalut-border)
          .picture {
            width: 1.22rem
            height: 0.85rem
            background-size: 1.2rem 0.85rem
            bg-image('./images/discount_2')
          }
        }
        &:nth-of-type(2) {
          .picture {
            width: 1.44rem
            height: 0.94rem
            background-size: 1.44rem 0.94rem
            bg-image('./images/discount_3')
          }
        }
        &:nth-of-type(3) {
          border-right-1px($color-defalut-border)
          .picture {
            width: 0.63rem
            height: 0.96rem
            background-size: 0.63rem 0.96rem
            bg-image('./images/discount_4')
          }
        }
        &:nth-of-type(4) {
          .picture {
            width: 0.96rem
            height: 0.83rem
            background-size: 0.96rem 0.83rem
            bg-image('./images/discount_5')
          }
        }
      }
    }
  }
</style>
