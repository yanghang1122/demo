//从api/index.js 引入这两个方法
import {reqCategoryList,reqBannerList,reqFloorList} from "@/api/index.js"


const state = {
	categoryList:[],
	bannerList:[],
	floorList:[]
};

// mutations是修改数据的唯一手段
const mutations = {
	CATEGORYLIST(state,categoryList){
		state.categoryList = categoryList
	},
	GETBANNERLIST(state,bannerList){
		state.bannerList = bannerList
	},
	GETFLOORLIST(state,floorList){
		state.floorList = floorList
	}
};

// actions书写业务逻辑
const actions = {
		/* 2. 从app.vue 调用执行这个函数 参数解构出commit  
			  调用从api/index.js 引入的reqCategoryList函数 去发请求 
		      然后通过commit调用mutations里面的CATEGORYLIST 去把请求来的数据存到stste里面*/
		async categoryList({commit}){
			let result = await reqCategoryList();
			if(result.code == 200){
				commit("CATEGORYLIST",result.data)
			}
		},
		async getBannerList({commit}){
			let result = await reqBannerList();
			if(result.code == 200){
				commit("GETBANNERLIST",result.data)
			}
		},
		
		async getFloorList({commit}){
			let result = await reqFloorList();
			if(result.code == 200){
				commit("GETFLOORLIST",result.data)
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