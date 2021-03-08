<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bolder;color:#409EFF">科研信息</span>
        <el-button style="float: right; padding: 3px 0;margin-right: 15px" type="text">新增</el-button>
        <el-button style="float: right; padding: 3px 0;margin-right: 20px" type="text">修改</el-button>
        <el-button style="float: right; padding: 3px 0;margin-right: 15px" type="text">查看</el-button>
      </div>
      <el-form ref="form" :model="form" label-width="150px">
        <el-row>
          <el-col :span="10">
            <el-form-item label="成果名称">
              <el-input v-model="form.name" style="width: 300px" />
            </el-form-item>
          </el-col>
          <el-col :span="12"><el-form-item label="发表刊物">
            <el-input v-model="form.name" style="width: 310px;" />
          </el-form-item></el-col>
        </el-row>
        <el-row>
          <el-col :span="10"><el-form-item label="出版社">
            <el-input v-model="form.name" style="width: 300px" />
          </el-form-item></el-col>
          <el-col :span="12">
            <el-form-item label="是否核心">
              <el-select v-model="form.region" style="width: 310px" placeholder="请选择">
                <el-option label="是" value="shanghai" />
                <el-option label="否" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="发表时间">
              <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 300px;" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="上传附件">
              <el-upload
                ref="upload"
                class="upload-demo"
                action="url"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false"
              >
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;background: #42b983" size="small" type="success" @click="submitUpload">上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <div style="padding-top: 20px;text-align: center;">
            <el-button>保存</el-button>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </div>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MyInformation',
  data() {
    return {
      // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>

</style>
