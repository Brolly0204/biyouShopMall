<template>
  <div class="cartbtn">
    <transition name='rotate'>
      <i class="iconfont icon-jianhao decrease"
         @click.stop.prevent='decrease($event)'
         v-show='food.count > 0'
      ></i>
    </transition>
    <span class="count" v-show='food.count > 0'>{{food.count}}</span>
    <i class="iconfont icon-comiisjiahao"
       @click.stop.prevent='increase($event)'
    ></i>
  </div>
</template>
<script>
export default {
  name: 'cartbtn',
  props: {
    food: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({

  }),
  methods: {
    decrease(event) {
      if (!event._constructed) return
      this.food.count--
      this.$emit('decrease', this.food)
    },
    increase(event) {
      if (!event._constructed) return
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('increase', this.food)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .cartbtn {
    display: flex
    align-items: center
    font-size: 0
    i {
      color: #00a0dc
      font-size: 24px
      padding: 10px
    }
    .decrease {
      transform: translate3d(0, 0, 0) rotate(0)
      &.rotate-enter-active, &.rotate-leave-active {
        transition all 0.3s linear
      }
      &.rotate-enter, &.rotate-leave-to {
        opacity: 0
        transform: translate3d(24px, 0, 0) rotate(180deg)
      }

    }
    .count {
      width: 24px
      line-height: 24px
      text-align: center
      font-size: 14px
    }
  }
</style>
