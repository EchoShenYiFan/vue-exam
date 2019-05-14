<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" :title="title" right-text="保存" class="nav-bar" @click-right="onSave"></van-nav-bar>
    <div class="warp">
			<ul>
				<li>
					<span>收货人</span>
					<input v-model="consignee" type="text" placeholder="请填写收货人"/>
				</li>
				<li>
					<span>手机号码</span>
					<input v-model="mobile" type="text" placeholder="请填手机号码"/>
				</li>
				<li>
					<span>所属地区</span>
					<label>
            <div>
							<ul>
								<li @click="openProvince">
									<span>{{provincename}}</span>
                  <van-icon :name="show1==true?'arrow-up':'arrow-down'"/>
								</li>
								<li @click="opencity">
									<span>{{cityname}}</span>
                  <van-icon :name="show2==true?'arrow-up':'arrow-down'"/>
								</li>
								<li @click="opendistrict">
									<span>{{districtname}}</span>
                  <van-icon :name="show3==true?'arrow-up':'arrow-down'"/>
								</li>
							</ul>
						</div>
					</label>
				</li>
				<li class="address_details">
					<span>详细地址</span>
					<textarea v-model="address" placeholder="请填写详细地址"></textarea>
				</li>
			</ul>
			<div class="default">
        <span class="moren" @click="moren">
          <van-checkbox v-model="checked" checked-color="#07c160">设为默认</van-checkbox>
        </span>
			</div>
      <div>
				<van-popup position="bottom" :overlay="true" v-model="show1" v-if="show1">
					<van-picker show-toolbar :columns="columns" value-key="region_name"  @cancel="onCancel" @confirm="onConfirm"/>
				</van-popup>
				
				<van-popup position="bottom" :overlay="true" v-model="show2" v-if="show2">
					<van-picker show-toolbar :columns="columns1" value-key="region_name"  @cancel="onCancel1" @confirm="onConfirm1"/>
				</van-popup>
				
				<van-popup position="bottom" :overlay="true" v-model="show3" v-if="show3">
					<van-picker show-toolbar :columns="columns2" value-key="region_name"  @cancel="onCancel2" @confirm="onConfirm2"/>
				</van-popup>
			</div>
		</div>
  </div>
</template>

<script>
import {NavBar,Area,Checkbox,Toast,Popup,Picker,Icon} from 'vant';
export default {
  components: {
  	[NavBar.name]:NavBar,
    [Area.name]:Area,
    [Checkbox.name]:Checkbox,
    [Toast.name]:Toast,
    [Popup.name]:Popup,
    [Picker.name]:Picker,
    [Icon.name]:Icon
  },
  data() {
    return {
      title:'',
      areaList:[],
      list:'',
      checked:true,
      consignee:'',
      mobile:'',
      province:'11',
      city:'149',
      district:'1253',
      pca_address:'',
      address:'',
      user_id:localStorage.getItem("user_id"),
      address_id:this.$route.query.address_id,
      default_moren:1,
      provincename:'省',
      cityname:'市',
      districtname:'县',
      show1: false,
      show2: false,
      show3: false,
      columns: [],
      columns1:[],
      columns2:[]
    }
  },
	created(){
    console.log(this.user_id);
    console.log(this.address_id);
    this.get_province();
    if(this.address_id){
      this.edit_address();
      this.title="编辑地址";
    }else{
      this.title="新增地址";
      console.log(22222222)
    }
    if(this.address_id){
      this.edit_address();
      console.log(this.list)
    }else{
      console.log(22222222);
    }
	},
	methods: {
    //获取省id
    get_province(){
      const that = this;
      this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=get_province').then((response) => {
        if (response.code === 0) {
          // console.log(response);
          that.columns=response.data;
        }
      })
    },
    //获取市id
    get_city(region_id){
      const that = this;
      this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=get_city_district',{"region_id":region_id}).then((response) => {
        if (response.code === 0) {
          // console.log(response);
          that.columns1=response.data;
          that.city=response.data[0].region_id;
        }
      })
    },
    //获取县id
    get_district(region_id){
      const that = this;
      this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=get_city_district',{"region_id":region_id}).then((response) => {
        if (response.code === 0) {
          // console.log(response);
          that.columns2=response.data;
        }
      })
    },
    //显示弹出层
    openProvince(){
      this.show1 = true;
    },
    opencity(){
      if(this.province){
        this.show2 = true;
      }
    },
    opendistrict(){
      if(this.city){
        this.show3 = true;
      }
    },
    onConfirm(value) {
      this.provincename=value.region_name;
      this.province=value.region_id;
      this.get_city(value.region_id);
      this.show1 = false;
    },
    onCancel() {
      this.show1 = false;
    },
    onConfirm1(value) {
      this.cityname=value.region_name;
      this.city=value.region_id;
      this.get_district(value.region_id);
      this.show2 = false;
    },
    onCancel1() {
      this.show2 = false;
    },
    onConfirm2(value) {
      this.districtname=value.region_name;
      this.district=value.region_id;
      this.show3 = false;
    },
    onCancel2() {
      this.show3 = false;
    },
    // 返回
    onClickLeft(){
        // console.log(1111111111);
        this.$router.go(-1);
    },
    // 编辑地址时 展示信息
    edit_address(){
      console.log(this.user_id);
      const that = this
      this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=getOneAddress',{"user_id":this.user_id,"address_id":this.address_id}).then((response) => {
        console.log(response);
        if(response.code==0){
          that.consignee=response.data.consignee;
          that.mobile=response.data.mobile;
          that.province=response.data.province;
          that.city=response.data.city;
          that.district=response.data.district;
          that.provincename=response.data.pca_address.split(' ')[0];
          that.cityname=response.data.pca_address.split(' ')[1];
          that.districtname=response.data.pca_address.split(' ')[2];
          that.address=response.data.address;
          that.default_moren=response.data.is_default;
          if(response.data.is_default==1){
            that.checked=true;
          }else{
            that.checked=false;
          }
        }
        
      })
    },
    // 保存
    onSave() {
      const that = this;
      if(!this.consignee){
        Toast('请填写收货人');
        return;
      }
      if(!(/^1[3-9][0-9]{9}$/.test(this.mobile))){
        Toast('请填手机号码');
        return;
      }
      if(!this.province){
        Toast('请选择所属地区');
        return;
      }
      if(!this.address){
        Toast('请填写详细地址');
        return;
      }
      let params;
      if(!this.address_id){
        params = {
          user_id: this.user_id,
          consignee: this.consignee,
          mobile: this.mobile,
          province: this.province,
          city: this.city,
          district: this.district,
          address: this.address,
          is_default: this.default_moren,
        },
        this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=InsertReceiptAddress',params).then((response) => {
          // console.log(response);
          if(response.code==0){
            Toast(response.data);
            // this.$router.push({path:"/myAddress"})
            this.$router.go(-1);
          }
        })
      }else{
        params = {
          user_id: this.user_id,
          address_id:this.address_id,
          consignee: this.consignee,
          mobile: this.mobile,
          province: this.province,
          city: this.city,
          district: this.district,
          address: this.address,
          is_default: this.default_moren,
        },
        this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=UpdateReceiptAddress',params).then((response) => {
          // console.log(response);
          if(response.code==0){
            // Toast(response.data);
            this.$router.go(-1);
          }
        })
      }
    },
    // 是否设置为默认地址
    moren(){
      if(this.default_moren==1){
        this.default_moren=0;
      }else{
        this.default_moren=1;
      }
      // console.log(this.default_moren);
    }
  }
}
</script>

<style lang="less">
	html,body,#app{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		font-family: "微软雅黑";
		.van-nav-bar .van-icon,.van-nav-bar__text{
			color: #000000;
    }
    .van-nav-bar__title{
			color:09B674;
		}
    .warp{
      font-size:14px;
      ul li{
        width: 96%;
        height: 45px;
        line-height: 45px;
        margin: 0 2%;
        span{
          width: 25%;
          // display: inline-block;
          color: #101010;
          float: left;
        }
        input{
          font-size: 14ppx;
          border: none;
        }
        label{
          width: 75%;
          float: left;
          // display: inline-block;
          div{
            width: 100%;
            ul li{
              position: relative;
              width: 29%;
              float: left;
              select{
                width: 100%;
                border: none;
              }
            }
          }	
          span{
            display: inline-block;
            width: calc(100% - 15px);
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
            i{
              font-style: normal;
              overflow: hidden;
              white-space: nowrap;
            }
          }
          
          em{
            display: inline-block;
            transform: rotate(180deg);
          }
        }	
      }
      ul li.address_details{
        height: inherit;
        textarea{
          width: 98%;
          padding-left: 5px;
          color: #555;
          background: #fafafa;
          border: none;
        }
      }
      .default{
        width:96%;
        margin:0 auto;
        .van-checkbox__icon{
          height:16px;
          line-height:16px;
          .van-icon{
            width:16px;
            height:16px;
          }
        }
        .van-checkbox__icon--round .van-icon{
          border-radius:3px;
        }
      }
    }
  }
</style>
