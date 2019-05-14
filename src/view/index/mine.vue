<template>
  <div>
    <!-- <p>个人中心</p> -->
    <div class="top">
      <img class="top_img" src="../../assets/images/027.png" alt="">
			<div class="person_info">
				<img src="../../assets/images/011.png" v-if="!user_id"/>
				<img :src="photo" v-if="user_id"/>
				<span class="person_msg" v-if="user_id">
					<div>{{name}}</div>
					<div>看世事繁华,恍如一指流沙</div>
				</span>
				<span class="person_msg login" v-if="!user_id" @click="login">
					<div>登录/注册</div>
				</span>
			</div>
    </div>
		<div class="order" @click="order">
			<div class="title">我的订单<van-icon name="arrow"/></div>
			<div class="order-list">
				<van-col span="6" class="order_item" v-for="(item,key) in order_item" :key="key">
						<div>
							<img :src="item.img" />
							<div>{{item.name}}</div>
						</div>
				</van-col>
			</div>
		</div>
		<div class="other">
			<ul>
				<li>
					<img src="../../assets/images/yue.png" /> 
					<span>账号余额</span>
				</li>
				<li @click="unload">
					<img src="../../assets/images/tuiguang.png" /> 
					<span>推广中心</span>
				</li>
				<li @click="unload">
					<img src="../../assets/images/shoucang.png" /> 
					<span>我的收藏</span>
				</li>
				<li @click="unload">
					<img src="../../assets/images/us.png" /> 
					<span>关于我们</span>
				</li>
				<li @click="address">
					<img src="../../assets/images/address.png" /> 
					<span>地址管理</span>
				</li>
				<li @click="unload">
					<img src="../../assets/images/set.png" /> 
					<span>设置</span>
				</li>
			</ul>
		</div>
    <Footers :active="3"></Footers>
  </div>
</template>

<script>
import Footers from '@/component/footer'
import {Col,Icon,Toast} from 'vant';
export default {
  data() {
    return {
			order_item:[
				{name:"待付款",img:require("../../assets/images/icon01.png")},
				{name:"待发货",img:require("../../assets/images/icon02.png")},
				{name:"待收货",img:require("../../assets/images/icon03.png")},
				{name:"待评价",img:require("../../assets/images/icon04.png")},
			],
			user_id:localStorage.getItem("user_id"),
			photo:'',
			name:'',
    }
  },
	components: {
  	Footers,
		[Col.name]: Col,
		[Icon.name]: Icon,
		[Toast.name]:Toast
  },
  computed: {
		
  },
	created(){
		if(this.user_id){
			this.person_info();
		}
	},
  methods: {
		// 用户信息
    person_info(){
			this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=gerenziliao',{user_id:this.user_id}).then((response) => {
				console.log(response);
				if(response.code==0){
					this.photo=response.data.user_img;
					this.name=response.data.user_name;
				}
			})
		},
		// 登录
		login(){
			this.$router.push({
				path:"/login"
			})
		},
		// 订单
		order(){
			this.$router.push({
				path:"/"
			})
		},
		// 地址
		address(){
			this.$router.push({
				path:"/myAddress"
			})
		},
		// 待开发
		unload(){
			Toast('开发中');
		}
  }
};
</script>

<style lang="less">
	.top{
		position: relative;
		height: 165px;
		.top_img{
			width: 100%;
			height: 165px;
		}
		.person_info{
			position: absolute;
			left: 10px;
			top: 20px;
			img{
				height: 60px;
				width: 60px;
				margin-top: 36px;
				border-radius: 50%;
				float: left;
			}
			.person_msg{
				font-size: 14px;
				color: #ffffff;
				margin-top: 50px;
				display: inline-block;
				margin-left: 10px;
				i{
					font-style: normal;
				}
			}
		}
	}
	.order{
		font-size: 13px;
		text-align: center;
		.title{
			font-size: 14px;
			height: 45px;
			line-height: 45px;
			text-align: left;
			border-bottom: 1px solid #F4F4F4;
			padding: 0 10px;
			.van-icon{
				float: right;
				margin-top: 16px;
			}
		}
		.order-list{
			padding: 0 10px;
			padding-top: 10px;
			border-bottom: 8px solid #f4f4f4;
			height: 60px;
			img{
				width: 22px;
				margin-bottom: 5px;
			}
		}
	}
	.other{
		padding-bottom: 50px;
	}
	.other ul li{
		height: 45px;
		line-height: 45px;
		padding: 0 10px;
		border-bottom: 1px solid #F4F4F4;
		font-size: 14px;
		img{
			height: 20px;
			margin-right: 10px;
			vertical-align: text-bottom;
		}
	}
	.login div{
		margin-top: 7px;
	}
</style>
