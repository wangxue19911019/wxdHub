import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/pages/layout/layout'
import home from '@/pages/home/home'
import mypage1 from '@/pages/webpages/mypage1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout',
    },
    /*{
      path: '/login',
      name: 'login',
      component: layout,

    },*/
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '/home',
          name: '首页',
          component: home
        },{
          path: '/mypage1',
          name: '',
          component: mypage1
        },
      ]
    }
  ]
})
