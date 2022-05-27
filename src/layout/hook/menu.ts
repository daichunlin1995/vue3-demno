import menuRoutes from '@/router/menu'
import { h, Component } from 'vue'
import { RouteRecordRaw, RouterLink } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const conversion = (routes: RouteRecordRaw[]) => {
  let list = routes.map((item: RouteRecordRaw) => {
    let menuItem: MenuOption = {
      label:
        item.children && item.children.length
          ? item.meta?.label
          : () => {
              return h(
                RouterLink,
                {
                  to: {
                    name: item.name,
                    params: {
                      lang: 'zh-CN'
                    }
                  }
                },
                {
                  default: () => item.meta?.label
                }
              )
            },
      key: item.name as string,
      icon: renderIcon(item.meta?.icon as Component)
    }
    if (item.children && item.children.length) {
      menuItem.children = conversion(item.children)
    }
    return menuItem
  })
  return list
}
export default function () {
  return conversion(menuRoutes)
}
