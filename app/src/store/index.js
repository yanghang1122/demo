import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)


//引入小仓库
import home from './home/index.js'
import search from './search/index.js'
import detail from './detail/index.js'
import shopCart from './shopCart/index.js'


//把vuex大仓库分解成若干个小仓库 
export default new Vuex.Store({
	modules:{
		home,
		search,
		detail,
		shopCart
	}

})
