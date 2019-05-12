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
				<input type="number" placeholder="请输入您注册的手机号" v-model="phone"/>
			</div>
			<div class="cell">
				<span>密码</span>
				<input type="password" placeholder="请输入您的登录密码6-12位" v-model="pwd"/>
			</div>
			<van-button round type="primary" class="submit" @click="submit">登录</van-button>
			<p @click="goTo">忘记密码?</p>
		</div>
  </div>
</template>

<script>
import {NavBar,Button,Toast} from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Toast.name]:Toast
  },

  data() {
    return {
      goods: {
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
      },
      phone:"",
      pwd:""
    };
  },

  methods: {
    onClickLeft() {
//    Toast('返回');
    },
    onClickRight() {
			this.$router.push({path:"/register"})
    },
    goTo(){
    	this.$router.push({path:"/password"})
    },
    submit(){
      //get请求
      let _this = this;
    	this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=login',{phone:_this.phone,Pwd:_this.pwd}).then((res) => {
    	    console.log(res)
          if(res.code==0){
            localStorage.setItem("admin_id",res.admin_id);
            localStorage.setItem("is_vip",res.is_vip);
            localStorage.setItem("rank",res.rank);
            localStorage.setItem("user_id",res.user_id);
            Toast('登陆成功');
            this.$router.push({path:"/index"});
          }else{
            Toast('登录失败，请稍后重试');
          }
      })
    }
  },
  created(){
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
	.login-box p{
		color: #999999;
		font-size: 14px;
		text-align: center;
		margin-top: 200px;
	}
</style>
