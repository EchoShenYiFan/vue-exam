<template>
    <div>
        <van-nav-bar
            title="提交订单"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <img src="../../assets/images/suc.png" alt="">
            <p>订单已提交成功！</p>
            <p>支付金额：<span>¥</span><span>108</span></p>
        </div>
        <div class="btnBox1">
            <van-button plain type="primary" @click="goHomeAction">查看订单</van-button>
            <van-button plain type="primary" @click="goHomeAction">返回首页</van-button>
        </div>
    </div>
</template>

<script>
import { SubmitBar, Toast,NavBar,Icon,Button } from 'vant';
export default {
    data() {
        return {
        }
    },
    components: {
        [SubmitBar.name]: SubmitBar,
        [NavBar.name]: NavBar,
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
        },
        onClickLeft() {
            this.$router.push({
                path:"/",
            })
        },
    }
};
</script>

<style lang="less">
body{
    background: #fff;
}
.van-nav-bar{
    &__title{
        color: #09b674;
    }

    &__text{
        color: #101010;
    }

    &__arrow{
        color: #888888 !important;
    }
}
.btnBox1{
    display: flex;
    justify-content: space-between;
    padding: 10px 67px 0;
}
.btnBox1 .van-button--primary{
    width: 110px;
    height: 35px;
    line-height: 34px;
    border: 1px solid #999999;
    color: #999999;
}

.content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content img{
    width: 50px;
    height: auto;
    margin: 62px 0 31px;
}
.content p{
    color:#101010;
    font-size: 16px;
    margin: 0;
}
.content p:nth-of-type(2){
    margin: 12px 0 70px;
}
.content p:nth-of-type(2) span{
    color: #fc6217;
    font-size: 12px;
}
.content p:nth-of-type(2) span:nth-of-type(2){
    font-size: 17px;
}
</style>
