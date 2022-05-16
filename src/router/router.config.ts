import { Router } from 'vue-router'
import { getToken } from '@/utils/token'
const whiteList: string[] = []
export function useRouterListener(router: Router) {
  // 设置路由拦截
  router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
      // 安心进入登录 避免死循环
      next()
      return
    }
    // 判断是否存在token
    const token = getToken()
    console.log(token)
    if (token || whiteList.includes(to.path)) {
      next()
    } else {
      // 跳转到登录页面
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
  })
}
