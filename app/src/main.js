import Vue from 'vue'
import App from './App.vue'

import TypeNav from "@/components/TypeNav/index.vue"
import Carousel from "@/components/Carousel/index.vue"
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)

//引入路由
import router from '@/router'
//引入store
import store from "@/store"

import mock from "@/mock/mockServe.js"

import "swiper/css/swiper.css"

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  // 配置路由
  router,
  //注册仓库 组件实例化对象身上就会多一个$store属性
  store
}).$mount('#app')
