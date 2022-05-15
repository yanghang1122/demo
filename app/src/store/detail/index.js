import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api/index.js'

import {getUUID} from "@/utils/uuid_token.js"

const state = {
	goodInfo:{},
	//游客的临时身份
	uuid_token:getUUID()
};

// mutations是修改数据的唯一手段
const mutations = {
	GETGOODINFO(state,goodInfo){
		state.goodInfo = goodInfo
	}
};

// actions书写业务逻辑
const actions = {
	async getGoodInfo({commit},skuId){
		let result = await reqGoodsInfo(skuId);
		if(result.code == 200){
			commit("GETGOODINFO",result.data);
		}
	},
	
	async AddOrUpdateShopCart({commit},{skuId,skuNum}){
		let result = await reqAddOrUpdateShopCart(skuId,skuNum);
		//判断加入购物车是否成功 
		if(result.code == 200){
			return "ok"
		}else{
			Promise.reject(new Error("faile"))
		}
	}
	
};

//用于简化仓库数据 理解为计算属性
const getters = {
		categoryView(state){
			//第一个计算仓库数据是一个umdifand 加一个或者是空对象不会报错
			return state.goodInfo.categoryView || {}
		},
		skuInfo(state){
			//第一个计算仓库数据是一个umdifand 加一个或者是空对象不会报错
			return state.goodInfo.skuInfo || {}
		},
		spuSaleAttrList(state){
			//第一个计算仓库数据是一个umdifand 加一个或者是空对象不会报错
			return state.goodInfo.spuSaleAttrList || []
		}
}

export default ({
	state,
	mutations,
	actions,
	getters
	
})



