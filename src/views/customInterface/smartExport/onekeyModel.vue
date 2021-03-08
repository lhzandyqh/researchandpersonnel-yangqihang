<template>
  <div class="app-container">
    <div>
      <el-button @click="name = true">项目名称</el-button>
      <el-button @click="minzu = true">项目负责人</el-button>
      <el-button @click="process = true">项目进度</el-button>
      <el-button @click="begin = true">项目开题评议结果</el-button>
      <el-button @click="middle = true">项目中期答辩情况</el-button>
      <el-button @click="end = true">项目结题报告</el-button>
      <table border="0" class="tb">
        <tr v-if="name">
          <td>项目名称：</td>
          <td></td>
        </tr>
        <tr v-if="minzu">
          <td>项目负责人：</td>
          <td></td>
        </tr>
        <tr v-if="process">
          <td>项目进度：</td>
          <td></td>
        </tr>
        <tr v-if="begin">
          <td>项目开题评议结果：</td>
          <td></td>
        </tr>
        <tr v-if="middle">
          <td>项目中期答辩情况：</td>
          <td></td>
        </tr>
        <tr v-if="end">
          <td>项目结题报告：</td>
          <td></td>
        </tr>
      </table>
      <el-button type="primary" @click="open">点击生成模板</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnekeyModel',
  data() {
    return {
      name: false,
      minzu: false,
      process: false,
      begin:false,
      middle:false,
      end:false

    }
  },
  methods: {
    open() {
      this.$message('模板生成成功');
    },
  }
}
</script>

<style scoped>
  .tb td {
    height: 50px;
    width: 400px;
  }
</style>
