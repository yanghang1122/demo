//引入vue和vuerouter
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用vuerouter
Vue.use(VueRouter)
import routes from "./routes.js"
import store from "@/store"



//配置路由

let router = new VueRouter({
	routes: routes,
	//切换组件的时候让滚动条一直在最顶部
	scrollBehavior(to, from, savedPosition) {
		return {
			y: 0
		}
	},
})

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
	let token = store.state.user.token
	let name = store.state.user.userInfo.name
	
	//如果你登录了 可以获取token了
	if (token) {
		// 如果你登录了还要去登录页 从定向到首页
		if (to.path == '/login') {
			next('/home')
		} else {
			// 如果你登录了并且去的不是login 并且还有用户信息就放行
			if (name) {
				next()
			} else {
				// 如果你登录了去的不是login并且没有用户信息 就拿token发请求再次获取用户信息 如果出异常了就去登录
				try {
					await store.dispatch("getUserInfo")
					next()
				} catch (e) {
					await store.dispatch("userLogOut")
					next('/login')
				}
			}
		}
		// 未登录
	} else {
		let toPath = to.path
		
		if(toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1){
			next("/login?redirect="+toPath)
		}else{
			next()
		}
	}
})

export default router
