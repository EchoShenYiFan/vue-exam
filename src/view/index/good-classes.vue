<template>
    <div class="calssification">
        <van-nav-bar title="分类" class="nav-bar"></van-nav-bar>
        <van-row class="container">
            <van-col span="6" class="col-left">
                <div class="cat-list" v-for="(value,key) in cats" :key="key" >{{value.cat_name}} </div>
            </van-col>
            <van-col span="18" class="col-right">
                <div class="cat-second" v-for="(value,key) in cats" :key="key">
                    <div class="cat-img">
                        <img src="../../assets/images/c_banner.png" alt="">
                    </div>
                    <div class="cat-name">——— {{value.cat_name}} ———</div>
                    <div class="cat-second-list">
                        <van-col span="8" class="cat-second-item" v-for="(val,key) in value._child" :key="key" :cat_id="val.cat_id">
                          <div @click="goList(val.cat_id)">
                            <img alt="" :src="val.thumb">
                            <div>{{val.cat_name}}</div>
                          </div>
                        </van-col>
                    </div>
                </div>
            </van-col>
        </van-row>
        <Footers :active="1"></Footers>
    </div>
    
</template>

<script>
import Footers from '@/component/footer'
import {NavBar, Row, Col, Icon, Cell, CellGroup } from 'vant';

export default {
  data(){
      return{
      	index:0,
        cats:[],
        cat_list:[]
      }
  },
  components: {
    Footers,
    [NavBar.name]:NavBar,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  computed: {

  },
  created(){
  	this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=category_list').then((response) => {
	    console.log(response)
	    this.cats=response.data;
	})
  },
  methods: {
    goList(cat_id){
      console.log(343333333333)
    	this.$router.push({path:"/good-list"})
    }
  },
};
</script>

<style lang="less">
    html,body,#app,.calssification{
        height: 100%;
    }
    .van-nav-bar{
        border-bottom: 1px solid #ddd;
    }
    .van-nav-bar__title{ 
        color: #09b674;
        font-size: 16px;
    }
    .container{
        height: calc(100% - 47px);
        width: 100%;
        overflow: hidden;
    }
    .col-left{
        height: 100%;
        border-right: 1px solid #E9E9E9;
        overflow: auto;
        .cat-list{
            text-align: center;
            height: 24px;
            line-height: 24px;
            margin: 10px 0;
            font-size: 13px;
        }
        .active{
            color: #09b674;
            border-left: 2px solid #09b674;
        }
    }
    .col-right{
        height: 100%;
        padding: 0 10px;
        margin: 10px 0;
        overflow: auto;
        .cat-img img{
            width: 100%;
            height: 80px;
            border-radius: 5px;
        }
        .cat-name{
            font-size: 14px;
            color: #101010;
            line-height: 36px;
            font-weight: normal;
            text-align: center;
            margin: 5px 0;
        }
    }
    
    .cat-second-item{
        text-align: center;
        img{
            width: 100%;
            height: 70px;
            margin-bottom: 5px;
            border-radius: 4px;
        }
        div{
            color: #101010;
            font-size: 12px;
            margin-bottom: 15px;
        }
    }
</style>

