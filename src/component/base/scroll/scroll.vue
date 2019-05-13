<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    scrollX: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 0
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: () => []
    },
    listenScroll: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const that = this
    setTimeout(function() {
      that._initScroll()
    }, 20)
  },
  watch: {
    data() {
      const that = this
      setTimeout(function() {
        that.refresh()
      }, 20)
    }
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: this.scrollX,
        scrollY: !this.scrollX,
        probeType: this.probeType,
        click: this.click
      })
      if (this.listenScroll) {
        let me = this
        this.scroll.on('scroll', (pos) => {
          me.$emit('scroll', pos)
        })
      }
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  overflow: scroll;
}
</style>
