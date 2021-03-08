<template>
  <div class="app-container">
    <el-row style="margin: 10px 10px 10px 20px">
      <el-col :span="24">
        <el-button  @click="changeinfo" style="float: right; padding: 3px 0;margin-right: 15px" size="medium" type="text">新增结题</el-button>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="课题名称"
        />
      <el-table-column
        prop="people"
        label="结题评审专家"
        />
      <el-table-column
        prop="people"
        label="项目负责人"
        />
      <el-table-column
        prop="date"
        label="结题答辩时间"
        />
      <el-table-column
        prop="score"
        label="结题评议结果"
        />
      <el-table-column
        prop="ziliao"
        label="附件资料"
        />
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <el-button @click="changeinfo" type="text" size="medium">修改</el-button>
          <el-button @click="viewdetails" type="text" size="medium">查看详细信息</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[4, 8, 16]"
        :page-size="4"
        layout="total, sizes, prev, pager, next, jumper"
        :total="4"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div>
      <el-dialog :visible.sync="showdetails" title="课题详细信息" style="text-align: center" width="70%" >
        <el-tabs v-model="activeName">
          <el-tab-pane label="基本信息" name="first">
            <el-card class="box-card">
              <div class="card-container">
                <el-row :gutter="20" style="padding-top: 5px">
                  <el-col :span="8">
                    <span style="font-weight: bolder;float: left;font-size: 16px">项目信息：</span>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 10px">
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder;">课题名称：</span>
                      </div>
                      <div class="content">
                        <span>大数据产业</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">结题评审专家：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">项目负责人：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 10px">
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">结题答辩时间：</span>
                      </div>
                      <div class="content">
                        <span>2016-05-02</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">结题评议结果：</span>
                      </div>
                      <div class="content">
                        <span>优秀</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">附件资料：</span>
                      </div>
                      <div class="content">
                        <span></span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 20px">
                  <el-col :span="8">
                    <span style="font-weight: bolder;float: left;font-size: 16px">团队成员：</span>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 10px">
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">成员1姓名：</span>
                      </div>
                      <div class="content">
                        <span>王三</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">民族：</span>
                      </div>
                      <div class="content">
                        <span>汉</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职称：</span>
                      </div>
                      <div class="content">
                        <span>讲师</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职务：</span>
                      </div>
                      <div class="content">
                        <span>讲师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 10px">
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">成员2姓名：</span>
                      </div>
                      <div class="content">
                        <span>王三</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">民族：</span>
                      </div>
                      <div class="content">
                        <span>汉</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职称：</span>
                      </div>
                      <div class="content">
                        <span>讲师</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职务：</span>
                      </div>
                      <div class="content">
                        <span>讲师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 10px">
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">成员3姓名：</span>
                      </div>
                      <div class="content">
                        <span>王三</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">民族：</span>
                      </div>
                      <div class="content">
                        <span>汉</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职称：</span>
                      </div>
                      <div class="content">
                        <span>讲师</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职务：</span>
                      </div>
                      <div class="content">
                        <span>讲师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="课题论证" name="second">
            <el-card class="box-card">
              <el-row :gutter="20" style="padding-top: 10px">
                <el-col :span="8">
                  <span style="font-weight: bolder;float: left;font-size: 16px">课题论证：</span>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="padding-top: 10px">
                <el-col :span="24">
                  <p>大数据（big data），IT行业术语，是指无法在一定时间范围内用常规软件工具进行捕捉、管理和处理的数据集合，是需要新处理模式才能具有更强的决策力、洞察发现力和流程优化能力的海量、高增长率和多样化的信息资产。
                    在维克托·迈尔-舍恩伯格及肯尼斯·库克耶编写的《大数据时代》 [1]  中大数据指不用随机分析法（抽样调查）这样捷径，而采用所有数据进行分析处理。大数据的5V特点（IBM提出）：Volume（大量）、Velocity（高速）、Variety（多样）、Value（低价值密度）、Veracity（真实性）。</p>
                </el-col>
              </el-row>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="研究基础" name="third">
            <el-card class="box-card">
              <el-row :gutter="20" style="padding-top: 10px">
                <el-col :span="8">
                  <span style="font-weight: bolder;float: left;font-size: 16px">研究基础：</span>
                </el-col>
              </el-row>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="条件保障" name="fourth">
            <el-card class="box-card">
              <el-row :gutter="20" style="padding-top: 10px">
                <el-col :span="8">
                  <span style="font-weight: bolder;float: left;font-size: 16px">条件保障：</span>
                </el-col>
              </el-row>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="changeketi" title="修改信息" width="80%" style="text-align: center">
        <el-tabs v-model="activeName">
          <el-tab-pane label="基本信息" name="first">
            <el-card class="box-card1">
              <div class="card-container">
                <el-row :gutter="20" style="padding-top: 5px">
                  <el-col :span="8">
                    <span style="font-weight: bolder;float: left;font-size: 16px">项目信息：</span>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 10px">
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder;">课题名称：</span>
                      </div>
                      <div class="content">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">结题评审专家：</span>
                      </div>
                      <div class="content">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">项目负责人：</span>
                      </div>
                      <div class="content">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 10px">
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">结题答辩时间：</span>
                      </div>
                      <div class="content" style="width: 185px">
                        <el-date-picker  type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">结题评议结果：</span>
                      </div>
                      <div class="content">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">附件资料：</span>
                      </div>
                      <div class="content">
                        <span></span><el-upload
                        ref="upload"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        :auto-upload="false"
                      >
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;background: #42b983" size="small" type="success" @click="submit">上传</el-button>
                      </el-upload>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 20px">
                  <el-col :span="8">
                    <span style="font-weight: bolder;float: left;font-size: 16px">团队成员：</span>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 10px">
                  <el-col :span="7">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">成员1姓名：</span>
                      </div>
                      <div class="content"  style="width: 150px">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">民族：</span>
                      </div>
                      <div class="content" style="width: 110px">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职称：</span>
                      </div>
                      <div class="content">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职务：</span>
                      </div>
                      <div class="content">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 10px">
                  <el-col :span="7">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">成员2姓名：</span>
                      </div>
                      <div class="content" style="width: 150px">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">民族：</span>
                      </div>
                      <div class="content" style="width: 110px">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职称：</span>
                      </div>
                      <div class="content">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职务：</span>
                      </div>
                      <div class="content">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="padding-top: 10px">
                  <el-col :span="7">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">成员3姓名：</span>
                      </div>
                      <div class="content" style="width: 150px">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">民族：</span>
                      </div>
                      <div class="content" style="width: 110px">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职称：</span>
                      </div>
                      <div class="content">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职务：</span>
                      </div>
                      <div class="content">
                        <el-input placeholder="请输入内容"/>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="课题论证" name="second">
            <el-card class="box-card1">
              <el-row :gutter="20" style="padding-top: 10px">
                <el-col :span="8">
                  <span style="font-weight: bolder;float: left;font-size: 16px">课题论证：</span>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="padding-top: 10px">
                <el-col :span="24">
                  <el-input type="textarea" :rows="10" size="medium" placeholder="请输入内容"/>
                </el-col>
              </el-row>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="研究基础" name="third">
            <el-card class="box-card1">
              <el-row :gutter="20" style="padding-top: 10px">
                <el-col :span="8">
                  <span style="font-weight: bolder;float: left;font-size: 16px">研究基础：</span>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="padding-top: 10px">
                <el-col :span="24">
                  <el-input type="textarea" :rows="10" size="medium" placeholder="请输入内容"/>
                </el-col>
              </el-row>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="条件保障" name="fourth">
            <el-card class="box-card1">
              <el-row :gutter="20" style="padding-top: 10px">
                <el-col :span="8">
                  <span style="font-weight: bolder;float: left;font-size: 16px">条件保障：</span>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="padding-top: 10px">
                <el-col :span="24">
                  <el-input type="textarea" :rows="10" size="medium" placeholder="请输入内容"/>
                </el-col>
              </el-row>
            </el-card>
          </el-tab-pane>
        </el-tabs>
        <div slot="footer" class="dialog-footer">
          <el-button @click="changeketi = false">取 消</el-button>
          <el-button @click="submit" type="primary">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectFinal',
  data() {
    return {
      changeketi:false,
      activeName: 'first',
      showdetails: false,
      tableData: [{
        date: '2018-05-02',
        score:'优秀',
        name: '学生心理模型测评',
        people:'王老师',
        ziliao:'项目结题汇总.pdf'

      }, {
        date: '2019-03-04',
        score:'良好',
        name: '自然语言处理问答系统',
        people:'刘老师',
        ziliao:'系统设计结题报告.doc'

      }, {
        date: '2019-12-01',
        name: '高点探测智能分析',
        score:'优秀',
        people:'李老师',
        ziliao:'结题分析报告.doc'
      }, {
        date: '2020-03-01',
        name: 'NLP语言智能识别',
        score:'优秀',
        people:'李老师',
        ziliao:'结题.doc'
      }]
    }
  },
  methods: {
    viewdetails(){
      this.showdetails = true
    },
    changeinfo(){
      this.changeketi = true
    },
    submit(){
      this.changeketi = false
      this.$message({
        type:'success',
        message:'提交成功'
      })
    }
  }
}
</script>

<style scoped>
  /deep/ .el-dialog__body{
    padding-top: 0px;
    padding-bottom: 0px;
  }
  /deep/ .el-card__body{
    padding-top: 0px;
  }
  .box-card {
    width: 100%;
    height: 250px;
  }
  .box-card1{
    width: 100%;
    height: 350px;
  }

  .single{
    display: inline-block;
    float:left;
    font-size: 15px;
  }
  .biaoqian{
    display: inline-block;
  }
  .content{
    display: inline-block;
  }
  .card-container{
    margin-top: 10px;
  }
  .fenye{
    text-align: center;
    margin-top: 20px;
  }
</style>
