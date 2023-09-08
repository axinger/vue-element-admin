/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const testRouter = {
  path: '/test',
  component: Layout,
  redirect: '/testHome2',
  name: '测试',
  meta: {
    title: '测试',
    icon: 'chart'
  },
  children: [
    {
      path: '/testHome',
      component: () => import('@/views/test/index.vue'),
      name: 'testHome',
      meta: { title: '测试首页', noCache: true }
    },
    {
      path: '/testHome2',
      component: () => import('@/views/test/index.vue'),
      name: 'testHome2',
      meta: { title: '测试首页2', noCache: true }
    },
    {
      path: 'testPinia',
      component: () => import('@/views/test/testPinia.vue'),
      name: 'testPinia',
      meta: { title: 'testPinia', noCache: true },
      hidden: true
    }
  ]
}

export default testRouter
