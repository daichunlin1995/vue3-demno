<template>
  <div>
    <n-config-provider :theme="null">
      <n-message-provider>
        <router-view></router-view>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>
<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>
<style></style>
