const getters = {
  routers: state => state.routerData.routers,
  isCollapse: state => state.aside.isCollapse,
  rightNav: state => state.tabNav.rightNav,
  tabNavBox: state => state.tabNav.tabNavBox
}

export default getters
