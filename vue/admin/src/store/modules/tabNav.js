const tabNav = {
  state: {
    rightNav: {},
    tabNavBox: [
      {
        title: '首页',
        path: '/index'
      }
    ],
    defaultTab: {
      title: '首页',
      path: '/index'
    }
  },
  mutations: {
    ADD_TAB (state, arg) {
      state.isActive = arg.path
      for (let i = 0; i < state.tabNavBox.length; i++) {
        if (state.tabNavBox[i].path === arg.path) {
          return false
        }
      }
      state.tabNavBox.push({
        title: arg.title,
        path: arg.path
      })
    },
    OPEN_MENU (state, arg) {
      state.rightNav = arg
    },
    REMOVE_TAB (state, arg) {
      let index = state.tabNavBox.findIndex(function (value, key) {
        return value.path === arg.tabItem.path
      })
      state.tabNavBox.splice(index, 1)
      if (arg.tabItem.path === arg.fullPath) {
        let tabActive = state.tabNavBox[index] || state.tabNavBox[index - 1]
        arg.router.push(tabActive.path)
      }
    },
    REMOVE_OTHER_TAB (state, arg) {
      state.tabNavBox = []
      state.tabNavBox.push(state.defaultTab)
      if (arg.all) {
        arg.router.push('/index')
        return false
      }
      state.tabNavBox.push(arg.tabItem)
      arg.router.push(arg.tabItem.path)
    }
  },
  actions: {
    addTab ({ commit }, arg) {
      commit('ADD_TAB', arg)
    },
    openMenu ({ commit }, arg) {
      commit('OPEN_MENU', arg)
    },
    removeTab ({ commit }, arg) {
      commit('REMOVE_TAB', arg)
    },
    removeOtherTab ({ commit }, arg) {
      commit('REMOVE_OTHER_TAB', arg)
    }
  }
}

export default tabNav
