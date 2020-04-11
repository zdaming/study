<template>
  <div>
    <template v-for="child in menuData">
      <template v-if="!child.hidden">
        <el-submenu v-if="child.children && child.children.length > 0"  class="nest-menu" :key="child.name" :index="child.path">
          <template slot="title">
            <span slot="title">{{ child.name }}</span>
          </template>
          <menu-tree :menuData="child.children"></menu-tree>
        </el-submenu>
        <el-menu-item v-else class="nest-menu-item" :index="child.path" :key="child.name">
          <span slot="title">{{ child.name }}</span>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'menuTree',
  props: ['menuData']
}
</script>
