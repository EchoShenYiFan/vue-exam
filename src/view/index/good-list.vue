<template>
    <div id="app">
        <div class="page-top">
            <van-nav-bar left-arrow @click-left="onClickLeft">
                <span slot="right">
                    <img src="../../assets/images/xiaoxi.png" alt="">
                </span>
            </van-nav-bar>
            <van-search class="search" placeholder="请输入搜索关键词" />  
            <div class="sort">
                <van-col span="8">
                    <div @click="onClick(1)">
                     综合 <img alt="" src="../../assets/images/033.png"> 
                    </div>
                </van-col>
                <van-col span="8">
                    <div @click="onClick(2)">
                        价格 <img alt="" :src="shop_price==1?normal:normal2"> 
                    </div>
                </van-col>
                <van-col span="8">
                    <div @click="show = true">
                    分类
                    </div>
                </van-col>
            </div>
        </div>
        <van-list  class="good-list">
            <van-cell  v-for="(item,key) in list" :key="key" class="good-item" @click="goDetail(item.goods_id)">
                <img :src="item.original_img!=''?'http://quhuiguoshi.zzqcnz.com/'+item.original_img:img" alt="">
                <div class="good-info">
                    <div class="good-name">{{item.goods_name}}</div>
                    <div class="good-price">￥<b>{{item.shop_price}}</b></div>
                    <div class="good-num">
                        <span class="conment-num">{{item.comment}}条评价</span>
                        <span class="sale-num">月销量 {{item.praise_rate}}</span>
                    </div>
                </div>
            </van-cell>
        </van-list>
        <van-popup v-model="show" position="right" :overlay="true">
            <div class="popTitle">商品分类</div>
            <div class="popContent">
                <div class="pop-item" v-for="(value,key) in cats" :key="key">
                    <div class="pop-title" @click="navList(key)">
                        {{value.cat_name}}
                        <van-icon :name="CurrentIndex==key?'arrow-up':'arrow-down'"/>
                    </div>
                    <div class="pop-cate" v-if="CurrentIndex==key">
                        <div v-for="(val,key) in value._child" :key="key" @click="cat_goods(val.cat_id)">{{val.cat_name}}</div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import {NavBar, Search, Row, Col, Icon, Cell, CellGroup,Popup ,List, Lazyload } from 'vant';
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
        [Popup.name]: Popup,
        [Lazyload.name]: Lazyload
    },
    data() {
        return {
            cat_id:this.$route.query.cat_id,
            shop_price:"1",
            list: [],
            show: false,
            cats:[],
            CurrentIndex:0,
            img:require('../../assets/images/null_img.jpg'),
            normal:require('../../assets/images/033.png'),
            normal2:require('../../assets/images/034.png')
        };
    },
    mounted(){
        this.goodList();
    },
	created(){
        this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=category_list').then((response) => {
            console.log(response);
            this.cats=response.data;
        })
        console.log(this.cat_id);
	},
    methods: {
        // 返回
        onClickLeft(){
            this.$router.go(-1);
        },
        // 商品列表
        goodList(){
            this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=goods_list',{"cat_id":this.cat_id,shop_price:this.shop_price,"page":"1","num":"10"}).then((response) => {
                console.log(response);
                this.list=response.data;
            })
        },
        // 筛选
        onClick(type){
            let that=this;
            if(type==2){ //价格
                if(that.shop_price==1){
                    that.shop_price=2;
                }else{
                    that.shop_price=1;
                }
            } 
            that.goodList();
        },
        // 分类
        navList(index){
            this.CurrentIndex=index;
        },
        // 分类商品筛选
        cat_goods(cat_id){
            let that=this;
            that.cat_id=cat_id;
            that.goodList();
            that.show=false;
        },
        // 商品详情
        goDetail(goods_id){
            this.$router.push({
                path:"/index",
                query:{
                    goods_id:goods_id
                }
            });
        }
    },
}
</script>

<style lang="less">
    html,body,#app{
        height: 100%;
        background: #f4f4f4;
    }
    .page-top{
        position: fixed;
        width: 100%;
        height: 90px;
        left: 0px;
        top: 0px;
        background: #ffffff;
        z-index: 99;
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
    }
    .good-list{
        margin-top: 100px;
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
        }
    }
    
    .van-popup--right{
        width:50%;
        height:100%;
        font-size:14px;
        overflow: hidden;
        .popTitle{
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-bottom: 1px solid #f5f5f5;
        }
        .popContent{
            height: calc(100% - 50px);
            margin-top: 50px;
            overflow: auto;
        }
        .pop-item .pop-title{
            height:45px;
            line-height:45px;
            padding: 0 15px;
        }
        .pop-cate div{
            text-align:center;
            height: 40px;
            line-height: 40px;
            background: #F4F5F5;
        }
        .van-icon{
            float: right;
            top: 37%;
        }
        .van-icon-arrow-up{
            color: #72B249;
        }
    }
</style>
