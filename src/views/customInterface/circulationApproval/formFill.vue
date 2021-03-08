<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="fisrt_layer">
          <div class="function_container">
            <h3>项目申报表</h3>
            <div class="function_items">
              <div style="text-align: right">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">上传申报书</el-button>
                  <!--                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="basic_container">
            <h4>基本信息</h4>
            <div class="clearfix">
              <div class="basic_item" v-for="(item, key) in basicData" :key="key">
                <div v-if="item.content_type === '短文本'">
                  <span>{{item.content_name}}：</span>
                  <el-input v-model="item.value" style="width: 200px" placeholder="请输入内容" />
                </div>
                <div v-if="item.content_type === '选择器'">
                  <span>{{item.content_name}}：</span>
                  <el-select v-model="item.value" placeholder="请选择填写类型">
                    <el-option v-for="(option_value, k) in item.content_options" :key="k" :label="option_value" :value="option_value"></el-option>
                  </el-select>
                </div>
                <div v-if="item.content_type === '选取日期'">
                  <span>{{item.content_name}}：</span>
                  <el-date-picker
                    v-model="item.value"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </div>
              </div>
            </div>
            <div class="clearfix">
              <div class="basic_item_chang" v-for="(item, key) in basicData" :key="key">
                <div v-if="item.content_type === '长文本'">
                  <span>{{item.content_name}}：</span>
                  <el-input v-model="item.value" style="width: 600px"  type="textarea" :autosize="{ minRows: 2, maxRows: 8}" placeholder="请输入内容" />
                </div>
              </div>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="project_container">
            <h4>项目信息</h4>
            <div class="clearfix">
              <div class="basic_item" v-for="(item, key) in projectData" :key="key">
                <div v-if="item.content_type === '短文本'">
                  <span>{{item.content_name}}：</span>
                  <el-input v-model="item.value" style="width: 200px" placeholder="请输入内容" />
                </div>
                <div v-if="item.content_type === '选择器'">
                  <span>{{item.content_name}}：</span>
                  <el-select v-model="item.value" placeholder="请选择填写类型">
                    <el-option v-for="(option_value, k) in item.content_options" :key="k" :label="option_value" :value="option_value"></el-option>
                  </el-select>
                </div>
                <div v-if="item.content_type === '选取日期'">
                  <span>{{item.content_name}}：</span>
                  <el-date-picker
                    v-model="item.value"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </div>
              </div>
            </div>
            <div class="clearfix">
              <div class="basic_item_chang" v-for="(item, key) in projectData" :key="key">
                <div v-if="item.content_type === '长文本'">
                  <span>{{item.content_name}}：</span>
                  <el-input v-model="item.value" style="width: 600px"  type="textarea" :autosize="{ minRows: 2, maxRows: 8}" placeholder="请输入内容" />
                </div>
              </div>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="budget_container">
            <h4>预算信息</h4>
            <div class="clearfix">
              <div class="basic_item" v-for="(item, key) in budgetData" :key="key">
                <div v-if="item.content_type === '短文本'">
                  <span>{{item.content_name}}：</span>
                  <el-input v-model="item.value" style="width: 200px" placeholder="请输入内容" />
                </div>
                <div v-if="item.content_type === '选择器'">
                  <span>{{item.content_name}}：</span>
                  <el-select v-model="item.value" placeholder="请选择填写类型">
                    <el-option v-for="(option_value, k) in item.content_options" :key="k" :label="option_value" :value="option_value"></el-option>
                  </el-select>
                </div>
                <div v-if="item.content_type === '选取日期'">
                  <span>{{item.content_name}}：</span>
                  <el-date-picker
                    v-model="item.value"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </div>
              </div>
            </div>
            <div class="clearfix">
              <div class="basic_item_chang" v-for="(item, key) in budgetData" :key="key">
                <div v-if="item.content_type === '长文本'">
                  <span>{{item.content_name}}：</span>
                  <el-input v-model="item.value" style="width: 600px"  type="textarea" :autosize="{ minRows: 2, maxRows: 8}" placeholder="请输入内容" />
                </div>
              </div>
            </div>
          </div>
          <div class="button_container">
            <div style="float: right">
              <el-button size="small" type="success">重置</el-button>
              <el-button size="small" type="primary" @click="submitVisible = true">提交</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-dialog :visible.sync="submitVisible" title="提交信息">
      <div>
<!--        <el-row :gutter="5">-->
<!--          <el-col :span="4">-->
<!--              <span style="font-weight: bolder">选择提交部门：</span>-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <div class="select">-->
<!--              <el-select v-model="type_select_department" placeholder="请选择提交部门" >-->
<!--                <el-option label="科研处" value="keyan"/>-->
<!--                <el-option label="财务处" value="caiwu"/>-->
<!--              </el-select>-->
<!--            </div>-->
<!--          </el-col>-->
<!--        </el-row>-->
        <el-row :gutter="5" style="margin-top: 5px">
          <el-col :span="4">
            <span style="font-weight: bolder">选择审核人：</span>
          </el-col>
          <el-col :span="6">
            <div class="select">
              <el-select v-model="type_select_people" placeholder="请选择审核人" >
                <el-option label="王老师" value="keyan"/>
                <el-option label="刘老师" value="keyan"/>
                <el-option label="张老师" value="keyan"/>
                <el-option label="赵老师" value="keyan"/>
                <el-option label="李老师" value="caiwu"/>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">备注</span>
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
          <el-button type="primary" size="small" plain @click="submit">确认提交</el-button>
          <el-button type="danger" size="small" plain @click="submitVisible = false">取消</el-button>
<!--          <el-button type="primary" @click="zhuanyeVisible = false" size="small" plain>关闭</el-button>-->
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { projectTableGetData } from '@/api/personnalSettings'
export default {
  name: 'FormFill',
  data() {
    return {
      // 修改
      value1: '',
      option1: [{
        value: '个人项目',
        label: '个人项目'
      }, {
        value: '集体项目',
        label: '集体项目'
      }],
      value2: '',
      option2: [{
        value: '院级课题',
        label: '院级课题'
      }, {
        value: '厅级课题',
        label: '厅级课题'
      }, {
        value: '省级课题',
        label: '省级课题'
      }, {
        value: '国家级课题',
        label: '国家级课题'
      }, {
        value: '教育厅课题',
        label: '教育厅课题'
      }],
      time: '',
      submitVisible:false,
      type_select_department:'',
      type_select_people:'',
      basicData: [],
      projectData: [],
      budgetData: []
    }
  },
  methods: {
    submit() {
      this.submitVisible = false
      this.$message({
        type:'success',
        message:'提交成功'
      })
  },
    previewGetTableData: function () {
      projectTableGetData().then(response => {
        console.log('测试预览表获取数据接口')
        console.log(response.data)
        this.basicData = response.data.data.basicInfo
        this.projectData = response.data.data.projectInfo
        this.budgetData = response.data.data.budgetInfo
      })
    }
  },
  mounted() {
    this.previewGetTableData()
  }
}
</script>

<style scoped>
  .option_container{
    float: left;
    margin-left: 30px;
  }
  .button_container{
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .foot{
    text-align: center;
    margin-top: 20px;
  }
  .basic_item {
    float: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  .basic_item_chang {
    margin-left: 30px;
    margin-top: 20px;
  }
  .preview_container {
    width: 100%;
    height: 100%;
  }
</style>
