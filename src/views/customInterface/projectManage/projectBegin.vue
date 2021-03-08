<template>
  <div class="app-container">
    <el-row style="margin: 10px 10px 10px 20px">
      <el-col :span="24">
        <el-button  @click="changeinfo" style="float: right; padding: 3px 0;margin-right: 15px" size="medium" type="text">新增开题</el-button>
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
        label="开题评审专家"
       />
      <el-table-column
        prop="people"
        label="项目负责人"
      />
      <el-table-column
        prop="date"
        label="开题时间"
    />
      <el-table-column
        prop="score"
        label="开题评议结果"
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
        :total="3"
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
                        <span style="font-weight: bolder">开题评审专家：</span>
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
                        <span style="font-weight: bolder">开题时间：</span>
                      </div>
                      <div class="content">
                        <span>2016-05-02</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">开题评议结果：</span>
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
                        <span>教授</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">职务：</span>
                      </div>
                      <div class="content">
                        <span>科研负责人</span>
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
                        <span>刘伟</span>
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
                        <span>张强</span>
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
                  <p>当前,我们的世界已经迈入大数据(big data)时代.随着互联网、物联网、云计算等信息技术的迅猛发展,信
                    息技术与人类世界政治、经济、军事、科研、生活等方方面面不断交叉融合,催生了超越以往任何年代的巨量
                    数据.遍布世界各地的各种智能移动设备、传感器、电子商务网站、社交网络每时每刻都在生成类型各异的数
                    据.截至2012 年,全世界每天产生2.5EB(2.51018)的数据(http://www.ibm.com/big-data/us/en/).大数据具有4V 特
                    征,即:体量巨大(volume)、类型繁多(variety)、时效性高(velocity)以及价值高密度低(value),给人们带来了新的
                    机遇与挑战.《Nature》于2008 年出版了大数据专刊“big data”,专门讨论了巨量数据对于互联网、经济、环境
                    以及生物等各方面的影响与挑战[1].《Science》也于2011 年出版了如何应对数据洪流(data deluge)的专刊
                    “Dealing with Data”[2],指出如何利用宝贵的数据资产推动人类社会的发展.如今,大数据已成为新兴的学术研究
                    热点,并被认为是继云计算和物联网之后又一个具有革命性的信息技术.</p>
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
                        <span style="font-weight: bolder">开题评审专家：</span>
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
                        <span style="font-weight: bolder">开题时间：</span>
                      </div>
                      <div class="content" style="width: 185px">
                        <el-date-picker  type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">开题评议结果：</span>
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
  name: 'ProjectBegin',
  data() {
    return {
      changeketi:false,
      activeName: 'first',
      showdetails: false,
      tableData: [{
        date: '2016-05-02',
        score:'优秀',
        name: '大数据产业',
        people:'王老师',
        ziliao:'项目调研报告.doc'

      }, {
        date: '2016-05-04',
        score:'良好',
        name: '自然语言处理问答系统',
        people:'刘老师',
        ziliao:'系统设计报告.doc'

      }, {
        date: '2016-05-01',
        name: '前端可视化',
        score:'优秀',
        people:'李老师',
        ziliao:'展示图片.png'

      }, {
        date: '2016-05-04',
        score:'良好',
        name: '降糖贴剂：胰岛素无痛给药先行者',
        people:'刘老师',
        ziliao:'项目设计.doc'

      },{
        date: '2016-05-04',
        score:'良好',
        name: '协同制造云服务',
        people:'刘老师',
        ziliao:'项目可行性分析.doc'

      },{
        date: '2016-05-04',
        score:'良好',
        name: '物联网建设',
        people:'刘老师',
        ziliao:'项目调研.doc'

      },{
        date: '2016-05-04',
        score:'优秀',
        name: '智慧校园建设',
        people:'刘老师',
        ziliao:'智慧校园建设方案.doc'

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
    margin-top: 20px;
    text-align: center;
  }

</style>
