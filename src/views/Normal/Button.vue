<template>
  <n-grid x-gap="24" :cols="2">
    <n-gi>
      <n-space vertical class="space-style__margin">
        <Box title="基础" :code="code1">
          <template v-slot:example>
            <n-space vertial>
              <div class="md-style">
                按钮的
                <span>type</span>
                分别为
                <span>default</span>
                、
                <span>tertiary</span>
                、
                <span>primary</span>
                、
                <span>info</span>
                、
                <span>success</span>
                、
                <span>warning</span>
                和
                <span>error</span>
                。
              </div>
              <n-space>
                <n-button>Default</n-button>
                <n-button type="tertiary">Tertiary</n-button>
                <n-button type="primary">Primary</n-button>
                <n-button type="info">Info</n-button>
                <n-button type="success">Success</n-button>
                <n-button type="warning">Warning</n-button>
                <n-button type="error">Error</n-button>
              </n-space>
            </n-space>
          </template>
        </Box>
        <Box title="虚线按钮" :code="code3">
          <template v-slot:example>
            <n-space>
              <n-button dashed>Default</n-button>
              <n-button type="primary" dashed>Primary</n-button>
              <n-button type="info" dashed>Info</n-button>
              <n-button type="success" dashed>Success</n-button>
              <n-button type="warning" dashed>Warning</n-button>
              <n-button type="error" dashed>Error</n-button>
            </n-space>
          </template>
        </Box>
      </n-space>
    </n-gi>
    <n-gi>
      <n-space vertical class="space-style__margin">
        <Box title="次要按钮" :code="code2">
          <template v-slot:example>
            <n-space>
              <n-button quaternary>Default</n-button>
              <n-button quaternary type="primary">Primary</n-button>
              <n-button quaternary type="info">Info</n-button>
              <n-button quaternary type="success">Success</n-button>
              <n-button quaternary type="warning">Warning</n-button>
              <n-button quaternary type="error">Error</n-button>
              <n-button quaternary round>Default</n-button>
              <n-button quaternary round type="primary">Primary</n-button>
              <n-button quaternary round type="info">Info</n-button>
              <n-button quaternary round type="success">Success</n-button>
              <n-button quaternary round type="warning">Warning</n-button>
              <n-button quaternary round type="error">Error</n-button>
              <n-button quaternary circle>
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button quaternary circle type="primary">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button quaternary circle type="info">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button quaternary circle type="success">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button quaternary circle type="warning">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button quaternary circle type="error">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
            </n-space>
          </template>
        </Box>
        <Box title="尺寸" :code="code2">
          <template v-slot:example>
            <n-space vertical>
              <div class="md-style">
                有
                <span>tiny</span>
                <span>small</span>
                、
                <span>medium</span>
                、
                <span>large</span>
                。
              </div>
              <n-space align="baseline">
                <n-button size="tiny" secondary strong>小小</n-button>
                <n-button size="small" secondary strong>小</n-button>
                <n-button size="medium" secondary strong>不小</n-button>
                <n-button size="large" secondary strong>不不小</n-button>
              </n-space>
            </n-space>
          </template>
        </Box>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import Box from '@/components/Normal/Button/Box.vue'
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { ref } from 'vue'
const code1 = ref<string>(`
<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary">
      Tertiary
    </n-button>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="info">
      Info
    </n-button>
    <n-button type="success">
      Success
    </n-button>
    <n-button type="warning">
      Warning
    </n-button>
    <n-button type="error">
      Error
    </n-button>
  </n-space>
</template>
        `)

const code2 = ref<string>(`
<template>
  <n-space>
    <n-button strong secondary>
      Default
    </n-button>
    <n-button strong secondary type="tertiary">
      Tertiary
    </n-button>
    <n-button strong secondary type="primary">
      Primary
    </n-button>
    <n-button strong secondary type="info">
      Info
    </n-button>
    <n-button strong secondary type="success">
      Success
    </n-button>
    <n-button strong secondary type="warning">
      Warning
    </n-button>
    <n-button strong secondary type="error">
      Error
    </n-button>
    <n-button strong secondary round>
      Default
    </n-button>
    <n-button strong secondary round type="primary">
      Primary
    </n-button>
    <n-button strong secondary round type="info">
      Info
    </n-button>
    <n-button strong secondary round type="success">
      Success
    </n-button>
    <n-button strong secondary round type="warning">
      Warning
    </n-button>
    <n-button strong secondary round type="error">
      Error
    </n-button>
    <n-button strong secondary circle>
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
    <n-button strong secondary circle type="primary">
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
    <n-button strong secondary circle type="info">
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
    <n-button strong secondary circle type="success">
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
    <n-button strong secondary circle type="warning">
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
    <n-button strong secondary circle type="error">
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
  </n-space>
</template>
`)

const code3 = ref<string>(`
<template>
  <n-space>
    <n-button dashed>
      Default
    </n-button>
    <n-button type="primary" dashed>
      Primary
    </n-button>
    <n-button type="info" dashed>
      Info
    </n-button>
    <n-button type="success" dashed>
      Success
    </n-button>
    <n-button type="warning" dashed>
      Warning
    </n-button>
    <n-button type="error" dashed>
      Error
    </n-button>
  </n-space>
</template>
`)

const code4 = ref<string>(`
<template>
  <n-space align="baseline">
    <n-button size="tiny" secondary strong>
      小小
    </n-button>
    <n-button size="small" secondary strong>
      小
    </n-button>
    <n-button size="medium" secondary strong>
      不小
    </n-button>
    <n-button size="large" secondary strong>
      不不小
    </n-button>
  </n-space>
</template>
`)
</script>

<style scoped lang="less">
.space-style__margin {
  > :deep(div) {
    margin-bottom: 24px !important;
  }
}
.md-style {
  margin-bottom: 5px;
  span {
    padding: 0 3px;
    background-color: @textBackgroundColot;
  }
}
</style>
