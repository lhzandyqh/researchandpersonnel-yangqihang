<template>
  <div class="app-container">
    <div v-if="roles==='教师'">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!--          <span>卡片名称</span>-->
          <div class="main_container juli">
            <div class="item_content">
              <div class="item zi_border">
                <span>科研任务/项目进行数(个)</span>
                <div class="shuzi">2</div>
              </div>
              <div class="item lan_border">
                <span>科研任务/项目审批数(个)</span>
                <div class="shuzi">4</div>
              </div>
              <div class="item hong_border">
                <span>科研论文发表数(篇)</span>
                <div class="shuzi">12</div>
              </div>
              <div class="item lv_border">
                <span>科研任务/项目完成数(个)</span>
                <div class="shuzi">10</div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div>
          <el-row>
            <el-col :span="14">
              <chart-one />
            </el-col>
            <el-col :span="8">
              <chart-two />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="14">
<!--             <chart_three></chart_three>-->
            </el-col>

          </el-row>
        </div>
      </el-card>
    </div>
    <div v-if="roles==='科研主管'">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!--          <span>卡片名称</span>-->
          <div class="main_container juli">
            <div class="item_content">
              <div class="item zi_border">
                <span>校科研项目本年度总数（个）</span>
                <div class="shuzi">43</div>
              </div>
              <div class="item lan_border">
                <span>科研任务/论文待审批数(个)</span>
                <div class="shuzi">6</div>
              </div>
              <div class="item hong_border">
                <span>科研论文本年度发表数(篇)</span>
                <div class="shuzi">12</div>
              </div>
              <div class="item lv_border">
                <span>总科研经费（元）</span>
                <div class="shuzi">6650000</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <el-row>
<!--            <chart-four></chart-four>-->
            <div>
              <el-row :gutter="20">
                <div style="display: flex;align-items: center;margin: 15px 0;">
                  <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择学院:</div>
                  <div>
                    <el-select v-model="value1" multiple  placeholder="请选择学院">
                      <el-option label="文学院" value="1"></el-option>
                      <el-option label="理学院" value="2"></el-option>
                      <el-option label="教育学院" value="3"></el-option>
                      <el-option label="医学院" value="4"></el-option>
                      <el-option label="商学院" value="5"></el-option>
                      <el-option label="管理学院" value="6"></el-option>
                      <el-option label="机械工程学院" value="7"></el-option>
                      <el-option label="电子信息学院" value="8"></el-option>
                      <el-option label="电气工程学院" value="9"></el-option>
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
                <div id="homepage_chart" style="height: 300px" />
              </el-row>
            </div>
          </el-row>
          <el-row>
            <el-col :span="14">
              <chart-five></chart-five>
            </el-col>
            <el-col :span="10">
              <chart-six></chart-six>
            </el-col>
          </el-row>
        </div>
<!--        <el-divider></el-divider>-->
      </el-card>
    </div>
    <div v-if="roles==='专家评审'">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!--          <span>卡片名称</span>-->
          <div class="main_container juli">
            <div class="item_content">
              <div class="item zi_border">
                <span>学院科研任务/项目进行数(个)</span>
                <div class="shuzi">37</div>
              </div>
              <div class="item lan_border">
                <span>科研任务/项目待审批数(个)</span>
                <div class="shuzi">6</div>
              </div>
              <div class="item hong_border">
                <span>学院科研论文发表数(篇)</span>
                <div class="shuzi">67</div>
              </div>
              <div class="item lv_border">
                <span>总科研经费（元）</span>
                <div class="shuzi">1200000</div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div>
          <el-row>
<!--            <chart-seven></chart-seven>-->
            <chart-ten></chart-ten>
          </el-row>
          <el-row>
            <el-col :span="14">
              <chart-eight></chart-eight>
            </el-col>
            <el-col :span="10">
              <chart-nine></chart-nine>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import chartOne from '@/views/customInterface/homePage/echart/chart_one'
import chartTwo from '@/views/customInterface/homePage/echart/chart_two'
import chartFour from '@/views/customInterface/homePage/echart/chart_four'
import chartFive from '@/views/customInterface/homePage/echart/chart_five'
import chartSix from '@/views/customInterface/homePage/echart/chart_six'
import chartSeven from '@/views/customInterface/homePage/echart/chart_seven'
import chartEight from '@/views/customInterface/homePage/echart/chart_eight'
import chartNine from '@/views/customInterface/homePage/echart/chart_nine'
import chartTen from '@/views/customInterface/homePage/echart/chart_ten'
// import chart_three from './echart/chart_three'
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'Index',
  components: {
    chartOne,
    chartTwo,
    chartFour,
    // chart_three,
    chartFive,
    chartSix,
    chartSeven,
    chartEight,
    chartNine,
    chartTen
  },
  computed:{
    roles() {
      return this.$store.getters.roles[0]
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('homepage_chart'), 'macarons')
      this.chart.setOption(this.option)
    },
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
    }
  },
  data(){
    return{
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
            data: ['文学院', '理学院', '教育学院', '医学院', '商学院'],
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
      optionThree:{}
    }
  }
}
</script>

<style scoped>
  .juli {
    margin-top: 15px;
  }
  .main_container {
    width: 100%;
    /*height: 650px;*/
    background-color: white;
  }
  .item_content {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /*border-bottom-style: solid;*/
    /*border-bottom-color: #bcbcbc;*/
    /*border-bottom-width: 1px;*/
  }
  .item {
    margin-top: 15px;
    /*padding-top: 10px;*/
    height: 100px;
    width: 250px;
    border-style: solid;
    border-width: 1px;
    border-color: #d7d7d7;
  }
  .item span {
    display: block;
    height: 100px;
    line-height: 100px;
    float: left;
    margin-left: 10px;
    font-size: 14px;
  }
  .shuzi {
    display: block;
    height: 100px;
    line-height: 100px;
    float: right;
    margin-right: 25px;
    font-size: 25px;
  }
  .zi_border {
    border-top-width: 2px;
    border-top-color: #d45cf9;
  }
  .lan_border {
    border-top-width: 2px;
    border-top-color: #57d8f9;
  }
  .hong_border {
    border-top-width: 2px;
    border-top-color: #f93f49;
  }
  .lv_border {
    border-top-width: 2px;
    border-top-color: #85ec76;
  }
  .block {
    text-align: center;
  }
</style>
