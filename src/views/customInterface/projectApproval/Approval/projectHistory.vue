<template>
  <div class="app-container">
    <el-table :data="projectData" style="width: 100%" stripe>
      <el-table-column prop="subdate"  label="提交日期" width="100px">
      </el-table-column>
      <el-table-column prop="applypeople" label="提交人" width="100px">
      </el-table-column>
      <el-table-column prop="approvalpeople" label="审核人" width="100px">
      </el-table-column>
      <el-table-column prop="department" label="部门" >
      </el-table-column>
      <el-table-column prop="subname" label="项目名称">
      </el-table-column>
       <el-table-column prop="sub" label="评审专家">
       </el-table-column>
      <el-table-column prop="approvaldate" label="审核日期" width="100px">
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.approval==='通过'" type="success">审核通过</el-tag>
          <el-tag  v-if="scope.row.approval==='未通过'" type="danger">审核未通过</el-tag>
          <el-tag  v-if="scope.row.approval==='待通过'">审核待通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="130px">
        <template slot-scope="scope">
          <el-button type="text" size="small" icon="el-icon-zoom-in" @click="chakan">查看</el-button>
          <el-button type="text" size="small" >导出</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center">
      <el-pagination
        :current-page="1"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="10"
        style="margin-top:20px;"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <el-dialog :visible.sync="projectVisible" title="审核详情">
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">项目名称：</span>
              <span>大数据产业</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">项目人数：</span>
              <span>3</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">项目级别：</span>
              <span>国家级</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">主管部门：</span>
              <span>计算机学院</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">项目负责人：</span>
              <span>王老师 </span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">项目预算：</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">项目方案：</span>
              <el-button type="text" >查看附件</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider />
      <h4>科研处意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            项目进度有待加强
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>郭志</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="projectVisible = false" size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'projectHistory',
    data(){
      return{
        zhuanyeVisible:false,
        workVisible:false,
        jibenVisible:false,
        projectVisible:false,
        projectData:[
          {
            number:'1',
            sub:'李老师',
            applypeople:'王老师',
            approvalpeople:'刘老师',
            department:'计算机学院',
            subdate:'2019-9-2',
            approvaldate:'2020-1-2',
            subname:'医保监控系统',
            approval:'通过',
          },
          {
            number:'2',
            sub:'周老师',
            applypeople:'张老师',
            approvalpeople:'刘老师',
            subdate:'2017-9-2',
            subname:'校园安全可视化',
            department:'计算机学院',
            approvaldate:'2018-1-2',
            approval:'通过',
          },
          {
            number:'3',
            sub:'邓老师',
            applypeople:'刘老师',
            approvalpeople:'刘老师',
            subname:'高点检测系统',
            subdate:'2019-4-2',
            department:'计算机学院',
            approvaldate:'2019-5-2',
            approval:'通过',
          },
          {
            number:'3',
            sub:'左老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'数据融合平台',
            approvaldate:'2019-5-2',
            approval:'未通过',
          },
          {
            number:'3',
            sub:'杨老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'环境质量监控',
            approvaldate:'2019-5-2',
            approval:'通过',
          },
          {
            number:'3',
            sub:'李老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subname:'城市公交管理系统',
            subdate:'2019-4-2',
            approvaldate:'2019-5-2',
            approval:'未通过',
          },
          {
            number:'3',
            sub:'李老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'办公自动化系统',
            approvaldate:'2019-5-2',
            approval:'未通过',
          },
          {
            number:'3',
            sub:'吴老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'课程设计管理系统',
            approvaldate:'2019-5-2',
            approval:'未通过',
          },
          {
            number:'3',
            sub:'陈老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'网络在线考试系统',
            approvaldate:'2019-5-2',
            approval:'通过',
          },
          {
            number:'3',
            sub:'赵老师',
            applypeople:'刘老师',
            department:'计算机学院',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            subname:'教师绩效评测系统',
            approvaldate:'2019-5-2',
            approval:'通过',
          },
        ]
      }
    },
    methods:{
      chakan(){
        this.projectVisible = true
      }
    }
  }
</script>

<style scoped>

</style>
