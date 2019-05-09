import Vue from 'vue';
import App from './App';
import { router } from './router';
import axios from 'axios'
import {post,fetch,patch,put} from './request/http'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
