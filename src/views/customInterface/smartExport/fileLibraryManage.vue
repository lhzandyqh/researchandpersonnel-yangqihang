<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div>
        <div style="margin-right: 20px;float: right">
<!--          <el-button type="primary"  @click="excelImportShow = true" >文件上传</el-button>-->
          <el-button type="primary" @click="dialogVisible = true">文件上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <el-row>
      <el-tabs>
        <el-tab-pane label="常用表格">
          <div>
            <el-input v-model="input" placeholder="请输入关键字" style="width: 300px"></el-input>
            <el-button type="primary" icon="el-icon-search" style="margin-left: 20px">搜索</el-button>
          </div>
          <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe
            style="width: 100%">
            <el-table-column
              prop="fileName"
              label="表名"
            />
            <el-table-column
              prop="publisher"
              label="发布人"
            />
            <el-table-column
              prop="submitDate"
              label="发布日期"
            />
            <el-table-column
              prop="deadline"
              label="有效截止日期"
            />
            <el-table-column
              label="操作"
              align="center"
            >
              <template slot-scope="scope">
                <el-button type="text">删除</el-button>
<!--                <a href="" class="download" download="test.pdf" title="下载" style="color: #00a4ff" @click="downloadFile(scope.row)">点击下载</a>-->
                <a :href="scope.row.fileUrl" class="download"  title="下载" style="color: #00a4ff">点击下载</a>
              </template>
            </el-table-column>
          </el-table>
          <div class="fenye">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[5, 10, 15]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableData.length">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="文件通知">
          <div>
            <el-input v-model="input2" placeholder="请输入关键字" style="width: 300px"></el-input>
            <el-button type="primary" icon="el-icon-search" style="margin-left: 20px">搜索</el-button>
          </div>
          <el-table
            :data="tableDataTwo.slice((currentPage2-1)*pagesize2,currentPage2*pagesize2)"
            stripe
            style="width: 100%">
            <el-table-column
              prop="fileName"
              label="文件名"
            />
            <el-table-column
              prop="publisher"
              label="发布人"
            />
            <el-table-column
              prop="submitDate"
              label="发布日期"
            />
            <el-table-column
              prop="deadline"
              label="有效截止日期"
            />
            <el-table-column
              label="操作"
              align="center"
            >
              <template slot-scope="scope">
                <el-button type="text">删除</el-button>
<!--                <el-button :href="this.fileUrl" type="text" @click="downloadFile(scope.row)">点击下载中</el-button>-->
                <a :href="scope.row.fileUrl" class="download"  title="下载" style="color: #00a4ff">点击下载</a>
<!--                <el-button type="text" @click="downloadFile(scope.row)">下载</el-button>-->
<!--                <el-link  target="_blank" :href="this.fileUrl" :underline="false" >-->
<!--                  <el-button size="mini" type="warning" @click="downloadFile(scope.row)">下载</el-button>-->
<!--                </el-link>-->
              </template>
            </el-table-column>
          </el-table>
          <div class="fenye">
            <el-pagination
              @size-change="handleSizeChangeTwo"
              @current-change="handleCurrentChangeTwo"
              :current-page="currentPage2"
              :page-sizes="[5, 10, 15]"
              :page-size="pagesize2"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableDataTwo.length">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-dialog
      title="文件上传"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文件名称">
          <el-input v-model="form.fileName"></el-input>
        </el-form-item>
        <el-form-item label="文件类型">
          <el-select v-model="form.fileType" placeholder="请选择文件类型">
            <el-option label="常用表格" value="常用表格"></el-option>
            <el-option label="文件通知" value="文件通知"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="有效截止日期">
          <el-date-picker
            v-model="form.deadline"
            type="date"
            value="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="文件上传">
          <el-upload
            class="upload-demo"
            action="http://58.119.112.15:11002//upload/fileUpload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="uploadSuccess"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary"  @click="submitFile">提 交</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import { userGetAllTable, userGetAllFile, deptUploadFile} from '@/api/smartServer'
export default {
  name: "fileLibraryManage",
  data() {
    return{
      form: {
      },
      dialogVisible: false,
      tableData: [{}],
      tableDataTwo: [],
      currentPage: 1,
      pagesize:5,
      currentPage2: 1,
      pagesize2:5,
      input: '',
      input2: '',
      fileUrl: ''
    }
  },
  mounted() {
    this.getTable()
    this.getFile()
  },
  methods: {
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
    handleSizeChangeTwo(val) {
      console.log(`每页 ${val} 条`);
      // this.currentPage = 1;
      this.pagesize2 = val;
    },
    handleCurrentChangeTwo(val) {
      console.log(`当前页: ${val}`);
      this.currentPage2 = val;
    },
    downloadFile: function (row) {
      this.fileUrl = row.fileUrl
      console.log('测试下载链接')
      console.log(this.fileUrl)
      window.open(this.fileUrl)
    },
    getTable: function () {
      userGetAllTable().then(response => {
        console.log('测试获取表格接口')
        console.log(response.data.data)
        this.tableData = response.data.data
      })
    },
    getFile: function () {
      userGetAllFile().then(response => {
        console.log('测试获取文件接口')
        console.log(response.data.data)
        this.tableDataTwo = response.data.data
      })
    },
    uploadSuccess: function (response) {
      console.log('测试文件上传接口')
      console.log(response.data)
      if(response.data!== '') {
        this.$message({
          message: '上传成功',
          type: 'success'
        });
        this.fileUrl = response.data.fileUrl
        console.log(this.fileUrl)
        this.form.fileUrl = this.fileUrl
      }else {
        this.$message({
          message: '请重试',
          type: 'warning'
        });
      }
    },
    submitFile: function () {
      this.form.publisher = localStorage.getItem('loginName')
      console.log('测试form')
      console.log(this.form)
      if(Object.keys(this.form).length!==5){
        this.$message({
          message: '上传信息不完整,请检查或重新上传文件后再试',
          type: 'warning'
        });
      }else {
        deptUploadFile(this.form).then(response => {
          console.log('测试文件或表格上传')
          console.log(response.data)
          this.$message({
            message: '上传成功',
            type: 'success'
          });
          this.dialogVisible = false
          this.getTable()
          this.getFile()
        })
      }
    }
  }
}
</script>

<style scoped>
.fenye{
  margin-top: 20px;
  text-align: center;
}
</style>
