<template>
    <div>
        <van-nav-bar left-arrow @click-left="onClickLeft">
            <span slot="right">
                <img src="../../assets/images/xiaoxi.png" alt="">
            </span>
        </van-nav-bar>
        <van-search class="search" placeholder="请输入搜索关键词" />  
        <div class="sort">
            <van-col span="8">
                <div>
                   <div>
                   综合 <img alt="" src="../../assets/images/033.png"> 
                </div>
                </div>
            </van-col>
            <van-col span="8">
                <div @click="onClick">
                   价格 <img alt="" src="../../assets/images/033.png"> 
                </div>
            </van-col>
            <van-col span="8">
                <div @click="show = true">
                   分类
                </div>
            </van-col>
        </div>
         <van-list  class="good-list">  <!--v-model="loading"  :finished="finished"  finished-text="没有更多了" @load="onLoad" -->
            <van-cell  v-for="(item,key) in list" :key="key" class="good-item">
                <img :src="item.img" alt="">
                <div class="good-info">
                    <div class="good-name">{{item.goods_name}}</div>
                    <div class="good-price">￥<b>{{item.shop_price}}</b></div>
                    <div class="good-num">
                        <span class="conment-num">{{item.comment}}条评价</span>
                        <span class="sale-num">月销量{{item.praise_rate}}笔</span>
                    </div>
                </div>
            </van-cell>
        </van-list>
        <van-popup v-model="show" position="right" :overlay="true">
            内容
        </van-popup>
    </div>
</template>

<script>
import {NavBar, Search, Row, Col, Icon, Cell, CellGroup,Popup ,List } from 'vant';
export default {
     components: {
        [NavBar.name]:NavBar,
        [Search.name]:Search,
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [List.name]: List,
        [Popup.name]: Popup
    },
    data() {
        return {
            cat_id:this.$route.query.cat_id,
            shop_price:"1",
            list: [],
            show: false,
            // loading: false,
            // finished: false
        };
    },
    mounted(){
        this.goodList();
    },
	created(){
        console.log(this.cat_id);
	},
    methods: {
        onClickLeft(){
            console.log(1111111111);
            this.$router.push({path:"/goodClass"})
            // this.$router.go(-1);
        },
        goodList(){
            this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=goods_list',{"cat_id":this.cat_id,shop_price:this.shop_price,"page":"1","num":"10"}).then((response) => {
                console.log(response)
                this.list=response.data;
            })
        },
        onClick(){
            let that=this;
            if(that.shop_price==1){
                that.shop_price=2;
            }else{
                that.shop_price=1;
            }
            that.goodList();
        }
        // onLoad() {
	    //     // 异步更新数据
	    //     setTimeout(() => {
	    //         for (let i = 0; i < 10; i++) {
	    //             this.list.push(this.list.length + 1);
	    //         }
	    //         // 加载状态结束
	    //         this.loading = false;
	
	    //         // 数据全部加载完成
	    //         if (this.list.length >= 40) {
	    //             this.finished = true;
	    //         }
	    //     }, 500);
        // }
    }
}
</script>

<style lang="less">
    html,body,#app{
        height: 100%;
        background: #f4f4f4;
    }
    .van-nav-bar{
        border-bottom: 1px solid #adadad;
        .van-icon{
            color: #888;
        }
        span img{
            width: 21px;
            height: 21px;
            vertical-align: middle;
        }
    } 
    .search{
        position: absolute;
        top: 8px;
        left: 30px;
        z-index: 99;
        width: calc(100% - 75px);
        padding: 0px; 
        
        .van-cell{
            background: #e6e6e6;
            padding-left: 10px;
            border-radius: 8px;
        }
    }
    .sort{
        background: #ffffff;
        height: 42px;
        line-height: 42px;
        text-align: center;
        font-size: 15px;
        color: #101010;
        img{
            width: 12px;
            height: 7px;;
        }
    }
    .good-item{
        background: #ffffff;
        margin-top: 10px;
        padding: 10px;
        img{
            width: 90px;
            height: 90px;
            border-radius: 5px;
            vertical-align: top;
        }
        .good-info{
            display: inline-block;
            width: calc(100% - 100px);
            padding-left: 10px;
            .good-name{
                font-size: 13px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                line-height: 18px;
                height: 36px;
            }
            .good-price{
                color: #fc6217;
                b{
                    font-size: 17px;
                }
            }
            .good-num{
                font-size: 12px;
                color: #555555;
                .sale-num{
                    margin-left:10px;
                }
            }
        }
        .van-popup--right{
            width:50%;
            height:100%;
        }
    
    }
</style>
