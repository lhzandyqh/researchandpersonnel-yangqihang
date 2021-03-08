<template>
  <div class="app-container">
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!--          <span>卡片名称</span>-->
          <div class="main_container juli">
            <div class="item_content">
              <div class="item zi_border">
                <span style="font-weight: bolder">项目开题</span>
                <span>自然语言处理问答系统</span>
                <span>2020-09-23</span>
                <!--                <div class="shuzi">2</div>-->
              </div>
              <div class="item lan_border">
                <span style="font-weight: bolder">项目中期</span>
                <span>专业智能知识库建设</span>
                <span>2020-10-03</span>
                <!--                <div class="shuzi">4</div>-->
              </div>
              <div class="item hong_border">
                <span style="font-weight: bolder">项目结题</span>
                <span>NLP语言智能识别</span>
                <span>2021-01-23</span>
                <!--                <div class="shuzi">12</div>-->
              </div>
              <!--              <div class="item lv_border">-->
              <!--                <span>科研任务/项目完成数(个)</span>-->
              <!--                <div class="shuzi">10</div>-->
              <!--              </div>-->
            </div>
            <div />
          </div>
        </div>
        <div class="approval_item">
          <el-card class="box-card">
            <el-row>
              <el-col :span="6">
                <div class="projectname">
                  <span class="name_head">项目名称：</span>
                  <span class="name_content">自然语言处理问答系统</span>
                </div>
              </el-col>
              <el-col :span="10">
                <el-steps :space="200" :active="0" finish-status="success">
                  <!--                    <el-step title="已完成"></el-step>-->
                  <el-step title="项目开题" description="2020-09-23" />
                  <el-step title="项目中期" description="2020-12-12" />
                  <el-step title="项目结题" description="2021-04-01" />
                </el-steps>
              </el-col>
              <el-col :span="4">
                <span class="time_head">提交时间：</span>
                <span class="time_content">2019-04-29</span>
              </el-col>
              <el-col :span="4">
                <div>
                  <el-button type="text" @click="openDialog">特别提醒</el-button>
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
                  <span class="name_content">专业智能知识库建设</span>
                </div>
              </el-col>
              <el-col :span="10">
                <el-steps :space="200" :active="1" finish-status="success">
                  <!--                    <el-step title="已完成"></el-step>-->
                  <el-step title="项目开题" description="2020-02-26" />
                  <el-step title="项目中期" description="2020-10-03" />
                  <el-step title="项目结题" description="2021-02-01" />
                </el-steps>
              </el-col>
              <el-col :span="4">
                <span class="time_head">提交时间：</span>
                <span class="time_content">2019-12-19</span>
              </el-col>
              <el-col :span="4">
                <div>
                  <el-button type="text" @click="openDialog">特别提醒</el-button>
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
                  <span class="name_content">NLP语言智能识别</span>
                </div>
              </el-col>
              <el-col :span="10">
                <el-steps :space="200" :active="1" finish-status="success">
                  <!--                    <el-step title="已完成"></el-step>-->
                  <el-step title="项目开题" description="2020-02-13" />
                  <el-step title="项目中期" description="2020-07-12" />
                  <el-step title="项目结题" description="2021-01-23" />
                </el-steps>
              </el-col>
              <el-col :span="4">
                <span class="time_head">提交时间：</span>
                <span class="time_content">2019-08-19</span>
              </el-col>
              <el-col :span="4">
                <div>
                  <el-button type="text" @click="openDialog">特别提醒</el-button>
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
            :total="3"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
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
    width: 400px;
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
  .approval_item {
    margin-top: 20px;
  }
  .fenye {
    text-align: center;
    margin-top: 20px;
  }

</style>
