//对于axios二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
//引入进度条的样式
import 'nprogress/nprogress.css'

import store from "@/store"


//利用axios create方法创建一个axios实例 写了baseUrl：“/api” 以后请求/api开头的 就不用再写了  然后用这个实例对象去发请求
const requests = axios.create({
    baseURL:'/api',
    timeout:5000
})

//请求拦截器
requests.interceptors.request.use((config)=>{
	
	if(store.state.detail.uuid_token){
		config.headers.userTempId = store.state.detail.uuid_token
	}
	if(store.state.user.token){
		config.headers.token = store.state.user.token
	}
	
	
    nprogress.start()
    return config
   
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调
    nprogress.done()
    return res.data
},(error)=>{
    // 失败的回调
    return Promise.reject(new Error("faile"))
})


export default requests;