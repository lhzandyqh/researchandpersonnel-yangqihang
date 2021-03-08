<template>
  <div class="app-container">
    <el-table :data="peopleData" style="width: 100%" stripe>
      <el-table-column prop="subdate" label="提交日期">
      </el-table-column>
      <el-table-column prop="applypeople" label="提交人">
      </el-table-column>
      <el-table-column prop="department" label="部门">
      </el-table-column>
      <el-table-column prop="sub" label="审核类型">
      </el-table-column>
      <el-table-column prop="name" label="审核名称">
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.approval==='通过'" type="success">审核通过</el-tag>
          <el-tag  v-if="scope.row.approval==='未通过'" type="danger">审核未通过</el-tag>
          <el-tag  v-if="scope.row.approval==='待通过'">审核待通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="jibenview(scope.row.sub)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :page-sizes="[5, 10]"
        :total="peopleData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <el-dialog :visible.sync="hexinVisible" title="审核详情" style="width: 110%">
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">文章题目：</span>
              <span>高点探测智能分析</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">发表时间：</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">是否第一作者：</span>
              <span>是</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">发表刊物：</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">出版社：</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">提交时间：</span>
              <span>2019.4.3</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">照片证明：</span>
              <el-button type="text">查看图片</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider/>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">科研处意见</span>
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
          <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
          <el-button type="primary" @click="zhuanyeVisible = false"  size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'scientificApproval',
    data(){
      return{
        hexinVisible:false,
        workVisible:false,
        jibenVisible:false,
        peopleData:[
          {
            number:'1',
            sub:'中文核心论文',
            applypeople:'王老师',
            approvalpeople:'刘老师',
            subdate:'2019-9-2',
            approvaldate:'2020-1-2',
            approval:'待通过',
            department:'计算机学院',
            name: '高点探测智能分析'
          },
          {
            number:'2',
            sub:'三大检索论文',
            applypeople:'张老师',
            approvalpeople:'刘老师',
            subdate:'2017-9-2',
            approvaldate:'2018-1-2',
            department:'工学院',
            approval:'待通过',
            name: '高点探测智能分析',
          },
          {
            number:'3',
            sub:'非中文核心论文',
            applypeople:'刘老师',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            approvaldate:'2019-5-2',
            approval:'待通过',
            department: '理学院',
            name: '校园诊改系统',
          },
          {
            number:'4',
            sub:'中文核心',
            applypeople:'赵老师',
            approvalpeople:'刘老师',
            subdate:'2019-12-21',
            approvaldate:'2019-5-2',
            approval:'待通过',
            department: '理学院',
            name: '自然语言处理问答',
          },
        ]
      }
    },
    methods: {
      paper() {
        this.hexinVisible = true;
      },
      jibenview(sub){
        this.hexinVisible = true;
      },
      pass(){
        this.$message({
            type: 'success',
            message: '审核成功',
          }
        )
      }
    }
  }
</script>

<style>
  .foot{
    text-align: center;
    margin-top: 20px;
  }
</style>
