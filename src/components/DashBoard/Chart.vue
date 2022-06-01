<template>
  <div id="chart"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { nextTick, watch } from 'vue'
type Props = {
  data: Array<[string, number]>
}

let props = withDefaults(defineProps<Props>(), {
  data: () => []
})

// 获取option
const handleGetOption = (data: Props['data']) => {
  // 设置option
  const option = {
    grid: {
      x: 80,
      y: 30,
      x2: 50,
      y2: 80
    },
    xAxis: {
      type: 'category',
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '30%']
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 1,
          lt: 3,
          color: 'rgba(0, 0, 180, 0.4)'
        },
        {
          gt: 5,
          lt: 7,
          color: 'rgba(0, 0, 180, 0.4)'
        }
      ]
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#5470C6',
          width: 5
        },
        markLine: {
          symbol: ['none', 'none'],
          label: { show: true },
          data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 8 }]
        },
        areaStyle: {},
        data
      }
    ]
  }
  return option
}

// 监听数据改变
watch(
  () => props.data,
  () => {
    nextTick(() => {
      var myChart = echarts.init(document.querySelector('#chart') as HTMLElement)
      myChart.setOption(handleGetOption(props.data))
      //  监听窗口改变
      window.onresize = () => {
        myChart.resize()
      }
    })
  }
)
</script>

<style scoped lang="less">
#chart {
  width: 100%;
  height: 100%;
}
</style>
