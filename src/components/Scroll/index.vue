<template>
  <div class='scroll-wrapper' ref='scroll'>
    <slot></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll-wrapper',
  props: {
    click: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 0
    },
    listenScroll: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({

  }),
  methods: {
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scroll, {
          click: this.click,
          probeType: this.probeType
        })
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }
      } else {
        this.scroll.refresh()
      }
    }
  }
}
</script>
