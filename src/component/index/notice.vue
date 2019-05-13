<template>
  <section class="notice-wrapper">
    <div class="lside">
      <img src="../../assets/img/notice.png" alt="公告">
    </div>
    <div class="rside text-line">
      刚洗的头发头皮屑多、头发发痒，该如何办，跪求帮助...
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped lang="less">
.notice-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: px2rem(10px) 0;
  padding: 0 px2rem(10px);
  box-sizing: border-box;
  width: 100%;
  height: px2rem(56px);
  background: #fff;
  .lside {
    width: px2rem(42px);
    height: px2rem(33px);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .rside {
    flex: 1;
    margin-left: px2rem(10px);
    font-size: px2rem(14px);
    line-height: px2rem(19px);
    letter-spacing: 0px;
    color: #101010;
  }
}
</style>
