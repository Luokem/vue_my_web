'use strict'

import axios from 'axios';
import apiUrl from './api.js'

//----axios默认配置
axios.defaults.timeout = 10000;  //超时时间
axios.defaults.withCredentials = true;  //权限验证(前后端要一致设置)
axios.defaults.baseURL = apiUrl;  //默认地址,vue反向代理proxyTable已经设置了，这里可以不设,开发时可以


//整理转换数据
// axios.defaults.transformRequest = function(data) {
// 	data = JSON.stringify(data) ;
// 	return data;
// }

axios.interceptors.request.use (
	config => {
		config.headers['Content-Type'] = 'application/json;charset=UTF-8';


		// 判断是否存在ticket, 如果存在的话， 则没个个http header都加上ticket
// 		if(cookie.get("token")) {
// 		//用户每次操作， 都将cookie设置成2个小时
// 		   cookie.set("token",cookie.get("token") ,1/12)    
//         cookie.set("name",cookie.get("name") ,1/12)
// 　　　　 config.headers.token = cookie.get("token");
// 　　　　 config.headers.name= cookie.get("name");
// 	    }
		
		 // config.data = JSON.stringify(config.data); 这里转换数据JSON.stringify,和12行一样效果

		const token = sessionStorage.getItem("token"); //获取存储在本地的token		
		if (token) {
		 config.headers.Authorization = "Token " + token; //携带权限参数
		}
	    return config;
	},
	 error => {
     	return Promise.reject(error.response);
     }
)


// 响应拦截
axios.interceptors.response.use(
	response => {
		console.log(111,response)
		if(response.status == 401) {
			console.log("response.data.resultCode 是 404")
			  // 返回 错误代码-1 清除ticket信息并跳转到登录页面
			  //      cookie.del("ticket")
			  //     window.location.href ='http://localhost:8080/'
        return
		} 

		else {
			return response;
		}
	},
	error => {
		return Promise.reject(error.response) //返回接口错误信息
	}
	)

export default axios;