/*
 * @Author       : daichunlin
 * @Date         : 2022-05-12 20:32:37
 * @LastEditors  : daichunlin
 * @LastEditTime : 2022-05-26 15:50:48
 * @Description  : router
 * @FilePath     : /vue3-project/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'
import Layout from '@/layout/index.vue'
import { useRouterListener } from './router.config'
import menuRoutes from './menu'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    children: [...menuRoutes]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  }
]

export default function (app: App) {
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  useRouterListener(router)
  return router
}
