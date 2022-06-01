import { RouteRecordRaw } from 'vue-router'
import {
  AppsOutline,
  RadioButtonOn,
  HomeOutline,
  BuildOutline,
  CopyOutline
} from '@vicons/ionicons5'
import { FormNew28Regular } from '@vicons/fluent'
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
      },
      {
        path: 'form',
        name: 'Form',
        meta: {
          label: '表单',
          tab: true,
          icon: FormNew28Regular
        },
        component: () => import('@/views/Normal/Form.vue')
      }
    ]
  },
  {
    path: 'tool',
    name: 'Tool',
    meta: {
      label: '工具',
      icon: BuildOutline
    },
    component: () => import('@/views/Tool/index.vue'),
    children: [
      {
        path: 'deepclone',
        name: 'DeepClone',
        meta: {
          label: '深拷贝',
          tab: true,
          icon: CopyOutline
        },
        component: () => import('@/views/Tool/DeepClone.vue')
      }
    ]
  }
]

export default routes
