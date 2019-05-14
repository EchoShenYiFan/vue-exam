<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" title="地址管理" class="nav-bar"></van-nav-bar>
    <!--<van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />-->
    <div class="address_list" v-if="list.length>0">
    	<div class="address_item" v-for="(value,key) in list" :key="key"> 
    		<div class="name_phone">
    			<span class="name">{{value.consignee}}</span>
    			<span class="phone">{{value.mobile}}</span>
    		</div>
    		<div class="address">{{value.province + value.city + value.district + value.address}}</div>
    		<div class="address_edit">
    			 <span class="moren"> <!-- @click="setDefault(address_id)" -->
						<van-checkbox v-model="value.checked" checked-color="#07c160">默认地址</van-checkbox>
    			</span>
    			<span class="edit_del">
    				<i class="edit" @click="onEdit(1,value.address_id)"><img src="../../assets/images/bianji.png"/>编辑</i>
    				<i class="del" @click="onDel(value.address_id)"><img src="../../assets/images/shanchu.png"/>删除</i>
    			</span>
    		</div>
    	</div> 
    </div>
    <div class="add_address">
    	<span @click="onEdit(1,'')">+ 新增地址</span>
    </div>
  </div>
</template>

<script>
import {NavBar, AddressList, Radio, Dialog,Toast ,Checkbox} from 'vant';
//Vue.use(AddressList);
export default {
  components: {
  	[NavBar.name]:NavBar,
  	[AddressList.name]:AddressList,
		[Radio.name]:Radio,
		[Dialog.name]:Dialog,
		[Toast.name]:Toast,
		[Checkbox.name]:Checkbox,
  },
  data() { 
    return { 
			user_id:localStorage.getItem("user_id"),
			list: [],
			checked:false
    }
  },
	created(){
		let taht=this;
		this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=findaddress',{"user_id":"1"}).then((response) => {
	    console.log(response)
			this.list=response.data;
			for(var i in response.data){
				if(response.data[i].is_default==0){
					this.list[i].checked=false;
				}else{
					this.list[i].checked=true;
				}
			}
		})
	},
	methods: {
    onClickLeft(){
        console.log(1111111111);
        // this.$router.push({path:"/good-classes"})
        this.$router.go(-1);
		},
		// 编辑
    onEdit(type, address_id) {
    	this.$router.push({
				path:"/editAddress",
				query:{
          type:type,
					address_id:address_id
        }
			})
		},
		// 删除
		onDel(address_id){
			let that=this;
			Dialog.confirm({
				title: '',
				message: '确认要删除此收货地址吗？'
			}).then(() => {
				// on confirm
				this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=DeleteReceiptAddress',{"user_id":this.user_id,"address_id":address_id}).then((response) => {
					console.log(response);
					if(response.code==0){
						Toast(response.data);
						for (let i = 0;i<that.list.length;i++){
							let obj = that.list[i];
							console.log(obj);
							if (obj.address_id==address_id){
								that.list.splice(i,1);
								i--
							}
						}
					}
				})
			}).catch(() => {
				// on cancel
			});
		},
		// 设为默认地址
		// setDefault(address_id){
		// 	let that=this;
		// 	this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=morendizhi',{"user_id":this.user_id,"address_id":address_id}).then((response) => {
		// 			console.log(response);
		// 			if(response.code==0){
		// 				Toast(response.data);
		// 				that.checked=true;
		// 			}
		// 		})
		// }
  }
}
</script>

<style lang="less">
	html,body,#app{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		font-family: "微软雅黑";
		.van-nav-bar .van-icon{
			color: #000000;
		}
		.van-nav-bar__title{
			color:#09B674;
		}
		.address_item{
	  	background: #FFFFFF;
	  	padding: 10px 10px;
	  	font-size: 14px;
	    border-bottom: 8px solid #f5f5f5;
	  	.name_phone{
	  		height: 35px;
	  		line-height: 35px;
	  		.phone{
	  			margin-left: 10px;
	  		}
	  	}
	  	.address{
	  		color: #838383;
	  		margin-bottom: 10px;
	  	}
	  	.address_edit{
	  		.moren{
					display: inline-block;
					.van-checkbox__icon{
						height:16px;
						line-height:16px;
						.van-icon{
							width:16px;
							height:16px;
						}
					}
		  	}
		  	.edit_del{
		  		// display: inline-block;
		  		float: right;
		  		i{
		  			font-style: normal;
		  			img{
			  			width: 13px;
			  			margin-right: 5px;
			  			vertical-align: middle;
			  		}
		  		}
		  		.del{
			  			padding-left: 10px;
			  		} 
		  	}
	  	}
	  }
	  .add_address{
	  	position: fixed;
	  	bottom: 50px;
	  	left: 0;
	  	width: 100%;
	  	span{
	  		display: block;
	  		margin: 0 auto;
	  		width: 90%;
	  		height: 50px;
	  		line-height: 50px;
	  		text-align: center;
	  		background: #09B674;
	  		color: #FFFFFF;
	  		border-radius: 30px;
	  	}
		}
		.van-checkbox__icon--round .van-icon{
			border-radius: 3px;
		}
		.van-checkbox__icon--checked ~ .van-checkbox__label{
	  		color: #09B674; 
		}
	}
  
</style>
