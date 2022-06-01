<template>
  <div class="main-style">
    <Tab />
    <n-scrollbar class="main-style__scrollbar">
      <router-view></router-view>
      <n-back-top :right="40" :bottom="160">
        <n-icon :size="24">
          <baseTopIcon />
        </n-icon>
      </n-back-top>
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import Tab from './Tab.vue'
import baseTopIcon from '@/components/Others/baseTopIcon.vue'
</script>

<style scoped lang="less">
.main-style {
  position: relative;
  padding-top: 37px;
  :deep(.main-style__scrollbar) {
    max-height: calc(100vh - 101px);
  }
}
</style>
