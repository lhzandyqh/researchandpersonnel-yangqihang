<template>
  <div class="app-container">
    <el-row>
      <div id="chart_eight" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
import {getSciAchieveNumsByYears} from '@/api/chartsData'
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
            data: ['学术论文','审核项目','课题项目','专利','专著']
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
      this.getSciAchieveNumsByYears()
    },
    methods: {
      initChart: function() {
        this.chart = echarts.init(document.getElementById('chart_eight'), 'macarons')
        this.chart.setOption(this.option)
      },
      // 智能分析-科研主管/专家查询按年份学术成果数量
      getSciAchieveNumsByYears () {
        getSciAchieveNumsByYears().then(response => {
          console.log('测试科研主管——查询按年份学术成果数量接口')
          console.log(response.data)
          this.projectApplyNums = response.data.data.projectApplyNums
          this.monographInfoNums = response.data.data.monographInfoNums
          this.patentInfoNums = response.data.data.patentInfoNums
          this.projectInfosNums = response.data.data.projectInfosNums
          this.paperInfosNums = response.data.data.paperInfosNums

          this.option.xAxis.data = response.data.data.years
          this.option.series = [{
            name: '学术论文',
            data: this.paperInfosNums,
            type: 'line',
            smooth: true
          }, {
            name: '审核项目',
            data: this.projectApplyNums,
            type: 'line',
            smooth: true
          }, {
            name: '课题项目',
            data: this.projectInfosNums,
            type: 'line',
            smooth: true
          }, {
            name: '专利',
            data: this.patentInfoNums,
            type: 'line',
            smooth: true
          }, {
            name: '专著',
            data: this.monographInfoNums,
            type: 'line',
            smooth: true
          }]
          this.chart.setOption(this.option)
        })
      }
    }
  }
</script>

<style scoped>

</style>
