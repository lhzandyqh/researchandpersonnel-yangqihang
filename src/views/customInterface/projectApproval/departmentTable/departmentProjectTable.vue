<template>
  <div class="app-container">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      stripe
      style="width: 100%">
      <el-table-column
        prop="submitDate"
        width="200"
        label="提交日期">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="people"-->
<!--        label="提交人">-->
<!--      </el-table-column>-->
       <el-table-column
         prop="applyTecName"
         width="200"
         label="申请人">
      </el-table-column>
      <el-table-column
        prop="dept"
        label="部门">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="type"-->
<!--        label="审核类型">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="projectName"
        label="项目名称">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getAuditing(scope.row)">评审</el-button>
          <el-button type="primary" size="small" icon="el-icon-notebook-2">查看论证书</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :page-sizes="[5, 10]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>

    <!--查看弹框-->
    <el-dialog :visible.sync="keyandialogPvVisible" title="中文核心论文审核详情">
      <el-table :data="aData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="academic_name" label="文章题目（专著名称）"/>
        <el-table-column prop="publication_time" label="发表时间（出版时间）"/>
        <el-table-column prop="is_first_author" label="是否第一作者"/>
        <!--<el-table-column prop="certType" label="证书颁发日期"/>-->
        <el-table-column prop="name_of_publications" label="刊物名称（出版社）"/>
        <el-table-column prop="number_of_academic" label="刊号（书号）"/>
        <el-table-column prop="level_of_publisher" label="刊物等级（出版社等级）"/>
        <el-table-column prop="submit_time" label="提交审核时间"/>
        <el-table-column align="center" label="照片证明">
          <template slot-scope="scope">
            <el-button type="text" size="medium" @click="lookImages(scope.$index)">查看图片</el-button>
          </template>
        </el-table-column>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.audit_status==='待审核'">审核待通过</div>
            <div v-if="scope.row.status==='1'">审核通过</div>
            <div v-if="scope.row.status==='0'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-row style="padding-top: 10px">
          <span>审核意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="myStatus.remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="editAuditing(1)">审核通过</el-button>
        <el-button type="danger" @click="editAuditing(0)">审核不通过</el-button>
        <el-button type="primary" @click="keyandialogPvVisible = false">关闭</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="xiangmudialogVisible" title="科研项目立项评分"   width="38%">
      <div class="dimension_container" v-for="(item, key) in dimensionData" :key="key">
        <div class="dimension_title">
          <span style="font-weight: bold">{{item.dimensionName}}</span>
          <el-divider></el-divider>
          <div class="dimension_item clearfix" v-for="(value, k) in item.children" :key="key">
            <div>
              <div class="dimension_name">
                <span>{{value.dimensionName}}:</span>
                <el-input v-model="value.number" @change="addScore(value.id,value.number)" style="width: 150px;margin-left: 15px" placeholder="请输入评审分值" />
                <span class="pingjiaxiangqing">该维度评价总分值：{{value.basicScore}}分</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="confirmAuditing">评审完成</el-button>
        <el-button type="primary" @click="keyandialogPvVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { projectReviewDimensionSetting } from '@/api/personnalSettings'
import { expertGetAllWaitAuditingData, expertAuditingProject } from '@/api/expertEvaluation'
    export default {
        name: "departmentProjectTable",
      data(){
          return{
            currentPage: 1,
            pagesize:5,
            dimensionData: [],
            currentPage4: 4,
            aData:[
              {
                academic_name: '碳基材料的应用与研究',
                level_of_publisher:'国家级',
                publication_time: '2019-08-02',
                is_first_author: '是',
                name_of_publications: '科技出版社',
                number_of_academic: '90-6474',
                submit_time: '2020-07-08',
                audit_status: '待审核'
              },
            ],
            bData:[
              {
              renshu: 4,
              jibie:'国家级',
              bumen: '计算机学院',
              fuzeren: '王老师',
              yusuan: '400000',
              submit_time: '2020-07-08',
              audit_status: '待审核'
            },],
            xiangmudialogVisible: false,
            keyandialogPvVisible: false,
            imgs: [],
            isShowImageDialog: false,
            tableData: [{
              date: '2020-07-02',
              name: '高点探测智能分析',
              address: '理学院',
              type: '科研项目',
              people: '王老师'
            }, {
              date: '2020-07-12',
              name: '校园诊改系统',
              address: '计算机学院',
              type: '科研项目',
              people: '李老师'
            }, {
              date: '2020-07-18',
              name: '碳基材料的应用与研究',
              address: '材料学院',
              type: '中文核心论文登记',
              people: '赵老师'
            }, {
              date: '2020-08-02',
              name: '自然语言处理问答系统',
              address: '计算机学院',
              type: '科研项目',
              people: '杨老师'
            }],
            dialogPvVisible: false,
            pvData: [],
            myStatus: {
              id: '',
              status: '',
              remark: ''
            },
            evaluationSheetScores: [],
            auditingForm: {
              tecUsername: localStorage.getItem('loginName'),
              applyTecUsername: '',
              times:'',
              assessStatus:'',
              assessDesc: '暂无意见'
            }
          }
      },
      mounted() {
        this.getDimensionData()
        this.getWaitAuditing()
      },
      methods:{
        addScore: function (evaluationSheetId,evaluationScore) {
          var score = {
            evaluationSheetId: '',
            evaluationScore: ''
          }
          score.evaluationSheetId = evaluationSheetId
          score.evaluationScore = evaluationScore
          console.log('测试score参数')
          console.log(score)
          this.evaluationSheetScores.push(score)
        },
        getWaitAuditing: function () {
          console.log('测试专家评审获取所有待审核')
          const prams = {
            tecUsername: localStorage.getItem('loginName')
          }
          expertGetAllWaitAuditingData(prams).then(response => {
            console.log('测试获取待审核接口')
            console.log(response.data)
            this.tableData = response.data.data
          })
        },
        confirmAuditing: function (){
          this.auditingForm.assessStatus = '评审完成'
          console.log('测试auditingForm参数')
          console.log(this.auditingForm)
          console.log('测试evaluationSheetScores')
          console.log(this.evaluationSheetScores)
          expertAuditingProject(this.auditingForm,this.evaluationSheetScores).then(response => {
            console.log('测试专家评审接口')
            console.log(response.data)
            this.auditingForm = {
              tecUsername: localStorage.getItem('loginName'),
              applyTecUsername: '',
              times:'',
              assessStatus:'',
              assessDesc: '暂无意见'
            }
            this.evaluationSheetScores = []
            this.xiangmudialogVisible = false
            this.$message({
              message: '审核完成',
              type: 'success'
            });
            this.getWaitAuditing()
          })
        },
        getAuditing(row) {
          // if(type === '中文核心论文登记'){
          //   this.keyandialogPvVisible = true
          // } else if(type === '科研项目'){
          //   this.xiangmudialogVisible = true
          // }
          console.log(row)
          this.auditingForm.times = row.times
          this.auditingForm.applyTecUsername = row.applyTecUsername
          this.xiangmudialogVisible = true
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          // this.currentPage = 1;
          this.pagesize = val;
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.currentPage = val;
        },
        getDimensionData: function () {
          projectReviewDimensionSetting().then(response => {
            console.log('专家评审权限测试获取评审维度接口')
            console.log(response.data)
            this.dimensionData = response.data.data.children
          })
        }
      }
    }
</script>

<style scoped>
  .fenye{
    text-align: center;
    margin-top: 20px;
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
  .pingjiaxiangqing {
    margin-left: 60px;
  }
</style>
