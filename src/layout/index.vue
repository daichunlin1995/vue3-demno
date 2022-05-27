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
</script>

<style scoped></style>
