<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <el-container class="main-container">
      <el-header>
        <layout-header class="header-container" />
      </el-header>
      <tab-nav />
      <el-main>
        <layout-main class="app-main" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebar from './aside/sidebar'
import LayoutHeader from './header/index'
import TabNav from './tabNav/index'
import LayoutMain from './main/index'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  components: {
    TabNav,
    Sidebar,
    LayoutHeader,
    LayoutMain
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    }),
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .main-container {
    height: 100%;
  }

  .el-main {
    overflow-x: hidden;
    background-color: #EFF1F4;
  }

  .el-header {
    position: relative;
    height: 50px !important;
    padding: 0;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .header-container {
      height: 100%;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
