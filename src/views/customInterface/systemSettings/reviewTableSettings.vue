<template>
  <div class="app-container">
    <div class="main_container">
      <div class="left_container">
        <div class="left_content">
          <div class="button_container">
            <el-button-group>
              <el-button type="primary" size="small" @click="addNewDimension">新增评审维度</el-button>
              <!--              <el-button type="primary" size="small">编辑</el-button>-->
              <el-button type="primary" size="small" @click="deleteDimension">删除评审维度</el-button>
            </el-button-group>
          </div>
          <div class="tree_container">
            <el-tree :data="dimensionData" :props="defaultProps" @node-click="handleNodeClick" />
          </div>
        </div>
      </div>
      <div class="right_container">
        <div class="function_item">
          <span>维度名称:</span>
          <el-input v-model="value1" style="width: 150px;margin-left: 15px" placeholder="请输入" />
        </div>
        <!--        <div class="function_item">-->
        <!--          <span>成员职务:</span>-->
        <!--          <el-input v-model="value1" style="width: 150px;margin-left: 15px" placeholder="请输入" />-->
        <!--        </div>-->
        <div class="function_item">
          <el-button type="primary" size="small" @click="findMember">搜索</el-button>
        </div>
        <div class="right_first_container">
          <div class="button-container">

          </div>
        </div>
        <div class="right_second_container">
          <div style="margin-top: 20px">
            <el-table
              :data="tableData"
              :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
              row-key="id"
              default-expand-all
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
              <el-table-column
                prop="dimensionName"
                label="维度名称"
                width="300"
                sortable>
              </el-table-column>
              <el-table-column
                prop="dimensionExplain"
                label="维度说明"
                sortable>
              </el-table-column>
              <el-table-column
                prop="dimensionScore"
                label="维度分值"
                width="200"
              >
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="新增评审维度"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
      <el-form ref="form" :model="addForm" label-width="80px">
        <el-form-item label="维度名称">
          <el-input v-model="addForm.dimensionName"></el-input>
        </el-form-item>
        <el-form-item label="维度说明">
          <el-input v-model="addForm.dimensionExplain"></el-input>
        </el-form-item>
        <el-form-item label="维度分值">
          <el-input v-model="addForm.dimensionScore"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirmAddNewDimension">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import { projectReviewDimensionSetting, addReviewDimension, deleteReviewDimension, getDimensionTableData, getDimensionTableDataById } from '@/api/personnalSettings'
export default {
  name: "reviewTableSettings",
  data() {
    return {
      rootFlag: true,
      dialogVisible: false,
      addForm: {
        dimensionName: '',
        dimensionExplain: '',
        dimensionScore: ''
      },
      addId: 1,
      dimensionData: [],
      defaultProps: {
        children: 'children',
        label: 'dimensionName'
      },
      tableData: [{
        id: 3,
        date: '维度1',
        name: '维度说明1',
        address: '10',
        children: [{
          id: 31,
          date: '维度1-1',
          name: '维度说明1-1',
          address: '8',
          children: [{
            id: 4,
            date: '维度1-1-1',
            name: '维度说明1-1',
            address: '2'
          },
            {
              id: 4,
              date: '维度1-1-2',
              name: '维度说明1-1-2',
              address: '6'
            }]
        }, {
          id: 32,
          date: '维度1-2',
          name: '维度说明1-1-2',
          address: '2'
        }]
      }]
    }
  },
  mounted() {
    this.getDimensionData()
    this.getTableData()
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
      console.log('测试当前选取id')
      console.log(data.id)
      this.addId = data.id
      this.rootFlag = false
      this.getTableDataById()
    },
    addNewDimension: function () {
      this.dialogVisible = true
    },
    getDimensionData: function () {
      projectReviewDimensionSetting().then(response => {
        console.log('测试获取评审维度接口')
        console.log(response.data)
        this.dimensionData = response.data.data.children
      })
    },
    confirmAddNewDimension: function () {
      const prams = {
        dimensionName: '',
        dimensionExplain: '',
        dimensionScore: '',
        parentDimensionId: ''
      }
      if(this.addForm.dimensionName === ''||this.addForm.dimensionExplain === ''||this.addForm.dimensionScore === ''){
        this.$message({
          message: '新增维度信息未填写完整，请检查后再试',
          type: 'warning'
        });
      }else {
        prams.dimensionName = this.addForm.dimensionName
        prams.dimensionExplain = this.addForm.dimensionExplain
        prams.dimensionScore = this.addForm.dimensionScore
        if(this.rootFlag){
          prams.parentDimensionId = 1
        }else {
          prams.parentDimensionId = this.addId
        }
        addReviewDimension(prams).then(response => {
          console.log('测试新增维度')
          console.log(response.data)
          this.$message({
            message: '新增成功',
            type: 'success'
          });
          this.addForm.dimensionScore = ''
          this.addForm.dimensionExplain = ''
          this.addForm.dimensionName = ''
          this.addId = 1
          this.rootFlag = true
          this.dialogVisible = false
          this.getDimensionData()
          this.getTableData()
        })
      }
    },
    deleteDimension: function () {
      if(this.rootFlag){
        this.$message({
          message: '未选中维度，无法删除',
          type: 'warning'
        });
      }else {
        this.$confirm('此操作将永久删除此维度, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const prams = {
            id: this.addId
          }
          deleteReviewDimension(prams).then(response=> {
            console.log('测试删除维度')
            console.log(response.data)
            this.$message({
              type: 'success',
              message: '成功删除'
            });
            this.rootFlag = true
            this.getDimensionData()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        })
      }
    },
    getTableData: function (){
      getDimensionTableData().then(response => {
        console.log('测试获取评审维度表内容')
        console.log(response.data)
        this.tableData = response.data.data.children
      })
    },
    getTableDataById: function () {
      const prams = {
        id: this.addId
      }
      getDimensionTableDataById(prams).then(response => {
        console.log('测试获取当前选择表内容接口')
        console.log(response.data)
        this.tableData = []
        this.tableData.push(response.data.data)
      })
    }
  }
}
</script>

<style scoped>
.main_container{
  display: flex;
  height: 100%;
}
.left_container{
  flex: 1;
  height: 580px;
  /*background-color: pink;*/
  text-align: center;
  padding-right: 10px;
}
.right_container{
  flex: 3;
  height: 580px;
  /*background-color: hotpink;*/
  background-color: white;
  padding-left: 10px;
}
.right_first_container {
  width: 100%;
  height: 80px;
  background-color: white;
  border-bottom-style: solid;
  border-bottom-color: #bcbcbc;
  border-bottom-width: 1px;
}
.left_content {
  width: 100%;
  /*height: 600px;*/
  height: 100%;
  padding-right: 10px;
  background-color: white;
}
.button_container {
  padding-top: 20px;
}
.tree_container {
  padding-top: 20px;
  padding-left: 40px;
}
.function_item {
  font-size: 14px;
  float: left;
  margin-left: 30px;
  margin-top: 20px;
}
.button-container {
  float: right;
  margin-top: 20px;
  margin-right: 20px;
}
.block {
  text-align: center;
  margin-top: 20px;
}
</style>
