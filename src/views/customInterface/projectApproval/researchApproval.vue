<template>
  <div class="app-container">
    <div class="select">
      <el-row :gutter="5">
        <el-col :span="3">
          <div class="shenpiselect">
            <span style="font-size: 16px;font-weight: bolder">选择评审类型：</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="select">
            <el-select v-model="type_select_value" placeholder="请选择您的审批项目类型类型" >
              <el-option label="个人信息评审" value="people"/>
              <el-option label="学术成果评审" value="scientific"/>
              <el-option label="项目课题评审" value="project"/>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider/>
    <el-row v-if="type_select_value === 'people'">
      <people-approval/>
    </el-row>
    <el-row v-if="type_select_value === 'scientific'">
      <scientific-approval/>
    </el-row>
    <el-row v-if="type_select_value === 'project'">
      <project-approval/>
    </el-row>
  </div>
</template>

<script>
import peopleApproval from './Approval/peopleApproval'
import projectApproval from './Approval/projectApproval'
import scientificApproval from './Approval/scientificApproval'
  export default {
        name: "researchDepartment",
        components:{ scientificApproval, peopleApproval,projectApproval},
      data(){
          return{
            type_select_value: 'people',
            value: ''
          }
      }
  }
</script>

<style scoped>
.shenpiselect{
  margin-top: 10px;
}
</style>
