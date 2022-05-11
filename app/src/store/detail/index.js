import {reqGoodsInfo} from '@/api/index.js'

const state = {
	goodInfo:{}
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
	}
};

//用于简化仓库数据 理解为计算属性
const getters = {

}

export default ({
	state,
	mutations,
	actions,
	getters
	
})



