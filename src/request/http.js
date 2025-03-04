import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import {
	Toast
} from 'mint-ui';
import $cookies from 'vue-cookies'
import $store from '../store/index'
import $router from '../router'
import {
	apiUtil
} from './api'

function postjson(url, data) {
	return axios({
		method: 'post',
		url: url,
		data: JSON.stringify(data),
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
			'lan': localStorage.locale || 'en',
			'token': $cookies.get('token'),
			//			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
	}).then((respose) => {
		if (respose.data.code == 5000) {
			Toast(respose.data.message);
			close();
		} else if (respose.data.code == 200) {
			return respose.data
		} else {
			if (url.indexOf("getLevel") != -1) {
				return false
			} else {
				Toast(respose.data.message || respose.data.msg);
			}
		}
	}).catch((error) => {});
}

function getjson(url, data) {
	return axios({
		method: 'get',
		url: url,
		//		data: JSON.stringify(data),
		params: data,
		dataType: 'json',
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
		}
	}).then((respose) => {
		if (respose.data.code == 5000) {
			Toast(respose.data.message);
			close();
		} else if (respose.data.code == 200) {
			return respose.data
		} else {
			Toast(respose.data.message);
		}
	}).catch((error) => {});
}
export const get = (url, data) => {
	return getjson(url, data)
}
export const post = (url, data) => {
	if ($router.currentRoute.name == 'lobby' || $router.currentRoute.name == 'game') {
		return postjson(url, data)
	} else {
		if ($cookies.get('playerId') == '' || $cookies.get('playerId') == undefined || $cookies.get('playerId') ==
			null) {
			$router.push({
				name: "lobby"
			});
		} else {
			return postjson(url, data)
		}
	}
}

//export default http
Vue.prototype.$get = get
Vue.prototype.$post = post