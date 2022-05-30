<template>
  <n-layout-header class="header-style">
    <div class="header-style__avatar">
      <n-icon :size="40" color="#40b883">
        <LogoVue />
      </n-icon>
      <span>Vue Study</span>
    </div>
    <div class="header-style__nav"></div>
    <div class="header-style__personal">
      <n-button quaternary>中文</n-button>
      <n-button quaternary>浅色</n-button>
      <n-button quaternary>Github</n-button>
      <n-dropdown :options="options" @select="handleAvatarSelect">
        <div class="header-style_user">
          <n-avatar round :src="userInfo.avatar" />
          <n-ellipsis style="max-width: 100px">{{ userInfo.cName }}</n-ellipsis>
        </div>
      </n-dropdown>
    </div>
  </n-layout-header>
</template>

<script setup lang="ts">
import { reactive, h } from 'vue'
import type { Component } from 'vue'
import { LogoVue } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { PersonCircleOutline as UserIcon, LogOutOutline as LogoutIcon } from '@vicons/ionicons5'
import type { Ioptions } from '/#/layout'
import { userStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const store = userStore()
const router = useRouter()
const { userInfo } = storeToRefs(store)
// 头像下拉菜单使用icon
const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}
// 头像下拉菜单
const options = reactive<Array<Ioptions>>([
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
])

// 选择下拉菜单
const handleAvatarSelect = (key: string) => {
  switch (key) {
    // 修改用户资料
    case 'profile':
      handleEditPersonalInfo()
      break
    // 退出登录
    case 'logout':
      handleLogOut()
      break
    default:
      console.log('no-something')
  }
}

const handleEditPersonalInfo = () => {
  console.log('修改')
}

const handleLogOut = () => {
  store.setToken('')
  router.push('/login')
}
</script>

<style scoped lang="less">
.header-style {
  height: 64px;
  display: flex;
  padding-right: 32px;
  border-bottom: 1px solid @borderColor;
  box-sizing: border-box;
  > div {
    height: 100%;
  }
  .header-style__avatar {
    width: 240px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    box-sizing: border-box;
    > span {
      margin-left: 5px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .header-style__nav {
    flex: 1;
  }
  .header-style__personal {
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .header-style_user {
      display: flex;
      align-items: center;
      .n-avatar {
        margin-left: 20px;
        margin-right: 10px;
      }
    }
  }
}
</style>
