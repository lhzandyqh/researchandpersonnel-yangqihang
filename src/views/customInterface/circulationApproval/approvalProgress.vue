<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在审核" name="first">
        <el-card class="box-card">
          <div class="approval_item">
            <el-card class="box-card">
              <el-row>
                <el-col :span="6">
                  <div class="projectname">
                    <span class="name_head">项目名称：</span>
                    <span class="name_content">高职学生心理建设与研究</span>
                  </div>
                </el-col>
                <el-col :span="10">
                  <el-steps :space="200" :active="1" finish-status="success">
                    <!--                    <el-step title="已完成"></el-step>-->
                    <el-step title="项目申报" />
                    <el-step title="组织评审" />
                    <el-step title="评审完成" />
                  </el-steps>
                </el-col>
                <el-col :span="4">
                  <span class="time_head">提交时间：</span>
                  <span class="time_content">2019-08-19</span>
                </el-col>
                <el-col :span="4">
                  <div>
                    <el-button type="text" @click="openDialog">查看详情</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>
          <div class="approval_item">
            <el-card class="box-card">
              <el-row>
                <el-col :span="6">
                  <div class="projectname">
                    <span class="name_head">项目名称：</span>
                    <span class="name_content">高职专业新课改</span>
                  </div>
                </el-col>
                <el-col :span="10">
                  <el-steps :space="200" :active="2" finish-status="success">
                    <!--                    <el-step title="已完成"></el-step>-->
                    <el-step title="项目申报" />
                    <el-step title="组织评审" />
                    <el-step title="评审完成" />
                  </el-steps>
                </el-col>
                <el-col :span="4">
                  <span class="time_head">提交时间：</span>
                  <span class="time_content">2020-03-19</span>
                </el-col>
                <el-col :span="4">
                  <div>
                    <el-button type="text">查看详情</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>
          <div class="approval_item">
            <el-card class="box-card">
              <el-row>
                <el-col :span="6">
                  <div class="projectname">
                    <span class="name_head">项目名称：</span>
                    <span class="name_content">校园文化新建设</span>
                  </div>
                </el-col>
                <el-col :span="10">
                  <el-steps :space="200" :active="1" finish-status="success">
                    <!--                    <el-step title="已完成"></el-step>-->
                    <el-step title="项目申报" />
                    <el-step title="组织评审" />
                    <el-step title="评审完成" />
                  </el-steps>
                </el-col>
                <el-col :span="4">
                  <span class="time_head">提交时间：</span>
                  <span class="time_content">2020-04-19</span>
                </el-col>
                <el-col :span="4">
                  <div>
                    <el-button type="text">查看详情</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>
          <div class="approval_item">
            <el-card class="box-card">
              <el-row>
                <el-col :span="6">
                  <div class="projectname">
                    <span class="name_head">项目名称：</span>
                    <span class="name_content">学生返校心理研究</span>
                  </div>
                </el-col>
                <el-col :span="10">
                  <el-steps :space="200" :active="3" finish-status="success">
                    <!--                    <el-step title="已完成"></el-step>-->
                    <el-step title="项目申报" />
                    <el-step title="组织评审" />
                    <el-step title="评审完成" />
                  </el-steps>
                </el-col>
                <el-col :span="4">
                  <span class="time_head">提交时间：</span>
                  <span class="time_content">2020-07-14</span>
                </el-col>
                <el-col :span="4">
                  <div>
                    <el-button type="text">查看详情</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>
          <div class="fenye">
            <el-pagination
              :current-page="currentPage4"
              :page-sizes="[4, 8, 16]"
              :page-size="4"
              layout="total, sizes, prev, pager, next, jumper"
              :total="12"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="审核成功" name="second">
        <el-card class="box-card">
          <div class="img_con">
            <img src="../../../assets/zanwu.png">
            <div style="text-align: center">
              <span style="font-size: 15px;font-weight: bold;color: #999999">暂无内容</span>
            </div>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="审核未通过" name="third">
        <el-card class="box-card">
          <div class="img_con">
            <img src="../../../assets/zanwu.png">
            <div style="text-align: center">
              <span style="font-size: 15px;font-weight: bold;color: #999999">暂无内容</span>
            </div>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="审核历史" name="fourth">
        <el-card class="box-card">
          <div class="img_con">
            <img src="../../../assets/zanwu.png">
            <div style="text-align: center">
              <span style="font-size: 15px;font-weight: bold;color: #999999">暂无内容</span>
            </div>
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
      <h4>专家意见</h4>
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
export default {
  name: 'ApprovalProgress',
  data() {
    return {
      dialogVisible: false,
      activeName: 'first',
      currentPage4: 1
    }
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
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
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
