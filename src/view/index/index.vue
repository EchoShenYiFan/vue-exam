<template>
  <div class="container">
    <header class="header">
      <div class="input-wrapper">
        <span class="iconfont iconsearch"></span>
        <input
          type="text"
          v-model="keywords"
          placeholder="搜索商品名称"
          @keyup.enter="searchEnterFun"
        >
      </div>
      <div class="message">
        <span class="iconfont iconiconfontzhizuobiaozhun023110"></span>
      </div>
    </header>
    <section class="swiper-wapper">
      <van-swipe :autoplay="3000" :height="160">
        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.ad_code">
        </van-swipe-item>
      </van-swipe>
    </section>
    <nav class="class-nav" v-if="navList.length > 0">
      <router-link v-for="(item,index) in navList" :key="index" class="item" to="/">
        <img :src="item.thumb">
        <p>{{item.cat_name}}</p>
      </router-link>
    </nav>
    <section class="notice-wrapper">
      <div class="lside">
        <img src="../../assets/img/notice.png" alt="公告">
      </div>
      <div class="rside text-line">
        刚洗的头发头皮屑多、头发发痒，该如何办，跪求帮助...
      </div>
      <div></div>
    </section>
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
            <!-- <img src="../../assets/img/i_left_arrow.png" class="arrow"> -->
            <!-- <img src="../../assets/img/life_goods.png" class="lift"> -->
          </div>
        </div>
        <div class="rside">
          <div class="item origin">
            <h4 class="title">清洗用品</h4>
            <h3 class="price">19.9元起</h3>
            <!-- <img src="../../assets/img/i_left_arrow.png" class="arrow"> -->
            <!-- <img src="../../assets/img/clean_goods.png" class="clean"> -->
          </div>
          <div class="item pink">
            <h4 class="title">洗护用品</h4>
            <h3 class="price">29.9元起</h3>
            <!-- <img src="../../assets/img/i_left_arrow.png" class="arrow"> -->
            <!-- <img src="../../assets/img/wash_goods.png" class="wash"> -->
          </div>
        </div>
      </main>
    </section>
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
        <scroll :data="hotList" class="hot-content">
          <div class="goods-list" ref="goodsList">
            <div class="goods-item" v-for="(item,index) in hotList" :key="index">
              <div class="img-wrapper">
                <!-- <img src="../../assets/img/001.png"> -->
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
    <!-- <slider :list="bannerList"></slider> -->
    <!-- <notice></notice> -->
    <!-- <snav :list="navList"></snav> -->
    <!-- <new-goods></new-goods> -->
    <!-- <hot-goods :list="hotList"></hot-goods> -->
    <div class="recommend-title">
      <img src="../../assets/img/recommend.png" alt="推荐">
    </div>
    <!-- <list
      :list="recommendList"
      :finished="finished"
      :loading="loading"
      @upload="upload"
    ></list> -->
    <Footers :active="0"></Footers>
  </div>
</template>

<script>
import { Swipe, SwipeItem,Icon } from 'vant';
import Footers from '@/component/footer'
import Scroll from "@/component/base/scroll/scroll";
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      bannerList: [],           //banner数据
      navList: [],              //分类导航数据
      newsGoods: null,          //最新上市商品数据
      hotList: [],              //热销商品数据
      recommendList: [],        //为你推荐商品
      page: 1,
      pageNum: 10,
      pageTotal: '',
      loading: false,
      finished: false,
      keywords: '',
      isThrottle: false,
      scrollX: true,
      style: {
        width: ''
      }
    }
  },
	components: {
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [Icon.name]:Icon,
  	Footers,
    // Slider,
    // Snav,
    // NewGoods,
    // HotGoods,
    // Notice,
    Scroll
    // List
  },
  created() {
    this._getSwiperData()
    this._getNavData()
    this._getHotData()
    this._getRecommendData()
  },
  methods: {
    
  }
};
</script>

<style lang="less">
.container {
  margin-bottom: 50px;
  width: 100%;
  min-height: 100%;
  background: #f0f0f0;
}
.header{
  width: 100%;
  height: auto;
  display:flex;
  justify-content: space-between;
  padding: 0px 30px;
  box-sizing: border-box;
}
.header .input-wrapper{
  width: 80%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
}
.input-wrapper .iconsearch{
  position: absolute;
}
.input-wrapper input{
  width: 100%;
  padding: 10px 20px;
  border: 0;
  border-radius: 8px;
  text-indent: 15px;
}
.message{
  width:20%;
}
.van-swipe img{
  width: 100%;
  height: auto;
}
.class-nav{
  width: 100%;
  height: auto;
  background-color: #ffffff;
  overflow: hidden;
  padding: 20px 0 10px;
}
.class-nav a{
  width: 20%;
  float: left;
  text-align: center;
  color: #555555;
}
.class-nav img{
  display: block;
  width: 80%;
  height: auto;
  margin: auto;
}
.notice-wrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("");
  background-color: #ffffff;
  margin:20px 0;
}
.notice-wrapper div:nth-child(1){
  width:20%;
}
.notice-wrapper div:nth-child(1) img{
  width: 100%;
  height: auto;
}
.notice-wrapper div:nth-child(2){
  width:50%;
  font-size:14px;
  line-height: 34px;
}
.notice-wrapper div:nth-child(3){
  width:20%;
}
</style>
