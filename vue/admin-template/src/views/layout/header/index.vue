<template>
  <section class="clear">
    <hamburger class="hamburger-container flex-aic fl" />
    <breadcrumb class="breadcrumb-container fl" />
    <div class="header-right fr">
      <screenfull class="right-menu-item hover-effect flex-aic fl" />
      <el-dropdown class="fl" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-s-custom" />
          <span>{{ name }}</span>
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="basicData">基本资料</el-dropdown-item>
          <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import Screenfull from '@/components/Screenfull'

export default {
  name: 'LayoutHeader',
  components: {
    Hamburger,
    Breadcrumb,
    Screenfull
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
    username () {
      return this.name
    }
  },
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'basicData':
          console.log('基本资料')
          break
        case 'changePassword':
          console.log('修改密码')
          break
        case 'logout':
          this.logout()
          break
      }
    },
    logout () {
      this.$confirm('是否继续退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('user/logout')
        this.$router.push('/login')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
  %h100 {
    height: 100%;
  }
  %bg {
    background: rgba(0, 0, 0, .025);
  }

  .breadcrumb-container,
  .header-right {
    @extend %h100;
  }

  .hamburger-container {
    @extend %h100;
    padding: 0 15px;
    cursor: pointer;
    transition: background .25s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      @extend %bg;
    }
  }

  .right-menu-item {
    @extend %h100;
    padding: 0 8px;
    font-size: 18px;
    color: #5a5e66;

    &.hover-effect {
      cursor: pointer;
      transition: background .3s;

      &:hover {
        @extend %bg;
      }
    }
  }

  .el-dropdown {
    @extend %h100;
    margin-right: 15px;
    padding: 0 8px;
    color: #5a5e66;
    cursor: pointer;

    &:hover {
      @extend %bg;
    }

    .el-dropdown-link {
      display: flex;
      align-items: center;
      @extend %h100;
    }

    .el-icon-s-custom {
      margin-right: 4px;
      font-size: 20px;
    }
  }
</style>
