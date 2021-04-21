<template>
  <div class="app-container">
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
<!--                <a href="" class="download" download="test.pdf" title="下载" style="color: #00a4ff" @click="downloadFile(scope.row)">点击下载</a>-->
                <a :href="scope.row.fileUrl" class="download"  title="下载" style="color: #00a4ff">点击下载</a>
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
  </div>
</template>

<script>
import { userGetAllTable, userGetAllFile} from '@/api/smartServer'
export default {
name: "fileLibrary",
  data() {
    return{
      fileUrl: '',
      tableData: [],
      tableDataTwo: [],
      currentPage: 1,
      pagesize:5,
      currentPage2: 1,
      pagesize2:5,
      input: '',
      input2: ''
    }
  },
  mounted() {
    this.getTable()
    this.getFile()
  },
  methods: {
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
    // 接下来是自己写的方法
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
