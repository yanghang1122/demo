import {reqCartList,reqDeleteCartById,reqUpdateCheckedById} from '@/api/index.js'

const state = {
	cartList:[]
};

// mutations是修改数据的唯一手段
const mutations = {
		REQCARTLIST(state,cartList){
			state.cartList = cartList
		}
};

// actions书写业务逻辑
const actions = {
	
	
	
	async getCartList({commit}){
		let result = await reqCartList();
		if(result.code == 200){
			commit("REQCARTLIST",result.data);
		}
	},
	
	async DeleteCartListById({commit},skuId){
		let result = await reqDeleteCartById(skuId);
		if(result.code == 200){
			return "ok"
		}else{
			return Promise.reject(new Error("faile"))
		}
	},
	
	
	async UpdateCheckedById({commit},{skuId,isChecked}){
		let result = await reqUpdateCheckedById(skuId,isChecked);
		if(result.code == 200){
			return "ok"
		}else{
			return Promise.reject(new Error("faile"))
		}
	},
	
	//删除所有选中的商品 遍历所有产品 如果他的isChecked == 1 就调用删除的actions 
	deleteAllCheckedCart({dispatch,getters}){
		let promiseAll = []
		getters.cartList.cartInfoList.forEach(item=>{
				let promise = item.isChecked == 1 ? dispatch("DeleteCartListById",item.skuId) : '';
				promiseAll.push(promise)
			
		})
		return Promise.all(promiseAll)
	},
	
	
	updateAllCartIsChecked({dispatch,state},isChecked){
		let promiseAll = []
		state.cartList[0].cartInfoList.forEach(item=>{
			let promise = dispatch("UpdateCheckedById",{skuId:item.skuId,isChecked})
			promiseAll.push(promise)
		})
		return Promise.all(promiseAll)
	}
	
	
	
};

//用于简化仓库数据 理解为计算属性
const getters = {
cartList(state){
	return state.cartList[0] || {}
}
	
}

export default ({
	state,
	mutations,
	actions,
	getters
	
})



