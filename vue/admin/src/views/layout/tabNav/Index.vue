<template>
  <div class="tab-nav-box">
    <router-link
      v-for="(item, index) in $store.getters.tabNavBox"
      :key="item.title"
      :to="item.path"
      class="tags-view-item"
      @contextmenu.prevent.native="openMenu(item, index, $event)">
      <span>{{ item.title }}</span>
      <i class="el-icon-close" v-if="index !== 0"  @click.prevent.stop="removeTab(item)"></i>
    </router-link>
    <ul v-show="this.rightMenuShow" :style="{ left: this.left + 'px', top: this.top + 'px' }" class="menu-box">
      <li v-show="index != 0" @click="removeTab($store.getters.rightNav)"><i class="fa fa-remove"></i>关闭</li>
      <li v-show="index != 0" @click="removeOtherTab($store.getters.rightNav)">关闭其他</li>
      <li @click="removeAllTab">全部关闭</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabNav',
  data () {
    return {
      rightMenuShow: false,
      left: 0,
      top: 0,
      index: 0
    }
  },
  methods: {
    removeTab (tabItem) {
      this.$store.dispatch('removeTab', { tabItem, fullPath: this.$route.path, router: this.$router })
    },
    openMenu (item, index, e) {
      this.index = index
      this.rightMenuShow = true
      this.left = e.clientX + 10
      this.top = e.clientY
      this.$store.dispatch('openMenu', item)
    },
    removeOtherTab (tabItem) {
      this.$store.dispatch('removeOtherTab', { tabItem, router: this.$router })
    },
    removeAllTab () {
      this.$store.dispatch('removeOtherTab', { all: true, router: this.$router })
    }
  },
  watch: {
    rightMenuShow (value) {
      if (value) {
        document.body.addEventListener('click', () => {
          this.rightMenuShow = false
        })
      } else {
        document.body.removeEventListener('click', () => {
          this.rightMenuShow = false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-nav-box {
    padding: 8px 15px;
    border-bottom: 1px solid #d8dce5;
    .tags-view-item {
      display: inline-block;
      height: 26px;
      line-height: 26px;
      padding: 0 10px;
      margin-right: 15px;
      border: 1px solid #d8dce5;
      background: #fff;
      color: #495060;
      font-size: 12px;
      &.router-link-exact-active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
      }
      &:last-of-type {
        margin-right: 0;
      }
      .el-icon-close {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-left: 4px;
        border-radius: 50%;
        text-align: center;
        transition: all .3s;
        -webkit-transition: all .3s;
        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }
    }
  }
  .menu-box {
    margin: 0;
    background: #fff;
    z-index: 999;
    position: absolute;
    padding: 5px 0;
    border: 1px solid #cccccc;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 1px 6px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #e1e6ea;
      }
    }
  }
</style>
