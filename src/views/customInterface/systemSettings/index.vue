<template>
  <div class="app-container">
    <div class="table_head">
      <el-button type="primary" @click="projectTablePreview">教师项目申报表预览<i class="el-icon-tickets el-icon--right"></i></el-button>
    </div>
    <el-divider></el-divider>
    <div class="basic_info_container">
      <el-card class="box-card">
        <div class="basic_title">
          <span>基本信息填写配置</span>
        </div>
        <div class="basic_table_container">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="填写内容名称"
              width="300"
            >
              <template slot-scope="scope">{{ scope.row.content_name }}</template>
            </el-table-column>
            <el-table-column
              label="填写内容类型"
              width="300"
            >
              <template slot-scope="scope">{{ scope.row.content_type }}</template>
            </el-table-column>
            <el-table-column
              label="填写内容可选项"
            >
              <template slot-scope="scope">
                <el-tag type="success" v-for="(item, key) in scope.row.content_options" :key="key">{{item}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              width="100"
            >
              <template slot-scope="scope">
                <el-button type="text" size="medium" @click="beginEdit(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button type="danger" icon="el-icon-delete" @click="deletTableItem">删除</el-button>
            <el-button type="success" @click="addDialogShow('基本信息')">新增填写内容</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div class="project_info_container magin_control">
      <el-card class="box-card">
        <div class="basic_title">
          <span>项目信息填写配置</span>
        </div>
        <div class="basic_table_container">
          <el-table
            ref="multipleTable"
            :data="tableDataTwo"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="填写内容名称"
              width="300"
            >
              <template slot-scope="scope">{{ scope.row.content_name }}</template>
            </el-table-column>
            <el-table-column
              label="填写内容类型"
              width="300"
            >
              <template slot-scope="scope">{{ scope.row.content_type }}</template>
            </el-table-column>
            <el-table-column
              label="填写内容可选项"
            >
              <template slot-scope="scope">
                <el-tag type="success" v-for="(item, key) in scope.row.content_options" :key="key">{{item}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              width="100"
            >
              <template slot-scope="scope">
                <el-button type="text" size="medium" @click="beginEdit(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button type="danger" icon="el-icon-delete" @click="deletTableItem">删除</el-button>
            <el-button type="success" @click="addDialogShow('项目信息')">新增填写内容</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div class="budget_info_container magin_control">
      <el-card class="box-card">
        <div class="basic_title">
          <span>预算信息填写配置</span>
        </div>
        <div class="basic_table_container">
          <el-table
            ref="multipleTable"
            :data="tableDataThree"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="填写内容名称"
              width="300"
            >
              <template slot-scope="scope">{{ scope.row.content_name }}</template>
            </el-table-column>
            <el-table-column
              label="填写内容类型"
              width="300"
            >
              <template slot-scope="scope">{{ scope.row.content_type }}</template>
            </el-table-column>
            <el-table-column
              label="填写内容可选项"
            >
              <template slot-scope="scope">
                <el-tag type="success" v-for="(item, key) in scope.row.content_options" :key="key">{{item}}</el-tag>
              </template>
            </el-table-column>
<!--            <el-table-column-->
<!--              prop="name"-->
<!--              label="填写内容可选项">-->
<!--            </el-table-column>-->
            <el-table-column
              label="操作"
              align="center"
              width="100"
            >
              <template slot-scope="scope">
                <el-button type="text" size="medium" @click="beginEdit(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button type="danger" icon="el-icon-delete" @click="deletTableItem">删除</el-button>
            <el-button type="success" @click="addDialogShow('预算信息')">新增填写内容</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <el-dialog
      title="新增填写内容"
      :visible.sync="dialogVisible"
      width="35%"
      :before-close="handleCloseTwo">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="内容名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="填写类型">
          <el-select v-model="form.type" placeholder="请选择填写类型" @change="getSelect">
            <el-option label="短文本" value="短文本"></el-option>
            <el-option label="长文本" value="长文本"></el-option>
            <el-option label="选取日期" value="选取日期"></el-option>
            <el-option label="选择器" value="选择器"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选取项" v-if="selectFlag">
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增选取项</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addNewTableItem">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="教师项目申报表预览"
      :visible.sync="dialogVisibleTwo"
      width="80%"
      :before-close="handleCloseThree">
      <div class="preview_container">
        <el-card class="box-card" style="padding-bottom: 20px">
          <preview-table ref="child"></preview-table>
        </el-card>
      </div>
      <span slot="footer" class="dialog-footer">
  </span>
    </el-dialog>
    <el-dialog
      title="编辑填写内容"
      :visible.sync="dialogVisibleThree"
      width="35%"
      :before-close="handleCloseFour">
      <el-form ref="form" :model="editForm" label-width="80px">
        <el-form-item label="内容名称">
          <el-input v-model="editForm.content_name"></el-input>
        </el-form-item>
        <el-form-item label="填写类型">
          <el-select v-model="editForm.content_type" placeholder="请选择填写类型" @change="getSelectTwo">
            <el-option label="短文本" value="短文本"></el-option>
            <el-option label="长文本" value="长文本"></el-option>
            <el-option label="选取日期" value="选取日期"></el-option>
            <el-option label="选择器" value="选择器"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选取项" v-if="selectFlagTwo">
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增选取项</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibleThree = false">取 消</el-button>
    <el-button type="primary" @click="confirmEdit">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import { projectTableGetData, addProjectTableData, deleteProjectTableData, editProjectTableData } from '@/api/personnalSettings'
import previewTable from "./component/previewTable";
export default {
  name: "index",
  components: {
    previewTable
  },
  data() {
    return {
      editId: '',
      addType: '',
      dialogVisibleTwo: false,
      dialogVisibleThree: false,
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      selectFlag: false,
      selectFlagTwo: false,
      dialogVisible: false,
      tableData: [
        {
        name: '申请人职称',
        type: '短文本',
        typeValue: '无'
        },
        {
          name: '申请人所在学院',
          type: '短文本',
          typeValue: '无'
        },
        {
          name: '申请人所在实验室',
          type: '短文本',
          typeValue: '无'
        }
      ],
      tableDataTwo: [
        {
          name: '申请人职称',
          type: '短文本',
          typeValue: '无'
        },
        {
          name: '申请人所在学院',
          type: '短文本',
          typeValue: '无'
        },
        {
          name: '申请人所在实验室',
          type: '短文本',
          typeValue: '无'
        }
      ],
      tableDataThree: [
        {
          name: '申请人职称',
          type: '短文本',
          typeValue: '无'
        },
        {
          name: '申请人所在学院',
          type: '短文本',
          typeValue: '无'
        },
        {
          name: '申请人所在实验室',
          type: '短文本',
          typeValue: '无'
        }
      ],
      multipleSelection: [],
      multipleSelection2: [],
      multipleSelection3: [],
      form: {
        name: '',
        type: ''
      },
      editForm: {

      }
    }
  },
  mounted() {
    this.getProjectTableData()
  },
  methods: {
    toggleSelection(type) {
      // if (rows) {
      //   rows.forEach(row => {
      //     this.$refs.multipleTable.toggleRowSelection(row);
      //   });
      // } else {
      //   this.$refs.multipleTable.clearSelection();
      // }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleCloseTwo(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleCloseFour(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleCloseThree(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    addDialogShow: function (type) {
      console.log('现在打开的类型是'+type)
      this.addType = type
      this.dialogVisible = true
    },
    getSelect: function () {
      if(this.form.type === '选择器'){
        this.selectFlag = true
      }else {
        this.selectFlag = false
        console.log('不是选择器选项')
        this.dynamicTags = []
      }
    },
    getSelectTwo: function () {
      if(this.editForm.type === '选择器'){
        this.selectFlagTwo = true
      }else {
        this.selectFlagTwo = false
        console.log('不是选择器选项')
      }
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    projectTablePreview: function (){
      this.dialogVisibleTwo = true
    },
    beginEdit: function (row){
      this.editId = row.id
      this.editForm = row
      if (this.editForm.content_type === '选择器'){
        this.selectFlagTwo = true
      }else {
        this.selectFlagTwo = false
      }
      this.dynamicTags = this.editForm.content_options
      this.dialogVisibleThree = true
      console.log('测试row')
      console.log(row)
    },

    // 与后台交互的方法
    getProjectTableData: function (){
      projectTableGetData().then(response => {
        console.log('项目立项表获取填写项内容')
        console.log(response.data)
        this.tableData = response.data.data.basicInfo
        this.tableDataTwo = response.data.data.projectInfo
        this.tableDataThree = response.data.data.budgetInfo
      })
    },
    addNewTableItem: function (){
      const prams = {
        contentName: '',
        contentOption: '',
        contentType: '',
        type: ''
      }
      prams.contentName = this.form.name
      prams.contentType = this.form.type
      prams.type = this.addType
      if(prams.contentType === '选择器'){
        // var optionStr = '1;2;3;4;'
        var optionStr = ''
        for(let i = 0;i<this.dynamicTags.length;i++){
          optionStr = optionStr + this.dynamicTags[i] + ';'
        }
        console.log('测试optionStr')
        prams.contentOption = optionStr
      }
      console.log('测试传给接口的参数参数')
      console.log(prams)
      addProjectTableData(prams).then(response => {
        console.log('测试项目立项表新增项接口')
        console.log(response.data)
        this.getProjectTableData()
        this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.form.name = ''
        this.form.type = ''
        this.dynamicTags = []
        this.dialogVisible = false
        this.$refs.child.previewGetTableData()
      })
    },
    deletTableItem: function (){
      var deleteStr = ''
      for(let i = 0;i<this.multipleSelection.length;i++){
        deleteStr = deleteStr + this.multipleSelection[i].id + ';'
      }
      console.log('deleteStr')
      console.log(deleteStr)
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const prams = {
          idStr: deleteStr
        }
        deleteProjectTableData(prams).then(response => {
          console.log('测试删除')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '删除成功'
          });
          this.getProjectTableData()
          this.$refs.child.previewGetTableData()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
    confirmEdit: function () {
      const prams = {
        id: '',
        content_name: '',
        content_type: '',
        content_option: '',
        type: ''
      }
      prams.id = this.editForm.id
      prams.type = this.editForm.type
      prams.content_name = this.content_name
      prams.content_type = this.editForm.content_type
      if(prams.content_type!== '选择器'){
        prams.content_option = ''
        this.dynamicTags = []
      }else {
        var optionStr = ''
        for(let i = 0;i<this.dynamicTags.length;i++){
          optionStr = optionStr + this.dynamicTags[i] + ';'
        }
        prams.content_option = optionStr
      }
      console.log('测试prams')
      editProjectTableData(prams).then(reponse=>{
        console.log('测试编辑接口')
        console.log(reponse.data)
        this.getProjectTableData()
        this.dynamicTags = []
        this.$message({
          message: '编辑成功',
          type: 'success'
        });
        this.dialogVisibleThree = false
      })
    }
  }
}
</script>

<style scoped>
.table_head {
  text-align: right;
}
.box-card {
  width: 100%;
  /*height: 500px;*/
  /*background-color: yellow;*/
}
.basic_title span {
  font-weight: bold;
  color: #575a5e;
}
.basic_table_container {
  margin-top: 10px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.magin_control{
  margin-top: 20px;
}
.button_container {
  margin-top: 20px;
}
</style>
