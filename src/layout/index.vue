<template>
  <n-layout>
    <Header />
    <n-layout has-sider>
      <Sider />
      <n-layout>
        <Main />
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Header from './component/Header.vue'
import Sider from './component/Sider.vue'
import Main from './component/Main.vue'
import { useRouter, RouteRecordName } from 'vue-router'
import { watch } from 'vue'
import { tabStore } from '@/store/tab'
import { Itab } from '/#/layout'
const router = useRouter()
const store = tabStore()
watch(
  () => router.currentRoute.value,
  (nv, ov) => {
    const { name, path, meta, params, query } = nv
    if (meta.tab) {
      const currentRoute: Itab = {
        name: <RouteRecordName>name,
        path,
        meta,
        params,
        query
      }
      // 存储tabList
      store.addTabList(currentRoute)
    }
  },
  {
    immediate: true
  }
)
</script>

<style scoped></style>
