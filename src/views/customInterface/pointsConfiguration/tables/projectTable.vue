<template>
  <div class="app-container">
    <el-table
      :data="projectData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      stripe
      style="width: 100%">
      <el-table-column
        prop="projectLevel"
        label="课题级别"
      />
      <el-table-column
        prop="projectType"
        label="课题类型"
      />
      <el-table-column
        prop="personnelRole"
        label="个人角色"
      />
      <el-table-column
        prop="baseScore"
        label="基础分值"
      />
      <el-table-column
        prop="scoreRate"
        label="分值比率"
      />
      <el-table-column
        prop="configrateDate"
        label="配置时间"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :page-sizes="[5, 10]"
        :total="projectData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
  </div>
</template>

<script>
import { projectScoreQuery } from '@/api/scoreConfig'
export default {
  name: "projectTable",
  data() {
    return {
      currentPage: 1,
      pagesize:5,
      projectData :[
        {
        projectname:'自然语言处理问答系统',
        projectsub:'个人项目',
        projectclass:'省级',
        projectuser:'刘老师',
        date:'2019-9-8',
        score:'5'
      },
        {
          projectname:'专业智能知识库建设',
          projectsub:'教学建设',
          projectclass:'省级',
          projectuser:'王老师',
          date:'2020-3-4',
          score:'5'
        },
        {
          projectname:'NLP语言智能识别',
          projectsub:'学术科研',
          projectclass:'国家级',
          projectuser:'李老师',
          date:'2019-7-6',
          score:'10'
        },
        {
          projectname:'校园大数据中心建设',
          projectsub:'集体项目',
          projectclass:'厅级',
          projectuser:'张老师',
          date:'2020-4-5',
          score:'8'
        }]
    }
  },
  mounted() {
    this.getProjectData()
  },
  methods: {
    getProjectData:function () {
      console.log('测试获取项目课题积分配置数据')
      projectScoreQuery().then(response => {
        console.log('测试接口')
        console.log(response.data)
        this.projectData = response.data.data
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // this.currentPage = 1;
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  }
}
</script>

<style scoped>

</style>
