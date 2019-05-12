<template>
	<van-tabbar v-model="activeIndex">
	  <van-tabbar-item v-for="(item,index) in item" @click="goto(item.path)">
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
	props: ['active'],
	data () {
	    return {
				activeIndex:this.active,
		    item: [
		    	{
			        normal: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MjVhYTdmMi0yNjkwLWFlNDctYWU1NC0zOWExZjEzNjExODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzFGMjhGM0U3NENEMTFFOTgzODVFNDMyNDUzMDk5NzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzFGMjhGM0Q3NENEMTFFOTgzODVFNDMyNDUzMDk5NzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmM1Mjg0MzkwLWM0OTEtMDY0Ni1iMmM1LTJmMTIyY2M1ZmQ3ZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MjVhYTdmMi0yNjkwLWFlNDctYWU1NC0zOWExZjEzNjExODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6hbw+MAAADMElEQVR42uyZW0gUURjHZ9fFXCsUZWFBU1osQTOMoCgQrDSky0M9BEEQJGwhBFFEQXd7KCIIzF4qCOrBhy4U3ehqBEUPRlcxKmszM8qNiMrItPof+o8cDjvrzO7M7BL7wQ/PN5wZfjtz5pzvjJ5wOKzZGLvABhABK8F9uy7stVFyN9gOxoJKcBVUp5voNrBVOVZA2ap0EV0PmqV8P3jMdgDcABWpFm2imB77wEZQBzoV2fJUia4CrcDDvAVsYrsfzAPPmAcpW+a26HJwWJI8CtYpfT5Q9gXzItAOQm6JLgUnQBbz42A1+BOjbx+YC7qZF4OboNRp0YWgTZI8ySHwO845vZSNMC+lbLFTouIFOQWymZ8DK8CwiXN7KPuWeYjDoMhu0RqK5TC/ApaBQQs/9DVle5mX8QUL2iU6E5wHucxvcZwOJjC+X/IFe8+8nLKBZEWn8e7lMb8LFoGBJKa155T9yLzCjGw80SmKZAdYAL7bsJp1cRj0M6/icltgVXQyuCb9SrEkNoAvNhYxnXxBo8yrKZtnVjSkDPIuXvCTZn+IGzAffGY+3UhWFRVz23VpjhODv156RE7EA8rqT2sGuATGG4kGORFPZP6Gg/6d5nx0KENrNrgozTQjogHeyUnSalLHidqtuMeV75s0d4/ICtF8jotKqfKp52N3O+5QVp/+asFZ4PfSWt8yRJXyLBVxGyyWZMVNOy1Ep/LAMMfJEy31Id6VJeAX8wYfxWaxIjqmLI2idGuUthZOhR+8AmOU43qV1iNED1BUM9iITXBBNHuU4qTNx5pyLdgJChOoZ+dwkfDE6RfhImJUEo6T2kPgK9vi7xmww8cDrUSPPWCzibtwmWu2mWjnOxCr6spSpqkaOzd3TRYkNd75NSb6xSwffUmI1ip7+ahBv0JuofVJvGWU6/6wW1Q+92CcVaxEEvWnw7cnRyMjmhHNiGZEM6L/h6g30Q4/pXa+C6KNUrvPylr/UGqLr8nNMfoEExASFVR3DIcSaUdxyIroBe3fP7PEl4scLcHP2TEid5Rr7QWPrDz6IX69OGLiK4moH+N9OBswKt0YYgP3lPXtFqNOfwUYAAI8pxoiJm30AAAAAElFTkSuQmCC',
			        active: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MjVhYTdmMi0yNjkwLWFlNDctYWU1NC0zOWExZjEzNjExODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzFGMjhGM0U3NENEMTFFOTgzODVFNDMyNDUzMDk5NzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzFGMjhGM0Q3NENEMTFFOTgzODVFNDMyNDUzMDk5NzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmM1Mjg0MzkwLWM0OTEtMDY0Ni1iMmM1LTJmMTIyY2M1ZmQ3ZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MjVhYTdmMi0yNjkwLWFlNDctYWU1NC0zOWExZjEzNjExODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6hbw+MAAADMElEQVR42uyZW0gUURjHZ9fFXCsUZWFBU1osQTOMoCgQrDSky0M9BEEQJGwhBFFEQXd7KCIIzF4qCOrBhy4U3ehqBEUPRlcxKmszM8qNiMrItPof+o8cDjvrzO7M7BL7wQ/PN5wZfjtz5pzvjJ5wOKzZGLvABhABK8F9uy7stVFyN9gOxoJKcBVUp5voNrBVOVZA2ap0EV0PmqV8P3jMdgDcABWpFm2imB77wEZQBzoV2fJUia4CrcDDvAVsYrsfzAPPmAcpW+a26HJwWJI8CtYpfT5Q9gXzItAOQm6JLgUnQBbz42A1+BOjbx+YC7qZF4OboNRp0YWgTZI8ySHwO845vZSNMC+lbLFTouIFOQWymZ8DK8CwiXN7KPuWeYjDoMhu0RqK5TC/ApaBQQs/9DVle5mX8QUL2iU6E5wHucxvcZwOJjC+X/IFe8+8nLKBZEWn8e7lMb8LFoGBJKa155T9yLzCjGw80SmKZAdYAL7bsJp1cRj0M6/icltgVXQyuCb9SrEkNoAvNhYxnXxBo8yrKZtnVjSkDPIuXvCTZn+IGzAffGY+3UhWFRVz23VpjhODv156RE7EA8rqT2sGuATGG4kGORFPZP6Gg/6d5nx0KENrNrgozTQjogHeyUnSalLHidqtuMeV75s0d4/ICtF8jotKqfKp52N3O+5QVp/+asFZ4PfSWt8yRJXyLBVxGyyWZMVNOy1Ep/LAMMfJEy31Id6VJeAX8wYfxWaxIjqmLI2idGuUthZOhR+8AmOU43qV1iNED1BUM9iITXBBNHuU4qTNx5pyLdgJChOoZ+dwkfDE6RfhImJUEo6T2kPgK9vi7xmww8cDrUSPPWCzibtwmWu2mWjnOxCr6spSpqkaOzd3TRYkNd75NSb6xSwffUmI1ip7+ahBv0JuofVJvGWU6/6wW1Q+92CcVaxEEvWnw7cnRyMjmhHNiGZEM6L/h6g30Q4/pXa+C6KNUrvPylr/UGqLr8nNMfoEExASFVR3DIcSaUdxyIroBe3fP7PEl4scLcHP2TEid5Rr7QWPrDz6IX69OGLiK4moH+N9OBswKt0YYgP3lPXtFqNOfwUYAAI8pxoiJm30AAAAAElFTkSuQmCC',
			        path:'/home',
			        title:'首页'
			    },
			    {
			        normal: '../assets/img/mine_05.png',
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
	}
}
</script>

<style scoped  lang="less">
.footer{
	position: fixed;
	bottom: 0;
}
</style>
