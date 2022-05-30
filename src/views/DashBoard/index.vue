<template>
  <div class="dashboard-style">
    <n-row :gutter="24">
      <n-col :span="6">
        <ShadowBox title="模块数量" play @play-emit="handleModelPalyItem">
          <template #default>
            <n-statistic label="你一共创建了" tabular-nums>
              <n-number-animation ref="modelNumberToRef" :from="0" :to="1000" />
              <template #suffix>个功能模块</template>
            </n-statistic>
            <n-space vertical>
              <n-ellipsis style="max-width: 100%">
                花时间、花精力、花心思，愿你每一份努力都不负所望
              </n-ellipsis>
            </n-space>
          </template>
        </ShadowBox>
      </n-col>
      <n-col :span="6">
        <ShadowBox title="基础用法">
          <template #default>
            <n-space class="space-style">
              <n-statistic label="统计数据" :value="99">
                <template #prefix>
                  <n-icon>
                    <md-save />
                  </n-icon>
                </template>
                <template #suffix>/ 100</template>
              </n-statistic>
              <n-statistic label="活跃用户">
                <n-number-animation ref="basisNumberToRef" show-separator :from="0" :to="1234123" />
              </n-statistic>
            </n-space>
            <n-space vertical>
              <n-ellipsis style="max-width: 100%">
                你要做一个不动声色的大人了，不准情绪化，不准偷偷想念，不准回头看
              </n-ellipsis>
            </n-space>
          </template>
        </ShadowBox>
      </n-col>
      <n-col :span="6">
        <ShadowBox title="组件信息">
          <template #default>
            <n-statistic label="第三方组件库为" tabular-nums>
              <template #suffix>naive-ui</template>
            </n-statistic>
            <n-space vertical>
              <n-ellipsis style="max-width: 100%">
                不必太纠结于当下，也不必太忧虑未来，当你经历过一些事情的时候，眼前的风景已经和从前不一样了
              </n-ellipsis>
            </n-space>
          </template>
        </ShadowBox>
      </n-col>
      <n-col :span="6">
        <ShadowBox title="项目信息">
          <template #default>
            <n-statistic label="技术栈为" tabular-nums>
              <template #suffix>vue3 + vite + typescript</template>
            </n-statistic>
            <n-space vertical>
              <n-ellipsis style="max-width: 100%">
                哪里有人会喜欢孤独，不过不喜欢失望罢了
              </n-ellipsis>
            </n-space>
          </template>
        </ShadowBox>
      </n-col>
    </n-row>
    <n-row :gutter="24">
      <n-col :span="8">
        <ShadowBox title="微博信息">
          <n-collapse>
            <n-collapse-item
              v-for="(item, index) in collapseList"
              :title="item.title"
              :name="index"
              :key="index"
            >
              <n-card>
                <template #cover>
                  <n-avatar round size="large" :src="item.avatar" />
                  <n-text @click="handleLinkToWeibo(item.weibo!.link)">
                    {{ item.weibo?.name }}
                  </n-text>
                </template>
                <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
                  简介：{{ item.info }}
                </n-ellipsis>
              </n-card>
              <template #header-extra>
                <n-text type="error">{{ item.extra }}</n-text>
              </template>
            </n-collapse-item>
          </n-collapse>
        </ShadowBox>
      </n-col>
    </n-row>
  </div>
</template>

<script setup lang="ts">
import ShadowBox from '@/components/DashBoard/ShadowBox.vue'
import { NumberAnimationInst } from 'naive-ui'
import { ref, reactive, onMounted } from 'vue'
import { MdSave } from '@vicons/ionicons4'
import useCollapseApi from './hooks/collapse'
import { IcollapseType } from '/#/dashboard'
// ref dom
const modelNumberToRef = ref<NumberAnimationInst | null>(null)

// 开启动画
const handleModelPalyItem = () => {
  modelNumberToRef.value?.play()
}

// 折叠面板数据
const collapseList = reactive<IcollapseType[]>([])

// 点击名字跳转
const handleLinkToWeibo = (link: string) => {
  window.open(link, '_blank')
}

onMounted(() => {
  // 折叠面板数据请求 -- AxiosResponse 类型定义待处理
  useCollapseApi().then((res: any) => {
    collapseList.push(...res)
  })
})
</script>

<style scoped lang="less">
.dashboard-style {
  padding: 20px;
  .n-row {
    margin-bottom: 20px !important;
  }
  .space-style {
    > :deep(div) {
      &:first-child {
        margin-right: 30px !important;
      }
    }
  }
  .n-collapse {
    :deep(.n-card) {
      padding: 10px;
      padding-bottom: 0;
      border: 0;
      .n-card-cover {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .n-avatar {
          margin-right: 10px;
        }
        .n-text {
          font-weight: bold;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .n-card__content {
        padding: 0;
      }
    }
  }
}
</style>
