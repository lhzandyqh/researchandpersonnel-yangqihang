<template>
  <div class="app-container">
    <el-table :data="peopleData" style="width: 100%" stripe>
      <el-table-column prop="subdate"  label="提交日期">
      </el-table-column>
      <el-table-column prop="applypeople" label="提交人">
      </el-table-column>
      <el-table-column prop="approvalpeople" label="审核人">
      </el-table-column>
      <el-table-column prop="department" label="部门" >
      </el-table-column>
      <el-table-column prop="sub" label="审核类型">
      </el-table-column>
      <el-table-column prop="subname" label="审核名称">
      </el-table-column>
      <el-table-column prop="approvaldate" label="审核日期">
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
    <el-dialog :visible.sync="jibenVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">姓&#8195;&#8195;名：</span><span>王老师</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">性&#8195;&#8195;别：</span><span>女</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">民&#8195;&#8195;族：</span><span>汉</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">出生年月：</span><span>1980-3-2</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span><span>北京</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职&#8195;&#8195;别：</span><span>讲师</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">身份证号：</span><span>234445198xxxxxx</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">政治面目：</span><span>党员</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">入党团时间：</span><span>2003-2-3</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">家庭住址：</span><span>北京市朝阳区</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">手机号码：</span><span>12345678943</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">Email：</span><span>222334424#ddd</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任教学科：</span><span>计算机教学</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">部门：</span><span>计算机学院</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">参加工作时间：</span><span>2009.3.1</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">工作状态：</span><span>任职</span>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同起始时间：</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同终止时间：</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider/>
      <h4>科研处意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            批准通过
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="5">
            <span>审核人：</span>
            <span>王志</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="jibenVisible = false" size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'peopleHistory',
    data(){
      return{
        jibenVisible:false,
        AuditingReason:'',
        zhuanyeVisible:false,
        workVisible:false,
        peopleData:[
          {
            number:'1',
            sub:'基本信息',
            applypeople:'李老师',
            approvalpeople:'刘老师',
            subdate:'2019-9-2',
            approvaldate:'2020-1-2',
            department:'计算机学院',
            approval:'通过',
            subname:'基本信息修改'
          },
          {
            number:'2',
            sub:'专业能力',
            applypeople:'林老师',
            approvalpeople:'刘老师',
            subdate:'2017-9-2',
            department:'计算机学院',
            approvaldate:'2018-1-2',
            approval:'通过',
            subname:'基本信息修改'
          },
          {
            number:'3',
            sub:'工作经历',
            applypeople:'赵老师',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            department:'计算机学院',
            approvaldate:'2019-5-2',
            approval:'未通过',
            subname:'基本信息修改'
          },
        ]
      }
    },
    methods:{
      chakan(){
        this.jibenVisible = true
      }
    }
  }
</script>

<style scoped>

</style>
