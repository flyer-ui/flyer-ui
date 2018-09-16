import Vue from 'vue'
import FlyerUI from '../src/index'
import App from './app.vue'

Vue.use(FlyerUI)
new Vue({
	el: '#app',
	render: h => h(App)
})
