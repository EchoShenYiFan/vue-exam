<template>
    <div>
        <van-nav-bar
            title="提交订单"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-address-list
            class="addr"
            v-model="chosenAddressId"
            :list="list"
            :disabled-list="disabledList"
            @click="changeAddr"
            v-if="list.length != 0"
        />
        <van-checkbox-group class="card-goods">
            <p class="goodTitle">洗发水旗舰店</p>
            <van-card
                v-for="item in listGood"
                class="card_item"
                :key="item.id"
                :num="item.num"
                :price="item.price"
                :title="item.title"
                :thumb="item.thumb"
            />
        </van-checkbox-group>
        <section class="goodDetail">
            <ul>
                <li>
                    <span>商品总额</span>
                    <i>￥216.00</i>
                </li>
                 <li>
                    <span>立减</span>
                    <i>-￥16.00</i>
                </li>
                 <li>
                    <span>运费</span>
                    <i>+￥0.00</i>
                </li>
                 <li>
                    <span>备注</span>
                    <input type="text" placeholder="请输入您的留言">
                </li>
            </ul>
        </section>

        <section class="choosePay">
            <p>支付方式</p>
            <ul>
                <li @click="choosepay(1)">
                    <section>
                        <img src="../../assets/images/zfb.png" alt="">
                        <span>支付宝支付</span>
                    </section>
                    <van-icon name="success" class="itemSuc" v-show="choosPay1"/>
                </li>
                <li @click="choosepay(2)">
                    <section>
                        <img src="../../assets/images/wx.png" alt="">
                        <span>微信支付</span>
                    </section>
                    <van-icon name="success" class="itemSuc" v-show="choosPay2"  />
                </li>
                <li @click="choosepay(3)">
                    <section>
                        <img src="../../assets/images/ye.jpg" alt="">
                        <span>余额支付</span>
                    </section>
                    <van-icon name="success" class="itemSuc" v-show="choosPay3"  />
                </li>
            </ul>
        </section>

        <van-submit-bar
            :price="1234"
            label="应付金额："
            button-text="提交订单"
            @submit="onSubmit"
            class="submitBtn_z"
        />
    </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast,NavBar,Lazyload,AddressList,ContactCard,Icon } from 'vant';
export default {
    data() {
        return {
            choosPay1: true,
            choosPay2: false,
            choosPay3: false,
            payWay: 'zfb',
            disabledList: [

            ],
            chosenAddressId: '1',
            list: [
                {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
            ],
            listGood: [
                {
                    id: '1',
                    title: '直发 ecostore/ecostore 椰子香草沐浴露400m',
                    price: '99.00',
                    num: '1',
                    thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                },
                {
                    id: '2',
                    title: '利快KleineWolke德国进口白色浴室摆件套装洗手液瓶...',
                    price: '2.00',
                    num: '2',
                    thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                },
                
            ],
        }
    },
    components: {
        [Card.name]: Card,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [CheckboxGroup.name]: CheckboxGroup,
        [NavBar.name]: NavBar,
        [Lazyload.name]: Lazyload,
        [AddressList.name]: AddressList,
        [Icon.name]: Icon,
    },
    computed: {
    },

    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        // 换地址
        changeAddr() {
            Toast('跳转地址列表');
        },
        // 选择支付方式
        choosepay(i) {
            let _this = this;
            _this.choosPay1 = false;
            _this.choosPay2 = false;
            _this.choosPay3 = false;

            if(i == 1) {
                _this.choosPay1 = true;
                _this.payWay = 'zfb'
            }else if(i == 2) {
                _this.choosPay2 = true; 
                _this.payWay = 'wx';
            }else {
                _this.choosPay3 = true;
                _this.payWay = 'ye' 
            }
        },
        // 支付
        onSubmit() {
            this.$router.push({
                path:"/paySucess",
            })
        }
    }
};
</script>

<style lang="less" scoped>

.van-card{
    &__header{
        &__content{
            display: flex;
            justify-content: space-between;
        }
    }
    
}
.van-nav-bar{
    &__title{
        color: #09b674;
    }

    &__text{
        color: #101010;
    }

    &__arrow{
        color: #888888;
    }
}
.addr{
    margin: 10px 0;
    padding-bottom: 0;
}
.van-address-list button{
    display: none;
}
.van-address-item .van-radio__icon--checked .van-icon {
    border-color: #09b674;
    background-color: #09b674;
}

.card-goods{
    background: #fff;
}
.card_item{
    background: #fff
}
.card_item .van-card__content{
    display: flex;
    justify-content: space-around;
}
.goodTitle{
    color: #555;
    font-size: 14px;
    padding: 0 15px 0 15px;
    margin: 0;
}
.card_item .van-card__content .van-card__bottom{
    padding-right: 15px;
}
.card_item .van-card__price{
    color: #323233;
    font-size: 14px;
}

.goodDetail{
    margin: 10px 0;
    background: #fff;
    padding: 14px 15px 40px;
}
.goodDetail li{
    height: 29px;
    line-height: 29px;
}
.goodDetail li:nth-child(-n+3){
    color: #fc6217;
    display: flex;
    justify-content: space-between;
}
.goodDetail li:nth-of-type(1){
    color: #000;
}
.goodDetail li span{
    color: #101010;
    font-size: 13px;
    margin-right: 20px;
}
.goodDetail li input{
    border: 0;
    font-size: 13px;
}

.choosePay{
    background: #fff;
    padding-bottom: 12px;
    margin-bottom: 60px;
}
.choosePay p{
    color: #555555;
    font-size: 13px;
    line-height: 50px;
    border-bottom: 1px solid #e7e7e7;
    padding-left: 15px;
}
.choosePay img{
    width: 25px;
    height: 25px;
    margin-right: 13px;
}
.choosePay li{
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.choosePay li section{
    display: flex;
    align-items: center;
}
.choosePay li:nth-of-type(2){
    margin: 15px 0;
}
.choosePay li{
    display: flex;
    justify-content: space-between;
}
.itemSuc{
    color: #09b674;
    font-weight: bold;
}

.van-submit-bar{
    &__bar{
        
    }

    &__text{
        text-align: left;
        margin-left: 15px;
    }

    &__text span:nth-of-type(2){
        color: #fc6217;
    }
    
}

.van-submit-bar .van-button{
    background: #09b674;
    border-color: #09b674;
}
</style>
