import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import 'normalize.css'
// 自定义的重置样式
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
