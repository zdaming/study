import Vue from 'vue'
import ElementUI from 'element-ui'

import App from '@/App'
import router from '@/router'
import store from '@/store'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/style.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 路由拦截
router.beforeEach((to, from, next) => {
  if (store.getters.routers.length === 0) {
    (async function getAddRouters () {
      await store.dispatch('setRoutes')
    })()
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
