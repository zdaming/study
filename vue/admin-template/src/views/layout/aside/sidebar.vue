<template>
  <section>
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route of permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './logo'
import SidebarItem from './sidebarItem'
import variables from '@styles/variables.scss'

export default {
  name: 'LayoutAsideMenu',
  components: {
    Logo,
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    },
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // 如果设置路径，侧栏将突出显示您设置的路径
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables () {
      return variables
    }
  }
}
</script>
