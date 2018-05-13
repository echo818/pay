// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import 'whatwg-fetch'
import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App'
import router from './router'

import ajax from '@/plugins/ajax'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/index.less'

Vue.use(ElementUI)
Vue.use(ajax)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
