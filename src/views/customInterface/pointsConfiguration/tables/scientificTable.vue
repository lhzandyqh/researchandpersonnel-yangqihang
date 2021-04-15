<template>
  <div class="app-container">
    <el-table
      :data="ScientificData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      stripe
      style="width: 100%">
      <el-table-column
        prop="patentType"
        label="专利类型"
      />
      <el-table-column
        prop="baseScore"
        label="基础分值"
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
        :total="ScientificData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
  </div>
</template>

<script>
import { scientificScoreQuery } from '@/api/scoreConfig'
export default {
  name: "scientificTable",
  data() {
    return {
      currentPage: 1,
      pagesize:5,
      ScientificData :[
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
    this.getScientificData()
  },
  methods: {
    getScientificData:function () {
      console.log('测试获取科研专利积分配置数据')
      scientificScoreQuery().then(response => {
        console.log('测试接口')
        console.log(response.data)
        this.ScientificData = response.data.data
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
