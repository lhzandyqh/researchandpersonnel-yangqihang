<template>
  <div class="app-container">
    <el-row>
      <div id="chart_eight" style="height: 300px" />
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
          tooltip: {
            trigger: 'axis'
          },
          title: {
            text: '学院科研项目及论文年度对比'
          },
          legend: {
            data: ['科研任务/项目', '论文']
          },
          xAxis: {
            type: 'category',
            data: ['2014','2015', '2016', '2017', '2018', '2019', '2020']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '论文',
            data: [134, 245, 303, 312, 290, 330, 350],
            type: 'line',
            smooth: true
          },{
            name: '科研任务/项目',
            data: [82, 93, 91, 94, 90, 130, 120],
            type: 'line',
            smooth: true
          }]
        }
      }
    },
    mounted() {
      this.initChart()
    },
    methods: {
      initChart: function() {
        this.chart = echarts.init(document.getElementById('chart_eight'), 'macarons')
        this.chart.setOption(this.option)
      }
    }
  }
</script>

<style scoped>

</style>
