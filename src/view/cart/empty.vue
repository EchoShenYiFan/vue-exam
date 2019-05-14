<template>
    <div>
        <div class="ept">
            <van-icon name="shopping-cart-o" class="emty_icon" />
            <p>主银，您的购物车为空的哦！</p>
            <div class="btnBox">
                <van-button plain type="primary" @click="goHomeAction">返回首页</van-button>
                <van-button type="primary" @click="goHomeAction">去逛逛</van-button>
            </div>
        </div>

    </div>
</template>

<script>
import Footers from '@/component/footer'
import { Icon,Button  } from 'vant';
export default {
    data() {
        return {
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
        }
    },
    components: {
        Footers,
        [Icon.name]: Icon,
        [Button.name]: Button,
    },
    computed: {

    },
    methods: {
        goHomeAction() {
            this.$router.push({
                path:"/",
            })
        }
    }
};
</script>

<style scoped>
    body{
        width: 100%;
        overflow: hidden;
    }
    .ept{
        background: #fff;
        padding: 1px
    }
    .emty_icon{
        display: block;
        width: 30px;
        font-size: 30px;
        padding: 12px;
        background: #f0f0f0;
        border-radius: 50%;
        color: #666;
        margin: 20px auto 18px;
    }
    p{
        color: #555555;
        font-size: 13px;
        text-align: center;
    }
    .btnBox{
        display: flex;
        justify-content: space-between;
        padding: 10px 67px 20px;
    }
    .van-button--primary{
        width: 110px;
        height: 35px;
        line-height: 34px;
    }
    .van-button--primary:nth-of-type(1){
        border: 1px solid #999999;
        color: #999999;
    }

    
    .tuiJian li:nth-last-of-type(1){
        margin-bottom: 60px;
    }
    
</style>
