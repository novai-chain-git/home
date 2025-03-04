import Vue from 'vue';
import Router from 'vue-router';
import lobby from '@/components/lobby/index';
import DownLoad from '@/components/DownLoad/index';
import NewsInfo from '@/components/NewsInfo/index';
import Ecosystem from '@/components/Ecosystem/index.vue';
import lables from '@/components/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      component: () => import('@/components/index.vue'),
     // redirect: '/', // 自动重定向到第一个子路由
      children: [
        {
          path: '',
          name: 'lobby',
          component: lobby,
          meta: {
            navShow: true
          }
        },
        {
          path: '/Ecosystem',
          name: 'Ecosystem',
          component: Ecosystem,
          meta: {
            navShow: true
          }
        },
        {
          path: '/Download',
          name: 'DownLoad',
          component: DownLoad,
          meta: {
            navShow: true
          }
        },
        {
          path: '/NewsInfo',
          name: 'NewsInfo',
          component: NewsInfo,
          meta: {
            navShow: true
          }
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 跳转到页面顶部
    return { top: 0 }
  }
})
