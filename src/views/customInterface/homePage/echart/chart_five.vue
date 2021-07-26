<template>
  <div class="app-container">
    <el-row>
      <div id="chart_five" style="height: 300px" />
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
        years: [],
        projectApplyNums: [],
        monographInfoNums: [],
        patentInfoNums: [],
        projectInfosNums: [],
        paperInfosNums: [],
        // chartObj : {},
        option: {
          tooltip: {
            trigger: 'axis'
          },
          title: {
            text: '校科研项目及论文年度对比',
            left: '10%'
          },
          legend: {
            data: ['学术论文','审核项目','课题项目','专利','专著'],
            top: '10%',
            left: '40%'
            // data: ['论文','1']
          },
          xAxis: {
            type: 'category',
            // data: [2014,2015, 2016, 2017, 2018, 2019, 2020]
            data: []
            // data: [2012, "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
          },
          yAxis: {
            type: 'value'
          },
          series: [
          // ,{
          //   name: '1',
          //   // data: [82, 93, 91, 94, 90, 130, 120,1,1,1],
          //   data: this.monographInfoNums ,
          //   type: 'line',
          //   smooth: true
          // }
          // ,{
          //   name: '2',
          //   // data: [82, 93, 91, 94, 90, 130, 120,1,1,1],
          //   data: this.patentInfoNums ,
          //   type: 'line',
          //   smooth: true
          // },{
          //   name: '3',
          //   // data: [82, 93, 91, 94, 90, 130, 120,1,1,1],
          //   data: this.projectInfosNums ,
          //   type: 'line',
          //   smooth: true
          // },{
          //   name: '4',
          //   // data: [82, 93, 91, 94, 90, 130, 120,1,1,1],
          //   data: this.paperInfosNums ,
          //   type: 'line',
          //   smooth: true
          // }
          ]
        }
      }
    },
    mounted() {
      this.initChart()
      this.getSciAchieveNumsByYears()
    },
    methods: {
      initChart: function() {
        this.chart = echarts.init(document.getElementById('chart_five'), 'macarons')
        this.chart.setOption(this.option)
      },
      // 智能分析-科研主管/专家查询按年份学术成果数量
      getSciAchieveNumsByYears () {
        getSciAchieveNumsByYears().then(response =>{
          console.log('测试科研主管——查询按年份学术成果数量接口')
          console.log(response.data)
          // console.log(response.data.data.years)
          // console.log(this.option.xAxis.data)
          // this.years = response.data.data.years;
          // // console.log(this.years)
          // for (var j = 0,len=this.years.length; j < len; j ++) {
          //   this.option.xAxis.data.push( this.years[j] )
          // }
          // console.log(this.option.xAxis.data)
          // this.chart.setOption(option, {
          //   xAxis: {
          //     type: 'category',
          //     data: this.response.data.data.years
          // }
          // });
          // var dom = document.getElementById('main');
          // var myChart = require('echarts').init(dom);
          // myChart.setOption(this.option.xAxis.data = response.data.data.years, false, false);
          // this.chart.setOption(this.option)
          this.projectApplyNums = response.data.data.projectApplyNums
          this.monographInfoNums = response.data.data.monographInfoNums
          this.patentInfoNums = response.data.data.patentInfoNums
          this.projectInfosNums = response.data.data.projectInfosNums
          this.paperInfosNums = response.data.data.paperInfosNums

          this.option.xAxis.data = response.data.data.years
          this.option.series= [{
            name: '学术论文',
            data: this.paperInfosNums,
            type: 'line',
            smooth: true
          },{
            name: '审核项目',
            data: this.projectApplyNums,
            type: 'line',
            smooth: true
          },{
            name: '课题项目',
            data: this.projectInfosNums,
            type: 'line',
            smooth: true
          },{
            name: '专利',
            data: this.patentInfoNums,
            type: 'line',
            smooth: true
          },{
            name: '专著',
            data: this.monographInfoNums,
            type: 'line',
            smooth: true
          }]
          this.chart.setOption(this.option)
          // this.chartObj =  response.data.data
          // console.log(this.chartObj)
        })
      }
    }
  }
</script>

<style scoped>

</style>
