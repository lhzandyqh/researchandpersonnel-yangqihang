<template>
  <div class="app-container">
    <el-row>
      <div id="budgeone" style="height: 400px" />
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
            text: '科研项目预算分布',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: ['设备费', '材料费', '测试化验加工费', '燃料动力费', '差旅费', '会议费', '资料费', '劳务费', '专家咨询费', '管理费']
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
              name: '面积模式',
              type: 'pie',
              radius: [30, 110],
              center: ['50%', '50%'],
              roseType: 'area',
              data: [
                {value: 10, name: '设备费'},
                {value: 5, name: '材料费'},
                {value: 15, name: '测试化验加工费'},
                {value: 25, name: '燃料动力费'},
                {value: 20, name: '差旅费'},
                {value: 35, name: '会议费'},
                {value: 30, name: '资料费'},
                {value: 40, name: '劳务费'},
                {value: 30, name: '专家咨询费'},
                {value: 40, name: '管理费'}
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
        this.chart = echarts.init(document.getElementById('budgeone'), 'macarons')
        this.chart.setOption(this.option)
      }
    }
  }
</script>

<style scoped>

</style>
