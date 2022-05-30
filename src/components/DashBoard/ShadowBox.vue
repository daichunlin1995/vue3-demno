<!--
 * @Author: daichunlin
 * @Date: 2022-05-30 13:51:43
 * @LastEditTime: 2022-05-30 14:53:10
 * @LastEditors: daichunlin
 * @Description: 添加box-shadow和padding(15px 10px)
 * @FilePath: /vue3-project/src/components/DashBoard/ShadowBox.vue
 * 哪里有阴影，哪里就有光
-->
<template>
  <div class="box-shadow-style">
    <n-space class="box-shadow__header" v-if="title">
      <h3 class="box-shadow-style__title">{{ title }}</h3>
      <n-icon v-if="play">
        <Play v-if="!flag" @click="handlePlayAnimation" />
        <Pause v-else />
      </n-icon>
    </n-space>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Play, Pause } from '@vicons/ionicons5'
type Props = {
  title?: string
  play?: boolean
  duration?: number
  refDom?: Element
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  play: false,
  duration: 3000
})

const emits = defineEmits(['play-emit'])

const flag = ref<boolean>(false)

// 开启动画
const handlePlayAnimation = () => {
  flag.value = !flag.value
  // 提交动画emit
  emits('play-emit')
  // 一段时间后关闭状态
  setTimeout(() => {
    flag.value = !flag.value
  }, props.duration)
}
</script>

<style scoped lang="less">
.box-shadow-style {
  .box-shadow();
  padding: 15px 10px;
  .box-shadow__header {
    margin-bottom: 10px !important;
    height: 28px;
    line-height: 28px;
    > :deep(div) {
      padding: 0 !important;
      display: flex;
      align-items: center;
      i {
        cursor: pointer;
      }
    }
    .box-shadow-style__title {
      margin: 0;
      font-size: 18px;
    }
  }
}
</style>
