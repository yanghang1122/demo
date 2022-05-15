import {v4 as uuidv4} from 'uuid';

//暴露一个函数用来存储游客id
export const getUUID = ()=>{
	//先去本地存储里面找 如果没有找到我就生成一个并添加到本地存储里
	let uuid_token = localStorage.getItem("UUIDTOKEN")
	if(!uuid_token){
		uuid_token =  uuidv4();
		localStorage.setItem("UUIDTOKEN",uuid_token)
	}
	return uuid_token
	
}