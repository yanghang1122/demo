import {reqGetSearchInfo} from '@/api/index.js'

const state = {
	searchList:{}
};

// mutations是修改数据的唯一手段
const mutations = {
		GETSEARCHLIST(state,searchList){
			state.searchList = searchList
		}
};

// actions书写业务逻辑
const actions = {
	async getSearchList({commit},params={}){
		let result = await reqGetSearchInfo(params);
		if(result.code == 200){
			commit("GETSEARCHLIST",result.data);
		}
	}
};

//用于简化仓库数据 理解为计算属性
const getters = {
	goodsList(state){
		//返回的要么是数据要么是空数组
		return state.searchList.goodsList || [];
	},
	attrsList(state){
		return state.searchList.attrsList || [];
	},
	trademarkList(state){
		return state.searchList.trademarkList || [];
	}
}

export default ({
	state,
	mutations,
	actions,
	getters
	
})



// 9.30 写api接口  22.17