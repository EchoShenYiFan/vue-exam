<template>
  <div>
    <van-nav-bar
      title="全部订单"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />  
    <van-tabs v-model="active">
      <van-tab title="全部订单"> 
        <van-card
          v-for="item in orderlist"
          :num="item.num"
          :price="item.price"
          :title="item.title"
          :thumb="item.imageURL"
          :origin-price="item.marketprice"
        > 
          <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div>
        </van-card>        
      </van-tab>
      <van-tab title="待付款">
        <div v-for="item in orderlist">
          <van-cell-group class="font12">
            <van-cell :title="['订单号：' + item.orderno]"  value="待付款" v-if="item.status==1"/>
          </van-cell-group>       
          <van-card 
            :num="item.num"
            :price="item.price"
            :title="item.title"
            :thumb="item.imageURL"
            :origin-price="item.marketprice"
            v-if="item.status==1"
          >        
            <div slot="footer">
              <van-button size="mini">按钮</van-button>
              <van-button size="mini">按钮</van-button>
            </div>
          </van-card>         
        </div>       

      </van-tab>
      <van-tab title="待发货">
        <div v-for="item in orderlist">
          <van-cell-group class="font12">
            <van-cell :title="['订单号：' + item.orderno]"  value="待付款" v-if="item.status==2"/>
          </van-cell-group>       
          <van-card 
            :num="item.num"
            :price="item.price"
            :title="item.title"
            :thumb="item.imageURL"
            :origin-price="item.marketprice"
            v-if="item.status==2"
          >        
            <div slot="footer">
              <van-button size="mini">按钮</van-button>
              <van-button size="mini">按钮</van-button>
            </div>
          </van-card>         
        </div>
      </van-tab>
      <van-tab title="待收货">
        <div v-for="item in orderlist">
          <van-cell-group class="font12">
            <van-cell :title="['订单号：' + item.orderno]"  value="待付款" v-if="item.status==3"/>
          </van-cell-group>       
          <van-card 
            :num="item.num"
            :price="item.price"
            :title="item.title"
            :thumb="item.imageURL"
            :origin-price="item.marketprice"
            v-if="item.status==3"
          >        
            <div slot="footer">
              <van-button size="mini">按钮</van-button>
              <van-button size="mini">按钮</van-button>
            </div>
          </van-card>         
        </div>        
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup, Tab, Tabs, NavBar, Card, Button, Toast  } from 'vant';

export default {  
  components: {
    [Row.name]: Row,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Toast.name]: Toast,
    [Button.name]: Button, 
    [Card.name]: Card, 
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      active: 0,
      orderlist:[
        { status: 1,
          orderno:12344789,
          price: 88,
          marketprice: 188,
          num: 2,
          title: '2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
          imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
        },
        { status: 2,
          orderno:12344789,
          price: 88,
          marketprice: 188,
          num: 2,
          title: '新款男士休闲时尚军绿飞行夹克秋冬新款男',
          imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
        },
        { status: 3,
          orderno:12344789,
          price: 88,
          marketprice: 188,
          num: 2,
          title: '秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
          desc: '2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
          imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
        },                
      ]
    };
  },
  methods: {
    onClick(index, title) {
      this.$toast(title);
    },
    onClickLeft() {

    }    
  }    
};
</script>

<style lang="less">
.font12{
  .van-cell__title{
    font-size:12px;
  }
}
.van-nav-bar__title{
  color: #07c160;
}
.van-tabs__line {
 background-color: #07c160;
}
.van-nav-bar {
  .van-icon {
    color: #7d7e80;
  }
}
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
