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
              }, {
                value: '中文核心论文登记',
                label: '中文核心论文登记'
              }, {
                value: '三大检索论文登记',
                label: '三大检索论文登记'
              }, {
                value: '非核心论文登记',
                label: '非核心论文登记'
              }, {
                value: '专著登记',
                label: '专著登记'
              }, {
                value: '专利申报',
                label: '专利申报'
              }],
          }
      }
    }
</script>

<style scoped>

</style>
