<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-row gutter="20" style="margin-top: 1vh">
        <span style="font-size: 1rem;font-weight: bolder;margin-left: 1vw;margin-right: 15px">请选择查询类型:</span>
        <el-select v-model="projectclass" placeholder="选择查询类型" style="width: 18vw">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <span style="font-size: 1rem;font-weight: bolder;margin-left: 3vw;margin-right: 15px">请输入关键词(选填):</span>
        <el-input v-model="input" placeholder="项目名称/项目类型/负责人/学院" style="width: 18vw"></el-input>
        <el-button type="primary" round plain style="margin-left: 3vw" icon="el-icon-search" @click="searchmsg">点击查询
        </el-button>
      </el-row>
      <!--        <el-row  ">-->
      <div style="margin-top: 3vh;overflow: hidden;width: 100%">
        <span style="font-size: 1rem;font-weight: bolder;float:left;margin-left: 3vh">设置筛选条件:</span>
        <el-row>
          <el-col :span="6">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">学院：</span>
            <el-select v-model="college" placeholder="选择学院" style="width: 12vw">
              <el-option
                v-for="item in collegeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
          <el-col :span="6">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">部门：</span>
            <el-select v-model="department" placeholder="选择部门" style="width: 12vw">
              <el-option
                v-for="item in departmentList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
          <el-col :span="8">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">项目级别：</span>
            <el-select v-model="projectsub" placeholder="选择项目级别" style="width: 12vw">
              <el-option
                v-for="item in classList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
        </el-row>
        <el-row style="margin: 10px 120px 0 ">
          <el-col :span="10">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">项目人数：</span>
            <el-select v-model="projectpeople" placeholder="选择项目人数" style="width: 12vw">
              <el-option
                v-for="item in numList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
          <el-col :span="10">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">项目资金：</span>
            <el-select v-model="projectmoney" placeholder="选择项目资金" style="width: 12vw">
              <el-option
                v-for="item in moneyList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
        </el-row>
        <el-row style="margin: 10px 120px 0 ">
          <el-col :span="10">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">项目进度：</span>
            <el-select v-model="projectprogress" placeholder="选择项目进度" style="width: 12vw">
              <el-option
                v-for="item in progressList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
          <el-col :span="10">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">批准年度：</span>
            <el-date-picker
              v-model="projectdate"
              type="year"
              style="width: 12vw"
              placeholder="批准年度">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row style="margin: 10px 120px 0 ">
          <el-col :span="10">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">资助类别：</span>
            <el-select v-model="projectzizhu" placeholder="选择资助类别" style="width: 12vw">
              <el-option
                v-for="item in zizhuList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
          <el-col :span="10">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">学科类别：</span>
            <el-select v-model="projectsubject" placeholder="选择学科类别" style="width: 12vw">
              <el-option
                v-for="item in subjectList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
        </el-row>
        <el-row style="margin: 10px 120px 0 ">
          <el-col :span="10">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">人才类别：</span>
            <el-select v-model="projectuser" placeholder="选择人才类别" style="width: 12vw">
              <el-option
                v-for="item in userList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
          <el-col :span="10">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">课题类型：</span>
            <el-select v-model="projectketi" placeholder="请选择课题类型" style="width: 12vw">
              <el-option label="个人项目" value="国家级"/>
              <el-option label="教学建设" value="省级"/>
              <el-option label="学术科研" value="区级"/>
              <el-option label="集体科研" value="市级"/>
            </el-select>
          </el-col>
        </el-row>
        <el-row style="margin: 10px 120px 0 ">
          <el-col :span="10">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">&nbsp;&nbsp;&nbsp;实验室：</span>
            <el-select v-model="projectaddress" placeholder="选择实验室" style="width: 12vw">
              <el-option
                v-for="item in addressList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
          <el-col :span="10">
            <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">审核状态：</span>
            <el-select v-model="projectstatus" placeholder="选择审核状态" style="width: 12vw">
              <el-option
                v-for="item in  statusList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
        </el-row>
        <!--        <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">学院：</span>-->
        <!--        <el-select v-model="projectclass" placeholder="选择学院" style="width: 12vw">-->
        <!--          <el-option-->
        <!--            v-for="item in options2"-->
        <!--            :key="item.value"-->
        <!--            :label="item.label"-->
        <!--            :value="item.value"/>-->
        <!--        </el-select>-->
        <!--        <span style="font-weight: bolder;margin-left:15px;margin-right: 10px;">学院：</span>-->
        <!--        <el-select v-model="projectclass" placeholder="选择学院" style="width: 12vw">-->
        <!--          <el-option-->
        <!--            v-for="item in options2"-->
        <!--            :key="item.value"-->
        <!--            :label="item.label"-->
        <!--            :value="item.value"/>-->
        <!--        </el-select>-->
        <!--              <el-checkbox v-model="checked1" style="float:left;margin-right: 3vh">不限</el-checkbox>-->
        <!--            <el-checkbox-group v-model="college" style="width: 70%;float:left">-->
        <!--              <el-checkbox v-for="(item,index) in collegeList"-->
        <!--                           :key="index"-->
        <!--                           :label="item.label"-->
        <!--                           @change="change1"-->
        <!--              ></el-checkbox>-->
        <!--            </el-checkbox-group>-->
      </div>
      <!--        </el-row>-->
      <!--        <HR width=1100 color=#dcdfe6 SIZE=1 align="right" />-->
<!--      <el-row style="margin-top: 3vh">-->
<!--        <span-->
<!--          style="font-size: 0.95rem;font-weight: bolder;float:left;margin-right: 10px;margin-left: 135.5px">部门</span>-->
<!--        <el-checkbox v-model="checked2" style="float:left;margin-right: 3vh">不限</el-checkbox>-->
<!--        <el-checkbox-group v-model="department" style="width: 70%;float:left">-->
<!--          <el-checkbox v-for="(item,index) in departmentList"-->
<!--                       :key="index"-->
<!--                       :label="item.label"-->
<!--                       @change="change2"-->
<!--          ></el-checkbox>-->
<!--        </el-checkbox-group>-->
<!--      </el-row>-->
<!--      <el-row style="margin-top: 3vh">-->
<!--        <span-->
<!--          style="font-size: 0.95rem;font-weight: bolder;float:left;margin-right: 10px;margin-left: 135.5px">项目级别</span>-->
<!--        <el-checkbox v-model="checked3" style="float:left;margin-right: 3vh">不限</el-checkbox>-->
<!--        <el-checkbox-group v-model="projectclass" style="width: 70%;float:left">-->
<!--          <el-checkbox v-for="(item,index) in classList"-->
<!--                       :key="index"-->
<!--                       :label="item.label"-->
<!--                       @change="change3"-->
<!--          ></el-checkbox>-->
<!--        </el-checkbox-group>-->
<!--      </el-row>-->
<!--      <el-row style="margin-top: 3vh">-->
<!--        <span-->
<!--          style="font-size: 0.95rem;font-weight: bolder;float:left;margin-right: 10px;margin-left: 135.5px">项目人数</span>-->
<!--        <el-checkbox v-model="checked4" style="float:left;margin-right: 3vh">不限</el-checkbox>-->
<!--        <el-checkbox-group v-model="num" style="width: 70%;float:left">-->
<!--          <el-checkbox v-for="(item,index) in numList"-->
<!--                       :key="index"-->
<!--                       :label="item.label"-->
<!--                       @change="change4"-->
<!--          ></el-checkbox>-->
<!--        </el-checkbox-group>-->
<!--      </el-row>-->
<!--      <el-row style="margin-top: 3vh">-->
<!--        <span-->
<!--          style="font-size: 0.95rem;font-weight: bolder;float:left;margin-right: 10px;margin-left: 135.5px">项目资金</span>-->
<!--        <el-checkbox v-model="checked5" style="float:left;margin-right: 3vh">不限</el-checkbox>-->
<!--        <el-checkbox-group v-model="money" style="width: 70%;float:left">-->
<!--          <el-checkbox v-for="(item,index) in moneyList"-->
<!--                       :key="index"-->
<!--                       :label="item.label"-->
<!--                       @change="change5"-->
<!--          ></el-checkbox>-->
<!--        </el-checkbox-group>-->
<!--        <span style="float: right;font-size: 0.95rem;font-weight: bolder;">1000+个项目符合条件</span>-->
<!--      </el-row>-->
      <el-divider></el-divider>
      <div v-if="viewimg" class="img">
        <img src="../../../assets/zanwu.png">
        <div style="text-align: center">
          <span style="font-size: 15px;font-weight: bold;color: #999999">暂无内容</span>
        </div>
      </div>
      <div v-if="viewtable">
        <el-table
          v-if="viewtable"
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
        <div style="text-align: center">
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
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      tableData: [
        {
          id_num: 'IM567382',
          tDept: '大数据与智慧校园建设',
          projectClass: '国家级',
          username: '王立民',
          department: '计算机学院',
          positionSalary: '400000',
          bdate: '2019-2-3',
          mdate: '2019-8-9',
          fdate: '2020-8-9'
        },
        {
          id_num: 'IM564382',
          tDept: '先进计算与内生安全技术',
          projectClass: '国家级',
          username: '刘老师',
          department: '软件学院',
          positionSalary: '1000000',
          bdate: '2018-2-3',
          mdate: '2019-8-9',
          fdate: '2020-5-9'
        },
        {
          id_num: 'IM598542',
          tDept: '新时代背景下智慧检务建设路径选择',
          projectClass: '国家级',
          username: '王方林',
          department: '计算机学院',
          positionSalary: '800000',
          bdate: '2019-8-3',
          mdate: '2019-12-9',
          fdate: '2020-9-9'
        },
        {
          id_num: 'IM508u36',
          tDept: '基于关系图谱的人岗关系研究',
          projectClass: '省部级',
          username: '郭梦洁',
          department: '计算机学院',
          positionSalary: '800000',
          bdate: '2020-2-3',
          mdate: '2020-6-9',
          fdate: '2020-8-9'
        },
        {
          id_num: 'IM567382',
          tDept: '智慧公共文化服务研究',
          projectClass: '国家级',
          username: '李民',
          department: '社科学院',
          positionSalary: '70000',
          bdate: '2019-2-3',
          mdate: '2019-8-9',
          fdate: '2020-8-9'
        },
        {
          id_num: 'IM567382',
          tDept: '移动社交网络情境化推荐',
          projectClass: '省级',
          username: '王立民',
          department: '计算机学院',
          positionSalary: '400000',
          bdate: '2019-2-3',
          mdate: '2019-8-9',
          fdate: '2020-8-9'
        },
        {
          id_num: 'IM567382',
          tDept: '公共图书馆数据素养教育体系探析',
          projectClass: '国家级',
          username: '王立民',
          department: '计算机学院',
          positionSalary: '400000',
          bdate: '2019-2-3',
          mdate: '2019-8-9',
          fdate: '2020-8-9'
        },
        {
          id_num: 'IM567382',
          tDept: '面向新基建的电力电源方案',
          projectClass: '国家级',
          username: '王伟',
          department: '电力学院',
          positionSalary: '400000',
          bdate: '2019-2-3',
          mdate: '2019-8-9',
          fdate: '2020-8-9'
        }, {
          id_num: 'IM567382',
          tDept: 'BIM技术在轨道交通工程中的应用',
          projectClass: '国家级',
          username: '李民',
          department: '建筑学院',
          positionSalary: '400000',
          bdate: '2019-2-3',
          mdate: '2019-8-9',
          fdate: '2020-8-9'
        }, {
          id_num: 'IM567382',
          tDept: '光伏发电远程传输质量实时监测研究',
          projectClass: '省级',
          username: '张强',
          department: '电力学院',
          positionSalary: '400000',
          bdate: '2019-2-3',
          mdate: '2019-8-9',
          fdate: '2020-8-9'
        }
      ],
      viewtable: false,
      viewimg: true,
      college: [],
      department: [],
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      input: '',
      projectsub: '',
      projectclass: [],
      inputsearch: '',
      selectWord1: '',
      selectWord3: '',
      selectWord4: '',
      projectpeople: '',
      projectdate:'',
      projectprogress:'',
      projectsubject: '',
      projectzizhu: '',

      projectketi: '',
      projectuser:'',
      projectstatus: '',
      projectaddress: '',
      projectmoney: '',
      options1: [
        {
          value: '个人项目',
          label: '个人项目'
        },
        {
          value: '集体项目',
          label: '集体项目'
        }
      ],
      selectWord2: '',
      options2: [
        {
          value: '科研项目信息',
          label: '科研项目信息'
        }, {
          value: '论文信息',
          label: '论文信息'
        }, {
          value: '个人信息',
          label: '个人信息'
        }
      ],
      collegeList: [
        { label: '文学院', value: '文学院' },
        { label: '理学院', value: '理学院 ' },

        { label: '管理学院', value: '管理学院' },
        { label: '机械工程学院', value: '机械工程学院' },
        { label: '电子信息学院', value: '电子信息学院' },
        { label: '电气工程学院', value: '电气工程学院' }

      ],
      departmentList: [
        { label: '校党委', value: '1' },
        { label: '教务处', value: '2 ' },
        { label: '科研处', value: '3' },
        { label: '电教设备处', value: '4' },
        { label: '审计处', value: '5' },
        { label: '档案中心', value: '6' }
      ],
      classList: [
        { label: '国家级', value: '1' },
        { label: '教育厅级', value: '2 ' },
        { label: '省级', value: '3' },
        { label: '厅级', value: '4' },
        { label: '院级', value: '5' }
      ],
      numList: [
        { label: '1', value: '1' },
        { label: '2', value: '2 ' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5人以上', value: '5' }
      ],
      moneyList: [
        { label: '1万以下', value: '1' },
        { label: '1万~10万', value: '2 ' },
        { label: '10万~50万', value: '3' },
        { label: '50万以上', value: '4' }

      ],
      statusList: [
        { label: '已通过', value: '1' },
        { label: '未通过', value: '2 ' },
        { label: '待审核', value: '3' },

      ],
      addressList: [
        { label: '大数据智能实验室', value: '1' },
        { label: 'vr虚拟现实实验室', value: '2 ' },
        { label: '自然语言处理实验室', value: '3' },
        { label: '人工智能实验室', value: '4' },
      ],
      userList: [
        { label: '中年领军专家', value: '1' },
        { label: '长江学者特聘教授', value: '2' },
        { label: '国家杰出青年科学基金获得者', value: '3' },
        { label: '万人计划科技创新领军人才', value: '4' },
        { label: '万人计划百千万工程领军人才', value: '5' },
        { label: '青年拔尖英才', value: '6' },
        { label: '国家优秀青年科学基金获得者', value: '7' },
        { label: '海外高层次青年人才', value: '8' },
        { label: '青年长江学者', value: '9' },
        { label: '科睿唯安高被引科学家', value: '10' },
      ],
      subjectList: [
        { label: '人文科学', value: '1' },
        { label: '社会科学', value: '2' },
        { label: '理学', value: '3' },
        { label: '工学', value: '4' },
        { label: '农学', value: '5' },
        { label: '医学', value: '6' },
      ],
      progressList: [
        { label: '已立项', value: '1' },
        { label: '开题项目', value: '2' },
        { label: '中期项目', value: '3' },
        { label: '已结题项目', value: '4' },
      ],
      zizhuList: [
        { label: '面上项目', value: '1' },
        { label: '重点项目', value: '2' },
        { label: '重大项目', value: '3' },
        { label: '重点研究计划', value: '4' },
        { label: '国家杰出青年科学基金', value: '5' },
        { label: '专项基金项目', value: '6' },
        { label: '青年科学基金项目', value: '7' },
        { label: '科学中心项目', value: '8' },
        { label: '创新研究群体项目', value: '9' },
        { label: '专项基金项目', value: '10' },
      ],
      num: [],
      money: [],
      checkList: [], // 选中展示的字段
      uncheckList: {} // 控制隐藏的字段
    }
  },
  methods: {
    searchmsg() {
      this.$message({
        type: 'success',
        message: '查询成功'
      })
      this.viewimg = false
      this.viewtable = true
    },
    change1() {
      this.checked1 = false
    },
    change2() {
      this.checked2 = false
    },
    change3() {
      this.checked3 = false
    },
    change4() {
      this.checked4 = false
    },
    change5() {
      this.checked5 = false
    }

  }
}
</script>

<style scoped>
.box-card {
  width: 100%;
  height: 100%;

}

/*/deep/ .el-card__body{*/
/*  height: 100vh;*/
/*}*/
.img {
  text-align: center;
}
</style>
