<template>
    <div class="app-container">
      <el-row :gutter="20">
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder">请选择评审历史类别:</div>
          <div>
            <el-select v-model="type_select_value" placeholder="请选择审核历史类别">
              <el-option label="个人信息评审" value="people"/>
              <el-option label="学术成果评审" value="scientific"/>
              <el-option label="项目课题审批" value="project"/>
            </el-select>
          </div>
        </div>
      </el-row>
      <el-divider/>
      <el-row v-if="type_select_value === 'people'">
        <people-history/>
      </el-row>
      <el-row v-if="type_select_value === 'scientific'">
        <scientific-history/>
      </el-row>
      <el-row v-if="type_select_value === 'project'">
        <project-history/>
      </el-row>
    </div>
</template>

<script>
import peopleHistory from './Approval/peopleHistory'
import scientificHistory from './Approval/scientificHistory'
import projectHistory from './Approval/projectHistory'
    export default {
        name: "researchHistory",
      components:{peopleHistory,scientificHistory,projectHistory},
      data(){
          return{
            type_select_value: 'people',
            value: ''
          }
      }
    }
</script>

<style scoped>

</style>
