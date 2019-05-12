<template>
  <div class="container">
    <van-nav-bar
		  title=""
		  right-text="已有账号去登录"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		></van-nav-bar>
		<img :src="goods.thumb" class="avatar"/>
		<div class="register-box">
			<div class="cell">
				<span>账号</span>
				<input type="number" placeholder="请输入您注册的手机号" v-model="phone"/>
			</div>
			<div class="cell">
				<input type="number" placeholder="请输入您的验证码" v-model="yzm"/>
				<span class="code" @click="yzmClick">发送验证码</span>
			</div>
			<div class="cell">
				<span>密码</span>
				<input type="password" placeholder="请输入您的密码6-12位" v-model="pwd"/>
			</div>
			<div class="cell">
				<span>密码</span>
				<input type="password" placeholder="请再次输入您的密码6-12位" v-model="qrpwd"/>
			</div>
			<div class="cell">
				<span>邀请码</span>
				<input type="number" placeholder="请输入您的邀请码" v-model="yqm"/>
			</div>
			<van-button round type="primary" class="submit" @click="submit">注册</van-button>
			<p>点击注册表示已阅读并同意<font>《用户协议》</font></p>
		</div>
  </div>
</template>

<script>
import {NavBar,Button,Toast } from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Toast.name]:Toast
  },

  data() {
    return {
      phone:"",
      yzm:"",
      pwd:"",
      qrpwd:"",
      yqm:"",
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
    },
    yzmClick(){
      let _this = this;
      if(_this.phone==""){
        Toast('请输入手机号');
        return;
      }
      let params = {};
      params.phone = _this.phone;
      _this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=zcyanzhengma',params).then((res) => {
        if(res.code == 0){
          Toast('发送成功');
        }else{
          Toast('发送失败，请稍后重试');
        }
      })
    },
    submit(){
      let _this = this;
      if(_this.phone==""){
        Toast('请输入手机号');
        return;
      }
      if(_this.yzm==""){
        Toast('请输入验证码');
        return;
      }
      if(_this.pwd==""){
        Toast('请输入密码');
        return;
      }
      if(_this.qrpwd==""){
        Toast('请输入确认密码');
        return;
      }
      if(_this.pwd != _this.qrpwd){
        Toast('两次密码不一致');
        return;
      }
      // if(_this.yqm != _this.yqm){
      //   Toast('请输入邀请码');
      //   return;
      // }
      let params = {};
      params.phone = _this.phone;
      params.password = _this.pwd;
      params.tjm = _this.yqm;
      params.true_pwd = _this.qrpwd;
      this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=Register',params).then((res) => {
        console.log(res)
        if(res.code==0){
          Toast('注册成功');
          this.$router.push({path:"/login"})
        }else{
          Toast('注册失败，请稍后重试');
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
		font-size: 14px;
		color: #333333;
	}
	.cell input{
		width: 80%;
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
