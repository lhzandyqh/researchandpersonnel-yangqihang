<template>
  <div class="app-container">
  <el-row>
    <el-col :span="1">
      <img style="width: 20px;height: 20px" src="../../../../assets/piliang.png">
    </el-col>
    <el-col :span="2">
      <span style="font-size: 13px;margin-left: -20px;font-weight: bolder;color: deepskyblue;cursor: pointer" >批量操作</span>
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
    @selection-change="handleSelectionChange"
   >
    <el-table-column
      v-if="piliangFlag"
      type="selection"
      width="55"/>
    <el-table-column
      prop="id_num"
      label="论文编号"
      width="100px"/>
    <el-table-column
      prop="tDept"
      label="论文名称"
      width="280px"/>
    <el-table-column
      prop="projectClass"
      label="论文级别"
    />
    <el-table-column
      prop="username"
      label="论文作者"/>
    <el-table-column
      prop="department"
      label="所属部门"/>
    <el-table-column
      prop="positionSalary"
      label="发表刊物"/>
    <el-table-column
      prop="bdate"
      label="出版社"
    />
    <el-table-column
      prop="mdate"
      label="发表日期"
    />
  </el-table>
  <div style="text-align: center;">
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
  </div>
</template>

<script>
  export default {
    name: 'paperTable',
    data(){
      return{
        salaryFlag: false,
        piliangFlag: false,
        multipleSelection: [],
        pagesize: 10,
        currentPage: 1,
        teacherNameArray: [],
        tableData: [
          {
            id_num:'1',
            tDept:'智能安全视角下汽车电子技术的发展',
            projectClass:'中文核心论文',
            username:'王宁',
            department:'电子技术学院',
            positionSalary:'电子设计工程',
            bdate:'北京出版社',
            mdate:'2019-8-9',
            fdate:'2020-8-9',
          },
          {
            id_num:'2',
            tDept:'基于神经网络PID的丘陵山地拖拉机',
            projectClass:'三大检索论文',
            username:'刘老师',
            department:'软件学院',
            positionSalary:'软件学报',
            bdate:'清华出版社',
            mdate:'2019-8-9',
            fdate:'2020-5-9',
          },
          {
            id_num:'3',
            tDept:'深度神经网络图像语义分割方法综述',
            projectClass:'中文核心论文',
            username:'王套',
            department:'计算机学院',
            positionSalary:'计算机学报',
            bdate:'国家出版社',
            mdate:'2019-12-9',
            fdate:'2020-9-9',
          },
          {
            id_num:'4',
            tDept:'基于机器视觉的轮齿缺陷检测研究',
            projectClass:'非中文核心论文',
            username:'郭梦洁',
            department:'计算机学院',
            positionSalary:'软件学报',
            bdate:'人民教育出版社',
            mdate:'2020-6-9',
            fdate:'2020-8-9',
          },
          {
            id_num:'5',
            tDept:'浅析互联网经济背景下企业财务管理创新',
            projectClass:'三大检索论文',
            username:'李民',
            department:'社科学院',
            positionSalary:'经济管理与研究',
            bdate:'中国人民出版社',
            mdate:'2019-8-9',
            fdate:'2020-8-9',
          },
          {
            id_num:'6',
            tDept:'工程质量检测管理信息化建设',
            projectClass:'专著',
            username:'王立民',
            department:'管理学院',
            positionSalary:'管理工程',
            bdate:'经济出版社',
            mdate:'2019-8-9',
            fdate:'2020-8-9',
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>
