import Vue from 'vue'
import App from './App.vue'



import TypeNav from "@/components/TypeNav/index.vue"
import Carousel from "@/components/Carousel/index.vue"
import Pagination from "@/components/Pagination/index.vue"
import { Button ,MessageBox} from 'element-ui';
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import VueLazyload from 'vue-lazyload'

//引入路由
import router from '@/router'
//引入store
import store from "@/store"

import mock from "@/mock/mockServe.js"

import "swiper/css/swiper.css"
import * as API from "@/api/index.js"


Vue.config.productionTip = false

import atm from "@/assets/aoteman.webp"

Vue.use(VueLazyload, {
  loading: atm,
})

new Vue({
  render: h => h(App),
  //配置全局事件总线
  beforeCreate(){
	  Vue.prototype.$bus = this
	   Vue.prototype.$API = API
  },
  // 配置路由
  router,
  //注册仓库 组件实例化对象身上就会多一个$store属性
  store
}).$mount('#app')



// git提交代码
// 1.git clone （然后将所传代码放入当前文件夹中）
// 2.git add .
// 3.git commit -m "add"
// 4. git push

// git config --global http.sslVerify "false"






