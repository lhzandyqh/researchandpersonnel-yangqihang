<template>
  <div>
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择学院:</div>
        <div>
          <el-select v-model="value1" multiple  placeholder="请选择学院">
            <el-option v-for="(item,key) in college" :key="key" :label="item" :value="item"></el-option>
          </el-select>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px" @click="beginQuery">查询</el-button>
        </div>
      </div>
    </el-row>
    <el-row>
      <div id="homepage_chart" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
import {somePaperSum,getSciAchieveNumsByCollegeOrTypeOrQuota} from '@/api/chartsData'
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'chart_eleven',
  data() {
    return {
      value1 : [],
      college: [],
      projectApplyAuditPassNums: [],
      projectAuditPassNums: [],
      paperAuditPassNums: [],
      patentAuditPassNums: [],
      monographAuditPassNums: [],
      option: {
        title: {
          // text: '各学院科研项目及论文本年度对比'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          // data: ['课题项目', '学术论文']
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
            data: []
            // data: ['生物学院', '外国语学院', '商学院', '机械学院', '文学院', '理学院', '材料学院', '计算机学院', '工学院', '继续教育学院', '地质学院', '医学院']
          },
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '课题项目',
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
            name: '学术论文',
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
    this.somePaperSum()
  },
  methods: {
    beginQuery() {
      // console.log(this.value1.length);
      if (this.value1.length === 0) {
        this.chart.setOption(this.option);
      } else {
        for (var j = 0, len = this.value1.length; j < len; j++) {
          // console.log(this.value1[j]);
          const prams = {
            college: this.value1[j]
          }
          // console.log(prams)
          getSciAchieveNumsByCollegeOrTypeOrQuota(prams).then(response => {
            console.log('测试科研主管科研主管根据学院、类型、指标查询学院科研成果数量接口');
            console.log(response.data);
            this.projectApplyAuditPassNums.push(this.number(response.data.data.projectApplyAuditPassNums))
            this.projectAuditPassNums.push(this.number(response.data.data.projectAuditPassNums))
            this.paperAuditPassNums.push(this.number(response.data.data.paperAuditPassNums))
            this.patentAuditPassNums.push(this.number(response.data.data.patentAuditPassNums))
            this.monographAuditPassNums.push(this.number(response.data.data.monographAuditPassNums))
            console.log(this.projectApplyAuditPassNums)
          })
        }
        this.option.xAxis.data = this.value1;
        this.option.legend.data = ['项目申请审核通过', '科研项目审核通过', '学术论文审核通过', '专利登记审核通过', '专著登记审核通过'];
        // console.log(this.option.xAxis.data);
        this.option.series = [
          {
            name: '项目申请审核通过',
            type: 'bar',
            data: this.projectApplyAuditPassNums,
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
          }, {
            name: '科研项目审核通过',
            type: 'bar',
            data: this.projectAuditPassNums,
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
          }, {
            name: '学术论文审核通过',
            type: 'bar',
            data: this.paperAuditPassNums,
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
          }, {
            name: '专利登记审核通过',
            type: 'bar',
            data: this.patentAuditPassNums,
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
          }, {
            name: '专著登记审核通过',
            type: 'bar',
            data: this.monographAuditPassNums,
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
        ]
        this.chart.setOption(this.option);
      }
    },
    somePaperSum () {
      somePaperSum().then(response => {
        console.log('测试科研主管查看学术成果数量默认（总数）接口');
        console.log(response.data);
        this.option.xAxis.data = response.data.data.college;
        this.option.legend.data = ['项目申请审核通过', '科研项目审核通过', '学术论文审核通过', '专利登记审核通过', '专著登记审核通过'];
        this.option.series = [
          {
            name: '项目申请审核通过',
            type: 'bar',
            data: response.data.data.projectApplyAuditPassNums,
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
            name: '科研项目审核通过',
            type: 'bar',
            data: response.data.data.projectAuditPassNums,
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
            name: '学术论文审核通过',
            type: 'bar',
            data: response.data.data.paperAuditPassNums,
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
            name: '专利登记审核通过',
            type: 'bar',
            data: response.data.data.patentAuditPassNums,
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
            name: '专著登记审核通过',
            type: 'bar',
            data: response.data.data.monographAuditPassNums,
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
        ]
        this.chart.setOption(this.option);
        this.college = response.data.data.college;
        // console.log("test", this.college)
      })
    },
    number(array) {
      for( var j = 0,len = array.length; j < len; j++) {
        return array[j]
      }
    },
    initChart: function() {
      this.chart = echarts.init(document.getElementById('homepage_chart'), 'macarons')
      console.log("Options", this.chart)
      this.chart.setOption(this.option)
    },
  }
}
</script>

<style scoped>

</style>
