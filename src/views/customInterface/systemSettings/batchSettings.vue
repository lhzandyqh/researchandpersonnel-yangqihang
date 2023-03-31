<template>
  <div class="app-container">
    <el-row style="margin: 10px 10px 10px 20px">
      <el-col :span="24">
        <el-button  @click="addVisible = true" style="float: right; padding: 10px 10px;margin-right: 7%" type="primary">新增批次</el-button>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      stripe
      style="width: 100%">
      <el-table-column
        prop="batch"
        label="批次名称"
      />
      <el-table-column
        prop="batchStartDate"
        label="开始时间"
      />
      <el-table-column
        prop="batchEndDate"
        label="终止时间"
      />
      <el-table-column
        prop="submitDate"
        label="提交时间"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <!--          <el-button @click="changeinfo(scope.row);switchType('update')" type="text" size="medium">修改</el-button>-->
          <el-button @click="editBatch(scope.row)" type="text" size="medium">编辑</el-button>
          <el-button @click="deleteBatch(scope.row)" type="text" size="medium">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
      <el-dialog :visible.sync="addVisible" title="新增批次" width="600px" >
          <el-form ref="form" :model="addForm" label-width="110px" style="margin-top: 20px">
            <el-form-item label="项目批次名称：">
              <el-input v-model="addForm.batch" style="width:300px"></el-input>
            </el-form-item>
            <el-form-item label="批次开始时间：">
              <el-date-picker
                v-model="addForm.batchStartDate"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="批次终止时间：">
              <el-date-picker
                v-model="addForm.batchEndDate"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="addVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirmAdd">确 定</el-button>
          </span>
      </el-dialog>
<!--      <el-dialog :visible.sync="editVisible" title="编辑项目批次" width="600px" style="padding-left: 200px">-->
    <el-dialog :visible.sync="editVisible" title="修改项目批次" width="600px" style="padding-left: 100px">
      <el-form ref="form" :model="editForm" label-width="110px" style="margin-top: 20px">
        <el-form-item label="项目批次名称：">
          <el-input v-model="editForm.batch" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="批次开始时间：">
          <el-date-picker
            v-model="editForm.batchStartDate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="批次终止时间：">
          <el-date-picker
            v-model="editForm.batchEndDate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmEdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {getAllProjectApplyBatch, ProjectApplyBatchInfo, updateBatch, deleteBatch} from '@/api/personnalSettings'
export default {
  name: 'batchTable',
  data() {
    return {
      addVisible: false,
      editVisible: false,
      currentPage: 1,
      pageSize: 5,
      addForm: {
      },
      editForm: {
      },
      tableData: [
        {
          projectName: '大数据',
          startDate: '2021-1-1',
          overDate: '2021-2-2',
          submitDate: '2012-1-1'
        }
      ],
      rowId: '' ,
      submitDate: ''
    }
  },
    mounted() {
      this.getAllProjectApplyBatch()
    },
    methods:{
      reset() {
        this.addForm = {
          batch: '',
          batchStartDate: '',
          batchEndDate: ''
        }
      },
      editBatch (row) {
        // console.log(row)
        this.editForm = row;
        this.rowId = row.id;
        this.submitDate = row.submitDate;
        console.log(this.submitDate)
        this.editVisible = true;
      },
      // 分页
      handleSizeChange(val) {
        this.currentPage = 1
        this.pageSize = val
      },
      handleCurrentChange(val) {
        this.currentPage = val
      },
      //获取所有项目批次
      getAllProjectApplyBatch () {
        getAllProjectApplyBatch().then(response => {
          console.log('测试获取所有项目批次接口')
          console.log(response.data)
          this.tableData = response.data.data
        })
      },
      //新增项目批次
      confirmAdd () {
        const prams = this.addForm;
        ProjectApplyBatchInfo(prams).then(response => {
          console.log('测试新增项目批次接口')
          console.log(response.data)
        })
        this.addVisible = false;
        this.reset()
        // this.getAllProjectApplyBatch ()
        location.reload()  //页面刷新方法（1） windows的location属性自带方法
        // this.$router.go(0) //页面刷新方法（2） vue框架router自带方法
      },
      //编辑项目批次
      confirmEdit () {
        const prams = {
          id: this.rowId,
          batch: this.editForm.batch,
          batchStartDate: this.editForm.batchStartDate,
          batchEndDate: this.editForm.batchEndDate,
          submitDate : this.submitDate
        }
        updateBatch(prams).then(response => {
          console.log('测试编辑项目批次接口')
          console.log(response.data)
        })
        this.editVisible = false;
        location.reload()  //页面刷新方法（1） windows的location属性自带方法
      },
      //删除项目批次
      deleteBatch (row) {
        const prams = {
          batchId : row.id
        }
        // console.log(prams)
        deleteBatch(prams).then(response => {
          console.log('测试删除项目批次接口')
          console.log(response.data)
        })
        this.$message.success('删除成功')
        // this.getAllProjectApplyBatch ()
        location.reload()  //页面刷新方法（1） windows的location属性自带方法
      }
    }
  }
</script>

<style scoped>
/deep/ .el-dialog__body{
  padding-top: 0px;
  padding-bottom: 0px;
}
/deep/ .el-card__body{
  padding-top: 0px;
}
.box-card {
  width: 100%;
  height: 250px;
}
.box-card1{
  width: 100%;
  height: 350px;
}

.single{
  display: inline-block;
  float:left;
  font-size: 15px;
}
.biaoqian{
  display: inline-block;
}
.content{
  display: inline-block;
}
.card-container{
  margin-top: 10px;
}
.fenye{
  text-align: center;
  margin-top: 20px;
}
.detailName {
  float: left;
  /*display: inline-block;*/
  width: 90px;
  /*height: 20px;*/
  /*line-height: 20px;*/
  font-weight: 700

}
.detailValue {
  float: left;
  /*display: inline-block;*/
  width: 180px;
  font-weight: 400
}
.expert {
  display: inline-block;
  width: 50%;
  border-radius: 5px;
  border-color: rgba(0,0,0,0.1);
  border-style: solid ;
  border-width: 1px;
  /*background-color: blue;*/
}
.resultTitle {
  display: inline-block;
  width: 100%;
  height: 300px;
  font-size: 16px;
  padding-left: 1rem ;
  margin-top: 15px;
  margin-bottom: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0,0,0,0.3);
  border-radius: 3px;
}
</style>

