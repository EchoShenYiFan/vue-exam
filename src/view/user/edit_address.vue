<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft"title="地址管理" right-text="保存" class="nav-bar" @click-right="onSave"></van-nav-bar>
    <van-address-edit
		  :area-list="areaList"
		  show-set-default
		  show-search-result
		  :search-result="searchResult"
		  @change-detail="onChangeDetail"
		/>
  </div>
</template>

<script>
import {NavBar, AddressEdit, Area} from 'vant';
//Vue.use(AddressList);
export default {
  components: {
  	[NavBar.name]:NavBar,
  	[AddressEdit .name]:AddressEdit,
  	[Area .name]:Area 
  },
  data() {
    return {
      areaList,
      searchResult: []
    }
  },
	created(){
//	this.$fetch('http://quhuiguoshi.zzqcnz.com/mobile/jiekou.php?act=goods_list',{"cat_id":"202","page":"1","num":"10"}).then((response) => {
//	    console.log(response)
//	    this.list=response.data;
//		})
	},
	methods: {
    onClickLeft(){
        console.log(1111111111);
        this.$router.push({path:"/good-classes"})
        // this.$router.go(-1);
    },
    onSave() {
      Toast('save');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
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
		.van-nav-bar .van-icon,.van-nav-bar__text{
			color: #000000;
		}
	}
</style>
