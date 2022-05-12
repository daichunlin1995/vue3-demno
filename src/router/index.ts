import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'
import Home from '@/views/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default function (app: App) {
  return createRouter({
    history: createWebHashHistory(),
    routes
  })
}
