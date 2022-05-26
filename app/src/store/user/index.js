import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqlogOut} from '@/api/index.js'
import {setToken,getToken,removeToken} from "@/utils/token"

const state = {
	code:'',
	token:getToken(),
	userInfo:{}
};

// mutations是修改数据的唯一手段
const mutations = {
		REQGETCODE(state,code){
			state.code = code
		},
		USERLOGIN(state,token){
			state.token =  token
		},
		GETUSERINFO(state,userInfo){
			state.userInfo = userInfo
		},
		//退出登录清空token
		USERLOGOUT(state){
			state.token = '';
			state.userInfo = {};
			removeToken();
		}
};

// actions书写业务逻辑
const actions = {
	
	async getCode({commit},phone){
		let result = await reqGetCode(phone);
		if(result.code == 200){
			commit("REQGETCODE",result.data)
			return "ok"
			
		}else{
			return Promise.reject(new Error("no ok"))
		}
	},
	
	async userRegister({commit},user){
		let result = await reqUserRegister(user);
		if(result.code == 200){
			return "ok"
		}else{
			  return Promise.reject(new Error("no ok"))
		}
	},
	
	async userLogin({commit},data){
		let result = await reqUserLogin(data);
		if(result.code == 200){
			commit("USERLOGIN",result.data.token);
			setToken(result.data.token);
		}else{
			return Promise.reject(new Errre("no ok"))
		}
	},
	
	
	async getUserInfo({commit}){
		let result = await reqUserInfo();
		console.log("a")
		if(result.code == 200){
			commit("GETUSERINFO",result.data)
			return "ok"
		}else{
			return Promise.reject(new Error("123 ok"))
		}
	},
	
	
	async userLogOut({commit}){
		let result = await reqlogOut();
	
		if(result.code == 200){
			commit("USERLOGOUT")
			return  "ok"
		}else{
			return Promise.reject(new Error("bu ok"))
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



