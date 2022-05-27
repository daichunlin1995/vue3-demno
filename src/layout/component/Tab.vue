<template>
  <div class="tab-style">
    <n-space :wrap="false">
      <n-tag v-for="item in 10">haha</n-tag>
      <n-dropdown trigger="click" :options="options">
        <n-button text>
          <n-icon :size="20">
            <cash-icon />
          </n-icon>
        </n-button>
      </n-dropdown>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { DropdownOption } from 'naive-ui'
import { CashOutline as CashIcon } from '@vicons/ionicons5'
const options = reactive<DropdownOption[]>([
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands'
  },
  {
    label: '布朗酒店，伦敦',
    key: "brown's hotel, london"
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles'
  }
])
</script>

<style scoped lang="less">
.tab-style {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border-bottom: 1px solid @borderColor;
  .n-space {
    height: 100%;
    > :deep(div) {
      &:last-child {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
