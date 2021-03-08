<template>
  <div class="app-container">
    <el-row>
      <div id="score_echart" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: "rankScoreEchart",
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['评审得分', '平均得分']
        },
        xAxis: [
          {
            type: 'category',
            data: ['维度1', '维度2', '维度3', '维度4', '维度5', '维度6', '维度7', '维度8', '维度9', '维度10', '维度11', '维度12'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '得分',
            min: 0,
            max: 20,
            interval: 2,
            axisLabel: {
              // formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '得分',
            min: 0,
            max: 20,
            interval: 2,
            axisLabel: {
              // formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '评审得分',
            type: 'bar',
            data: [5, 4, 7, 2, 5, 7, 13, 6, 3, 12, 6, 3]
          },
          {
            name: '平均得分',
            type: 'line',
            yAxisIndex: 1,
            data: [8, 2, 7, 4, 3, 10, 10, 8, 4, 9, 4, 6]
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
      this.chart = echarts.init(document.getElementById('score_echart'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
