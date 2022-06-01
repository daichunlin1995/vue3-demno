<template>
  <div class="tab-style">
    <n-space :wrap="false">
      <n-tag
        v-for="item in tabList"
        :key="item.name"
        :class="{ active: route.name === item.name }"
        closable
        @close.stop="handleTabClose(item)"
        @click.stop="handleTabClick(item)"
      >
        {{ item.meta.label }}
      </n-tag>
      <n-dropdown trigger="click" :options="options">
        <n-button text>
          <n-icon :size="20">
            <cash-icon />
          </n-icon>
        </n-button>
      </n-dropdown>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { c, DropdownOption } from 'naive-ui'
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { storeToRefs } from 'pinia'
import { tabStore } from '@/store/tab'
import { useRoute, useRouter, RouteRecordName } from 'vue-router'
import { Itab } from '#/layout'
import mitt from '@/utils/mitt'
const store = tabStore()
const route = useRoute()
const router = useRouter()
const { tabList } = storeToRefs(store)
const options = reactive<DropdownOption[]>([])

// 关闭tab
const handleTabClose = (item: Itab) => {
  store.removeTabList(item)
  if (store.tabList.length) {
    // 跳转到上一个路由
    router.push({
      name: store.tabList[store.tabList.length - 1].name
    })
  } else {
    // 返回首页
    router.push('/dashboard')
  }
  handleMenuEmit(item.name)
}

// 点击tab
const handleTabClick = (item: Itab) => {
  // 跳转到对应路由
  router.push({
    name: item.name,
    params: item.params,
    query: item.query
  })
  handleMenuEmit(item.name)
}

// 触发menu变更事件
const handleMenuEmit = (name: RouteRecordName) => {
  // mitt.emit('menu-emit', name)
}
</script>

<style scoped lang="less">
.tab-style {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border-bottom: 1px solid @borderColor;
  .n-space {
    height: 100%;
    > :deep(div) {
      cursor: pointer;
      &:last-child {
        display: flex;
        align-items: center;
      }
      > div {
        cursor: pointer;
        &:hover .n-tag__content {
          color: @mainColor !important;
        }
        &.active {
          .n-tag__content {
            color: @mainColor;
          }
        }
      }
    }
  }
}
</style>
