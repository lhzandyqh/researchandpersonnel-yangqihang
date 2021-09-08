<template>
  <div class="app-container">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      stripe
      style="width: 100%">
      <el-table-column
        prop="submitDate"
        label="提交日期">
      </el-table-column>
      <el-table-column
        prop="applyTecName"
        width="100"
        label="提交人">
      </el-table-column>
      <el-table-column
        prop="assessExpert"
        width="100"
        label="审核人">
      </el-table-column>
      <el-table-column
        prop="dept"
        width="130"
        label="部门">
      </el-table-column>
      <el-table-column
        prop="assessType"
        width="200"
        label="审核类型">
      </el-table-column>
      <el-table-column
        prop="projectName"
        label="审核名称">
      </el-table-column>
      <el-table-column
        prop="assessDate"
        width="130"
        label="审核日期">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="lookDetails(scope.row)">查看</el-button>
          <el-button type="primary" size="small" icon="el-icon-zoom-in">导出</el-button>
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
    <el-dialog
      title="评审得分"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <!--      <rank-score-echart></rank-score-echart>-->
      <div class="dimension_container" v-for="(item, key) in scoreDetails" :key="key">
        <div class="dimension_title">
          <span style="font-weight: bold;color: #8c939d">{{item.dimensionName}}</span>
<!--          <el-divider></el-divider>-->
          <div style="margin-top: 20px" v-for="(value, key) in item.children" :key="key">
            <div>
              <div class="dimension_name">
                <span>{{value.dimensionName}}:</span>
                <span style="font-weight: bold;">{{value.evaluationScore}}</span>
                <span style="float: right">该维度评价总分值：{{value.basicScore}}分</span>
                <!--                <el-input v-model="value.number" @change="addScore(value.id,value.number)" style="width: 150px;margin-left: 15px" placeholder="请输入评审分值" />-->
              </div>
            </div>
          </div>
          <el-divider></el-divider>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import { directorGetAuditingScoreDetails } from '@/api/expertEvaluation'
import { expertGetAuditingHistory } from '@/api/expertEvaluation'
    export default {
        name: "departmentHistoryTable",
      data(){
          return{
            dialogVisible: false,
            currentPage: 1,
            pagesize:5,
            currentPage4: '',
            tableData:[],
            scoreDetails: []
          }
      },
      mounted() {
          this.getHistory()
      },
      methods:{
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
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
        getHistory: function () {
          const prams = {
            tecUsername: localStorage.getItem('loginName')
          }
          expertGetAuditingHistory(prams).then(response => {
            console.log('测试获取审核历史接口')
            console.log(response.data)
            this.tableData = response.data.data
          })
        },
        //查看得分详情
        lookDetails: function (row) {
          this.dialogVisible = true
          this.detailrow = row
          console.log(row)
          const prams = {
            applyTecUsername: this.detailrow.applyTecUsername,
            times: this.detailrow.times
          }
          directorGetAuditingScoreDetails(prams).then(response => {
            console.log('测试获取打分详情接口')
            console.log(response.data)
            this.scoreDetails = response.data.data.assessScore.children
            console.log(this.scoreDetails)
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
</style>
