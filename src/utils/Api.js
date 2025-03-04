import axios from 'axios'
import qs from 'qs'
import {
	Indicator
} from 'mint-ui'
export default class Api {
	constructor(ctx) {
		this.ctx = ctx
		this.baseUrl = process.env.baseURL
		this.axios = axios
		this.axiosInstance = axios.create({
			baseURL: this.baseUrl,
			timeout: 20000,
			headers: {
				'Content-Type': 'application/getCoinPricejson',
			}
		})
		this.axiosInstance.interceptors.response.use(res => {
				if (res.status === 200) {
					return res.data

				} else {
					return Promise.reject(res)
				}
			},
			error => {
				Indicator.close()
				if (this.preLoading) {
					this.preLoading.close()
				}
				return Promise.reject(error)
			}
		)
	}

	/**
	 * singleton
	 * @param ctx
	 * @returns {Api}
	 */
	static getInstance(ctx) {
		return Api.instance ? Api.instance : (Api.instance = new Api(ctx))
	}


	// 公告列表
	getNoiceList(params) {
		return this.axiosInstance.get(`/user/announcement/getAnnouncementList`, {
			params
		})
	}


}