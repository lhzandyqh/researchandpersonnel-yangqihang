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
      <el-table-column prop="auditName" label="审核名称">applyPerson
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.auditStatus==='审核通过'" type="success">审核通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='审核未通过'" type="danger">审核未通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='待审核'">审核待审核</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="jibenview(scope.row)">审核</el-button>
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
    <el-dialog :visible.sync="jibenVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">姓&#8195;&#8195;名：</span><span>{{basicDetail.fullName}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">性&#8195;&#8195;别：</span><span>{{basicDetail.sex}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">民&#8195;&#8195;族：</span><span>{{basicDetail.nation}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">出生年月：</span><span>{{basicDetail.birthDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span><span>{{basicDetail.nativePlace}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职&#8195;&#8195;别：</span><span>{{basicDetail.positionLevel}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">身份证号：</span><span>{{basicDetail.idCard}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">政治面目：</span><span>{{basicDetail.politicalStatus}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">入党团时间：</span><span>{{basicDetail.joinPartyTime}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">家庭住址：</span><span>{{basicDetail.address}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">手机号码：</span><span>{{basicDetail.phone}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">Email：</span><span>{{basicDetail.email}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任教学科：</span><span>{{basicDetail.teacherSubject}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">部门：</span><span>{{basicDetail.department}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">参加工作时间：</span><span>{{basicDetail.timeToWork}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">工作状态：</span><span>{{basicDetail.workStatus}}</span>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同起始时间：</span><span>{{basicDetail.contractStartDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同终止时间：</span><span>{{basicDetail.contractEndDate}}</span>
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
            v-model="basicAuditingInfo.auditDesc"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="basicAuditing(basicId,'审核通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="basicAuditing(basicId,'审核未通过')">审核未通过</el-button>
          <el-button type="primary" @click="jibenVisible = false" size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="zhuanyeVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职&#8195;&#8195;称：</span>
              <span>教授</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职称评定时间：</span>
              <span>2013.5.4</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">岗位级别：</span>
              <span>教授</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">荣誉称号：</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">荣誉称号取得时间：</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业发展称号：</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业发展称号取得时间：</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任现职以来担任学校工作：</span>
              <span>科研</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">担任工作起始时间：</span>
              <span>2003.3.3</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">担任工作结束时间：</span>
              <span>2003.3.4</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider/>
      <h4>部门意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            信息属实
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>刘明至</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success" size="small">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <h4>系部意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            批准通过
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>郭志</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success" size="small">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">科研处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="AuditingReason"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
          <el-button type="primary" @click="zhuanyeVisible = false" size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="workVisible" title="审核详情">
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <span style="font-weight: bolder">姓名：</span>
          <span>王老师</span>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">工作单位：</span>
            <span>大学</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">担任职务：</span>
            <span>讲师</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">开始时间：</span>
            <span>2000</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">结束时间：</span>
            <span>xxxxxx</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">证明人：</span>
            <span>王老师</span>
          </div>
        </el-col>
      </el-row>
      <el-divider/>
      <h4>部门意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            信息属实
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>刘明至</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success" size="small">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <h4>系部意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
           批准通过
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>郭志</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success" size="small">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">科研处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="AuditingReason"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
           <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
          <el-button type="primary" @click="zhuanyeVisible = false" size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { directorGetAllWaitAuditingInfoByType, directorGetBasicInfoById, directorAuditingBasicInfoById } from '@/api/researchReview'
  export default {
    name: 'peopleApproval',
    data(){
      return{
        currentPage: 1,
        pagesize: 5,
        AuditingReason:'',
        zhuanyeVisible:false,
        workVisible:false,
        jibenVisible:false,
        peopleData:[],
        basicDetail: {}, // 基本信息暂存对象，
        basicId: '', //当前要审核的基本信息条目id
        basicAuditingInfo: {
          tecUsername: '10010',
          id:'',
          auditType: '基本信息',
          auditStatus: '',
          auditDesc: ''
        }
      }
    },
    mounted() {
      this.getPeopleData()
    },
    methods:{
      getPeopleData: function () {
        const prams = {
          tecUsername: '10010',
          auditType: '个人信息评审'
        }
        directorGetAllWaitAuditingInfoByType(prams).then(response => {
          console.log('测试获取个人信息评审接口')
          console.log(response.data)
          this.peopleData = response.data.data
        })
      },
      jibenview(row){
        this.jibenVisible = true;
        // if(sub ==='基本信息'){
        //   this.jibenVisible = true;
        // }else if(sub === '专业能力'){
        //   this.zhuanyeVisible = true;
        // }else if(sub === '工作经历'){
        //   this.workVisible =true;
        // }
        this.basicId = row.id
        const prams = {
          tecUsername: '10010',
          auditType: '基本信息',
          id: row.id
        }
        directorGetBasicInfoById(prams).then(response => {
          console.log('测试根据id获取基本信息详情')
          console.log(response.data)
          this.basicDetail = response.data.data
        })
      },
      pass(){
        this.$message({
          type: 'success',
          message: '审核成功',
          }
        )
      },
      basicAuditing: function (id,status){
        this.basicAuditingInfo.id = id
        this.basicAuditingInfo.auditStatus = status
        const prams = {
          tecUsername: this.basicAuditingInfo.tecUsername,
          id: this.basicAuditingInfo.id,
          auditType: this.basicAuditingInfo.auditType,
          auditStatus: this.basicAuditingInfo.auditStatus,
          auditDesc: this.basicAuditingInfo.auditDesc
        }
        console.log('测试参数')
        console.log(prams)
        directorAuditingBasicInfoById(prams).then(response => {
          console.log('测试科研处主管审核基本信息接口')
          console.log(response.data)
          this.jibenVisible = false;
          this.$message({
              type: 'success',
              message: '审核完成',
            }
          )
          this.getPeopleData()
        })
        // setTimeout(()=> {
        //   this.basicAuditingInfo.id = ''
        //   this.basicAuditingInfo.auditStatus = ''
        //   this.basicAuditingInfo.auditDesc = ''
        //   this.basicId = ''
        // },1000)
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
    }
  }
</script>

<style scoped>
  .foot{
    text-align: center;
    margin-top: 20px;
  }
</style>
