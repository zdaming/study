<template>
  <el-header class="clear">
    <div class="hide-aside fl" @click="collapse">
      <i :class="className"></i>
    </div>
    <div class="header-left fl">
      <div class="icon-item fl">
        <i class="el-icon-refresh"></i>
      </div>
    </div>
    <div class="header-right fr">
      <div class="icon-item fl">
        <i class="el-icon-bell"></i>
      </div>
      <div class="icon-item fl">
        <i class="el-icon-full-screen"></i>
      </div>
      <div class="icon-item headquarters fl">
        <i class="el-icon-s-custom"></i>
        <span>总部</span>
      </div>
      <el-dropdown class="fl" @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-s-custom"></i>
          <span>admin</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="basicData">基本资料</el-dropdown-item>
          <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'layoutHeader',
  data () {
    return {
      className: 'el-icon-s-fold'
    }
  },
  methods: {
    collapse () {
      this.$store.dispatch('collapse')
      this.className = this.className === 'el-icon-s-fold' ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    },
    handleCommand (command) {
      switch (command) {
        case 'basicData':
          console.log('基本资料')
          break
        case 'changePassword':
          console.log('修改密码')
          break
        case 'logout':
          console.log('退出登录')
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-header {
    position: relative;
    height: 50px !important;
    padding: 0;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    .hide-aside {
      margin-left: 30px;
      line-height: 50px;
      font-size: 20px;
      cursor: pointer;
    }
    .el-breadcrumb {
      font-size: 14px;
      line-height: 50px;
      margin-left: 8px;
    }
  }
  .header-left,
  .header-right {
    .icon-item {
      line-height: 50px;
      padding: 0 8px;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, .025);
      }
    }
  }
  .header-left {
    .icon-item {
      margin-left: 30px;
    }
  }
  .header-right {
    .icon-item {
      margin-left: 15px;
    }
    .headquarters {
      padding: 0 10px;
      font-size: 14px;
      i {
        position: relative;
        top: 3px;
        font-size: 20px;
      }
    }
  }
  .el-dropdown {
    padding: 0 20px;
    line-height: 50px;
    .el-icon-s-custom {
      position: relative;
      top: 3px;
      font-size: 20px;
      margin-right: 4px;
    }
  }
</style>

