// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FlyerUI from '../src/main.js'
import Routers from './router'
import VueRouter from 'vue-router'
import 'babel-polyfill'
import '../src/components/themes/src/index.scss'
import FlyDemoBlock from '@/components/demo-block'

Vue.config.productionTip = false
Vue.use(FlyerUI)
Vue.use(VueRouter)
Vue.component('fly-demo-block', FlyDemoBlock)

const router = new VueRouter({
  base: __dirname,
  routes: Routers
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
