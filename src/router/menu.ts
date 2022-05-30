import { RouteRecordRaw } from 'vue-router'
import { AppsOutline, RadioButtonOn, HomeOutline } from '@vicons/ionicons5'
const routes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: 'DashBoard',
    meta: {
      label: '首页',
      tab: true,
      icon: HomeOutline
    },
    component: () => import('@/views/DashBoard/index.vue')
  },
  {
    path: 'normal',
    name: 'Normal',
    meta: {
      label: '通用',
      icon: AppsOutline
    },
    component: () => import('@/views/Normal/index.vue'),
    children: [
      {
        path: 'button',
        name: 'Button',
        meta: {
          label: '按钮',
          tab: true,
          icon: RadioButtonOn
        },
        component: () => import('@/views/Normal/Button.vue')
      }
    ]
  }
]

export default routes
