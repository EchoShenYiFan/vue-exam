<template>
  <section class="news-goods">
    <header class="public-title">
      <div class="public-title-china">新品上市</div>
      <div class="public-title-englist">
        NEW
        <br>ARRIVAL
      </div>
      <div class="public-title-more">
        <span class="public-title-more-text">更多</span>
        <van-icon size="12px" name="arrow" class="public-title-more-arrow"/>
      </div>
    </header>
    <main class="content">
      <div class="lside">
        <div class="goods">
          <h4 class="title">生活用品</h4>
          <h3 class="price">9.9元起</h3>
          <img src="../../assets/img/i_left_arrow.png" class="arrow">
          <img src="../../assets/img/life_goods.png" class="lift">
        </div>
      </div>
      <div class="rside">
        <div class="item origin">
          <h4 class="title">清洗用品</h4>
          <h3 class="price">19.9元起</h3>
          <img src="../../assets/img/i_left_arrow.png" class="arrow">
          <img src="../../assets/img/clean_goods.png" class="clean">
        </div>
        <div class="item pink">
          <h4 class="title">洗护用品</h4>
          <h3 class="price">29.9元起</h3>
          <img src="../../assets/img/i_left_arrow.png" class="arrow">
          <img src="../../assets/img/wash_goods.png" class="wash">
        </div>
      </div>
    </main>
  </section>
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
};
</script>

<style scoped lang="less">
.news-goods {
  background: #fff;
  .public-title {
    display: flex;
    align-items: center;
    height: px2rem(52px);
    padding: 0 px2rem(10px);

    &-china {
      font-size: px2rem(18px);
      color: #101010;
      font-weight: bold;
    }

    &-englist {
      font-size: px2rem(10px);
      line-height: 1;
      color: #555555;
      flex: 1;
      padding-left: px2rem(10px);
      text-align: left;
    }
    &-more {
      display: flex;
      align-items: center;

      &-text {
        font-size: px2rem(12px);
        color: #888;
        padding-right: px2rem(3px);
      }

      &-arrow {
        color: #888;
      }
    }
  }
  .content {
    display: flex;
    padding: 0 px2rem(10px) px2rem(10px);
    text-align: left;
    .lside {
      flex: 1;
      padding-right: px2rem(3px);
      .goods {
        position: relative;
        height: px2rem(215px);
        background-image: linear-gradient(-47deg, #e7f0f6 0%, #d6dfe4 100%),
          linear-gradient(#e6dedb, #e6dedb);
        background-blend-mode: normal, normal;
        border-radius: px2rem(4px);
        padding: 0 px2rem(10px);
        .lift {
          position: absolute;
          right: px2rem(15px);
          bottom: px2rem(11px);
          width: px2rem(128px);
          height: px2rem(128px);
        }
      }
    }
    .title {
      font-size: px2rem(13px);
      color: #0f88cb;
      font-weight: normal;
      padding: px2rem(10px) 0;
    }
    .price {
      font-size: px2rem(15px);
      color: #101010;
      font-weight: normal;
      padding: 0 px2rem(10px) px2rem(10px) 0;
    }
    .arrow {
      width: px2rem(25px);
      height: px2rem(25px);
    }
    .rside {
      flex: 1;
      padding-left: px2rem(3px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .item {
        position: relative;
        height: px2rem(105px);
        background-blend-mode: normal, normal;
        border-radius: px2rem(4px);
        padding: 0 px2rem(10px);
      }
      .origin {
        background-image: linear-gradient(-47deg, #efe6dc 0%, #f5e5d3 100%),
          linear-gradient(#f4f4f4, #f4f4f4);
        .title {
          color: #eb9b42;
        }
        .clean {
          position: absolute;
          right: px2rem(10px);
          bottom: px2rem(13px);
          width: px2rem(98px);
          height: px2rem(58px);
        }
      }
      .pink {
        background-image: linear-gradient(-47deg, #ede2e6 0%, #eadee2 100%),
          linear-gradient(#f4f4f4, #f4f4f4);
        .title {
          color: #d54072;
        }
        .wash {
          position: absolute;
          right: px2rem(15px);
          bottom: px2rem(12px);
          width: px2rem(75px);
          height: px2rem(75px);
        }
      }
    }
  }
}
</style>
