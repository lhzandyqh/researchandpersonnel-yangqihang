<template>
  <div class="app-container">
    <el-row>
      <div id="chart_nine" style="height: 300px" />
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
            text: '科研经费使用分布',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: ['核心论文', '省级科研项目', '市级科研项目', '校级科研项目', '个人项目', '国家级科研项目', '其他']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel']
              },
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          series: [
            {
              type: 'pie',
              radius: [20, 110],
              center: ['50%', '50%'],
              roseType: 'radius',
              label: {
                show: false
              },
              emphasis: {
                label: {
                  show: true
                }
              },
              data: [
                {value: 10, name: '核心论文经费'},
                {value: 20, name: '省级科研项目'},
                {value: 15, name: '市级科研项目'},
                {value: 25, name: '校级科研项目'},
                {value: 8, name: '个人项目'},
                {value: 25, name: '国家级科研项目'},
                {value: 5, name: '其他'}
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
        this.chart = echarts.init(document.getElementById('chart_nine'), 'macarons')
        this.chart.setOption(this.option)
      }
    }
  }
</script>

<style scoped>

</style>
