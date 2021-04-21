<template>
  <div class="app-container">
    <div class="con_header">
      <div class="function_item">
        <span>评审年度:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="function_item left_control">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="table_container">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        style="width: 100%">
        <el-table-column
          prop="rank"
          label="排名"
          width="180">
          <template slot-scope="scope">
            <span style="font-weight: bold">{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="projectName"
          label="科研项目名称">
        </el-table-column>
        <el-table-column
          prop="applyPerson"
          label="申报人"
          width="180">
        </el-table-column>
        <el-table-column
          prop="dept"
          label="申报人所在部门"
          width="180">
        </el-table-column>
        <el-table-column
          prop="totalScore"
          label="项目评审得分"
          width="180">
        </el-table-column>
        <el-table-column
          prop="assessExpert"
          label="评审专家"
          width="180">
        </el-table-column>
        <el-table-column
          prop="assessDate"
          label="评审日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button type="text" @click="getScoreDetail(scope.row)">查看评审得分详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="fenye">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          :page-sizes="[5, 10]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length ">
        </el-pagination>
      </div>
    </div>
    <el-dialog
      title="评审得分"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
<!--      <rank-score-echart></rank-score-echart>-->
      <div class="dimension_container" v-for="(item, key) in scoreDetails" :key="key">
        <div class="dimension_title">
          <span style="font-weight: bold;color: #8c939d">{{item.dimensionName}}</span>
          <el-divider></el-divider>
          <div class="dimension_item clearfix" v-for="(value, k) in item.children" :key="key">
            <div>
              <div class="dimension_name">
                <span>{{value.dimensionName}}:</span>
                <span style="font-weight: bold;">{{value.evaluationScore}}</span>
                <span style="float: right">该维度评价总分值：{{value.basicScore}}分</span>
<!--                <el-input v-model="value.number" @change="addScore(value.id,value.number)" style="width: 150px;margin-left: 15px" placeholder="请输入评审分值" />-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import rankScoreEchart from "./echarts/rankScoreEchart";
import { directorGetAuditingRank, directorGetAuditingScoreDetails } from '@/api/expertEvaluation'
export default {
name: "reviewRank",
  data() {
    return {
      dialogVisible: false,
      currentPage: 1,
      pagesize:5,
      options: [{
        value: '2020',
        label: '2020'
      }, {
        value: '2019',
        label: '2019'
      }, {
        value: '2018',
        label: '2018'
      }, {
        value: '2017',
        label: '2017'
      }, {
        value: '2016',
        label: '2016'
      }],
      value: '',
      tableData: [
        {
        rank: '1',
        projectName: '项目名称1',
        peopleName: '刘老师',
        major: '计算机学院',
        score: '83',
        expert: '杨专家',
        date: '2020-08-12'
        },
        {
          rank: '2',
          projectName: '项目名称2',
          peopleName: '李老师',
          major: '材料学院',
          score: '80',
          expert: '胡专家',
          date: '2020-08-13'
        },
        {
          rank: '3',
          projectName: '项目名称3',
          peopleName: '邓老师',
          major: '机械学院',
          score: '77',
          expert: '杨专家',
          date: '2020-08-12'
        },
        {
          rank: '4',
          projectName: '项目名称4',
          peopleName: '杨老师',
          major: '材料学院',
          score: '75',
          expert: '赵专家',
          date: '2020-08-06'
        },
        {
          rank: '5',
          projectName: '项目名称5',
          peopleName: '程老师',
          major: '计算机学院',
          score: '72',
          expert: '左专家',
          date: '2020-08-07'
        },
        {
          rank: '6',
          projectName: '项目名称6',
          peopleName: '李老师',
          major: '医学院',
          score: '70',
          expert: '胡专家',
          date: '2020-08-13'
        }
      ],
      detailrow: {},
      scoreDetails: []
    }
  },
  mounted() {
    this.getAllData()
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
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getAllData: function () {
      const prams = {
        tecUsername: '10002'
      }
      directorGetAuditingRank(prams).then(response => {
        console.log('测试科研主管获取项目申报评审排名接口')
        console.log(response.data)
        this.tableData = response.data.data
      })
    },
    getScoreDetail: function (row) {
      this.dialogVisible = true
      this.detailrow = row
      const prams = {
        applyTecUsername: this.detailrow.applyTecUsername,
        times: this.detailrow.times
      }
      directorGetAuditingScoreDetails(prams).then(response => {
        console.log('测试获取打分详情接口')
        console.log(response.data)
        this.scoreDetails = response.data.data.assessScore.children
        console.log(this.scoreDetails)
      })
    }
  },
  components: {
  rankScoreEchart
  }
}
</script>

<style scoped>
.function_item{
  display: inline-block;
}
.function_item span {
  font-weight: bold;
}
.left_control{
  margin-left: 20px;
}
.fenye {
  margin-top: 20px;
  text-align: center;
}
.dimension_container {
  margin-top: 30px;
}
.dimension_name {
  margin-top: 20px;
  /*float: left;*/
  margin-left: 10%;
}
</style>
