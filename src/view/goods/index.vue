<template>
    <div class="goods">
        <van-tabs v-model="active">
            <van-tab title="商品">
                <van-swipe class="goods-swipe" :autoplay="3000">
                    <van-swipe-item v-for="thumb in goods.goods_thumb" :key="thumb">
                      <img :src="thumb" >
                    </van-swipe-item>
                </van-swipe>
                <van-cell-group>
                    <van-cell>
                      <div class="goods-title">{{ goods.goods_name }}</div>
                      <div class="goods-price">￥{{ goods.goods_price }}</div>
                    </van-cell>
                    <van-cell class="goods-express">
                      <van-col span="10">运费的：{{ goods.express }}</van-col>
                      <van-col span="14">剩余：{{ goods.remain }}</van-col>
                    </van-cell>
                </van-cell-group>
                <template slot="sku-header-price" slot-scope="props">
                    <div class="van-sku__goods-price">
                      <span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ props.shop_price }}</span>
                    </div>
                </template>
                <van-sku
                    v-model="showBase"
                    :sku="sku"
                    :goods="goods"
                    :goods-id="goods.goods_id"
                    :hide-stock="sku.hide_stock"
                    :quota="skuData.quota"
                    :quota-used="skuData.quotaUsed"
                    :custom-stepper-config="customStepperConfig"
                    @buy-clicked="onBuyClicked"
                    @add-cart="onAddCartClicked">
                  <template slot="sku-actions" slot-scope="props">
                    <div class="van-sku-actions">
                      <van-button bottom-action style="background: #58cda1;border:1px solid #58cda1" @click="onBuyClicked">加入购物车</van-button>
                      <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
                      <van-button type="primary" bottom-action @click="onAddCartClicked" style="background: #07c160;border:1px solid #07c160">立即购买</van-button>
                    </div>
                  </template>
                </van-sku>
                <van-cell-group> 
                    <van-cell title="规格" is-link @click="showBase = true" />        
                </van-cell-group> 
                <van-goods-action>
                  <van-goods-action-mini-btn icon="chat-o">
                    客服
                  </van-goods-action-mini-btn>
                  <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
                    购物车
                  </van-goods-action-mini-btn>
                  <van-goods-action-big-btn style="background: #58cda1;border:1px solid #58cda1" @click="sorry">
                    加入购物车
                  </van-goods-action-big-btn>
                  <van-goods-action-big-btn type="primary" @click="sorry">
                    立即购买
                  </van-goods-action-big-btn>
                </van-goods-action>                        
            </van-tab>
            <van-tab title="详情">
                <img v-for="img in goods.thumb"  :src="img" class="img-responsive" />
            </van-tab>
            <van-tab title="评价"></van-tab>
        </van-tabs> 



    </div>
</template>

<script>
import axios from 'axios';
import {
  Tag,
  Col,
  Icon,
  Button,
  Sku,
  Tab,
  Tabs,  
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  ImagePreview,
  Lazyload, 
} from 'vant';

export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Sku.name]: Sku,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Lazyload.name]: Lazyload,    
    [Button.name]: Button, 
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [ImagePreview.name]: ImagePreview,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },

  data() {
    return {
        active:0, 
        goodsId:'',     
        goods: {
            goods_name: '美国伽力果苹果进口嘎啦果gala果加力果皇家姬娜果脆甜新鲜孕妇水果大',
            goods_price: 2680,
            express: '免运费',
            remain: 19,
            goods_img: [
                'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
            ],
            goods_thumb: [
                'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
            ]
        },
        show: false,
        index: 0,
        images: [
            'https://img.yzcdn.cn/1.jpg',
            'https://img.yzcdn.cn/2.jpg'
        ],             
        sku: {
            // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
            // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
            tree: [
              {
                k: '数量', // skuKeyName：规格类目名称
                v: [
                  {
                    id: '2398', // skuValueId：规格值 id
                    name: '2个/包', // skuValueName：规格值名称
                    imgUrl: '' // 规格类目图片，只有第一个规格类目可以定义图片
                  },
                  {
                    id: '2390',
                    name: '4个/包',
                    imgUrl: ''
                  }
                ],
                k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
              }              
            ],
            // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
            list: [
              {
                id: 296, // skuId，下单时后端需要
                price: 100, // 价格（单位分）
                s1: '2398', // 规格类目 k_s 为 s1 的对应规格值 id
                s2: '0', // 规格类目 k_s 为 s2 的对应规格值 id
                s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                stock_num: 110 // 当前 sku 组合对应的库存
              },
              {
                id: 296, // skuId，下单时后端需要
                price: 200, // 价格（单位分）
                s1: '2390', // 规格类目 k_s 为 s1 的对应规格值 id
                s2: '0', // 规格类目 k_s 为 s2 的对应规格值 id
                s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                stock_num: 120 // 当前 sku 组合对应的库存
              },              
            ],
            price: '1.00', // 默认价格（单位元）
            stock_num: 227, // 商品总库存
            collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
            none_sku: false, // 是否无规格商品
            hide_stock: false // 是否隐藏剩余库存
        },
        skuData: {
            // 商品 id
            goodsId: '946755',
            // 选择的商品数量
            selectedNum: 1,
            // 选择的 sku 组合
            selectedSkuComb: {
              id: 2257,
              price: 100,
              s1: '2389',
              s2: '2390',
              s3: '0',
              stock_num: 111
            }
        },        
        showBase: false,
        showCustom: false,
        showStepper: false,
        showSoldout: false,
        closeOnClickOverlay: true,
        initialSku: {
            s1: '',
            s2: '',
            selectedNum: 3
        },
        customSkuValidator: () => '请选择xxx',
            customStepperConfig: {
                quotaText: '',
                stockFormatter: (stock) => `剩余${stock}件`,
                handleOverLimit: (data) => {
                    const { action, limitType, quota } = data;
                    if (action === 'minus') {
                        this.$toast('至少选择一件商品');
                    } else if (action === 'plus') {
                        if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
                            this.$toast(`限购${quota}件`);
                        } else {
                            this.$toast('库存不够了');
                        }
                    }
                }
            },
            messageConfig: {
                uploadImg: (file, img) => new Promise(resolve => {
                  setTimeout(() => resolve(img), 1000);
                }),
                uploadMaxSize: 3
            }          
        }
    },
    mounted(){
        var name = this.$route.query.name;
        console.log(this); 

        var that = this;     
        let user_id = localStorage.getItem("user_id");
         axios.get('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php', {
              params: {
                  act:'goods_details',
                  goods_id:'939'
              }
            })
            .then(function (response) {
              console.log(response);console.log(response.data.data);
              if(response.status==200){
                that.goods = response.data.data;
                that.sku.price = response.data.data.goods_price;
                //Vue.set(that.sku.price,response.data.data.goods_price);
                that.sku.stock_num  = response.data.data.goods_number;
                //Vue.set(that.sku.stock_num,response.data.data.stock_num);
                that.skuData.goodsId = response.data.data.goods_id;
                let sel_attr = response.data.data.sel_attr;
                if(sel_attr){                
                  let tree = that.sku.tree;
                  sel_attr.forEach((item,key)=>{
                    /*var obj = {};
                    obj.k = item.attr_name;
                    obj.k_s = item.attr_id;
                    obj.v = [];*/
                    tree[key].k = item.attr_name;
                    tree[key].k_s = item.attr_id;                    
                    item.values.forEach((item2,key2)=>{
                      var obj2 = {};
                      
                      tree[key].v[key2].id = item2.goods_attr_id;
                      tree[key].v[key2].name = item2.attr_value;
                    });
                  });
                  console.log(that.sku.tree);                
                  that.sku.tree.forEach((item,key)=>{
                    item.v.forEach((item1,key1)=>{
                      that.sku.list[key1].id = item.k_s;
                      that.sku.list[key1].price = 89;
                      that.sku.list[key1].s1 = item1.id;
                      that.sku.list[key1].stock_num = 28;
                    })
                  });
                  
                  console.log(that.sku.list);
                }else{
                  that.sku.none_sku = true;
                }
              }
              
            })
            .catch(function (error) {
              console.log(error);
            });               
    },
    methods: {
        formatPrice() {
          return '¥' + (this.goods.price / 100).toFixed(2);
        },

        onClickCart() {
          this.$router.push('cart');
        },

        sorry() {
          // Toast('暂无后续逻辑~');
          this.showBase = true;
        },
        onBuyClicked(data) {
          this.$toast('buy:' + JSON.stringify(data));
        },
        onAddCartClicked(data) {
          this.$toast('add cart:' + JSON.stringify(data));
        },
        onPointClicked() {
          this.$toast('积分兑换');
        },

    }
};
</script>

<style lang="less">
.img-responsive{
    width:100%;
    height:auto;
}
.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
