<template>
  <div class="app-container">
    <el-row>
      <div id="overview_chart_two" style="width:500px;height: 300px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'OverviewChartTwo',
  data() {
    return {
      option: {
        title: {
          text: '已完成科研/项目分布'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        // legend: {
        //   orient: 'vertical',
        //   right: -30,
        //   data: ['待提审', '审核中', '审核未通过', '未开始', '进行中', '已完成', '逾期未完成']
        // },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'outside'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: [
              { value: 33, name: '待提审' },
              { value: 31, name: '审核中' },
              { value: 23, name: '审核未通过' },
              { value: 13, name: '未开始' },
              { value: 48, name: '进行中' },
              { value: 53, name: '已完成' },
              { value: 18, name: '逾期未完成' }
            ]
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
      this.chart = echarts.init(document.getElementById('overview_chart_two'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
