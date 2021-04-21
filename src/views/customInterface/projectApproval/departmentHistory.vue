<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin-right: 15px;font-weight: bolder">请选择审核历史类别:</div>
        <div>
          <el-select v-model="value" placeholder="请选择审核历史类别" @change="changeData">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <department-history-table></department-history-table>
  </div>
</template>

<script>
  import departmentHistoryTable from '@/views/customInterface/projectApproval/departmentTable/departmentHistoryTable'
    export default {
        name: "departmentHistory",
      components:{
        departmentHistoryTable
      },
      data(){
          return{
            value:'科研项目',
            options: [
              {
                value: '科研项目',
                label: '科研项目'
              }]
          }
      }
    }
</script>

<style scoped>

</style>
