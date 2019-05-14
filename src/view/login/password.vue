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
				<input type="number" placeholder="请输入您的手机号" v-model="phone"/>
			</div>
      <div class="cell">
        <input type="password" placeholder="请输入您的验证码" v-model="yzm"/>
        <span class="code" @click="yzmClick">发送验证码</span>
      </div>
      <div class="cell">
				<span>原密码</span>
				<input type="number" placeholder="请输入您的密码" v-model="pwd"/>
			</div>
      <div class="cell">
				<span>新密码</span>
				<input type="number" placeholder="请确认您的新密码" v-model="newpwd"/>
			</div>

			<van-button round type="primary" class="submit" @click="submit">确认提交</van-button>
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
      phone:"",
      yzm:"",
      pwd:"",
      newpwd:""
    };
  },

  methods: {
    onClickLeft() {
      this.$router.push({path:"/login"})
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
        console.log(res)
      })
    },
    submit(){
      //get请求
      let _this = this;
      let params = {};
      params.phone = _this.phone;
      params.passwords = _this.pwd;
      params.oncePwd = _this.newpwd;
    	this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=ForgetPassword',params).then((res) => {
    	    if(res.code==0){
            Toast("修改成功");
            this.$router.push({path:"/login"});
          }else{
            Toast("修改失败，请稍后重试")
          }
      })
    }
  },
  created(){
  	//get请求
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
