<template>
  <el-container>
    <layout-aside></layout-aside>
    <el-container>
      <layout-header></layout-header>
      <tab-nav></tab-nav>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import LayoutAside from './aside/Index'
import LayoutHeader from './header/Index'
import TabNav from './tabNav/Index'

export default {
  name: 'layout',
  components: {
    LayoutAside,
    LayoutHeader,
    TabNav
  },
  mounted () {
    this.$store.dispatch('addTab', this.$store.state.tabNav.defaultTab)
    if (this.$route.path !== this.$store.state.tabNav.defaultTab.path) {
      this.$store.dispatch('addTab', {
        path: this.$route.path,
        title: this.$route.name
      })
    }
  }
}
</script>


<style lang="scss" scoped>
  %h100 {
    height: 100%;
  }

  .el-container, .el-aside {
    @extend %h100;
  }

  .el-main {
    background-color: #f0f2f5;
  }

  .el-footer {
    display: none;
  }
</style>
