import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
  	path: '/home',  	
    name: 'home',
    component: (resolve) => require(['@/view/index/index.vue'], resolve),
    meta: {
      title: '首页'
    }
  },
  {
  	path: '/goodClass',  	
    name: 'goodClass',
    component: (resolve) => require(['@/view/index/good-classes.vue'], resolve),
    meta: {
      title: '分类'
    }
  },
  {
  	path: '/car',  	
    name: 'car',
    component: (resolve) => require(['@/view/index/car.vue'], resolve),
    meta: {
      title: '购物车'
    }
  },
  {
  	path: '/mine',  	
    name: 'mine',
    component: (resolve) => require(['@/view/index/mine.vue'], resolve),
    meta: {
      title: '我的'
    }
  },
  {
  	path: '/login',  	
    name: 'login',
    component: (resolve) => require(['@/view/login/login.vue'], resolve),
    meta: {
      title: '登录'
    }
  },
  {
  	path: '/register',  	
    name: 'register',
    component: (resolve) => require(['@/view/login/register.vue'], resolve),
    meta: {
      title: '注册'
    }
  },
  {
  	path: '/password',  	
    name: 'password',
    component: (resolve) => require(['@/view/login/password.vue'], resolve),
    meta: {
      title: '忘记密码'
    }
  },
  {
  	path: '/editPassword',  	
    name: 'editPassword',
    component: (resolve) => require(['@/view/login/editPassword.vue'], resolve),
    meta: {
      title: '修改登录密码'
    }
  },
  {
  	path: '/goodList',  	 
    name: 'goodList',
    component: (resolve) => require(['@/view/index/good-list.vue'], resolve),
    meta: {
      title: '商品列表'
    }
  },
  {
  	path: '/myAddress',  	 
    name: 'myAddress',
    component: (resolve) => require(['@/view/user/my_address.vue'], resolve),
    meta: {
      title: '地址管理'
    }
  },
  {
  	path: '/editAddress',  	 
    name: 'editAddress',
    component: (resolve) => require(['@/view/user/edit_address.vue'], resolve),
    meta: {
      title: '地址管理'
    }
  },
  {
    path: '/person',    
    name: 'person',
    component: (resolve) => require(['@/view/user/person.vue'], resolve),
    meta: {
      title: '个人资料'
    }
  },  
  {
    path: '/orderlist',    
    name: 'orderlist',
    component: (resolve) => require(['@/view/user/orderlist.vue'], resolve),
    meta: {
      title: '订单列表页'
    }
  },
  {
    path: '/index',    
    name: 'index',
    component: (resolve) => require(['@/view/goods/index.vue'], resolve),
    meta: {
      title: '商品详情页'
    }
  },
  {
    path: '/submitOrder',    
    name: 'submitOrder',
    component: (resolve) => require(['@/view/cart/submitOrder.vue'], resolve),
    meta: {
      title: '提交订单'
    }
  },  
  {
    path: '/paySucess',    
    name: 'paySucess',
    component: (resolve) => require(['@/view/cart/paySucess.vue'], resolve),
    meta: {
      title: '支付成功'
    }
  },
  {
    path: '/tiXian',    
    name: 'tiXian',
    component: (resolve) => require(['@/view/cart/tiXian.vue'], resolve),
    meta: {
      title: '提现'
    }
  },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
