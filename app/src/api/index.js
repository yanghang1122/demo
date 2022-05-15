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
	})
}




export const reqAddOrUpdateShopCart= (skuId,skuNum)=>{
	return requests({
		url:`/cart/addToCart/${skuId}/${skuNum}`,
		method:"POST",
	})
}


export const reqCartList = ()=>{
	return requests({
		url:'/cart/cartList',
		method:"get",
	})
}

export const reqDeleteCartById = (skuId)=>{
	return requests({
		url:`/cart/deleteCart/${skuId}`,
		method:"delete",
	})
}



export const reqUpdateCheckedById = (skuId,isChecked)=>{
	return requests({
		url:`/cart/checkCart/${skuId}/${isChecked}`,
		method:"GET",
	})
}


