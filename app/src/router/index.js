
//引入vue和vuerouter
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用vuerouter
Vue.use(VueRouter)
import routes from "./routes.js"



//配置路由
export default new VueRouter({
    routes:routes,
	//切换组件的时候让滚动条一直在最顶部
	 scrollBehavior(to, from, savedPosition) {
	    return { y: 0 }
	  },
})