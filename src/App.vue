<template>
  <div>
    <n-config-provider :theme="null" :hljs="hljs">
      <n-message-provider>
        <n-loading-bar-provider>
          <Content />
        </n-loading-bar-provider>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>
<script setup lang="ts">
import Content from './Content.vue'
// 全局主题切换 - 目前没有兼容 - 暂时没用
import { darkTheme } from 'naive-ui'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
// 代码高亮语言注册
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
</script>
<style></style>
