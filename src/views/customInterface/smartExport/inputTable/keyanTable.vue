<template>
  <div class="app-container">
    <el-row>
      <el-col :span="1">
        <img style="width: 20px;height: 20px" src="../../../../assets/piliang.png">
      </el-col>
      <el-col :span="2">
        <span style="font-size: 13px;margin-left: -20px;font-weight: bolder;color: deepskyblue;cursor: pointer" @click="piliangControl">批量操作</span>
      </el-col>
      <el-col :span="21">
        <div v-if="piliangFlag" style="float: right">
          <span style="font-size: 13px;margin-left: -20px;font-weight: bolder;color: deepskyblue;cursor: pointer" @click="leavePiliangControl">退出批量操作</span>
        </div>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        v-if="piliangFlag"
        type="selection"
        width="55"/>
<!--      <el-table-column-->
<!--        label="编号">-->
<!--        <template slot-scope="scope">{{ scope.row.id }}</template>-->
<!--      </el-table-column>-->
      <el-table-column
        prop="id_num"
        label="项目编号"
      width="100px"/>
      <el-table-column
        prop="tDept"
        label="项目名称"
        width="280px"/>
      <el-table-column
        prop="projectClass"
        label="项目级别"
      />
      <el-table-column
        prop="username"
        label="项目带头人"/>
      <el-table-column
        prop="department"
        label="主管部门"/>
      <el-table-column
        prop="positionSalary"
        label="项目资金"/>
      <el-table-column
        prop="bdate"
        label="开题日期"
      />
      <el-table-column
        prop="mdate"
        label="中期日期"
        />
      <el-table-column
        prop="fdate"
        label="结题日期"
        width="100px"/>
    </el-table>
    <div v-if=" piliangFlag" style="margin-top: 20px">
      <el-button @click="beginPiliang">工资设置</el-button>
    </div>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="tableData.length"
        style="margin-top:20px;"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog
      :visible.sync="salaryFlag"
      :before-close="handleClose"
      title="员工工资批量设置"
      width="50%">
      <span style="font-weight: bolder">已选教师</span>
      <el-divider/>
      <div class="teacher_container clearfix">
        <div v-for="(item, i) in teacherNameArray" :key="i" class="teacher_item clearfix">
          <el-tag
            :disable-transitions="false"
            closable
            @close="handleDelete(item.name)">
            {{ item.name }}
          </el-tag>
        </div>
      </div>
      <el-divider/>
      <div>
        <div style="display: inline-block">
          <el-select v-model="typeValue" placeholder="请选择类别">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </div>
        <div style="display: inline-block">
          <el-input v-if="typeValue == '岗位工资'" v-model="salaryform.salary" placeholder="请输入岗位工资" style="width: 200px"/>
          <el-input v-if="typeValue == '薪级工资'" v-model="salaryform.salary" placeholder="请输入薪级工资" style="width: 200px"/>
        </div>
      </div>
      <!--      <el-form ref="form" :model="salaryform" label-width="80px">-->
      <!--        <el-form-item label="岗位工资">-->
      <!--          <el-input v-model="salaryform.jiben" placeholder="请输入基本工资" style="width: 200px"/>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="薪级工资">-->
      <!--          <el-input v-model="salaryform.xinji" placeholder="请输入薪级工资" style="width: 200px"/>-->
      <!--        </el-form-item>-->
      <!--      </el-form>-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="salaryFlag = false">取 消</el-button>
        <el-button type="primary" @click="beginSetSalary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'kayanTable',
    data() {
      return {
        salaryFlag: false,
        piliangFlag: false,
        multipleSelection: [],
        tableData: [
          {
            id_num:'IM567382',
            tDept:'大数据与智慧校园建设',
            projectClass:'国家级',
            username:'王立民',
            department:'计算机学院',
            positionSalary:'400000',
            bdate:'2019-2-3',
            mdate:'2019-8-9',
            fdate:'2020-8-9',
          },
          {
            id_num:'IM564382',
            tDept:'先进计算与内生安全技术',
            projectClass:'国家级',
            username:'刘老师',
            department:'软件学院',
            positionSalary:'1000000',
            bdate:'2018-2-3',
            mdate:'2019-8-9',
            fdate:'2020-5-9',
          },
          {
            id_num:'IM598542',
            tDept:'新时代背景下智慧检务建设路径选择',
            projectClass:'国家级',
            username:'王方林',
            department:'计算机学院',
            positionSalary:'800000',
            bdate:'2019-8-3',
            mdate:'2019-12-9',
            fdate:'2020-9-9',
          },
          {
            id_num:'IM508u36',
            tDept:'基于关系图谱的人岗关系研究',
            projectClass:'省部级',
            username:'郭梦洁',
            department:'计算机学院',
            positionSalary:'800000',
            bdate:'2020-2-3',
            mdate:'2020-6-9',
            fdate:'2020-8-9',
          },
          {
            id_num:'IM567382',
            tDept:'智慧公共文化服务研究',
            projectClass:'国家级',
            username:'李民',
            department:'社科学院',
            positionSalary:'70000',
            bdate:'2019-2-3',
            mdate:'2019-8-9',
            fdate:'2020-8-9',
          },
          {
            id_num:'IM567382',
            tDept:'移动社交网络情境化推荐',
            projectClass:'省级',
            username:'王立民',
            department:'计算机学院',
            positionSalary:'400000',
            bdate:'2019-2-3',
            mdate:'2019-8-9',
            fdate:'2020-8-9',
          },
          {
            id_num:'IM567382',
            tDept:'公共图书馆数据素养教育体系探析',
            projectClass:'国家级',
            username:'王立民',
            department:'计算机学院',
            positionSalary:'400000',
            bdate:'2019-2-3',
            mdate:'2019-8-9',
            fdate:'2020-8-9',
          },
          {
            id_num:'IM567382',
            tDept:'面向新基建的电力电源方案',
            projectClass:'国家级',
            username:'王伟',
            department:'电力学院',
            positionSalary:'400000',
            bdate:'2019-2-3',
            mdate:'2019-8-9',
            fdate:'2020-8-9',
          }, {
            id_num:'IM567382',
            tDept:'BIM技术在轨道交通工程中的应用',
            projectClass:'国家级',
            username:'李民',
            department:'建筑学院',
            positionSalary:'400000',
            bdate:'2019-2-3',
            mdate:'2019-8-9',
            fdate:'2020-8-9',
          }, {
            id_num:'IM567382',
            tDept:'光伏发电远程传输质量实时监测研究',
            projectClass:'省级',
            username:'张强',
            department:'电力学院',
            positionSalary:'400000',
            bdate:'2019-2-3',
            mdate:'2019-8-9',
            fdate:'2020-8-9',
          },
        ],
        pagesize: 10,
        currentPage: 1,
        teacherNameArray: [],
        salaryform: {
          salary: ''
        },
        typeValue: '岗位工资',
        options: [
          {
            value: '岗位工资',
            label: '岗位工资'
          },
          {
            value: '薪级工资',
            label: '薪级工资'
          }
        ]
      }
    },
    // mounted() {
    //   this.getSalaryData()
    // },
    methods: {
      // getSalaryData: function() {
      //   batchImportSalaryData(this.token).then(response => {
      //     console.log('获取工资数据')
      //     console.log(response.data)
      //     this.tableData = response.data.tecNameAndIdcard
      //   })
      // },
      // piliangControl: function() {
      //   this.piliangFlag = true
      // },
      // leavePiliangControl: function() {
      //   this.piliangFlag = false
      // },
      // beginPiliang: function() {
      //   if (this.multipleSelection.length === 0) {
      //     this.$message({
      //       message: '未选择任何条目 无法操作',
      //       type: 'warning'
      //     })
      //   } else {
      //     this.salaryFlag = true
      //     this.teacherNameArray = []
      //     for (let i = 0; i < this.multipleSelection.length; i++) {
      //       // this.teacherNameArray.push(this.multipleSelection[i].username)
      //       const obj = {
      //         name: this.multipleSelection[i].username,
      //         idnum: this.multipleSelection[i].id_num
      //       }
      //       this.teacherNameArray.push(obj)
      //     }
      //     console.log('检查选中的老师名字')
      //     console.log(this.teacherNameArray)
      //   }
      // },
      // handleClose(done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done()
      //     })
      //     .catch(_ => {})
      // },
      // toggleSelection(rows) {
      //   if (rows) {
      //     rows.forEach(row => {
      //       this.$refs.multipleTable.toggleRowSelection(row)
      //     })
      //   } else {
      //     this.$refs.multipleTable.clearSelection()
      //   }
      // },
      // handleSelectionChange(val) {
      //   this.multipleSelection = val
      //   console.log('检查批量数据')
      //   console.log(this.multipleSelection)
      // },
      // handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`)
      //   this.pagesize = val
      // },
      // handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`)
      //   this.currentPage = val
      // },
      // handleDelete: function(item) {
      //   this.teacherNameArray.splice(this.teacherNameArray.indexOf(item), 1)
      //   console.log('测试删除某个老师后的数据')
      //   console.log(this.teacherNameArray)
      // },
      // beginSetSalary: function() {
      //   if (this.salaryform.salary === '') {
      //     this.$message({
      //       message: '未输入 请重试',
      //       type: 'warning'
      //     })
      //   } else {
      //     this.salaryFlag = false
      //     var people = ''
      //     for (let i = 0; i < this.teacherNameArray.length; i++) {
      //       const single = this.teacherNameArray[i].name + ',' + this.teacherNameArray[i].idnum + ';'
      //       people = people + single
      //     }
      //     console.log('测试组合输出的字符串')
      //     console.log(people)
      //     const prams = {
      //       tecinfo: people,
      //       salaryType: this.typeValue,
      //       salary: this.salaryform.salary
      //     }
      //     batchSetSalary({ ...prams, token: this.token }).then(response => {
      //       console.log('测试批量修改工资')
      //       console.log(response.data)
      //       this.$message({
      //         message: '修改成功',
      //         type: 'success'
      //       })
      //       this.getSalaryData()
      //     })
      //   }
      // }
    }
  }
</script>

<style scoped>
  .fenye {
    text-align: center;
  }
  .teacher_container{
    margin-bottom: 20px;
  }
  .teacher_item {
    float: left;
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
  }
  .clearfix:after,.clearfix:before{
    content: "";
    display: table;
  }
  .clearfix:after{
    clear: both;
  }
  .clearfix{
    *zoom: 1;
  }

</style>

