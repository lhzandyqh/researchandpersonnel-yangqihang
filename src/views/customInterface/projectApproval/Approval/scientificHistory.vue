<template>
  <div class="app-container">
    <el-table :data="scientificData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" stripe>
      <el-table-column prop="submitDate"  label="提交日期" width="100px">
      </el-table-column>
      <el-table-column prop="applyPerson" label="提交人" width="100px">
      </el-table-column>
      <el-table-column prop="auditPerson" label="审核人" width="100px">
      </el-table-column>
      <el-table-column prop="dept" label="部门" >
      </el-table-column>
      <el-table-column prop="assessType" label="审核类型">
      </el-table-column>
      <el-table-column prop="auditName" label="审核名称">
      </el-table-column>
      <el-table-column prop="auditDate" label="审核日期" width="100px">
      </el-table-column>
      <el-table-column prop="auditStatus" label="审核状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.auditStatus==='审核通过'" type="success">审核通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='审核未通过'" type="danger">审核未通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='待通过'">审核待通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="130px">
        <template slot-scope="scope">
          <el-button type="text" size="small" icon="el-icon-zoom-in" @click="chakan(scope.row)">查看</el-button>
          <el-button type="text" size="small" >导出</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15]"
        :page-size="pagesize"
        :total="scientificData.length"
        style="margin-top:20px;"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <el-dialog :visible.sync="hexinVisible" title="审核详情" style="width: 110%">
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">文章题目：</span>
              <span>{{scienticficDetails.paperName}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">发表时间：</span>
              <span>{{scienticficDetails.publishDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">是否第一作者：</span>
              <span>{{scienticficDetails.ifFirstAuthor}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">发表刊物：</span>
              <span>{{scienticficDetails.publishJournal}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">出版社：</span>
              <span>{{scienticficDetails.publisher}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">提交时间：</span>
              <span>{{scienticficDetails.submitDate}}</span>
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
      <el-divider />
      <h4>科研处意见</h4>
      <div>
        <el-row>
          <el-col :span="8">
            项目具有可行性，建议加快进度
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="5">
            <span>审核人：</span>
            <span>郭志</span>
          </el-col>
          <el-col :span="4">
            <span>审核状态</span>
            <el-tag type="success">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click=" hexinVisible = false"  size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getAcadeAchieveAuditedRecord, getAcadeAchieveAuditedRecordDetail} from '@/api/researchReview'
  export default {
    name: 'scientificHistory',
    data(){
      return{
        currentPage: 1,
        pagesize: 5,
        zhuanyeVisible:false,
        hexinVisible:false,
        jibenVisible:false,
        scientificData:[
          {
            number:'1',
            sub:'非核心论文',
            applypeople:'刘老师',
            approvalpeople:'刘老师',
            department:'计算机学院',
            subdate:'2019-9-2',
            approvaldate:'2020-1-2',
            approval:'通过',
            subname:'高点探测智能分析'
          },
          {
            number:'2',
            sub:'三大检索论文',
            applypeople:'王老师',
            approvalpeople:'刘老师',
            department:'计算机学院',
            subdate:'2017-9-2',
            approvaldate:'2018-1-2',
            approval:'未通过',
            subname:'大数据处理'
          },
          {
            number:'3',
            sub:'专著登记',
            applypeople:'赵老师',
            approvalpeople:'刘老师',
            department:'计算机学院',
            subdate:'2019-4-2',
            approvaldate:'2019-5-2',
            approval:'通过',
            subname:'基本信息修改'
          },
          {
            number:'3',
            sub:'专利申报',
            applypeople:'张老师',
            approvalpeople:'刘老师',
            subdate:'2019-4-2',
            department:'计算机学院',
            approvaldate:'2019-5-2',
            approval:'未通过',
            subname:'校园诊改系统'
          },
        ],
        scienticficDetails: {}//学术成果详情当前对象
      }
    },
    mounted() {
      this.getAcadeAchieveAuditedRecord()
    },
    methods:{
      chakan(row){
        this.hexinVisible = true;
        const prams = {
          id: row.id,
          assessType: '学术论文'
        }
        getAcadeAchieveAuditedRecordDetail(prams).then(response => {
          console.log('测试获取学术论文审核历史详情')
          console.log(response.data)
          this.scienticficDetails = response.data.data
        })
      },
      // 科研主管获取学术成果审批历史
      getAcadeAchieveAuditedRecord () {
        getAcadeAchieveAuditedRecord().then(response => {
          console.log('测试获取学术成果审核历史接口')
          console.log(response.data)
          this.scientificData = response.data.data
        })
      },
      //分页
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
.foot{
  text-align: right;
  margin-right: 30px;
  margin-top: 20px;
}
</style>
