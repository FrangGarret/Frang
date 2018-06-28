import axios from 'axios'
export function getRootPath() {
    var pathName = window
        .location
        .pathname
        .substring(1);
    var webName = pathName == ''
        ? ''
        : pathName.substring(0, pathName.indexOf('/'));
    if (webName == '' || webName=='html') {
        return window.location.protocol + '//' + window.location.host + '';
    } else {
        return window.location.protocol + '//' + window.location.host + '/' + webName + '';
    }
}
//开发配置
 export const defaultParams = {//liu
 	//defaultIpUrl: getRootPath()+"/project",
	defaultIpUrl: "http://localhost:8088/vitality",
// 打包地址
//	defaultIpUrl: "http://localhost:8988/project",
//	defaultIpUrl: "http://130.230.12.3:8088/uw",
//	defaultIpUrl: "http://130.230.2.38:8088/project",
 	timeout: 1000*60,
 }
export var HTTP = axios.create({
	 	baseURL:'https://www.easy-mock.com/mock/5b19e78d966c7b5e64d9cae4/PING_Run/',
	 	timeout:10000,
	 	headers:{
	 		'custome-header':'fangjialiang',
	 		'content-type':'application/x-www-form-urlencoded'
	 	},
	 	responseType:'json'
	 	
	 })