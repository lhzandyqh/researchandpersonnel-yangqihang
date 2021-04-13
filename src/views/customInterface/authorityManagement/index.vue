<template>
    <div class="app-container">
      <el-row :gutter="20">
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择学院:</div>
          <div>
            <el-select v-model="findForm.college" placeholder="请选择学院">
              <el-option label="文学院" value="文学院"></el-option>
              <el-option label="理学院" value="理学院"></el-option>
              <el-option label="教育学院" value="教育学院"></el-option>
              <el-option label="医学院" value="医学院"></el-option>
              <el-option label="商学院" value="商学院"></el-option>
              <el-option label="管理学院" value="管理学院"></el-option>
              <el-option label="机械工程学院" value="机械工程学院"></el-option>
              <el-option label="计算机学院" value="计算机学院"></el-option>
              <el-option label="电气工程学院" value="电气工程学院"></el-option>
            </el-select>
          </div>
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">请选择部门:</div>
          <div>
            <el-select v-model="findForm.dept" placeholder="请选择部门">
              <el-option label="校党委" value="校党委"></el-option>
              <el-option label="教务处" value="教务处"></el-option>
              <el-option label="科研处" value="科研处"></el-option>
              <el-option label="电教设备处" value="电教设备处"></el-option>
              <el-option label="审计处" value="审计处"></el-option>
              <el-option label="档案中心" value="档案中心"></el-option>
            </el-select>
          </div>
          <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请输入教师姓名:</div>
          <div>
            <el-input v-model="findForm.fullName" placeholder="请输入姓名"/>
          </div>
          <div>
            <el-button type="primary" style="margin-left:15px" @click="getTeacherByCon">查询</el-button>
          </div>
        </div>
      </el-row>
      <el-divider/>
      <el-row>
          <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe
            style="width: 100%">
            <el-table-column
              prop="id"
              label="编号"
              width="100px"
            />
            <el-table-column
              prop="fullName"
              label="教师姓名"
              />
            <el-table-column
              prop="college"
              label="学院"
             />
            <el-table-column
              prop="department"
              label="部门"
              />
            <el-table-column
              prop="positionTitle"
              label="职称"
              />
            <el-table-column
              prop="workStatus"
              label="工作状态"
            />
            <el-table-column label="权限展示">
<!--                        <template slot-scope="scope">-->
<!--                          <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">-->
<!--                            <el-option label="教师" value="教师"/>-->
<!--                            <el-option label="系部主管" value="系部主管"/>-->
<!--                            <el-option label="科研主管" value="科研主管"/>-->
<!--                          </el-select>-->
<!--                        </template>-->
              <template slot-scope="scope">
                <el-tag style="margin-left: 5px" v-for="(item,i) in scope.row.tecRole" :key="i">{{ item }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column align="center" label="权限设置"  width="250px">
<!--                        <template slot-scope="scope">-->
<!--                          <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">-->
<!--                            <el-option label="教师" value="教师"/>-->
<!--                            <el-option label="系部主管" value="系部主管"/>-->
<!--                            <el-option label="科研主管" value="科研主管"/>-->
<!--                          </el-select>-->
<!--                        </template>-->
              <template slot-scope="scope">
                <el-select v-model="scope.row.perArray" multiple placeholder="请选择权限" style="width: 120px">
                  <el-option label="教师" value="教师"/>
                  <el-option label="专家评审" value="专家"/>
<!--                  <el-option label="系部主管" value="系部主管"/>-->
                  <el-option label="科研处主管" value="科研主管"/>
                </el-select>
                <el-button type="primary" style="margin-top: 10px" @click="confirmEdit(scope.row)">确认修改</el-button>
              </template>
            </el-table-column>
          </el-table>
        <div class="fenye">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[5, 10, 15]"
            :page-size="pagesize"
            style="margin-top:20px;"
            :total= "tableData.length"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-row>
    </div>
</template>

<script>
import { getAllTeacherPermissions, getOneTeacherByCondition, setTeacherPermission } from '@/api/permissionManagement'
    export default {
        name: "index",
      filters: {
        statusFilter(status) {
          const statusMap = {
            published: 'success',
            draft: 'info',
            deleted: 'danger'
          }
          return statusMap[status]
        }
      },
      data() {
        return {
          editId: '',
          perArray: [],
          tableData: [],
          pagesize: 5,
          currentPage: 1,
          value1: '',
          input: '',
          value: '',
          dialogPvVisible: false,
          thisId: '',
          findForm: {
            fullName:'',
            college:'',
            dept:''
          }
        }
      },
      created() {
      },
      mounted() {
          this.getAllData()
      },
      methods: {
        getAllData: function () {
            getAllTeacherPermissions().then(response => {
              console.log('测试获取所有教师的权限数据')
              console.log(response)
              this.tableData = response.data.data
            })
          },
        getTeacherByCon: function () {
          const prams = {
            fullName: '',
            college:'',
            dept: ''
          }
          prams.fullName = this.findForm.fullName
          prams.college = this.findForm.college
          prams.dept = this.findForm.dept
          if(prams.fullName === ''&&prams.dept === ''&&prams.college === '') {
            this.$message({
              message: '未输入搜索条件',
              type: 'warning'
            })
          }else {
            getOneTeacherByCondition(prams).then(response => {
              console.log('测试根据条件搜索教师')
              console.log(response.data)
              if(response.data.data.length === 0) {
                this.$message({
                  message: '暂未查询到对应数据',
                  type: 'warning'
                });
              }else {
                this.$message({
                  message: '查询成功',
                  type: 'success'
                });
                this.tableData = response.data.data
              }
            })
          }
        },
        confirmEdit: function (row) {
          this.editId = row.id
          let perString = ''
          for(let i = 0;i<row.perArray.length;i++){
            perString = row.perArray[i]+','+perString
          }
          console.log('测试修改权限参数')
          console.log(perString)
          console.log(this.editId)
          const prams = {
            id: this.editId,
            roleList: perString
          }
          setTeacherPermission(prams).then(response => {
            console.log('测试修改权限接口')
            console.log(response.data)
            this.getAllData()
            this.$message({
              message: '修改成功',
              type: 'success'
            });
          })
        },
        cancelEdit(row) {
          row.title = row.originalTitle
          row.edit = false
          this.$message({
            message: 'The title has been restored to the original value',
            type: 'warning'
          })
        },
        query(){
          if(this.value!==''){
            this.$message({
              message: '查询成功',
              type: 'success'
            });
          } else {
            this.$message({
              message: '请添加选项查询',
              type: 'warning'
            });
          }
        },
        change(){
            this.$message({
              message: '修改成功',
              type: 'success'
            });
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`)
          this.pagesize = val
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`)
          this.currentPage = val
        }
      }
    }
</script>

<style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 10px;
  }
  .fenye {
    text-align: center;
  }
</style>
