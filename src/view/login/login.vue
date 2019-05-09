<template>
  <div class="container">
    <van-nav-bar
		  title="登录"
		  right-text="立即注册"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		></van-nav-bar>
		<img :src="goods.thumb" class="avatar"/>
		<div class="login-box">
			<div class="cell">
				<span>账号</span>
				<input type="number" placeholder="请输入您注册的手机号"/>
			</div>
			<div class="cell">
				<span>密码</span>
				<input type="password" placeholder="请输入您注册的手机号"/>
			</div>
			<van-button round type="primary" class="submit">登录</van-button>
		</div>
  </div>
</template>

<script>
import {NavBar,Button} from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button
  },

  data() {
    return {
      goods: {
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
      }
    };
  },

  methods: {
    onClickLeft() {
//    Toast('返回');
    },
    onClickRight() {
//    Toast('按钮');
    }
  },
  created(){
  	this.onClickRight();
  	//get请求
//	this.$fetch('/api/v2/movie/top250',{'aaa':'aaa'}).then((response) => {
//	    console.log(response)
//	  })
  }
};
</script>

<style lang="less" scoped>
	.container{
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #ffffff;
	}
	.avatar{
		display: block;
		width: 80px;
		height: 80px;
		margin: auto;
		border-radius: 80px;
		margin-top: 100px;
		margin-bottom: 20px;
	}
	.login-box{
		width: 90%;
		height: auto;
		margin: 0 auto;
	}
	.cell{
		display: flex;
		justify-content: flex-start;
		padding: 20px 0;
		border-bottom: 1px solid #eee;
		margin-bottom: 10px;
	}
	.cell span{
		width: 15%;
		padding-top: 2px;
		font-size: 14px;
		color: #333333;
	}
	.cell input{
		width: 85%;
		border: 0;
	}
	.submit{
		width: 100%;
		height: auto;
		margin: 50px auto 0;
	}
	.van-nav-bar__text{
		color: #333;
	}
</style>
