<template>
  <div class="preview_container">
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
            <el-button size="small" type="primary">提交</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projectTableGetData } from '@/api/personnalSettings'
export default {
  name: "previewTable",
  data() {
    return {
      basicData: [],
      projectData: [],
      budgetData: []
    }
  },
  mounted() {
    this.previewGetTableData()
  },
  methods: {
    previewGetTableData: function () {
      projectTableGetData().then(response => {
        console.log('测试预览表获取数据接口')
        console.log(response.data)
        this.basicData = response.data.data.basicInfo
        this.projectData = response.data.data.projectInfo
        this.budgetData = response.data.data.budgetInfo
      })
    }
  }
}
</script>

<style scoped>
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
