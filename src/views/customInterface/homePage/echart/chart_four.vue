<template>
  <div class="app-container">
    <el-row>
      <div id="chart_four" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons')
  export default {
    name: 'OverviewChartOne',
    data() {
      return {
        option: {
          title: {
            text: '各学院科研项目及论文本年度对比'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['科研任务/项目', '论文']
          },
          toolbox: {
            show: true,
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: ['生物学院', '外国语学院', '商学院', '机械学院', '文学院', '理学院', '材料学院', '计算机学院', '工学院', '继续教育学院', '地质学院', '医学院']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '科研任务/项目',
              type: 'bar',
              data: [2, 4, 7, 22, 26, 77, 136, 162, 36, 20, 64, 33],
              markPoint: {
                data: [
                  { type: 'max', name: '最大值' },
                  { type: 'min', name: '最小值' }
                ]
              },
              markLine: {
                data: [
                  { type: 'average', name: '平均值' }
                ]
              }
            },
            {
              name: '论文',
              type: 'bar',
              data: [26, 59, 90, 24, 27, 77, 176, 182, 47, 18, 60, 23],
              markPoint: {
                data: [
                  { name: '年最高', value: 182, xAxis: 7, yAxis: 183 },
                  { name: '年最低', value: 23, xAxis: 11, yAxis: 3 }
                ]
              },
              markLine: {
                data: [
                  { type: 'average', name: '平均值' }
                ]
              }
            }
          ]
        }
      }
    },
    mounted() {
      this.initChart()
    },
    methods: {
      initChart: function() {
        this.chart = echarts.init(document.getElementById('chart_four'), 'macarons')
        this.chart.setOption(this.option)
      }
    }
  }
</script>

<style scoped>

</style>
