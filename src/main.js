// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import i18n from './i18n'
import http from './request/http'
import Api from './utils/Api'
import {
	apiUtil
} from './request/api'
import store from './store'
import preventReClick from './store/preventReClick'
import music from './store/music'
import movedown from './store/movedown'
import VueClipboard from 'vue-clipboard2'
import SlideVerify from 'vue-monoplasty-slide-verify';

Vue.use(SlideVerify);
Vue.use(VueClipboard)
Vue.use(VueCookies)
Vue.use(MintUI)
Vue.use(preventReClick)
Vue.use(music)
Vue.use(movedown)


Vue.prototype.$apiUtil = apiUtil
//Vue.prototype.$http = axios

Vue.config.productionTip = false

router.afterEach(() => {
  window.scrollTo(0, 0); // 每次路由跳转后滚动到顶部
});
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	data: {
		api: null,
	},
	created() {
		this.api = Api.getInstance(this)
	},
	i18n,
	mounted() {

	},
	components: {
		App
	},
	template: '<App/>'
})