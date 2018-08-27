// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* vuex引用 */
import Vuex from 'vuex'
Vue.use(Vuex)

import store from './store'

/* axios引用 */
import Api from './api'
Vue.prototype.$http = Api

/* mockjs引用 */
require('@/api/mock')

/* element-ui引用 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
