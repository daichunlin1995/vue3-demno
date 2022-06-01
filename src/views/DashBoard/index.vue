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
        <ShadowBox title="折叠面板">
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
      <n-col :span="8">
        <ShadowBox title="加载动画">
          <n-space vertical>
            <n-spin :show="show">
              <n-alert title="啦啦啦" type="success">明天再打开行李箱。宝贝，挂电话啦。</n-alert>
              <template #description>你不知道你有多幸运</template>
            </n-spin>
            <n-button @click="show = !show" style="margin-bottom: 9px">
              点击来{{ show ? '停止' : '转圈' }}
            </n-button>
          </n-space>
        </ShadowBox>
      </n-col>
      <n-col :span="8" class="dashboard-style__height">
        <ShadowBox title="骨架屏">
          <n-space vertical>
            <n-space class="dashboard-style__skeleton">
              <n-skeleton height="28px" circle />
              <n-skeleton height="28px" width="100px" />
            </n-space>
            <n-skeleton height="28px" width="66%" :sharp="false" />
            <n-skeleton height="28px" width="88%" :sharp="false" />
            <n-skeleton height="28px" width="100%" />
          </n-space>
        </ShadowBox>
      </n-col>
    </n-row>
    <n-row :gutter="24">
      <n-col :span="8">
        <n-space vertical>
          <ShadowBox title="自定义轮播">
            <Carousel :list="carouselList1" show-arrow autoplay>
              <img
                v-for="(item, index) in carouselList1"
                :key="index"
                class="carousel-img"
                :src="item"
              />
            </Carousel>
          </ShadowBox>
          <ShadowBox title="卡片轮播">
            <Carousel
              :list="carouselList2"
              effect="card"
              prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
              next-slide-style="transform: translateX(50%) translateZ(-800px);"
              style="height: 240px"
              :show-dots="false"
              autoplay
            >
              <n-carousel-item
                v-for="(item, index) in carouselList2"
                :key="index"
                :style="{ width: '60%' }"
              >
                <img class="carousel-img" :src="item" />
              </n-carousel-item>
            </Carousel>
          </ShadowBox>
        </n-space>
      </n-col>
      <n-col :span="16" class="dashboard-style__chart">
        <ShadowBox title="图表展示">
          <Chart :data="chartData" />
        </ShadowBox>
      </n-col>
    </n-row>
    <n-row :gutter="24" class="dashboard-style__rest">
      <n-col :span="12">
        <ShadowBox title="评分尺寸">
          <n-space align="center" class="dashboard-style__star">
            <n-rate size="small" />
            <n-rate size="medium" />
            <n-rate size="large" />
          </n-space>
          <n-space vertical>
            <n-ellipsis style="max-width: 100%">
              或许人逐渐变得成熟的标志便是，将责任体面尽数扛起，也将心酸委屈一并承担
            </n-ellipsis>
          </n-space>
        </ShadowBox>
      </n-col>
      <n-col :span="12">
        <ShadowBox title="颜色选择">
          <n-space class="dashboard-style__color">
            <n-statistic label="基础用法" tabular-nums>
              <template #suffix>
                <n-color-picker />
              </template>
            </n-statistic>
            <n-statistic label="不透明度" tabular-nums>
              <template #suffix>
                <n-color-picker :show-alpha="false" />
              </template>
            </n-statistic>
          </n-space>
          <n-space vertical>
            <n-ellipsis style="max-width: 100%">
              或许人逐渐变得成熟的标志便是，将责任体面尽数扛起，也将心酸委屈一并承担
            </n-ellipsis>
          </n-space>
        </ShadowBox>
      </n-col>
    </n-row>
  </div>
</template>

<script setup lang="ts">
import { NumberAnimationInst } from 'naive-ui'
import { ref, reactive, onMounted } from 'vue'
import { MdSave } from '@vicons/ionicons4'
import * as DashBoardApi from './hooks/request'
import { IcollapseType } from '#/dashboard'
import ShadowBox from '@/components/DashBoard/ShadowBox.vue'
import Carousel from '@/components/DashBoard/Carousel.vue'
import Chart from '@/components/DashBoard/Chart.vue'
// -- 基础信息 -- start --
const modelNumberToRef = ref<NumberAnimationInst | null>(null)
// 开启动画
const handleModelPalyItem = () => {
  modelNumberToRef.value?.play()
}
// -- end --

// -- 折叠面板 -- start --
// 数据
const collapseList = reactive<IcollapseType[]>([])

// 点击名字跳转
const handleLinkToWeibo = (link: string) => {
  window.open(link, '_blank')
}
// -- end --

// 加载动画loading
let show = ref<boolean>(false)

// -- 轮播图 -- start --
let carouselList1 = ref<string[]>([])
let carouselList2 = ref<string[]>([])

// -- end --

// -- echart -- start --
let chartData = ref<Array<[string, number]>>([])
// -- end --

onMounted(() => {
  // 折叠面板数据请求 -- AxiosResponse 类型定义待处理
  DashBoardApi.useCollapseApi().then((res: any) => {
    collapseList.push(...res.data)
  })

  // 自定义轮播图数据请求
  DashBoardApi.useCarouselApi(1).then((res: any) => {
    carouselList1.value = res.data
    carouselList2.value = res.data
  })

  // 图表数据1请求
  DashBoardApi.useChartDataApi().then((res: any) => {
    chartData.value = res.data
  })
})
</script>

<style scoped lang="less">
.dashboard-style {
  height: calc((100vh - 101px));
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .n-row {
    margin-bottom: 20px !important;
    &:last-child {
      margin-bottom: 0 !important;
    }
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
  .dashboard-style__height,
  .dashboard-style__chart {
    > :deep(div) {
      height: 100%;
      > div {
        height: 100%;
        box-sizing: border-box;
      }
    }
    &.dashboard-style__chart {
      height: 616px;
    }
  }
  .dashboard-style__skeleton {
    width: 100%;
  }
  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
  .dashboard-style__rest {
    flex: 1;
    > :deep(div) {
      height: 100%;
      > div {
        height: 100%;
        box-sizing: border-box;
      }
    }
    .box-shadow-style {
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }
    .dashboard-style__color,
    .dashboard-style__star {
      flex: 1;
      &.dashboard-style__color {
        > :deep(div) {
          width: 40%;
        }
      }
    }
  }
}
</style>
