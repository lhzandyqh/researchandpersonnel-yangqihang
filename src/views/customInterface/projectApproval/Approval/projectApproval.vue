<template>
  <div class="app-container">
    <el-table :data="projectData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" stripe>
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
          <el-tag  v-if="scope.row.auditStatus==='审核通过'" type="success">审核通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='审核未通过'" type="danger">审核未通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='待审核'">审核待通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="400">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getProjectApplyWaitAuditDetail(scope.row)">查看</el-button>
          <el-button type="primary" size="small" icon="el-icon-user" @click="beginProJudge(scope.row)">安排专家评审</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :page-sizes="[5, 10]"
        :total="projectData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <el-dialog :visible.sync="projectVisible" title="审核详情" width="60%">
      <div class="clearfix">
        <el-row style="margin-top: 10px">
            <span style="font-weight: bolder; font-size: 15px">基本信息：</span>
        </el-row>
        <el-row  style="padding-top: 10px">
          <el-col >
            <div>
              <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '基本信息'">
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
              <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '项目信息'">
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
              <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '预算信息'">
                <span class="detailName">{{item.contentName}}：</span>
                <span class="detailValue">{{item.contentValue}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
<!--        <div v-for="(item, key) in detailTable" :key="key">-->
<!--          <div  class="a">基本信息：-->
<!--            <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '基本信息'">-->
<!--              <span class="biaoqian">{{item.contentName}}：</span>-->
<!--              <span class="content">{{item.contentValue}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="a">项目信息：-->
<!--            <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '项目信息'">-->
<!--              <span class="biaoqian">{{item.contentName}}：</span>-->
<!--              <span class="content">{{item.contentValue}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="a">预算信息：-->
<!--            <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '预算信息'">-->
<!--              <span class="biaoqian">{{item.contentName}}：</span>-->
<!--              <span class="content">{{item.contentValue}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <span class="detailName">{{item.contentName}}：</span>-->
<!--          <span class="detailValue">{{item.contentValue}}</span>-->
<!--          <div class="single">-->
<!--            <div class="biaoqian">-->
<!--              <span>{{item.contentName}}：</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="single">-->
<!--            <div class="biaoqian">-->
<!--              <span>{{item.contentValue}}</span>-->
<!--            </div>-->
<!--          </div>-->
        </div>
        <el-divider/>
<!--      </div>-->
<!--      <el-row :gutter="20" style="padding-top: 10px">-->
<!--        <el-col :span="8">-->
<!--          <div class="single">-->
<!--            <div class="biaoqian">-->
<!--              <span style="font-weight: bolder">项目名称：</span>-->
<!--              <span>大数据产业</span>-->
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
<!--              <span>王老师 </span>-->
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
              <span style="font-weight: bolder">项目申报书：</span>
              <el-button type="text" >查看</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider/>
<!--      <h4>部门意见</h4>-->
<!--      <div>-->
<!--        <el-row>-->
<!--          <el-col :span="6">-->
<!--            准予通过-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <span>审核时间：</span>-->
<!--            <span>2019-12-04</span>-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <span>审核人：</span>-->
<!--            <span>刘明至</span>-->
<!--          </el-col>-->
<!--          <el-col :span="5">-->
<!--            <span>审核状态</span>-->
<!--            <el-tag type="success" size="small">通过</el-tag>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
<!--      <el-divider />-->
<!--      <h4>系部意见</h4>-->
<!--      <div>-->
<!--        <el-row>-->
<!--          <el-col :span="6">-->
<!--            项目进度有待加强-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <span>审核时间：</span>-->
<!--            <span>2019-12-04</span>-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <span>审核人：</span>-->
<!--            <span>郭志</span>-->
<!--          </el-col>-->
<!--          <el-col :span="5">-->
<!--            <span>审核状态</span>-->
<!--            <el-tag type="success" size="small">通过</el-tag>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
<!--      <el-divider />-->
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">科研处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="form.auditDesc"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="projectApplyAudit('审核通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="projectApplyAudit('审核未通过')">审核未通过</el-button>
          <el-button type="primary" @click="projectVisible = false" size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="projectVisibleTwo" title="专家评审"  width="30%">
      <el-form ref="form" v-model="reviewData" label-width="80px">
<!--        <el-form-item label="活动名称">-->
<!--          <el-input v-model="form.name"></el-input>-->
<!--        </el-form-item>-->
        <el-form-item label="评审专家">
          <el-select v-model="expertName" placeholder="请安排评审专家">
            <el-option v-for="(item,key) in expertData" :key="key" :label="item" :value="item"></el-option>
<!--            <el-option label="李老师" value="beijing"></el-option>-->
<!--            <el-option label="杨老师" value="shanghai"></el-option>-->
<!--            <el-option label="吴老师" value="beijing"></el-option>-->
<!--            <el-option label="左老师" value="shanghai"></el-option>-->
<!--            <el-option label="邓老师" value="beijing"></el-option>-->
          </el-select>
        </el-form-item>
        <el-form-item label="评审时间">
          <el-col :span="12">
            <el-date-picker type="date" placeholder="开始日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" v-model="reviewData.date1" style="width: 100%;"></el-date-picker>
          </el-col>
<!--          <el-col class="line" :span="2">—</el-col>-->
          <el-col :span="12">
            <el-date-picker type="date" placeholder="结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" v-model="reviewData.date2" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="评审备注">
          <el-input type="textarea" v-model="reviewData.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="arrangeExpertReview">确定</el-button>
          <el-button @click="projectVisibleTwo = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {getWaitResDirectorAuditInfosTwo,getProjectApplyWaitAuditDetail,projectApplyAudit,getNameByRolesAsExpert
,arrangeExpertReview} from '@/api/researchReview'
  export default {
    name: 'projectApproval',
    data(){
      return{
        currentPage: 1,
        pagesize: 5,
        AuditingReason:'',
        projectVisible:false,
        projectVisibleTwo: false,
        workVisible:false,
        jibenVisible:false,
        projectData:[
        ],
        detailTable:[],
        form: {
          tecUsername: localStorage.getItem('loginName'),
          applyTecUsername: localStorage.getItem('loginName'),
          auditDesc: '',
          times: '',
          auditStatus: ''
        },
        expertData: [],
        reviewData: {
        },
        reviewTimes: '',
        expertName: '',
        applyTecUsername:''
      }
    },
    mounted() {
      this.getWaitResDirectorAuditInfosTwo()
      this.getNameByRolesAsExpert()
    },
    methods:{
      // opendetail(){
      //   this.projectVisible = true;
      // },
      pass(){
        this.$message({
            type: 'success',
            message: '审核成功',
          }
        )
      },
      beginProJudge: function (row) {
        this.projectVisibleTwo = true
        this.reviewTimes = row.times
        this.applyTecUsername = row.applyTecUsername
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
      // 主管获取所有课题项目待评审信息
      getWaitResDirectorAuditInfosTwo () {
        const prams = {
          tecUsername: localStorage.getItem('loginName'),
          auditType: '项目课题评审'
        }
        getWaitResDirectorAuditInfosTwo(prams).then(response => {
          console.log('测试获取课题项目评审接口')
          console.log(response.data)
          this.projectData = response.data.data
        })
      },
      //主管根据id获取课题项目评审详细信息
      getProjectApplyWaitAuditDetail (row) {
        this.projectVisible = true;
        this.form.applyTecUsername = row.applyTecUsername
        this.form.times = row.times
        // console.log(this.form.times)
        // this.basicId = row.id;
        // this.assessType1 = row.assessType
        const prams = {
          tecUsername: localStorage.getItem('loginName'),
          applyTecUsername: row.applyTecUsername,
          times: row.times
        }
        console.log(row.times)
        console.log('测试提交参数')
        console.log(prams)
        getProjectApplyWaitAuditDetail(prams).then(response => {
          console.log('测试根据id获取课题项目信息详情')
          console.log(response.data)
          this.detailTable = response.data.data
        })
      },
      // 科研主管对课题项目进行审核
      projectApplyAudit: function (status) {
        this.form.auditStatus = status
        const prams = this.form
        console.log('测试参数')
        console.log(prams)
        projectApplyAudit(prams).then(response => {
          console.log('测试科研主管审核课题项目接口')
          console.log(response.data)
          this.hexinVisible = false;
          this.$message({
              type: 'success',
              message: '审核完成',
            }
          )
          // this.getWaitResDirectorAuditInfosTwo()
        })
      },
      // 获取专家姓名
      getNameByRolesAsExpert () {
        getNameByRolesAsExpert().then(response => {
          console.log('测试获取专家姓名接口')
          console.log(response.data)
          this.expertData = response.data.data
        })
      },
      // 科研主管将项目申报提交给专家评审
      arrangeExpertReview () {
        const prams = {
          applyTecUsername: this.applyTecUsername,
          times : this.reviewTimes,
          expertName: this.expertName,
          assessDate: this.reviewData.date1 + ':' + this.reviewData.date2,
          assessMark: this.reviewData.desc
        }
        console.log('测试提交给专家评审参数')
        console.log(prams)
        arrangeExpertReview(prams).then(response => {
          console.log('测试科研主管将项目申报提交给专家评审接口')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '提交成功'
          })
        })
        this.projectVisibleTwo = false
        this.getWaitResDirectorAuditInfosTwo ()
      }
    }
  }
</script>

<style scoped>
.clearfix:after,
  .clearfix:before{
  content: "";
  display: table;
}
.clearfix:after{
  clear: both;
}
.clearfix{
  *zoom: 1;
}
.a {
  display: block;
  font-weight: bolder;
  font-size: 15px;
  /*margin-left: 20px;*/
  margin-bottom: 10px;
  margin-top: 10px;
}
.detailName {
  float: left;
  /*display: inline-block;*/
  width: 130px;
  /*height: 20px;*/
  /*line-height: 20px;*/
  font-weight: 700

}
.detailValue {
  float: left;
  /*display: inline-block;*/
  width: 180px;
  font-weight: 400
}
.single {
  display: inline-block;
  float:left;
  font-size: 15px;
}
.biaoqian {
  display: inline-block;
  /*width: 177px;*/
}
.content{
  display: inline-block;
}

</style>
