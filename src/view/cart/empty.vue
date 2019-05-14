<template>
    <div>
        <van-icon name="shopping-cart-o" class="emty_icon" />
        <p>主银，您的购物车为空的哦！</p>
        <div class="btnBox">
            <van-button plain type="primary" @click="goHomeAction">返回首页</van-button>
            <van-button type="primary" @click="goHomeAction">去逛逛</van-button>
        </div>
    </div>
</template>

<script>
import Footers from '@/component/footer'
import { Icon,Button  } from 'vant';
export default {
    data() {
        return {
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
        padding: 10px 67px 0;
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
</style>
