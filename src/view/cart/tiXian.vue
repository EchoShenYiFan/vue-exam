<template>
    <div>
        <div class="content">
            <van-nav-bar
                title="账户余额"
                left-arrow
                right-text="提现记录"
                @click-left="onClickLeft"
                @click-right="onClickRight"
                class="txTitle"
            />
            <nav class="navCt">
                <p>账户余额(元)</p>
                <p>102.81</p>
                <van-button size="mini">提现</van-button>
            </nav>
            <p class="mingxi">收入明细<span>(已累计收入：3262元)</span></p>
            <section class="itemBox">
                <ul>
                    <li v-for="item in list" :key="item.id">
                        <div>
                            <span>{{ item.type }}</span>
                            <p>{{ item.time }}</p>
                        </div>
                        <span>{{ item.money }}</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
    
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast,NavBar,Lazyload,AddressList,ContactCard,Icon,Button } from 'vant';
export default {
    data() {
        return {
            list: [
                {
                    id: "1",
                    type: "推广费用",
                    time: "2018-03-16  15:28",
                    money: "+300",
                },
                {
                    id: "2",
                    type: "推广费用",
                    time: "2018-03-16  15:28",
                    money: "+300",
                },
                {
                    id: "3",
                    type: "推广费用",
                    time: "2018-03-16  15:28",
                    money: "+300",
                },
                {
                    id: "4",
                    type: "推广费用",
                    time: "2018-03-16  15:28",
                    money: "+300",
                },
            ]
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
        [Button.name]: Button,
    },
    computed: {

    },
    methods: {
        onClickLeft() {
            this.$router.push({
                path:"/",
            })
        },
        onClickRight() {
            Toast("提现记录")
        }
    }
};
</script>

<style lang="less" scoped>
.content{
    position: relative;
}

.van-nav-bar{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background: transparent;
    border: none;

    &__title{
        color: #fff;
    }

    &__text{
        color: #fff;
    }

    &__arrow{
        color: #fff;
    }
}

.navCt{
    height: 219px;
    // width: 100%;
    background-image: url("../../assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 50px 15px 0;
}
.navCt p{
    color: #fff;
    margin-top: 25px;
}
.navCt p:nth-of-type(2){
    font-size: 40px;
}
.mingxi{
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    margin: 0;
    background: #f4f4f4;
    padding: 0 15px;
}
.mingxi span{
    color: #fc6319;
}

.itemBox p{
    margin: 0;
}
.itemBox li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 60px;
    border-bottom: 1px solid #e7e7e7;
}
.itemBox li:nth-last-of-type(1){
    border: none;
}
.itemBox li p{
    color: #666;
    font-size: 12px;
}
.itemBox li > span{
    color: #0c9460;
    font-size: 16px;
}
.itemBox li > div > span{
    color: #000;
    font-size: 16px;
}
</style>
