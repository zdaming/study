const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  permission_routes: state => state.permission.routes,
  visitedViews: state => state.tabnav.visitedViews,
  cachedViews: state => state.tabnav.cachedViews,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles
}

export default getters
