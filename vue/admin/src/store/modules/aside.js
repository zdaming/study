const aside = {
  state: {
    isCollapse: false
  },
  mutations: {
    COLLAPSE (state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    collapse ({ commit }) {
      commit('COLLAPSE')
    }
  }
}

export default aside
