import { defaultRouter } from '@/router'

const routerData = {
  state: {
    routers: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.routers = routers // 保存路由
    }
  },
  actions: {
    setRoutes ({ commit }) {
      commit('SET_ROUTERS', defaultRouter)
    },
    clearRoutes ({ commit }) {
      commit('SET_ROUTERS', [])
    }
  }
}

export default routerData
