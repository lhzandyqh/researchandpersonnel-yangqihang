<template>
  <div class="app-container">
<!--    <div style="margin-bottom: 20px;">-->
<!--      &lt;!&ndash;      <el-button type="primary" >自动审核</el-button>&ndash;&gt;-->
<!--      <div class="select">-->
<!--        <el-row :gutter="5">-->
<!--          <el-col :span="3">-->
<!--            <div class="title">-->
<!--              <span style="font-size: 14px;font-weight: bolder">选择项目类型</span>-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <div class="select">-->
<!--              <el-select v-model="type_select_value" placeholder="请选择您审核类型" @change="changeZiZhi">-->
<!--                <el-option label="科研项目" value="keyan"/>-->
<!--                <el-option label="中文核心论文登记" value="zhongwen"/>-->
<!--                <el-option label="三大检索论文登记" value="shanda"/>-->
<!--                <el-option label="非核心论文登记" value="feihexing"/>-->
<!--                <el-option label="专著登记" value="zhuanzhu"/>-->
<!--                <el-option label="专利申报" value="zhaunli"/>-->
<!--              </el-select>-->
<!--            </div>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
<!--    </div>-->
<!--    <el-divider/>-->
<!--    <div>-->
<!--      <span style="font-size: 14px;font-weight: bold">等待审核</span>-->
<!--    </div>-->
    <department-project-table></department-project-table>
  </div>
</template>

<script>
  import departmentProjectTable from '@/views/customInterface/projectApproval/departmentTable/departmentProjectTable'
export default {
  name: "departmentApproval",
  components: {
    departmentProjectTable
  },
  data(){
    return{
      type_select_value: ''
    }
  },
  methods: {
    changeZiZhi: function () {

    }
  }
}
</script>

<style scoped>

</style>
