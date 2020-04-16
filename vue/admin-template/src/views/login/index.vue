<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" size="medium" class="login-form" autocomplete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">绘美苑艺术商城管理系统</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container flex-aic">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container flex-aic">
          <svg-icon icon-class="password" />
        </span>
        <el-input ref="password" v-model="loginForm.password" :type="passwordType" placeholder="密码" @keyup.enter.native="handleLogin" />
        <span class="show-pwd flex" @click="showPwd">
          <svg-icon :icon-class="iconClass" />
        </span>
      </el-form-item>
      <el-button :loading="loading" type="primary" size="medium" class="login-btn" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      passwordType: 'password',
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  },
  computed: {
    iconClass () {
      return this.passwordType === 'password' ? 'eye' : 'eye-open'
    }
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.$store.dispatch('user/login', this.loginForm)
            this.$message.success('登录成功')
            this.$router.push('/')
            this.loading = false
          }, 500)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  $bg_input: #2d3a4b;
  $light_gray_input: #fff;
  $cursor: #fff;
  $h_input: 42px;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
    }
  }

  .login-container {
    min-height: 100%;
    width: 100%;
    background: url('../../assets/login_bg_01.jpg') no-repeat top center;
    background-size: cover;
    overflow: hidden;

    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 200px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .svg-container {
      padding-left: 15px;
      color: $dark_gray;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 50%;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
      transform: translateY(-50%);
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    .el-input {
      width: 85%;
    }

    .login-btn {
      width: 100%;
      margin-bottom: 30px;
    }
  }

  .el-form-item ::v-deep .el-form-item__content {
    display: flex;
    height: $h_input;
  }

  .el-input ::v-deep input {
    height: $h_input;
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: $light_gray_input;
    caret-color: $cursor;

    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px $bg_input inset !important;
      -webkit-text-fill-color: $cursor !important;
    }
  }
</style>
