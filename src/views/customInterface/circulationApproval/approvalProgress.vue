<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在审核" name="first">
        <el-card class="box-card">
          <div class="approval_item" v-for="(item,key) in this.scheduleData.slice((currentPage4-1)*pageSize,currentPage4*pageSize)" :key="key">
            <el-card class="box-card">
              <el-row>
                <el-col :span="6">
                  <div class="projectname">
                    <span class="name_head">项目名称：</span>
                    <span class="name_content">{{item.projectName}}</span>
                  </div>
                </el-col>
                <el-col :span="10">
                  <el-steps :space="200" :active="item.scheduleInfo" finish-status="success">
                    <!--                    <el-step title="已完成"></el-step>-->
                    <el-step title="项目申报" />
                    <el-step title="组织评审" />
                    <el-step title="评审完成" />
                  </el-steps>
                </el-col>
                <el-col :span="4">
                  <span class="time_head">提交时间：</span>
                  <span class="time_content">{{item.submitDate}}</span>
                </el-col>
<!--                <el-col :span="4">-->
<!--                  <div>-->
<!--                    <el-button type="text" @click="openDialog">查看详情</el-button>-->
<!--                  </div>-->
<!--                </el-col>-->
              </el-row>
            </el-card>
          </div>
          <div class="fenye">
            <el-pagination
              :current-page="currentPage4"
              :page-sizes="[5, 10]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="this.scheduleData.length"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="审核详情"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <h4>科研处意见</h4>
      <div>
        <el-row>
          <el-col :span="12">
            项目具有可行性，审核通过，建议加快进度
          </el-col>
          <el-col :span="5">
            <span>评审时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="3">
            <span>评审人：</span>
            <span>郭志</span>
          </el-col>
          <el-col :span="4">
            <span>评审状态</span>
            <el-tag type="success">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <h4>专家评分</h4>
      <div>
        <el-row>
          <el-col :span="12">
            暂未评审
          </el-col>
          <el-col :span="5">
            <span>评审时间：</span>
          </el-col>
          <el-col :span="3">
            <span>评审人：</span>
          </el-col>
          <el-col :span="4">
            <span>评审状态</span>
            <el-tag type="warning">暂未评审</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { projectReviewSchedule } from '@/api/initiateProject'
export default {
  name: 'ApprovalProgress',
  data() {
    return {
      dialogVisible: false,
      activeName: 'first',
      currentPage4: 1,
      scheduleData: [],
      pageSize: 5 // 每页的数据条数
    }
  },
  mounted() {
    this.getReviewSchedule()
  },
  methods: {
    openDialog: function() {
      this.dialogVisible = true
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
    },
    getReviewSchedule: function () {
      const prams = {
        tecUsername: localStorage.getItem('loginName')
      }
      projectReviewSchedule(prams).then(response => {
        console.log('测试获取项目评审进度接口')
        console.log(response.data)
        this.scheduleData = response.data.data
      })
    }
  }
}
</script>

<style scoped>
  .approval_item {
    margin-top: 20px;
  }
  .box-card {
    width: 100%;
  }
  .projectname .name_head {
    font-weight: bold;
  }
  .time_head {
    font-weight: bold;
    font-size: 14px;
  }
  .time_content{
    font-size: 14px;
  }
  .fenye{
    margin-top: 20px;
    text-align: center;
  }
  .img_con {
    margin: auto;
  }
</style>
