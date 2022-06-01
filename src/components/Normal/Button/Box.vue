<template>
  <div class="box-style">
    <div class="box-style__top">
      <n-space align="center" justify="space-between" class="space-style__first">
        <h3>{{ title }}</h3>
        <n-space align="center" class="space-style__second">
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon>
                <CopyOutline @click="handleCopyCode"></CopyOutline>
              </n-icon>
            </template>
            复制代码
          </n-tooltip>
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon>
                <CodeOutline @click="handleViewCode" />
              </n-icon>
            </template>
            {{ codeFlag ? '收起代码' : '显示代码' }}
          </n-tooltip>
        </n-space>
      </n-space>
      <slot name="example"></slot>
    </div>
    <div class="box-style__bottom" v-show="codeFlag">
      <slot name="code"></slot>
      <n-code :code="code" language="xml" word-wrap />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CopyOutline, CodeOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useMessage } from 'naive-ui'
type Props = {
  code: string
  title: string
}

let props = withDefaults(defineProps<Props>(), {
  code: '',
  title: ''
})

// 代码展开标志
let codeFlag = ref<boolean>(false)
// 代码显示or隐藏
const handleViewCode = () => {
  codeFlag.value = !codeFlag.value
}

// 复制代码
const message = useMessage()
const { copy } = useClipboard()
const handleCopyCode = () => {
  copy(props.code)
  message.success('复制成功')
}
</script>

<style scoped lang="less">
.box-style {
  border: 1px solid @borderColor;
  border-bottom: 0;
  .box-style__top {
    padding: 20px;
    border-bottom: 1px solid @borderColor;
    .space-style__first {
      height: 30px;
      margin: 0 !important;
      margin-bottom: 10px !important;
      > :deep(div) {
        height: 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        .space-style__second {
          > div {
            display: flex;
            align-items: center;
            cursor: pointer;
            &:hover {
              i {
                color: @mainColor;
              }
            }
          }
        }
      }
    }
  }
  .box-style__bottom {
    border-bottom: 1px solid @borderColor;
    padding: 20px;
  }
}
</style>
