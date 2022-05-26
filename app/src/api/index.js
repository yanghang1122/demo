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


export const reqGetCode = (phone)=>{
	return requests({
		url:`/user/passport/sendCode/${phone}`,
		method:"GET",
	})
}


export const reqUserRegister = (data)=>{
	return requests({
		url:`/user/passport/register`,
		method:"post",
		data:data
	})
}

export const reqUserLogin = (data)=>{
	return requests({
		url:"user/passport/login",
		method:"post",
		data:data
	})
}



export const reqUserInfo = ()=>{
	return requests({
		url:"user/passport/auth/getUserInfo",
		method:"get"
	})
}


export const reqlogOut = ()=>{
	return requests({
		url:"/user/passport/logout",
		method:"get"
	})
}


export const reqAddressInfo = ()=>{
	return requests({
		url:"/user/userAddress/auth/findUserAddressList",
		method:"get"
	})
}

export const reqOrderInfo = ()=>{
	return requests({
		url:"/order/auth/trade",
		method:"get"
	})
}



export const reqSubmitOrder = (tradeNo,data)=>{
	return requests({
		url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
		method:"post",
		data:data
	})
}




export const reqPayInfo = (orderId)=>{
	return requests({
		url:`/payment/weixin/createNative/${orderId}`,
		method:"get",
	})
}

export const reqPayStatus = (orderId)=>{
	return requests({
		url:`/payment/weixin/queryPayStatus/${orderId}`,
		method:"get",
	})
}

export const reqMyOrderList = (page,limit)=>{
	return requests({
		url:`/order/auth/${page}/${limit}`,
		method:"get",
	})
}