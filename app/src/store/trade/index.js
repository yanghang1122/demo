import {reqAddressInfo,reqOrderInfo} from '@/api/index.js'


const state = {
	address:[],
	orderInfo:{}
};

// mutations是修改数据的唯一手段
const mutations = {
	GETUSERADDRESS(state,address){
		state.address = address
	},
	GETORDERINFO(state,orderInfo){
		state.orderInfo = orderInfo
	}
}
	

// actions书写业务逻辑
const actions = {
	
	//获取用户地址信息
	async getUserAddress({commit}){
		let result = await reqAddressInfo();
		if(result.code == 200){
			commit("GETUSERADDRESS",result.data);
		}
	},
	// 获取订单信息
	async getOrderInfo({commit}){
		let result = await reqOrderInfo();
		console.log(result)
		if(result.code == 200){
			commit("GETORDERINFO",result.data);
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



