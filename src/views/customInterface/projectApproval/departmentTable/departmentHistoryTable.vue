<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="提交日期">
      </el-table-column>
      <el-table-column
        prop="tijiao"
        width="100"
        label="提交人">
      </el-table-column>
      <el-table-column
        prop="shenhe"
        width="100"
        label="审核人">
      </el-table-column>
      <el-table-column
        prop="bumen"
        width="130"
        label="部门">
      </el-table-column>
      <el-table-column
        prop="type"
        width="200"
        label="审核类型">
      </el-table-column>
      <el-table-column
        prop="name"
        label="审核名称">
      </el-table-column>
      <el-table-column
        prop="datetwo"
        width="130"
        label="审核日期">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getAuditing(scope.row.id,scope.row.type)">查看</el-button>
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getAuditing(scope.row.id,scope.row.type)">导出</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 15, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="79">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        name: "departmentHistoryTable",
      data(){
          return{
            currentPage4: '',
            tableData:[
              {date:'2018-08-02',tijiao:'王老师',shenhe:'李老师',bumen:'计算机学院',type:'科研项目',name:'校园安全可视化监控系统',datetwo:'2018-08-04'},
              {date:'2018-08-05',tijiao:'赵老师',shenhe:'李老师',bumen:'计算机学院',type:'科研项目',name:'教师绩效评测系统',datetwo:'2018-08-08'},
              {date:'2018-07-12',tijiao:'吴老师',shenhe:'李老师',bumen:'计算机学院',type:'科研项目',name:'网络在线考试系统',datetwo:'2018-07-16'},
              {date:'2018-07-15',tijiao:'欧老师',shenhe:'李老师',bumen:'计算机学院',type:'科研项目',name:'课程设计管理系统',datetwo:'2018-07-16'},
              {date:'2018-08-02',tijiao:'王老师',shenhe:'李老师',bumen:'计算机学院',type:'科研项目',name:'办公自动化系统的设计与实现',datetwo:'2018-08-04'},
              {date:'2018-08-17',tijiao:'程老师',shenhe:'李老师',bumen:'计算机学院',type:'科研项目',name:'城市公交管理系统',datetwo:'2018-08-19'},
              {date:'2018-08-24',tijiao:'左老师',shenhe:'李老师',bumen:'计算机学院',type:'科研项目',name:'高点检测系统',datetwo:'2018-08-26'},
              {date:'2018-08-29',tijiao:'刘老师',shenhe:'李老师',bumen:'计算机学院',type:'科研项目',name:'环境质量监控系统',datetwo:'2018-09-01'},
              {date:'2018-09-09',tijiao:'罗老师',shenhe:'李老师',bumen:'计算机学院',type:'科研项目',name:'医保情况监控系统的设计与实现',datetwo:'2018-09-11'},
              {date:'2018-10-02',tijiao:'王老师',shenhe:'李老师',bumen:'计算机学院',type:'科研项目',name:'数据融合平台的设计',datetwo:'2018-10-04'}
            ]
          }
      }
    }
</script>

<style scoped>
  .fenye{
    text-align: center;
    margin-top: 20px;
  }
</style>
