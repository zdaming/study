<template>
  <el-aside>
    <el-menu
      class="el-menu-vertical"
      background-color="#304156"
      text-color="rgb(191, 203, 217)"
      active-text-color="#1890ff"
      :default-active="$route.path"
      :collapse="$store.getters.isCollapse"
      :router="true"
      :unique-opened="true"
      :collapse-transition="true"
      @select="selectMenu">
      <template v-for="(item, index) in $store.getters.routers">
        <template v-if="!item.hidden">
          <el-submenu v-if="!(item.alone && item.children.length == 1)" :index="index + ''" :key="item.path">
            <template slot="title">
              <i :class="'menu-icon ' + item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <menu-tree :menuData="item.children"></menu-tree>
          </el-submenu>
          <el-menu-item v-else :index="item.children[0].path" :key="item.children[0].path">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.children[0].name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import MenuTree from './components/MenuTree'

export default {
  name: 'layoutAside',
  components: {
    MenuTree
  },
  watch: {
    // 监听浏览器直接输入路由，将此路由添加到tabnavBox
    '$route.path': function (val) {
      this.selectMenu(val)
    }
  },
  methods: {
    selectMenu (key) {
      let router = this.$store.getters.routers
      let name = ''
      let navTitle = (path, routerArr) => {
        for (let i = 0; i < routerArr.length; i++) {
          if (routerArr[i].path === path) {
            name = routerArr[i].name
            break
          }
          if (routerArr[i].children) {
            navTitle(path, routerArr[i].children)
          }
        }
        return name
      }
      this.$store.dispatch('addTab', {
        title: navTitle(key, router),
        path: key
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-aside {
    width: auto !important;
    background-color: #304156;
    overflow-x: hidden;
    scrollbar-width: none; // 火狐滚动条隐藏
    -ms-overflow-style: none; // IE10+滚动条隐藏
    &::-webkit-scrollbar { // 谷歌滚动条隐藏
      display: none;
    }
    .el-menu-vertical:not(.el-menu--collapse) {
      width: 200px;
    }
  }
  .el-menu {
    border-right: none;
    .el-menu-item, .el-submenu {
      [class^=el-icon-] {
        position: relative;
        top: -1px;
        width: auto;
        margin-right: 10px;
        color: rgb(191, 203, 217);
      }
      &.is-active {
        [class^=el-icon-] {
          color: #1890ff;
        }
      }
    }
    
  }
  ::v-deep .menu-icon {
    position: relative;
    top: -1px;
    margin-right: 10px;
    font-size: 18px;
    color: rgb(191, 203, 217);
  }
  ::v-deep .el-menu-item {
    &.nest-menu-item {
      background-color: #1f2d3d !important;
    }
  }
  ::v-deep .el-submenu {
    .el-menu {
      .nest-menu-item {
        &:hover {
          background-color: rgb(0, 21, 40) !important;
        }
      }
    }
    &.nest-menu {
      .el-submenu__title {
        background-color: #1f2d3d !important;
        &:hover {
          background-color: rgb(0, 21, 40) !important;
        }
      }
    }
  }
</style>
