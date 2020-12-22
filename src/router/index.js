import Vue from 'vue'
import VueRouter from 'vue-router'
import commonRouters from './menus'
import store from '@/store/index'
import { buildRouter } from '@/router/util'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: buildRouter(commonRouters)
})

router.beforeEach((to, from, next) => {
  const { name, params, meta } = to
  store.commit('setCurrentPage', { name, params, meta })
  next()
})
export default router
