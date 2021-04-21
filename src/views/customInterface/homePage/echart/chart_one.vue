<template>
  <div class="app-container">
    <el-row>
      <div id="chart_one" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
import {paperNum} from '@/api/chartsData'
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'OverviewChartOne',
  data() {
    return {
      option: {
        title: {
          text: '教师科研月度分析'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['审核项目', '论文', '科研项目', '专利', '专著']
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
        xAxis:
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ,
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
    this.paperNum()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('chart_one'), 'macarons')
      this.chart.setOption(this.option)
    },
    //智能分析-普通教师最近12个月的学术成果及参与项目数
    paperNum () {
      const prams = {
        tecUsername : localStorage.getItem('loginName')
      }
      paperNum(prams).then(response => {
        console.log('测试教师最近12个月的学术成果及参与项目数接口');
        console.log(response.data)
        this.option.xAxis.data = response.data.data.months;
        this.option.series = [
          {
            name: '审核项目',
            type: 'bar',
            data: response.data.data.projectApplyNums,
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
          },{
            name: '论文',
            type: 'bar',
            data: response.data.data.paperNums,
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
          },{
            name: '科研项目',
            type: 'bar',
            data: response.data.data.projectNums,
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
          },{
            name: '专利',
            type: 'bar',
            data: response.data.data.patentNums,
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
          },{
            name: '专著',
            type: 'bar',
            data: response.data.data.monographNums,
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
          }
        ];
        this.chart.setOption(this.option)
      })
    }
  }
}
</script>

<style scoped>

</style>
