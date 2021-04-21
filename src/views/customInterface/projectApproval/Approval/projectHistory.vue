<template>
  <div class="app-container">
    <el-table :data="projectData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" stripe>
      <el-table-column prop="submitDate"  label="提交日期" width="100px">
      </el-table-column>
      <el-table-column prop="applyPerson" label="提交人" width="100px">
      </el-table-column>
      <el-table-column prop="auditPerson" label="审核人" width="100px">
      </el-table-column>
      <el-table-column prop="dept" label="部门" >
      </el-table-column>
      <el-table-column prop="auditName" label="项目名称">
      </el-table-column>
       <el-table-column prop="assessExpert" label="评审专家">
       </el-table-column>
      <el-table-column prop="auditDate" label="审核日期" width="100px">
      </el-table-column>
      <el-table-column prop="auditStatus" label="审核状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.auditStatus==='审核通过'" type="success">审核通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='未通过'" type="danger">审核未通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='待通过'">审核待通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="130px">
        <template slot-scope="scope">
          <el-button type="text" size="small" icon="el-icon-zoom-in" @click="chakan(scope.row)">查看</el-button>
          <el-button type="text" size="small" >导出</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15]"
        :page-size="pagesize"
        :total="projectData.length"
        style="margin-top:20px;"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <el-dialog :visible.sync="projectVisible" title="审核详情">
      <el-row style="margin-top: 10px">
        <span style="font-weight: bolder; font-size: 15px">基本信息：</span>
      </el-row>
      <el-row  style="padding-top: 10px">
        <el-col >
          <div>
            <div v-for="(item, key) in projectDetails.basicInfos" :key="key">
              <span class="detailName">{{item.contentName}}：</span>
              <span class="detailValue">{{item.contentValue}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <span style="font-weight: bolder; font-size: 15px">项目信息：</span>
      </el-row>
      <el-row  style="padding-top: 10px">
        <el-col >
          <div>
            <div v-for="(item, key) in projectDetails.projectInfos" :key="key">
              <span class="detailName">{{item.contentName}}：</span>
              <span class="detailValue">{{item.contentValue}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <span style="font-weight: bolder; font-size: 15px">预算信息：</span>
      </el-row>
      <el-row  style="padding-top: 10px">
        <el-col >
          <div>
            <div v-for="(item, key) in projectDetails.budgetInfos" :key="key">
              <span class="detailName">{{item.contentName}}：</span>
              <span class="detailValue">{{item.contentValue}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <span style="font-weight: bolder; font-size: 15px">评审配置：</span>
<!--        <span>{{projectDetails.assessScore.dimensionName}}</span>-->
      </el-row>
      <div class="dimension_container">
        <div class="dimension_title">
<!--          <span style="font-weight: bold">{{dimensionName}}</span>-->
<!--          <span style="font-weight: bold">{{dimensionExplain}}</span>-->
<!--          <el-divider></el-divider>-->
          <div class="dimension_container" v-for="(item, key) in children" :key="key">
            <div class="dimension_title">
              <span style="font-weight: bold">{{item.dimensionName}}</span>
<!--              <span style="font-weight: bold">{{item.basicScore}}</span>-->
              <el-divider></el-divider>
              <div class="dimension_item clearfix" v-for="(value, key) in item.children" :key="key">
                <div>
                  <div class="dimension_name">
                    <span>{{value.dimensionName}}: &#8195;{{item.evaluationScore}}</span>
                    <div class="score">该维度应得总分值：{{item.basicScore}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      <el-row :gutter="20" style="padding-top: 10px">-->
<!--        <el-col :span="8">-->
<!--          <div class="single">-->
<!--            <div class="biaoqian">-->
<!--              <span style="font-weight: bolder">项目名称：</span>-->
<!--              <span></span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :span="8">-->
<!--          <div class="single">-->
<!--            <div class="biaoqian">-->
<!--              <span style="font-weight: bolder">项目人数：</span>-->
<!--              <span>3</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :span="8">-->
<!--          <div class="single">-->
<!--            <div class="biaoqian">-->
<!--              <span style="font-weight: bolder">项目级别：</span>-->
<!--              <span>国家级</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--      <el-row :gutter="20" style="padding-top: 10px">-->
<!--        <el-col :span="8">-->
<!--          <div class="single">-->
<!--            <div class="biaoqian">-->
<!--              <span style="font-weight: bolder">主管部门：</span>-->
<!--              <span>计算机学院</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :span="8">-->
<!--          <div class="single">-->
<!--            <div class="biaoqian">-->
<!--              <span style="font-weight: bolder">项目负责人：</span>-->
<!--              <span>{{projectDetails.assessExpert}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :span="8">-->
<!--          <div class="single">-->
<!--            <div class="biaoqian">-->
<!--              <span style="font-weight: bolder">项目预算：</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--      </el-row>-->
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">项目方案：</span>
              <el-button type="text" >查看附件</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider />
      <div style="margin-bottom: 10px">
        <el-row>
          <span style="font-weight: 700">科研处意见:</span>
          <span>{{projectDetails.assessDesc}}</span>
        </el-row>
      </div>
      <div>
        <el-row>
<!--          <el-col :span="6">-->
<!--            {{projectDetails.assessDesc}}-->
<!--          </el-col>-->
          <el-col :span="6">
            <span style="font-weight: 700">审核时间：</span>
            <span>{{projectDetails.auditDate}}</span>
          </el-col>
          <el-col :span="6">
            <span style="font-weight: 700">审核人：</span>
            <span>{{projectDetails.auditPerson}}</span>
          </el-col>
          <el-col :span="5">
            <span style="font-weight: 700">审核状态:</span>
<!--            <el-tag type="success">{{projectDetails.auditStatus}}</el-tag>-->
            <el-tag  v-if="projectDetails.auditStatus==='审核通过'" type="success">审核通过</el-tag>
            <el-tag  v-if="projectDetails.auditStatus==='未通过'" type="danger">审核未通过</el-tag>
            <el-tag  v-if="projectDetails.auditStatus==='待通过'">审核待通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <div class="foot">
        <span style="">
          <el-button type="primary" @click="projectVisible = false" size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {getProjectApplyInfosAuditedRecord, getProjectApplyInfoAuditedRecordDetail} from '@/api/researchReview'
  export default {
    name: 'projectHistory',
    data(){
      return{
        dimensionName:{},
        children: [],
        currentPage: 1,
        pagesize: 5,
        zhuanyeVisible:false,
        workVisible:false,
        jibenVisible:false,
        projectVisible:false,
        projectData:[
          {
            number:'1',
            sub:'李老师',
            applypeople:'王老师',
            approvalpeople:'刘老师',
            department:'计算机学院',
            subdate:'2019-9-2',
            approvaldate:'2020-1-2',
            subname:'医保监控系统',
            approval:'通过',
          },
          {
            number:'2',
            sub:'周老师',
            applypeople:'张老师',
            approvalpeople:'刘老师',
            subdate:'2017-9-2',
            subname:'校园安全可视化',
            department:'计算机学院',
            approvaldate:'2018-1-2',
            approval:'通过',
          },
          {
            number:'3',
            sub:'邓老师',
            applypeople:'刘老师',
            approvalpeople:'刘老师',
            subname:'高点检测系统',
            subdate:'2019-4-2',
            department:'计算机学院',
            approvaldate:'2019-5-2',
            approval:'通过',
          },
          {
            number:'3',
            sub:'左老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'数据融合平台',
            approvaldate:'2019-5-2',
            approval:'未通过',
          },
          {
            number:'3',
            sub:'杨老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'环境质量监控',
            approvaldate:'2019-5-2',
            approval:'通过',
          },
          {
            number:'3',
            sub:'李老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subname:'城市公交管理系统',
            subdate:'2019-4-2',
            approvaldate:'2019-5-2',
            approval:'未通过',
          },
          {
            number:'3',
            sub:'李老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'办公自动化系统',
            approvaldate:'2019-5-2',
            approval:'未通过',
          },
          {
            number:'3',
            sub:'吴老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'课程设计管理系统',
            approvaldate:'2019-5-2',
            approval:'未通过',
          },
          {
            number:'3',
            sub:'陈老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'网络在线考试系统',
            approvaldate:'2019-5-2',
            approval:'通过',
          },
          {
            number:'3',
            sub:'赵老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'教师绩效评测系统',
            approvaldate:'2019-5-2',
            approval:'通过',
          },
        ],
        projectDetails: {} //项目申报详情当前对象
      }
    },
    mounted() {
      this.getProjectApplyInfosAuditedRecord()
    },
    methods:{
      chakan(row){
        this.projectVisible = true
        const prams = {
          applyTecUsername: localStorage.getItem('loginName'),
          times: row.times
        }
        console.log(row.times)
        getProjectApplyInfoAuditedRecordDetail(prams).then(response => {
          console.log('测试获取项目申报审核历史详情')
          console.log(response.data)
          this.projectDetails = response.data.data
          this.dimensionName = this.projectDetails.assessScore.dimensionName
          this.children = this.projectDetails.assessScore.children
          // console.log(this.projectDetails.assessScore.dimensionName)
          console.log(this.projectDetails.assessScore.dimensionName)
        })
      },
      // 科研主管查看项目申报审批历史详情
      getProjectApplyInfosAuditedRecord () {
        const prams = {
          tecUsername: localStorage.getItem('loginName')
        }
        getProjectApplyInfosAuditedRecord(prams).then(response => {
          console.log('测试获取项目申报审核历史详情')
          console.log(response.data)
          this.projectData = response.data.data
        })
      },
      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        // this.currentPage = 1;
        this.pagesize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
      }
    }
  }
</script>

<style scoped>
.detailName {
  float: left;
  /*display: inline-block;*/
  width: 100px;
  /*height: 20px;*/
  /*line-height: 20px;*/
  font-weight: 700

}
.detailValue {
  float: left;
  /*display: inline-block;*/
  width: 160px;
  font-weight: 400
}
.dimension_name {
  margin-top: 20px;
  float: left;
  margin-left: 10%;
}
.dimension_content {
  float: left;
}
.dimension_container {
  margin-top: 30px;
}
.score {
  /*margin-right: 5px;*/
  float: right;
  margin-left: 400px;
}
.foot{
  text-align: right;
  margin-right: 30px;
  margin-top: 20px;
}
</style>
