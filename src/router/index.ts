/*
 * @Author       : daichunlin
 * @Date         : 2022-05-12 20:32:37
 * @LastEditors  : daichunlin
 * @LastEditTime : 2022-05-16 15:01:21
 * @Description  : router
 * @FilePath     : /vue3-project/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'
import Home from '@/views/Home.vue'
import { useRouterListener } from './router.config'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
