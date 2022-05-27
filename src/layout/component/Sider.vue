<template>
  <n-layout-sider
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    @collapse="collapsed = true"
    @expand="collapsed = false"
    class="sider-style"
  >
    <n-menu
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MenuOption } from 'naive-ui'
import useMenuRoutes from '../hook/menu'
const activeKey = ref<string | null>(null)
let collapsed = ref<boolean>(false)

const menuOptions: MenuOption[] = useMenuRoutes()
</script>

<style scoped lang="less">
.sider-style {
  height: calc(100vh - 64px);
  // max-height: calc(100vh - 64px);
}
</style>
