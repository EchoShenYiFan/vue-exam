<template>
  <section class="hot-goods">
    <header class="public-title">
      <div class="public-title-china">热销产品</div>
      <div class="public-title-englist">
        HOT-SALE
        <br>PRODUCT
      </div>
      <div class="public-title-more">
        <span class="public-title-more-text">更多</span>
        <van-icon size="12px" name="arrow" class="public-title-more-arrow"/>
      </div>
    </header>
    <main class="list">
      <scroll :data="list" class="hot-content">
        <div class="goods-list" ref="goodsList">
          <div class="goods-item" v-for="(item,index) in list" :key="index">
            <div class="img-wrapper">
              <img src="../../assets/img/001.png">
            </div>
            <div class="goods-title ellipsis">{{item.goods_name}}</div>
            <div class="goods-info">
              <span class="normal-price">
                <span>￥</span>{{item.shop_price}}
              </span>
              <span class="through-price">￥{{item.market_price}}</span>
            </div>
          </div>
        </div>
      </scroll>
    </main>
  </section>
</template>

<script>
import Scroll from "@/component/base/scroll/scroll";
export default {
  data() {
    return {
      scrollX: true,
      style: {
        width: ''
      }
    }
  },
  components: {
    Scroll
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    list: function (newVal) {
      console.log(`px2rem(${newVal.length * 110}px)`)
      this.$refs.goodsList.style.width = `${newVal.length * 110}px`
    }
  }
}
</script>

<style scoped lang="less">
.hot-goods {
  margin-top: px2rem(10px);
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
  .hot-content {
    width: 100%;
    overflow: hidden;
    .goods-list {
      display: flex;
      flex-direction: row;
      padding: 0 px2rem(10px);
      box-sizing: border-box;
      .goods-item {
        padding: px2rem(10px);
        box-sizing: border-box;
        width: 110px;
        height: 180px;
        .img-wrapper {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
          }
        }
        .goods-title {
          line-height: 18px;
          font-size: 13px;
          color: #101010;
        }
        .goods-info {
          margin-top: 6px;
          .normal-price {
            font-size: 17px;
            letter-spacing: 0px;
            color: #fc6217;
            span {
              font-size: 12px;
            }
          }
          .through-price {
            font-size: 12px;
            letter-spacing: 0px;
            color: #888888;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>
