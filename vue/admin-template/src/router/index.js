import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index'

Vue.use(VueRouter)

/**
 * Note: sub-menu会在 route children.length >= 1 时出现
 *
 * hidden: true                   如果设置为真，项目将不会显示在侧栏（默认为假）
 * name:'router-name'             该名称是来自 keep-alive的key属性（必须设置!!）
 * meta : {
    roles: ['admin','editor']     控制页面角色（您可以设置多个角色）
    title: 'title'                名称显示在侧栏和面包屑（推荐设置）
    icon: 'svg-name'              图标显示在侧栏中
    noCache: true                 如果设置为真，页面将不会被缓存（默认为假）
    affix: true                   如果设置为真，则标记将附加在标记视图中
    breadcrumb: false             如果设置为false，则该项将隐藏在breadcrumb中（默认为true）
    activeMenu: '/example/list'   如果设置路径，侧栏将突出显示您设置的路径
  }
 */

/**
 * constantRoutes
 * 没有权限要求的基本页
 * 所有角色可以访问
 */
export const constantRoutes = [
  {
    path: '/login',
    hidden: true,
    component: () => import('@/views/login/index')
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
  {
    path: '/components',
    component: Layout,
    redirect: '/components/tinymce',
    name: 'ComponentDemo',
    meta: {
      title: '组件',
      icon: 'component',
      roles: ['admin']
    },
    children: [
      {
        path: 'tinymce',
        component: () => import('@/views/components-demo/tinymce'),
        name: 'TinymceDemo',
        meta: {
          title: '富文本'
        }
      },
      {
        path: 'img-upload',
        component: () => import('@/views/components-demo/img-upload'),
        name: 'ImgUploadDemo',
        meta: {
          title: '上传图片'
        }
      }
    ]
  },
  {
    path: '/b',
    component: Layout,
    redirect: '/b/b1',
    name: '测试2',
    meta: {
      title: '测试2',
      icon: 'lock'
    },
    children: [
      {
        path: 'b1',
        component: () => import('@/views/test/index'),
        name: '测试2-1',
        meta: {
          title: '测试2-1'
        }
      },
      {
        path: 'b2',
        component: () => import('@/views/test/index'),
        name: '测试2-2',
        meta: {
          title: '测试2-2'
        }
      }
    ]
  },
  {
    path: '/c',
    component: Layout,
    redirect: '/c/c1',
    name: '测试3',
    meta: {
      title: '测试3',
      icon: 'lock'
    },
    children: [
      {
        path: 'c1',
        component: () => import('@/views/test/index'),
        redirect: '/c/c1/c1',
        name: '测试3-1',
        meta: {
          title: '测试3-1'
        },
        children: [
          {
            path: 'c1',
            component: () => import('@/views/test/index'),
            name: '测试3-1-1',
            meta: {
              title: '测试3-1-1'
            }
          },
          {
            path: 'c2',
            component: () => import('@/views/test/index'),
            name: '测试3-1-2',
            meta: {
              title: '测试3-1-2'
            }
          }
        ]
      },
      {
        path: 'c2',
        component: () => import('@/views/test/index'),
        name: '测试3-2',
        meta: {
          title: '测试3-2'
        }
      }
    ]
  },
  {
    path: '/d',
    component: Layout,
    redirect: '/d/d1',
    name: '测试4',
    meta: {
      title: '测试4',
      icon: 'lock'
    },
    children: [
      {
        path: 'd1',
        component: () => import('@/views/test/index'),
        name: '测试4-1',
        meta: {
          title: '测试4-1'
        }
      },
      {
        path: 'd2',
        component: () => import('@/views/test/index'),
        name: '测试4-2',
        meta: {
          title: '测试4-2'
        }
      },
      {
        path: 'd3',
        component: () => import('@/views/test/index'),
        name: '测试4-3',
        meta: {
          title: '测试4-3'
        }
      }
    ]
  },
  {
    path: '/e',
    component: Layout,
    redirect: '/e/e1',
    name: '测试5',
    meta: {
      title: '测试5',
      icon: 'lock'
    },
    children: [
      {
        path: 'e1',
        component: () => import('@/views/test/index'),
        name: '测试5-1',
        meta: {
          title: '测试5-1'
        }
      },
      {
        path: 'e2',
        component: () => import('@/views/test/index'),
        name: '测试5-2',
        meta: {
          title: '测试5-2'
        }
      },
      {
        path: 'e3',
        component: () => import('@/views/test/index'),
        name: '测试5-3',
        meta: {
          title: '测试5-3'
        }
      },
      {
        path: 'e4',
        component: () => import('@/views/test/index'),
        name: '测试5-4',
        meta: {
          title: '测试5-4'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
