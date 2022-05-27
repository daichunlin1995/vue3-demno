<template>
  <div class="main-style">
    <Tab />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Tab from './Tab.vue'
</script>

<style scoped lang="less">
.main-style {
  position: relative;
  padding-top: 37px;
}
</style>
