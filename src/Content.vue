<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useMessage, useLoadingBar } from 'naive-ui'
window.$message = useMessage()
window.$loadingBar = useLoadingBar()
</script>

<style scoped></style>
