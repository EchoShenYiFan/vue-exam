<template>
	<van-tabbar v-model="active">
	  <van-tabbar-item info="3" v-for="item in item" @click="goto(item.path)">
	    <span>{{item.title}}</span>
	    <img
	      slot="icon"
	      slot-scope="props"
	      :src="props.active ? item.active : item.normal"
	    >
	  </van-tabbar-item>
	</van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
	components: {
		[Tabbar.name]:Tabbar,
		[TabbarItem.name]:TabbarItem
  	},
	data () {
	    return {
		    item: [
		    	{
			        normal: '//img.yzcdn.cn/icon-normal.png',
			        active: '//img.yzcdn.cn/icon-active.png',
			        path:'/home',
			        title:'首页'
			    },
			    {
			        normal: '//img.yzcdn.cn/icon-normal.png',
			        active: '//img.yzcdn.cn/icon-active.png',
			        path:'/goodClass',
			        title:'分类'
			    },
			    {
			        normal: '//img.yzcdn.cn/icon-normal.png',
			        active: '//img.yzcdn.cn/icon-active.png',
			        path:'/car',
			        title:'购物车'
			    },
			    {
			        normal: '//img.yzcdn.cn/icon-normal.png',
			        active: '//img.yzcdn.cn/icon-active.png',
			        path:'/mine',
			        title:'我的'
			    }
		    ]
	    }
	},
	props: ['active'],
	computed:{
	},
	methods: {
	   	goto(path){
	   		this.$router.push({path:path})
	   	}
	},
	mounted () {
	},
	created(){
		this.$emit()
	}
}
</script>

<style scoped  lang="less">
.footer{
	position: fixed;
	bottom: 0;
}
</style>
