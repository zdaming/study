import Vue from 'vue'
import App from '@/App.vue'
import router from '@router'
import store from '@store'

// 导入normalize
import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@styles/index.scss'

// 导入icons
import '@icons'
// 权限控制
import '@/permission'

// 全局filters
import * as filters from '@filters'

Vue.use(ElementUI, { size: 'medium' })

// 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
