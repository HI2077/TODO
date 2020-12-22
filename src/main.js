import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/vant'
import '@/utils/filters'
import store from '@/store/index'
import '@/style/index.scss'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
