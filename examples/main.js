// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FlyerUI from '../src/main.js'
import '../src/components/themes/src/index.scss'

Vue.config.productionTip = false
Vue.use(FlyerUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
