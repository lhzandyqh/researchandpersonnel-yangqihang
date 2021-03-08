<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="发布日期">
      </el-table-column>
      <!--      <el-table-column-->
      <!--        prop="people"-->
      <!--        label="提交人">-->
      <!--      </el-table-column>-->
      <el-table-column
        prop="people"
        label="评审时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="部门">
      </el-table-column>
      <!--      <el-table-column-->
      <!--        prop="type"-->
      <!--        label="审核类型">-->
      <!--      </el-table-column>-->
      <el-table-column
        prop="name"
        label="项目名称">
      </el-table-column>
      <el-table-column align="center" label="操作" width="500">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getAuditing(scope.row.id,scope.row.type)">评审</el-button>
          <el-button type="primary" size="small" icon="el-icon-notebook-2">查看中期报告</el-button>
          <el-button type="primary" size="small" icon="el-icon-notebook-2">查看结题报告</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="4">
      </el-pagination>
    </div>

    <!--查看弹框-->
    <el-dialog :visible.sync="keyandialogPvVisible" title="中文核心论文审核详情">
      <el-table :data="aData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="academic_name" label="文章题目（专著名称）"/>
        <el-table-column prop="publication_time" label="发表时间（出版时间）"/>
        <el-table-column prop="is_first_author" label="是否第一作者"/>
        <!--<el-table-column prop="certType" label="证书颁发日期"/>-->
        <el-table-column prop="name_of_publications" label="刊物名称（出版社）"/>
        <el-table-column prop="number_of_academic" label="刊号（书号）"/>
        <el-table-column prop="level_of_publisher" label="刊物等级（出版社等级）"/>
        <el-table-column prop="submit_time" label="提交审核时间"/>
        <el-table-column align="center" label="照片证明">
          <template slot-scope="scope">
            <el-button type="text" size="medium" @click="lookImages(scope.$index)">查看图片</el-button>
          </template>
        </el-table-column>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.audit_status==='待审核'">审核待通过</div>
            <div v-if="scope.row.status==='1'">审核通过</div>
            <div v-if="scope.row.status==='0'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-row style="padding-top: 10px">
          <span>审核意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="myStatus.remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="editAuditing(1)">审核通过</el-button>
        <el-button type="danger" @click="editAuditing(0)">审核不通过</el-button>
        <el-button type="primary" @click="keyandialogPvVisible = false">关闭</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="xiangmudialogVisible" title="科研项目审核详情">
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">专家评审意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="myStatus.remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="editAuditing(1)">完成</el-button>
        <el-button type="primary" @click="keyandialogPvVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "departmentProjectTable",
    data(){
      return{
        currentPage4: 4,
        aData:[
          {
            academic_name: '碳基材料的应用与研究',
            level_of_publisher:'国家级',
            publication_time: '2019-08-02',
            is_first_author: '是',
            name_of_publications: '科技出版社',
            number_of_academic: '90-6474',
            submit_time: '2020-07-08',
            audit_status: '待审核'
          },
        ],
        bData:[
          {
            renshu: 4,
            jibie:'国家级',
            bumen: '计算机学院',
            fuzeren: '王老师',
            yusuan: '400000',
            submit_time: '2020-07-08',
            audit_status: '待审核'
          },],
        xiangmudialogVisible: false,
        keyandialogPvVisible: false,
        imgs: [],
        isShowImageDialog: false,
        tableData: [{
          date: '2020-07-02',
          name: '高点探测智能分析',
          address: '理学院',
          type: '科研项目',
          people: '王老师'
        }, {
          date: '2020-07-12',
          name: '校园诊改系统',
          address: '计算机学院',
          type: '科研项目',
          people: '李老师'
        }, {
          date: '2020-07-18',
          name: '碳基材料的应用与研究',
          address: '材料学院',
          type: '科研项目',
          people: '赵老师'
        }, {
          date: '2020-08-02',
          name: '自然语言处理问答系统',
          address: '计算机学院',
          type: '科研项目',
          people: '杨老师'
        }],
        dialogPvVisible: false,
        pvData: [],
        myStatus: {
          id: '',
          status: '',
          remark: ''
        }
      }
    },
    methods:{
      getAuditing(id,type) {
        if(type === '中文核心论文登记'){
          this.keyandialogPvVisible = true
        } else if(type === '科研项目'){
          this.xiangmudialogVisible = true
        }
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
