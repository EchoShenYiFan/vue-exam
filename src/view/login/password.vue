<template>
  <div class="container">
    <van-nav-bar
		  title="忘记密码"
		  left-arrow
		  @click-left="onClickLeft"
		></van-nav-bar>
		<div class="register-box">
			<div class="cell">
				<span>+86</span>
				<input type="number" placeholder="请输入您的手机号"/>
			</div>
			<div class="cell">
				<input type="password" placeholder="请输入您的验证码"/>
				<span class="code">发送验证码</span>
			</div>
			
			<van-button round type="primary" class="submit">确认提交</van-button>
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
			
    },
    onClickRight() {
			this.$router.push({path:"/login"})
    }
  },
  created(){
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
		margin-top: 40px;
		margin-bottom: 20px;
	}
	.register-box{
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
		font-size: 16px;
		color: #333333;
	}
	.cell input{
		width: 80%;
		border: 0;
	}
	.submit{
		width: 100%;
		height: auto;
		margin: 300px auto 0;
	}
	.van-nav-bar__title{
		color: #07c160;
	}
	.code{
		width: 140px !important;
		height: 15px;
		background-color: #07c160;
		color: #FFFFFF !important;
		padding: 10px 0;
		text-align: center;
		border-radius: 5px;
	}
	.register-box p{
		color: #999;
		font-size: 14px;
	}
	.register-box p>font{
		color: #07c160;
		cursor: pointer;
	}
</style>
