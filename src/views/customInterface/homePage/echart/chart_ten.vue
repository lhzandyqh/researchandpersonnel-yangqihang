<template>
    <div class="app-container">
      <div>
        <el-row :gutter="20">
          <div style="display: flex;align-items: center;margin: 15px 0;">
            <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择教师:</div>
            <div>
              <el-select v-model="value1" multiple  placeholder="请选择教师">
                <el-option label="王老师" value="1"></el-option>
                <el-option label="刘老师" value="2"></el-option>
                <el-option label="李老师" value="3"></el-option>
                <el-option label="程老师" value="4"></el-option>
                <el-option label="吴老师" value="5"></el-option>
                <el-option label="张老师" value="6"></el-option>
                <el-option label="蒋老师" value="7"></el-option>
                <el-option label="陈老师" value="8"></el-option>
                <el-option label="何老师" value="9"></el-option>
                <el-option label="贺老师" value="7"></el-option>
                <el-option label="邓老师" value="8"></el-option>
                <el-option label="赵老师" value="9"></el-option>
              </el-select>
            </div>
            <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择类型:</div>
            <div>
              <el-select v-model="value2" multiple  placeholder="请选择类型">
                <el-option label="课题项目" value="1"></el-option>
                <el-option label="专利" value="2"></el-option>
                <el-option label="学术论文" value="3"></el-option>
                <el-option label="学术专著" value="4"></el-option>
              </el-select>
            </div>
            <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择指标:</div>
            <div>
              <el-select v-model="value3" multiple  placeholder="请选择指标">
                <el-option label="总数" value="1"></el-option>
                <el-option label="平均数" value="2"></el-option>
              </el-select>
            </div>
            <div>
              <el-button type="primary" style="margin-left:15px" @click="beginQuery">查询</el-button>
            </div>
          </div>
        </el-row>
        <el-row>
          <div id="chart_ten" style="height: 300px" />
        </el-row>
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons')
    export default {
        name: "chart_ten",
      data() {
        return {
          value1: [],
          value2: [],
          value3: [],
          option0: {
            title: {
              // text: '各学院科研项目及论文本年度对比'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['课题项目', '学术论文']
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
          },
          option: {
            title: {
              text: '教师科研情况对比'
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
                data: ['王老师', '刘老师', '李老师', '程老师', '吴老师', '张老师', '蒋老师', '陈老师', '何老师', '贺老师', '邓老师', '赵老师']
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
                data: [2, 4, 7, 12, 16, 8, 13, 12, 3, 20, 14, 13],
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
                data: [26, 29, 14, 24, 27, 17, 16, 18, 17, 18, 16, 23],
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
          },
          optionTwo:{
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
              data: ['课题项目', '专利', '学术论文', '学术专著', '']
            },
            xAxis: [
              {
                type: 'category',
                data: ['王老师', '刘老师', '李老师', '程老师', '吴老师'],
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '总数',
                min: 0,
                max: 100,
                interval: 50,
                axisLabel: {
                  formatter: '{value} '
                }
              },
              {
                type: 'value',
                name: '平均数',
                min: 0,
                max: 20,
                interval: 50,
                axisLabel: {
                  formatter: '{value} '
                }
              }
            ],
            series: [
              {
                name: '课题项目',
                type: 'bar',
                data: [20, 49, 70, 22, 26]
              },
              {
                name: '专利',
                type: 'bar',
                data: [26, 59, 90, 24, 28]
              },
              {
                name: '学术论文',
                type: 'bar',
                data: [20, 49, 70, 22, 25]
              },
              {
                name: '学术专著',
                type: 'bar',
                data: [26, 59, 90, 24, 28]
              },
              {
                name: '平均数',
                type: 'line',
                yAxisIndex: 1,
                data: [2, 3, 3, 4, 6]
              }
            ]
          },
        }
      },
      mounted() {
        this.initChart()
      },
      methods: {
        beginQuery: function () {
          console.log('beginQuery')
          if(this.value2.length!==0){
            this.option = this.optionTwo
            console.log(2)
            console.log(this.value2.length)
            this.initChart()
          }else {
            this.option = this.option0
            this.initChart()
          }
        },
        initChart: function() {
          this.chart = echarts.init(document.getElementById('chart_ten'), 'macarons')
          this.chart.setOption(this.option)
        }
      }
    }
</script>

<style scoped>

</style>
