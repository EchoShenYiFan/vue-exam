<template>
  <nav class="class-nav" v-if="list.length > 0">
    <router-link v-for="(item,index) in list" :key="index" class="item" to="/">
      <img :src="item.thumb">
      <p>{{item.cat_name}}</p>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
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
.class-nav {
  display: flex;
  flex-wrap: wrap;
  background: #fff;

  .item {
    display: block;
    width: 20%;
    text-align: center;
    padding: px2rem(10px) 0;

    img {
      width: px2rem(45px);
      height: px2rem(45px);
    }

    p {
      font-size: px2rem(11px);
      line-height: px2rem(18px);
      color: #555;
    }
  }
}
</style>
