import requests from './request'

import mockRequests from './mockAjax.js'



export const reqCategoryList = ()=>{
  return requests({
        url: "/product/getBaseCategoryList",
        method:'get'
    })
}


export const reqBannerList = ()=>{
  return mockRequests({
        url: "/banner",
        method:'get'
    })
}

export const reqFloorList = ()=>{
  return mockRequests({
        url: "/floor",
        method:'get'
    })
}

export const reqGetSearchInfo = (params)=>{
	return requests({
		url:'/list',
		method:"post",
		data:params
	})
}

export const reqGoodsInfo = (skuId)=>{
	return requests({
		url:`/item/${skuId}`,
		method:"get",
		// data:params
	})
}



