import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user 登录
  login ({ commit }) {
    const token = 'token'
    setToken(token)
    commit('SET_TOKEN', token)
  },

  // 获取 user info
  getInfo ({ commit }) {
    const name = 'admin'
    const roles = ['admin']
    commit('SET_NAME', name)
    commit('SET_ROLES', roles)
  },

  // user 退出
  logout ({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    removeToken()
    resetRouter()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
