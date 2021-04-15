<template>
    <div class="app-container">
      <div class="filter-container">
        <el-row :gutter="1">
          <el-col :span="2">
            <div class="selector">
              <span style="font-size: 15px;font-weight: bolder;margin-left: 15px">积分类型:</span>
            </div>
          </el-col>
          <el-col :span="3">
            <el-select v-model="listQuery.qualification_type" placeholder="积分类型" clearable class="filter-item">
              <el-option label="课题项目" value="课题项目"/>
              <el-option label="学术论文" value="学术论文"/>
              <el-option label="科研专利" value="科研专利"/>
              <el-option label="学术专著" value="学术专著"/>
            </el-select>
          </el-col>
          <el-col :span="6">
            <div class="add">
              <el-button class="filter-item" style="margin-left: 10px;float: right" type="primary" icon="el-icon-edit" @click="dialogPvVisible = true">新增积分规则配置</el-button>
            </div>
          </el-col>
        </el-row>
        <el-divider/>
        <project-table v-show="listQuery.qualification_type === '课题项目'" ref="project"></project-table>
        <academic-table v-show="listQuery.qualification_type === '学术论文'" ref="academic"></academic-table>
        <scientific-table v-show="listQuery.qualification_type === '科研专利'" ref="scientific">></scientific-table>
        <monographs-table v-show="listQuery.qualification_type === '学术专著'" ref="monographs"></monographs-table>
      </div>
      <el-dialog :visible.sync="dialogPvVisible" title="新增积分规则配置">
        <el-form ref="form" label-width="150px" style="margin: 20px 0;">
          <el-form-item label="请选择您的积分项目">
            <el-select v-model="t_qualification_name" placeholder="请选择您的积分项目" >
              <el-option label="课题项目" value="ktxm"/>
              <el-option label="学术论文" value="xslw"/>
              <el-option label="科研专利" value="kyzl"/>
              <el-option label="科研专著" value="kyzz"/>
            </el-select>
          </el-form-item>
        </el-form>
        <el-divider/>
        <el-row v-if="t_qualification_name==='ktxm'">
          <el-form ref="ktxmform" :model="ktxmform" label-width="200px">
            <el-form-item label="课题级别">
              <el-select v-model="ktxmform.projectLevel" placeholder="请选择课题级别">
                <el-option label="国家级" value="国家级"/>
                <el-option label="省级" value="省级"/>
                <el-option label="区级" value="区级"/>
                <el-option label="市级" value="市级"/>
                <el-option label="校级" value="校级"/>
              </el-select>
            </el-form-item>
            <el-form-item label="课题类型">
              <el-select v-model="ktxmform.projectType" placeholder="请选择课题类型">
                <el-option label="个人项目" value="个人项目"/>
                <el-option label="教学建设" value="教学建设"/>
                <el-option label="学术科研" value="学术科研"/>
                <el-option label="集体科研" value="集体科研"/>
              </el-select>
            </el-form-item>
            <el-form-item label="个人角色">
              <el-select v-model="ktxmform.personnelRole" placeholder="请选择个人角色">
                <el-option label="主持" value="主持"/>
                <el-option label="参与" value="参与"/>
              </el-select>
              <el-input v-model="ktxmform.scoreRate" style="width: 200px" placeholder="分值比率"></el-input>
            </el-form-item>
            <el-form-item label="基础分值" style="width: 400px">
              <el-input v-model="ktxmform.baseScore"/>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row v-if="t_qualification_name==='xslw'">
          <el-form ref="xslwform" :model="xslwform" label-width="200px">
            <el-form-item label="论文级别">
              <el-select v-model="xslwform.paperLevel" placeholder="请选择论文级别">
                <el-option label="T类 特种刊物论文" value="特种刊物论文"/>
                <el-option label="A类 权威核心刊物论文" value="权威核心刊物论文"/>
                <el-option label="B类 重要核心刊物论文" value="重要核心刊物论文"/>
                <el-option label="C类 一般核心刊物论文" value="一般核心刊物论文"/>
                <el-option label="D类 一般公开刊物论文" value="一般公开刊物论文"/>
                <el-option label="E类 受限公开刊物论文" value="受限公开刊物论文"/>
              </el-select>
            </el-form-item>
            <el-form-item label="作者类别">
              <el-select v-model="xslwform.authorType" placeholder="请选择作者类别">
                <el-option label="第一作者" value="第一作者"/>
                <el-option label="第二作者" value="第二作者"/>
                <el-option label="第三作者" value="第三作者"/>
                <el-option label="其他" value="其他"/>
              </el-select>
              <el-input v-model="xslwform.scoreRate" style="width: 200px" placeholder="分值比率"></el-input>
            </el-form-item>
            <el-form-item label="基础分值" style="width: 400px">
              <el-input v-model="xslwform.baseScore"/>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row v-if="t_qualification_name==='kyzl'">
          <el-form ref="kyzlform" :model="kyzlform" label-width="200px">
            <el-form-item label="专利类型">
              <el-select v-model="kyzlform.patentType" placeholder="请选择专利类型">
                <el-option label="发明专利" value="特种刊物论文"/>
                <el-option label="实用新型专利" value="实用新型专利"/>
                <el-option label="软件著作权" value="软件著作权"/>
              </el-select>
            </el-form-item>
            <el-form-item label="基础分值" style="width: 400px">
              <el-input v-model="kyzlform.baseScore"/>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row v-if="t_qualification_name==='kyzz'">
          <el-form ref="kyzzform" :model="kyzzform" label-width="200px">
            <el-form-item label="著作类型">
              <el-select v-model="kyzzform.monographType" placeholder="请选择专利类型">
                <el-option label="专著" value="专著"/>
                <el-option label="编著" value="编著"/>
                <el-option label="译著" value="译著"/>
                <el-option label="研究报告" value="研究报告"/>
              </el-select>
            </el-form-item>
            <el-form-item label="著作级别">
              <el-select v-model="kyzzform.monographLevel" placeholder="请选择专利类型">
                <el-option label="T" value="T"/>
                <el-option label="A" value="A"/>
                <el-option label="B" value="B"/>
                <el-option label="C" value="C"/>
                <el-option label="D" value="D"/>
                <el-option label="E" value="E"/>
              </el-select>
            </el-form-item>
            <!--            <el-form-item label="作者类别">-->
            <!--              <el-select v-model="yanjiukeform.role" placeholder="请选择作者类别">-->
            <!--                <el-option label="第一作者" value="第一作者"/>-->
            <!--                <el-option label="第二作者" value="第二作者"/>-->
            <!--                <el-option label="第三作者" value="第三作者"/>-->
            <!--                <el-option label="其他" value="其他"/>-->
            <!--              </el-select>-->
            <!--              <el-input v-model="input" style="width: 200px" placeholder="分值比率"></el-input>-->
            <!--            </el-form-item>-->
            <el-form-item label="基础分值" style="width: 400px">
              <el-input v-model="kyzzform.baseScore"/>
            </el-form-item>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">关闭</el-button>
        <el-button type="success" @click="addScoreConfig">确定</el-button>
      </span>
      </el-dialog>
    </div>
</template>

<script>
import { projectScoreConfig, academicScoreConfig, scientificScoreConfig, monographsScoreConfig } from '@/api/scoreConfig'
import projectTable from './tables/projectTable'
import academicTable from './tables/academicTable'
import scientificTable from './tables/scientificTable'
import monographsTable from './tables/monographsTable'
    export default {
      name: "index",
      components: {
        projectTable,
        academicTable,
        scientificTable,
        monographsTable
      },
      data(){
          return{
            pagesize: 5,
            value2: '',
            option2: [{
              value: '院级课题',
              label: '院级课题'
            }, {
              value: '厅级课题',
              label: '厅级课题'
            }, {
              value: '省级课题',
              label: '省级课题'
            }, {
              value: '国家级课题',
              label: '国家级课题'
            }, {
              value: '教育厅课题',
              label: '教育厅课题'
            }],
            projectData :[{
              projectname:'自然语言处理问答系统',
              projectsub:'个人项目',
              projectclass:'省级',
              projectuser:'刘老师',
              date:'2019-9-8',
              score:'5'
            },
              {
                projectname:'专业智能知识库建设',
                projectsub:'教学建设',
                projectclass:'省级',
                projectuser:'王老师',
                date:'2020-3-4',
                score:'5'
              },
              {
                projectname:'NLP语言智能识别',
                projectsub:'学术科研',
                projectclass:'国家级',
                projectuser:'李老师',
                date:'2019-7-6',
                score:'10'
              },
              {
                projectname:'校园大数据中心建设',
                projectsub:'集体项目',
                projectclass:'厅级',
                projectuser:'张老师',
                date:'2020-4-5',
                score:'8'
              }],
            dialogPvVisible: false,
            listQuery: {
              qualification_type: '课题项目',
              department_level: '',
              qualification_level: ''
            },
            xueshuform: {
              type: '',
              first: '',
              rank: '',
              score: ''
            },
            ktxmform: {
              // baseScore: '',
              // scoreRate: '',
              // projectType: '',
              // projectLevel: '',
              // personnelRole: ''
            },
            xslwform: {
            },
            kyzlform: {
            },
            kyzzform: {
            },
            yanjiukeform: {
              role: '',
              rank: '',
              score: ''
            },
            jinyanform: {
              type: '',
              rank: '',
              score: ''
            },
            jinsaiform: {
              type: '',
              rank: '',
              denji: '',
              score: ''
            },
            yanjiuform: {
              type: '',
              rank: '',
              score: ''
            },
            jiaoyuform: {
              region: '',
              rank: '',
              role: '',
              score: ''
            },
            xuekeform: {
              region: '',
              rank: '',
              score: '',
              subject: ''
            },
            yikeform: {
              type: '',
              rank: '',
              score: ''
            },
            xinzhengform: {
              region: '',
              rank: '',
              form: '',
              score: ''
            },
            xiaobenform: {
              type: '',
              score: ''
            },
            t_qualification_name: 'ktxm',
            type_select_value: 'ktxm',
          }
     },
      mounted() {
        // this.getProjectData()
      },
      methods: {
        // getProjectData:function () {
        //   console.log('测试获取项目课题积分配置数据')
        //   projectScoreQuery().then(response => {
        //     console.log('测试接口')
        //     console.log(response.data)
        //   })
        // }
        addScoreConfig: function () {
          switch (this.t_qualification_name){
            case "ktxm":
              if(Object.keys(this.ktxmform).length!==5){
                this.$message({
                  message: '未配置完整',
                  type: 'warning'
                })
                console.log(Object.keys(this.ktxmform).length)
              }else {
                projectScoreConfig(this.ktxmform).then(response => {
                  console.log('测试课题项目积分配置')
                  console.log(response.data)
                  this.$message({
                    message: '配置成功',
                    type: 'success'
                  })
                  this.ktxmform = {}
                  this.dialogPvVisible = false
                  this.$refs.project.getProjectData()
                })
              }
              break
            case "xslw":
              if(Object.keys(this.xslwform).length!==4){
                this.$message({
                  message: '未配置完整',
                  type: 'warning'
                })
                console.log(Object.keys(this.xslwform).length)
              }else {
                academicScoreConfig(this.xslwform).then(response => {
                  console.log('测试学术论文积分配置')
                  console.log(response.data)
                  this.$message({
                    message: '配置成功',
                    type: 'success'
                  })
                  this.xslwform = {}
                  this.dialogPvVisible = false
                  this.$refs.academic.getAcademicData()
                })
              }
              break
            case "kyzl":
              if(Object.keys(this.kyzlform).length!==2){
                this.$message({
                  message: '未配置完整',
                  type: 'warning'
                })
                console.log(Object.keys(this.kyzlform).length)
              }else {
                scientificScoreConfig(this.kyzlform).then(response => {
                  console.log('测试科研专利积分配置')
                  console.log(response.data)
                  this.$message({
                    message: '配置成功',
                    type: 'success'
                  })
                  this.kyzlform = {}
                  this.dialogPvVisible = false
                  this.$refs.scientific.getScientificData()
                })
              }
              break
            case "kyzz":
              if(Object.keys(this.kyzzform).length!==3){
                this.$message({
                  message: '未配置完整',
                  type: 'warning'
                })
                console.log(Object.keys(this.kyzzform).length)
              }else {
                monographsScoreConfig(this.kyzzform).then(response => {
                  console.log('测试科研著作积分配置')
                  console.log(response.data)
                  this.$message({
                    message: '配置成功',
                    type: 'success'
                  })
                  this.kyzzform = {}
                  this.dialogPvVisible = false
                  this.$refs.monographs.getMonoData()
                })
              }
              break
          }
        }
      }
    }
</script>

<style scoped>
.selector{
  margin-top: 10px;
}
</style>
