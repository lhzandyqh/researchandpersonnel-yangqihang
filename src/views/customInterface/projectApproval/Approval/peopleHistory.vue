<template>
  <div class="app-container">
    <el-table :data="peopleData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" stripe>
      <el-table-column prop="submitDate"  label="提交日">
      </el-table-column>
      <el-table-column prop="applicant" label="提交人">
      </el-table-column>
      <el-table-column prop="auditPserson" label="审核人">
      </el-table-column>
      <el-table-column prop="department" label="部门" >
      </el-table-column>
      <el-table-column prop="auditType" label="审核类型">
      </el-table-column>
      <el-table-column prop="auditDate" label="审核日期">
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.auditStatus==='审核通过'" type="success">审核通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='审核未通过'" type="danger">审核未通过</el-tag>
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
        :total="peopleData.length"
        style="margin-top:20px;"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <el-dialog :visible.sync="jibenVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">姓&#8195;&#8195;名：</span><span>{{ peopleDetails.fullName }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">性&#8195;&#8195;别：</span><span>{{ peopleDetails.sex }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">民&#8195;&#8195;族：</span><span>{{ peopleDetails.nation }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">出生年月：</span><span>{{ peopleDetails.birthDate }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span><span>{{ peopleDetails.nativePlace }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职&#8195;&#8195;别：</span><span>{{ peopleDetails.positionClass }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">身份证号：</span><span>{{ peopleDetails.idCard }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">政治面目：</span><span>{{ peopleDetails.politicalStatus }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">入党团时间：</span><span>{{ peopleDetails.joinPartyTime }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">家庭住址：</span><span>{{ peopleDetails.address }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">手机号码：</span><span>{{ peopleDetails.phone }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">Email：</span><span>{{ peopleDetails.email }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任教学科：</span><span>{{ peopleDetails.subject }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">部门：</span><span>{{ peopleDetails.department }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">参加工作时间：</span><span>{{ peopleDetails.dateToWork }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">工作状态：</span><span>{{peopleDetails.workStatus}}</span>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同起始时间：</span><span>{{peopleDetails.contractStartDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同终止时间：</span><span>{{peopleDetails.contractEndDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider/>
      <h4>科研处意见</h4>
      <div>
        <el-row>
          <el-col :span="12">
            {{peopleDetails.auditDesc}}
          </el-col>
          <el-col :span="5">
            <span>审核人：</span>
            <span>{{peopleDetails.auditPerson}}</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag  v-if="peopleDetails.auditStatus==='审核通过'" type="success">审核通过</el-tag>
            <el-tag  v-else type="danger">审核未通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="jibenVisible = false" size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { directorGetBasicInfoAuditingHistory, directorGetBasicInfoAuditingHistoryDetails } from '@/api/researchReview'
  export default {
    name: 'peopleHistory',
    data(){
      return{
        currentPage: 1,
        pagesize: 5,
        jibenVisible:false,
        AuditingReason:'',
        zhuanyeVisible:false,
        workVisible:false,
        peopleData:[],
        peopleId: '',// 查看个人信息详情当前选中id
        peopleDetails: {}//个人信息详情当前对象

      }
    },
    mounted() {
      this.getBasicHistory()
    },
    methods:{
      chakan(row){
        this.jibenVisible = true
        const prams = {
          id: row.id,
          auditType: '基本信息'
        }
        directorGetBasicInfoAuditingHistoryDetails(prams).then(response => {
          console.log('测试获取基本信息审核历史详情')
          console.log(response.data)
          this.peopleDetails = response.data.data
        })
      },
      getBasicHistory: function () {
        directorGetBasicInfoAuditingHistory().then(response => {
          console.log('测试获取个人信息审核历史接口')
          console.log(response.data)
          this.peopleData = response.data.data
        })
      },
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

</style>
