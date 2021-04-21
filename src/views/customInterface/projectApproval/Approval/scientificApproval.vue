<template>
  <div class="app-container">
    <el-table :data="peopleData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" stripe>
      <el-table-column prop="submitDate" label="提交日期">
      </el-table-column>
      <el-table-column prop="applyPerson" label="提交人">
      </el-table-column>
      <el-table-column prop="dept" label="部门">
      </el-table-column>
      <el-table-column prop="auditType" label="审核类型">
      </el-table-column>
      <el-table-column prop="auditName" label="审核名称">
      </el-table-column>
      <el-table-column prop='auditStatus' label="审核状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.auditStatus==='通过'" type="success">审核通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='未审核'" type="danger">审核未通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='待审核'">审核待通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getAcadeAchievesWaitAuditDetail(scope.row)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :page-sizes="[5, 10]"
        :total="peopleData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <el-dialog :visible.sync="hexinVisible" :data='detailTable' title="审核详情" style="width: 110%">
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">文章题目：</span>
              <span>{{ detailTable.paperName }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">发表时间：</span>
              <span>{{ detailTable.publishTime }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">是否第一作者：</span>
              <span>{{ detailTable.IfFirstAuthor }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">发表刊物：</span>
              <span>{{ detailTable.publishJournal }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">出版社：</span>
              <span>{{ detailTable.publisher }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">提交时间：</span>
              <span>{{ detailTable.submitDate }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">照片证明：</span>
              <el-button type="text">查看图片</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider/>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">科研处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="auditingInfo.auditDesc"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="acadeAchievesAudit(basicId,assessType1,'审核通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="acadeAchievesAudit(basicId,assessType1,'审核未通过')">审核未通过</el-button>
          <el-button type="primary" @click="hexinVisible = false"  size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getWaitResDirectorAuditInfosTwo,getAcadeAchievesWaitAuditDetail,acadeAchievesAudit} from '@/api/researchReview'
  export default {
    name: 'scientificApproval',
    data(){
      return{
        currentPage: 1,
        pagesize: 5,
        hexinVisible:false,
        workVisible:false,
        jibenVisible:false,
        peopleData:[
          {
            number:'1',
            sub:'中文核心论文',
            applypeople:'王老师',
            approvalpeople:'刘老师',
            subdate:'2019-9-2',
            approvaldate:'2020-1-2',
            approval:'待通过',
            department:'计算机学院',
            name: '高点探测智能分析'
          },
          {
            number:'2',
            sub:'三大检索论文',
            applypeople:'张老师',
            approvalpeople:'刘老师',
            subdate:'2017-9-2',
            approvaldate:'2018-1-2',
            department:'工学院',
            approval:'待通过',
            name: '高点探测智能分析',
          },
          {
            number:'3',
            sub:'非中文核心论文',
            applypeople:'刘老师',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            approvaldate:'2019-5-2',
            approval:'待通过',
            department: '理学院',
            name: '校园诊改系统',
          },
          {
            number:'4',
            sub:'中文核心',
            applypeople:'赵老师',
            approvalpeople:'刘老师',
            subdate:'2019-12-21',
            approvaldate:'2019-5-2',
            approval:'待通过',
            department: '理学院',
            name: '自然语言处理问答',
          },
        ],
        detailTable: {},
        basicId: '', //当前要审核的基本信息条目id
        assessType1: '',
        auditingInfo: {
          tecUsername: localStorage.getItem('loginName'),
          id:'',
          assessType: '',
          auditStatus: '',
          auditDesc: ''
        }
      }
    },
    mounted() {
      this.getWaitResDirectorAuditInfosTwo()
    },
    methods: {
      paper() {
        this.hexinVisible = true;
      },
      jibenview(sub){
        this.hexinVisible = true;
      },
      pass(){
        this.$message({
            type: 'success',
            message: '审核成功',
          }
        )
      },
      // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        // this.currentPage = 1;
        this.pagesize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
      },
      // 主管获取所有学术成果待评审信息
      getWaitResDirectorAuditInfosTwo () {
        const prams = {
          tecUsername: localStorage.getItem('loginName'),
          auditType: '学术成果评审'
        }
        getWaitResDirectorAuditInfosTwo(prams).then(response => {
          console.log('测试获取学术成果评审接口')
          console.log(response.data)
          this.peopleData = response.data.data
          // console.log(this.peopleData.assessType)
        })
      },
      //主管根据id获取学术成果评审详细信息
      getAcadeAchievesWaitAuditDetail (row) {
        this.hexinVisible = true;
        this.basicId = row.id;
        this.assessType1 = row.assessType
        const prams = {
          tecUsername: localStorage.getItem('loginName'),
          assessType: row.assessType,
          id: row.id
        }
        // console.log(prams.assessType)
        // console.log(this.assessType1)
        getAcadeAchievesWaitAuditDetail(prams).then(response => {
          console.log('测试根据id获取学术成果信息详情')
          console.log(response.data)
          this.detailTable = response.data.data
        })
      },
      //科研主管对学术成果进行审核
      acadeAchievesAudit: function (basicId,assessType1,status) {
        this.auditingInfo.id = basicId
        this.auditingInfo.auditStatus = status
        this.auditingInfo.assessType = assessType1
        console.log(this.auditingInfo.assessType)
        const prams = {
          tecUsername: this.auditingInfo.tecUsername,
          id: this.auditingInfo.id,
          assessType: this.auditingInfo.assessType,
          auditStatus: this.auditingInfo.auditStatus,
          auditDesc: this.auditingInfo.auditDesc
        }
        console.log('测试参数')
        console.log(prams)
        acadeAchievesAudit(prams).then(response => {
          console.log('测试科研主管审核学术成果接口')
          console.log(response.data)
          this.hexinVisible = false;
          this.$message({
              type: 'success',
              message: '审核完成',
            }
          )
          this.getWaitResDirectorAuditInfosTwo()
        })
      }
    }
  }
</script>

<style>
  .foot{
    text-align: center;
    margin-top: 20px;
  }
</style>
