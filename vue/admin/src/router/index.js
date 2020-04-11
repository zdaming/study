import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import NotFound from '@/views/Page404'
import Layout from '@/views/layout/Index'
import CommerViews from '@/views/layout/commer/Index'

Vue.use(VueRouter)

/**
 * alone: 是否为单个
 * icon: 图标
 * children: 子节点
 * name: 标题
 */
let defaultRouter = [
  {
    path: '/',
    redirect: '/index',
    component: Layout,
    alone: true,
    icon: 'el-icon-s-home',
    children: [
      {
        path: '/index',
        name: '首页',
        component: Home
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    alone: true,
    icon: 'el-icon-s-home',
    children: [
      {
        path: '/test',
        name: '测试',
        component: () => import('@/views/Test')
      }
    ]
  },
  {
    path: '/a',
    component: Layout,
    name: '测试1',
    icon: 'el-icon-s-home',
    children: [
      {
        path: '/a1',
        name: '测试1-1',
        component: () => import('@/views/Test')
      },
      {
        path: '/a2',
        name: '测试1-2',
        component: () => import('@/views/Test')
      }
    ]
  },
  {
    path: '/b',
    component: Layout,
    name: '测试2',
    icon: 'el-icon-s-home',
    children: [
      {
        path: '/b1',
        name: '测试2-1',
        component: () => import('@/views/Test')
      },
      {
        path: '/b2',
        name: '测试2-2',
        component: () => import('@/views/Test')
      }
    ]
  },
  {
    path: '/c',
    component: Layout,
    name: '测试3',
    icon: 'el-icon-s-home',
    children: [
      {
        path: '/c1',
        name: '测试3-1',
        component: () => import('@/views/Test')
      },
      {
        path: '/c2',
        name: '测试3-2',
        component: () => import('@/views/Test')
      }
    ]
  },
  {
    path: '/d',
    component: Layout,
    name: '测试4',
    icon: 'el-icon-s-home',
    children: [
      {
        path: '/d1',
        name: '测试4-1',
        component: () => import('@/views/Test')
      },
      {
        path: '/d2',
        name: '测试4-2',
        component: () => import('@/views/Test')
      }
    ]
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    hidden: true
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: defaultRouter
})

export { defaultRouter }
