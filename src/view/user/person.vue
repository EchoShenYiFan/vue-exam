<template>
    <div>

        <van-nav-bar
            title="个人资料"
            left-text="返回"
            right-text="保存"
            left-arrow
            @click-left="onClickLeft"
            @click-right="submit"
        />
        <van-cell-group>
            <van-cell title="头像" is-link>
                <template>
                    <slot>
                        <img :src="headimg" style="border-radius:50%;width:3.6rem;height:3.6rem;">
                        <van-uploader :after-read="onRead" style="position: absolute;top:0;right:0;width:3.6rem;height:3.6rem;">
                            
                        </van-uploader>
                    </slot>
                </template>
            </van-cell>

        </van-cell-group>      
        <van-field placeholder="请输入您的昵称" label="昵称" type="text" input-align="right"/>
        <van-cell title="性别" :value="sex" is-link @click="showBase=!showBase" />
        <van-popup v-model="showBase" position="bottom" :overlay="true" v-if="showBase">
            <van-picker show-toolbar :columns="columns" @change="onChange" @confirm="onConfirm"/>
        </van-popup>

        <van-field placeholder="请输入您的电话号码" label="电话号码" type="text" input-align="right"/>
        <van-field placeholder="请输入您的个性签名请输入您的个性签名请输入您的个性签名请输入您的个性签名请输入您的个性签名请输入您的个性签名" label="个性签名" type="text" input-align="right" autosize/>      
    </div>
</template>

<script>
import axios from 'axios';
import { Row, Col, Icon, Cell, CellGroup, NavBar, Field, Picker, Popup, Toast, Uploader } from 'vant';
export default {
    components: {
        [Row.name]: Row,
        [Uploader.name]: Uploader,
        [Picker.name]: Picker,
        [Popup.name]: Popup,
        [Toast.name]: Toast,
        [Field.name]: Field,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell, 
        [NavBar.name]: NavBar,
        [CellGroup.name]: CellGroup
    },
    data() {
        return {
            showBase: false,
            alias: '',
            sex: '男',
            mobile_phone: '',
            columns: ['男', '女'],
            headimg: "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg"
        }
    },
    mounted(){
        let user_id = localStorage.getItem("user_id");
        axios.post('http://www.nongzi.com/mobile/jiekou.php?act=gerenziliao', {
            user_id: '1'
        })
        .then(function (response) {
            console.log(response);
            if(response.status==20){
                this.alias = response.data.data.alias;
                this.sex = response.data.data.alias;
                this.mobile_phone = response.data.data.mobile_phone;
                this.headimg = response.data.data.headimg;
            }else{
                Toast('获取信息失败');
            }
          
        })
        .catch(function (error) {
            console.log(error);
        });        
    },
    methods: {
        onClickLeft() {
          that.$router.go(-1);
        },
        onChange(picker, value, index) {
          // Toast(`当前值：${value}, 当前索引：${index}`);
        },
        onConfirm(picker, value) {
            console.log(picker,value);
            this.sex = picker;
            this.showBase=!this.showBase;

        },
        onRead(file) {
            console.log(file);
            var that = this;
            this.headimg = file.content;
            axios.get('http://www.nongzi.com/mobile/jiekou.php?act=file_tx', {
                params: {
                    user_id: '1',
                    images: that.headimg
                }
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });           
        },
        onClickRight() {
            let that = this;
            axios.post('http://www.nongzi.com/mobile/jiekou.php?act=edit_info', {
                user_id: '1',
                alias: that.alias,
                sex: that.sex,
                mobile_phone: that.mobile_phone
            })
            .then(function (response) {
                console.log(response);
                if(response.status==20){
                    Toast('修改资料成功~');
                    // that.$router.go(-1);
                }else{

                } 
            })
            .catch(function (error) {
                console.log(error);
            });            
        }                        
    }    
};
</script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
