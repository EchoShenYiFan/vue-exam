<template>
  <div>
    <div>
      <van-nav-bar
        class="nav"
        title="购物车"
        right-text="删除"
        @click-right="deleteGood"
      />
      <van-checkbox-group class="card-goods" v-model="checkedGoods" v-if="goods.length != 0">
        <van-checkbox
          class="card-goods__item"
          v-for="item in goods"
          :key="item.id"
          :name="item.id"
          @change="chooseGood(item.id)"
        >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
        <div slot="footer">
          <van-stepper v-model="item.num" />
        </div>
        </van-checkbox>
          <!-- <van-submit-bar
            :price="totalPrice"
            :disabled="!checkedGoods.length"
            :button-text="submitBarText"
            @submit="onSubmit"
            class="submit-btn"
          /> -->
          <van-submit-bar
            class="submit-btn"
            :disabled="!checkedGoods.length"
            :price="totalPrice"
            button-text="提交订单"
            @submit="onSubmit"
          >
            <!-- <span slot="tip">
              你的收货地址不支持同城送, <span>修改地址</span>
            </span> -->
            <van-checkbox @change="quanxuan(item.id)" v-model="checked">全选</van-checkbox>
          </van-submit-bar>
      </van-checkbox-group>
     <emptyCar v-else></emptyCar>
      
    </div>
    <div class="tuiJian">
        <div class="ttjj">
            <img src="../../assets/images/tj.png" alt="">
        </div>
        <ul>
            <li v-for="item in list" :key="item.id">
                <img :src="item.img" alt="">
                <p>{{ item.good_name }}</p>
                <p>￥<span>{{ item.price }}</span><span>￥{{ item.realPrice }}</span></p>
            </li>
        </ul>
    </div>
    <Footers :active="2"></Footers>
  </div>
</template>

<script>
import Footers from '@/component/footer'
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast,NavBar,Lazyload   } from 'vant';
import EmptyCar from "@/view/cart/empty"

export default {

  data() {
    return {
      checked: true,
      checkedGoods: ['1', '2', '3'],
      goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
      }, {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 690,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
      }],
      list: [
        {
            id: '0',
            img: 'https://gd2.alicdn.com/imgextra/i2/907598425/O1CN011CDQnE2C6hMqMitT3_!!907598425.jpg_400x400.jpg',
            good_name: '直发 ecostore/ecostore 椰子香草沐浴露400m',
            price: '297',
            realPrice: '108',
        },
        {
            id: '1',
            img: 'https://gd2.alicdn.com/imgextra/i2/907598425/O1CN011CDQnE2C6hMqMitT3_!!907598425.jpg_400x400.jpg',
            good_name: '直发 ecostore/ecostore 椰子香草沐浴露400m',
            price: '297',
            realPrice: '108',
        },
        {
            id: '2',
            img: 'https://gd2.alicdn.com/imgextra/i2/907598425/O1CN011CDQnE2C6hMqMitT3_!!907598425.jpg_400x400.jpg',
            good_name: '直发 ecostore/ecostore 椰子香草沐浴露400m',
            price: '297',
            realPrice: '108',
        },
        {
            id: '3',
            img: 'https://gd2.alicdn.com/imgextra/i2/907598425/O1CN011CDQnE2C6hMqMitT3_!!907598425.jpg_400x400.jpg',
            good_name: '直发 ecostore/ecostore 椰子香草沐浴露400m',
            price: '297',
            realPrice: '108',
        },
        {
            id: '4',
            img: 'https://gd2.alicdn.com/imgextra/i2/907598425/O1CN011CDQnE2C6hMqMitT3_!!907598425.jpg_400x400.jpg',
            good_name: '直发 ecostore/ecostore 椰子香草沐浴露400m',
            price: '297',
            realPrice: '108',
        },
        {
            id: '5',
            img: 'https://gd2.alicdn.com/imgextra/i2/907598425/O1CN011CDQnE2C6hMqMitT3_!!907598425.jpg_400x400.jpg',
            good_name: '直发 ecostore/ecostore 椰子香草沐浴露400m',
            price: '297',
            realPrice: '108',
        },
        {
            id: '6',
            img: 'https://gd2.alicdn.com/imgextra/i2/907598425/O1CN011CDQnE2C6hMqMitT3_!!907598425.jpg_400x400.jpg',
            good_name: '直发 ecostore/ecostore 椰子香草沐浴露400m',
            price: '297',
            realPrice: '108',
        },

    ]
      //[]
    };
  },
  components: {
    Footers,
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup,
    [NavBar.name]: NavBar,
    [Lazyload.name]: Lazyload,
    EmptyCar,
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },

    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },

  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },

    onSubmit() {
      // Toast('点击结算');
      this.$router.push({
        path:"/submitOrder",
      })
    },

    deleteGood() {
      Toast('删除');
    },

    chooseGood(id){

    }
  }
};
</script>

<style lang="less">
.van-nav-bar{
  &__title{
    color: #09b674;
  }

  &__text{
    color: #101010;
  }
}

.card-goods {
  padding: 10px 0;
  background-color: #fff;
  width: 100%;

  &__item {
    position: relative;
    background-color: #fff;

    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }

    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }

    .van-card__price {
      color: #f44;
    }
  }
}
.van-checkbox__icon--checked .van-icon{
  color: #fff;
  background: #09b674;
  border: none;
}
.van-card{
  background-color: #fff;
}
.submit-btn{
  bottom: 50px;
  padding-left: 3%;
  width: 97%;
  border-top: 1px solid #d9d9d9;
}
.van-button--danger{
  background: #09b674;
  border: none;
}

p{
    color: #555555;
    font-size: 13px;
    text-align: center;
}
.tuiJian .ttjj{
      height: 45px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
  }
  .tuiJian .ttjj img{
      height: 15px;
  }
  .tuiJian ul{
      /* display: flex; */
      /* width: 100%; */
  }
  .tuiJian li{
      width: 180px;
      height: 245px;
      background: #fff;
      padding: 0 8px;
      box-sizing: border-box;
      margin-top: 10px;
  }
  .tuiJian li:nth-last-of-type(1){
      margin-bottom: 110px;
  }
  .tuiJian li:nth-child(even){
      float: right;
  }
  .tuiJian li:nth-child(odd){
      float: left;
  }
  .tuiJian li img{
      width: 167px;
      height: 167px;
  }
  .tuiJian li p:nth-of-type(1){
      margin: 0;
      text-align: left;
  }
  .tuiJian li p:nth-of-type(2){
      margin: 0;
      text-align: left;
      font-size: 12px;
      color: #fc6217;
      margin-top: 5px;
  }
  .tuiJian li p:nth-of-type(2) > span:nth-of-type(1){
      font-size: 17px;
  }
  .tuiJian li p:nth-of-type(2) > span:nth-of-type(2){
      color: #888888;
      text-decoration: line-through;
      margin-left: 10px;
  }
</style>
