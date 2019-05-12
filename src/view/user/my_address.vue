<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft"title="地址管理" class="nav-bar"></van-nav-bar>
    <!--<van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />-->
    <div class="address_list">
    	<div class="address_item">
    		<div class="name_phone">
    			<span class="name">张三</span>
    			<span class="phone">13000000000</span>
    		</div>
    		<div class="address">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</div>
    		<div class="address_edit">
    			<span class="moren">
    				<van-radio checked-color="#07c160">默认地址</van-radio>
    			</span>
    			<span class="edit_del">
    				<i class="edit"><img src="../../assets/images/bianji.png"/>编辑</i>
    				<i class="del"><img src="../../assets/images/shanchu.png"/>删除</i>
    			</span>
    		</div>
    	</div>
    	<div class="address_item">
    		<div class="name_phone">
    			<span class="name">张三</span>
    			<span class="phone">13000000000</span>
    		</div>
    		<div class="address">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</div>
    		<div class="address_edit">
    			<span class="moren">
    				<van-radio checked-color="#07c160">默认地址</van-radio>
    			</span>
    			<span class="edit_del">
    				<i class="edit"><img src="../../assets/images/bianji.png"/>编辑</i>
    				<i class="del"><img src="../../assets/images/shanchu.png"/>删除</i>
    			</span>
    		</div>
    	</div>
    </div>
    <div class="add_address">
    	<span>+ 新增地址</span>
    </div>
  </div>
</template>

<script>
import {NavBar, AddressList, Radio } from 'vant';
//Vue.use(AddressList);
export default {
  components: {
  	[NavBar.name]:NavBar,
  	[AddressList.name]:AddressList,
  	[Radio.name]:Radio
  },
  data() {
    return {
      chosenAddressId: '1',
      list: [],
    }
  },
	created(){
		this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=findaddress',{"user_id":"1"}).then((response) => {
	    console.log(response)
	    this.list=response.data;
		})
	},
	methods: {
    onClickLeft(){
        console.log(1111111111);
        this.$router.push({path:"/good-classes"})
        // this.$router.go(-1);
    },
    onAdd() {
      Toast('新增地址');
    },

    onEdit(item, index) {
    	this.$router.push({path:"/edit_address"})
//    Toast('编辑地址:' + index);
    }
  }
};
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
		  	}
		  	.edit_del{
		  		display: inline-block;
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
	  		background: red;
	  		color: #FFFFFF;
	  		border-radius: 20px;
	  	}
	  }
	}
  
</style>
