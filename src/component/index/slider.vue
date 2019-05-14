<template>
  <section class="swiper-wapper">
    <van-swipe :autoplay="3000" :height="160">
      <van-swipe-item v-for="(item,index) in list" :key="index">
        <img :src="item.ad_code">
      </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="less">
.swiper-wapper {
    padding: 0 px2rem(10px);
    background: #fff;

    img {
        border-radius: px2rem(10px);
        max-width: 100%;
    }
}
</style>
