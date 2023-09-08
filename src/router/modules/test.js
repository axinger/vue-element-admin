/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const testRouter = {
  path: '/test',
  component: Layout,
  redirect: '/testPage2',
  alwaysShow: true, // will always show the root menu
  meta: {
    title: '测试',
    icon: 'chart'
  },
  children: [
    {
      path: '/testPage',
      component: () => import('@/views/test/index.vue'),
      name: 'TestPage',
      meta: { title: '测试1', noCache: false }
    },
    {
      path: '/testPage2',
      component: () => import('@/views/test/index2.vue'),
      name: 'TestPage2',
      meta: { title: '测试2', noCache: true }
    },
    {
      path: 'testPinia',
      hidden: true,
      component: () => import('@/views/test/testPinia.vue'),
      // name: 'testPinia', // 有name 就新窗口,没有就当前页面
      meta: { title: 'testPinia', noCache: true }
    }
  ]
}

export default testRouter
