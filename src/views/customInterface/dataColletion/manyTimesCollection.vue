<template>
  <div class="app-container">
    <el-tabs >
      <el-tab-pane label="学术论文">
        <el-row :gutter="5">
          <el-col :span="3">
            <div class="shenpiselect">
              <span style="font-size: 16px;font-weight: bolder">选择论文类型：</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="select">
              <el-select v-model="type_select_paper" @change="selectOne" placeholder="请选择您的学术论文类型" >
<!--                <el-option @click="selectOne" label="中文核心论文" value="中文核心论文"/>-->
                <el-option label="中文核心论文" value="中文核心论文"/>
                <el-option label="三大检索论文" value="三大检索论文"/>
                <el-option label="其他" value="其他"/>
              </el-select>
            </div>
          </el-col>
<!--          <el-row v-if="type_select_paper === '中文核心论文'">-->
<!--          </el-row>-->
<!--          <el-row v-if="type_select_paper === '三大检索论文'">-->
<!--          </el-row>-->
<!--          <el-row v-if="type_select_paper === '其他'">-->
<!--          </el-row>-->
        </el-row>
        <el-button @click="openDialog" style="float: right;margin-right: 15px" type="text">新增</el-button>
<!--        <el-button @click="handleUpdate(scope.row)" style="float: right;margin-right: 15px" type="text">修改</el-button>-->
        <el-table
          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%"
          stripe
        >
          <el-table-column
            prop="paperName"
            label="论文名称"
            />
          <el-table-column
            prop="ifFirstAuthor"
            label="是否第一作者"
            />
          <el-table-column
            prop="paperType"
            label="论文类型"
          />
          <el-table-column
            prop="publishJournal"
            label="发表刊物"
            />
          <el-table-column
            prop="publisher"
            label="出版社"
          />
          <el-table-column
            prop="publishTime"
            label="发表时间"
            />
          <el-table-column
            prop="attachment"
            label="附件"
            />
          <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)">修改</el-button>
              <el-button size="mini" type="text" icon="el-icon-delete" @click="deletePapersInfos(scope.row)" style="color: red">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div style="text-align: center; margin-top: 10px;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            :page-sizes="[5, 10]"
            :total="tableData.length"
            layout="total, sizes, prev, pager, next, jumper"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="课题项目">
        <el-row :gutter="5">
          <el-col :span="3">
            <div class="shenpiselect">
              <span style="font-size: 16px;font-weight: bolder">选择项目类型：</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="select">
              <el-select v-model="type_select_project" @change="selectTwo" placeholder="请选择您的项目类型" >
                <el-option label="国家级项目" value="国家级项目"/>
                <el-option label="省级项目" value="省级项目"/>
                <el-option label="其他" value="其他"/>
              </el-select>
            </div>
          </el-col>
        </el-row>
          <el-button @click="switchTypeTwo('add')" style="float: right;margin-right: 15px" type="text">新增</el-button>
<!--          <el-button style="float: right;margin-right: 15px" type="text">修改</el-button>-->
          <el-table
            :data="projectData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            style="width: 100%"
          stripe>
            <el-table-column
              prop="projectName"
              label="项目名称"
            />
            <el-table-column
              prop="projectRole"
              label="项目角色"
            />
            <el-table-column
              prop="projectLevel"
              label="项目级别"
              />
            <el-table-column
              prop="projectPerson"
              label="项目负责人"
              />
            <el-table-column
              prop="declarationDate"
              label="申报时间"
              />
            <el-table-column
              prop="attachment"
              label="附件"
            />
            <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
              <template slot-scope="scope">
                <el-button size="mini" type="text" icon="el-icon-edit" @click="projectUpdate(scope.row);switchTypeTwo('edit')">修改</el-button>
                <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deleteProjectInfoById(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        <div style="text-align: center; margin-top: 10px;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            :page-sizes="[5, 10]"
            :total="projectData.length"
            layout="total, sizes, prev, pager, next, jumper"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="专利登记">
        <el-row :gutter="5">
          <el-col :span="3">
            <div class="shenpiselect">
              <span style="font-size: 16px;font-weight: bolder">选择专利类型：</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="select">
              <el-select v-model="type_select_value" @change="selectThree" placeholder="请选择您的专利类型" >
                <el-option label="发明专利" value="发明专利"/>
                <el-option label="实用新型专利" value="实用新型专利"/>
                <el-option label="软件著作权" value="软件著作权"/>
              </el-select>
            </div>
          </el-col>
        </el-row>
<!--        <h4 style="text-align: center;margin: 28px 0px 0px 0px;">专利申报表</h4>-->
        <el-button @click="switchTypeThree('add');" style="float: right;margin-right: 15px" type="text">新增</el-button>
<!--        <el-button style="float: right;margin-right: 15px" type="text">修改</el-button>-->
        <el-table
          :data="patentData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          style="width: 100%">
          <el-table-column
            prop="patentName"
            label="专利名称"
          />
          <el-table-column
            prop="patentNumber"
            label="专利编号"
          />
          <el-table-column
            prop="patentApplicant"
            label="申请人(单位)"
          />
          <el-table-column
            prop="patentType"
            label="专利类型"
          />
          <el-table-column
            prop="applyTime"
            label="申请时间"
          />
          <el-table-column
            prop="attachment"
            label="附件"
          />
          <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button size="mini" type="text" icon="el-icon-edit" @click="patentUpdate(scope.row); switchTypeThree('edit')">修改</el-button>
              <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deletePatentInfoById(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: center; margin-top: 10px;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            :page-sizes="[5, 10]"
            :total="patentData.length"
            layout="total, sizes, prev, pager, next, jumper"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="专著登记">
<!--        <h4 style="text-align: center;margin: 28px 0px 0px 0px;">专著登记表</h4>-->
        <el-button @click="switchTypeFour('add')" style="float: right;margin-right: 15px" type="text">新增</el-button>
<!--        <el-button style="float: right;margin-right: 15px" type="text">修改</el-button>-->
        <el-table
          :data="monographData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          style="width: 100%">
          <el-table-column
            prop="monographName"
            label="专著名称"
            />
          <el-table-column
            prop="monographField"
            label="专著类型"
            />
          <el-table-column
            prop="publication"
            label="发表刊物"
            />
          <el-table-column
            prop="publisher"
            label="出版社"
           />
          <el-table-column
            prop="publishTime"
            label="发表时间"
           />
          <el-table-column
            prop="attachment"
            label="附件"
          />
          <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button size="mini" type="text" icon="el-icon-edit" @click="monographUpdate(scope.row);switchTypeFour('edit')">修改</el-button>
              <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deleteMonographInfoById(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: center; margin-top: 10px;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            :page-sizes="[5, 10]"
            :total="monographData.length"
            layout="total, sizes, prev, pager, next, jumper"
          />
        </div>
      </el-tab-pane>

    </el-tabs>
    <div>
      <el-dialog :visible.sync="dialogVisiblePatent" :title="title">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="专利名称">
            <el-input v-model="form.patentName"/>
          </el-form-item>
          <el-form-item label="专利编号">
            <el-input v-model="form.patentNumber"/>
          </el-form-item>
          <el-form-item label="申请人（单位）">
            <el-input v-model="form.patentApplicant"/>
          </el-form-item>
          <el-form-item label="专利类型">
            <el-select v-model="form.patentType">
              <el-option label="发明专利" value="发明专利"></el-option>
              <el-option label="实用新型专利" value="实用新型专利"></el-option>
              <el-option label="软件著作权" value="软件著作权"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="申请时间">
            <el-col :span="11">
              <el-date-picker v-model="form.applyTime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件">
              <el-upload
                class="upload-demo"
                name="files"
                :limit="1"
                :file-list="fileList"
                ref="batchUpload"
                action="http://58.119.112.15:11002/upload/fileUpload"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-success="handleSubmitSuccess1"
                :auto-upload="false"
              >
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <!--              <el-button style="margin-left: 10px;background: #42b983" size="small" type="success" @click="submit">上传</el-button>-->
              </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditPatent">取 消</el-button>
          <el-button type="primary" @click="confirmEditPatent" >确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="dialogVisibleMonographs" title="专著登记">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="专著名称">
            <el-input v-model="form.monographName"/>
          </el-form-item>
          <el-form-item label="专著类型">
            <el-input v-model="form.monographField"/>
          </el-form-item>
          <el-form-item label="负责人">
            <el-input v-model="form.monographAuthor"/>
          </el-form-item>
          <el-form-item label="出版刊物">
            <el-input v-model="form.publication"/>
          </el-form-item>
          <el-form-item label="出版社">
            <el-input v-model="form.publisher"/>
          </el-form-item>
          <el-form-item label="发表时间">
            <el-col :span="11">
              <el-date-picker v-model="form.publishTime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件">
              <el-upload
                class="upload-demo"
                name="files"
                :limit="1"
                :file-list="fileList"
                ref="batchUpload"
                action="http://58.119.112.15:11002/upload/fileUpload"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-success="handleSubmitSuccess1"
                :auto-upload="false"
              >
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <!--              <el-button style="margin-left: 10px;background: #42b983" size="small" type="success" @click="submit">上传</el-button>-->
              </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditMonograph">取 消</el-button>
          <el-button type="primary" @click="confirmEditMonograph">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="dialogVisibleThrees" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="项目课题名称">
            <el-input v-model="form.projectName"/>
          </el-form-item>
          <el-form-item label="项目角色">
            <el-select v-model="form.projectRole" style="width: 310px" placeholder="请选择">
              <el-option label="主持" value="主持"></el-option>
              <el-option label="参与" value="参与"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目级别">
            <el-select v-model="form.projectLevel" style="width: 310px" placeholder="请选择">
              <el-option label="国家级项目" value="国家级项目"></el-option>
              <el-option label="省级项目" value="省级项目"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目负责人">
            <el-input v-model="form.projectPerson"/>
          </el-form-item>
          <el-form-item label="发表时间">
            <el-col :span="11">
              <el-date-picker v-model="form.declarationDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload
            class="upload-demo"
            name="files"
            :limit="1"
            :file-list="fileList"
            ref="batchUpload"
            action="http://58.119.112.15:11002/upload/fileUpload"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="handleSubmitSuccess1"
            :auto-upload="false"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <!--              <el-button style="margin-left: 10px;background: #42b983" size="small" type="success" @click="submit">上传</el-button>-->
          </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditProject">取 消</el-button>
          <el-button type="primary" @click="confirmEditProject">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="dialogVisibleOne" :title="title">
        <el-form ref="form" :model="paperForm1" label-width="100px">
          <el-form-item label="论文名称">
            <el-input v-model="paperForm1.paperName"/>
          </el-form-item>
          <el-form-item label="是否第一作者">
            <el-select v-model="paperForm1.ifFirstAuthor" style="width: 310px" placeholder="请选择">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="论文类型">
            <el-select v-model="paperForm1.paperType" placeholder="请选择您的学术论文类型" >
              <el-option label="中文核心论文" value="中文核心论文"/>
              <el-option label="三大检索论文" value="三大检索论文"/>
              <el-option label="其他" value="其他"/>
<!--              <el-option label="中文核心论文" value="1"/>-->
<!--              <el-option label="三大检索论文" value="2"/>-->
<!--              <el-option label="其他" value="3"/>-->
            </el-select>
          </el-form-item>
          <el-form-item label="发表刊物">
            <el-input v-model="paperForm1.publishJournal"/>
          </el-form-item>
          <el-form-item label="出版社">
              <el-input v-model="paperForm1.publisher"/>
          </el-form-item>
          <el-form-item label="发表时间">
            <el-col :span="11">
              <el-date-picker v-model="paperForm1.publishTime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件">
<!--            <el-upload-->
<!--              v-model="paperForm1.enclosure"-->
<!--              name = 'files'-->
<!--              file-list=""-->
<!--              ref="upload"-->
<!--              class="upload-demo"-->
<!--              action="https://zhongkeruitong.top/fileserver15/keyan"-->
<!--              :on-remove="handleRemove"-->
<!--              :auto-upload="false"-->
<!--              :on-success="handleSubmit"-->
            <el-upload
              class="upload-demo"
              name="files"
              :limit="1"
              :file-list="fileList"
              ref="batchUpload"
              action="http://58.119.112.15:11002/upload/fileUpload"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-success="handleSubmitSuccess"
              :auto-upload="false"
              >
                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
<!--              <el-button style="margin-left: 10px;background: #42b983" size="small" type="success" @click="submit">上传</el-button>-->
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notAddPaper">取 消</el-button>
          <el-button type="primary" @click="confirmAddPaper">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="dialogVisibleTwo" :title="title">
        <el-form ref="form" :model="paperForm2" label-width="100px">
          <el-form-item label="论文名称">
            <el-input v-model="paperForm2.paperName"/>
          </el-form-item>
          <el-form-item label="是否第一作者">
            <el-select v-model="paperForm2.ifFirstAuthor" style="width: 310px" placeholder="请选择">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="论文类型">
            <el-select v-model="paperForm2.paperType" placeholder="请选择您的学术论文类型" >
              <el-option label="中文核心论文" value="中文核心论文"/>
              <el-option label="三大检索论文" value="三大检索论文"/>
              <el-option label="其他" value="其他"/>
              <!--              <el-option label="中文核心论文" value="1"/>-->
              <!--              <el-option label="三大检索论文" value="2"/>-->
              <!--              <el-option label="其他" value="3"/>-->
            </el-select>
          </el-form-item>
          <el-form-item label="发表刊物">
            <el-input v-model="paperForm2.publishJournal"/>
          </el-form-item>
          <el-form-item label="出版社">
            <el-input v-model="paperForm2.publisher"/>
          </el-form-item>
          <el-form-item label="发表时间">
            <el-col :span="11">
              <el-date-picker v-model="paperForm2.publishTime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload
              v-model="paperForm2.enclosure"
              ref="upload"
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;background: #42b983" size="small" type="success" @click="submit">上传</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditPaper">取 消</el-button>
          <el-button type="primary" @click="confirmEditPaper">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getAllPaperInfos, getPaperInfosByTecAndPaperType, deletePaperInfoById, insertPaperInfo, updatePaperInfos,
  getAllProjectInfo,getProjectInfoByTecAndPaperType,insertProjectInfo ,deleteProjectInfoById,updateProjectInfo,
  getAllPatentInfo,getPatentInfoByTecAndPaperType,deletePatentInfoById,insertPatentInfo,updatePaperInfo,
  getAllMonographInfo,deleteMonographInfoById,insertMonographInfo,updateMonographInfo} from '@/api/tecResearchAbility'
export default {
  name: 'ManyTimesCollection',
  data() {
    return {
      title: '',
      type_select_project: '',
      type_select_paper: '',
      type_select_value: '',
      currentPage: 1,
      pagesize: 5,
      filelist : [],
      form: {
        tecUsername: localStorage.getItem('loginName'),
        fileUrl: ''
      },
      paperForm1: {
        // tecUsername: localStorage.getItem('loginName')
      },
      paperForm2: {
        // tecUsername: localStorage.getItem('loginName')
      },
      options: [{
        value: '1',
        label: '是'
      }, {
        value: '2',
        label: '否'
      }],
      value: '',
      value1: '',
      dialogVisiblePatent: false,
      dialogVisibleOne: false,
      dialogVisibleTwo: false,
      dialogVisibleMonographs: false,
      dialogVisibleNoncore: false,
      dialogVisibleThrees: false,
      multipleSelection: [],
      tableData: [{
        papername: '大数据研究',
        isauthor: '是',
        publication: '软件学报',
        press: '北京出版社',
        pubtime: '2020-8-20',
        enclosure: '附件材料.doc',
        papersub: '中文核心'
      }, {
        papername: '自然语言问答系统',
        isauthor: '是',
        publication: '计算机学报',
        press: '北京出版社',
        pubtime: '2020-8-20',
        enclosure: '附件材料.doc',
        papersub: '中文核心'
      }, {
        papername: '供电系统研究',
        isauthor: '是',
        publication: '辅助设计',
        press: '北京出版社',
        pubtime: '2020-8-20',
        enclosure: '附件材料.doc',
        papersub: '中文核心'
      }, {
        papername: '大数据下的可视化进展',
        isauthor: '是',
        publication: '计算机学报',
        press: '北京出版社',
        pubtime: '2020-8-20',
        enclosure: '附件材料.doc',
        papersub: '中文核心'
      }, {
        papername: '大屏可视化',
        isauthor: '是',
        publication: '计算机学报',
        press: '北京出版社',
        pubtime: '2020-8-20',
        enclosure: '附件材料.doc',
        papersub: '其他'
      }, {
        papername: '智慧校园建设',
        isauthor: '是',
        publication: '计算机学报',
        press: '北京出版社',
        pubtime: '2020-8-20',
        enclosure: '附件材料.doc',
        papersub: '三大检索'
      }
      ],
      projectData: [{
        projectname: '大数据大屏可視化',
        projectrole: '主持',
        projectclass: '国家级',
        projectpeople: '王老师',
        projecttime: '2020-8-20',
        enclosure: '附件材料.doc',
      }, {
        projectname: '智能语音识别系统',
        projectrole: '主持',
        projectclass: '国家级',
        projectpeople: '王老师',
        projecttime: '2020-8-20',
        enclosure: '附件材料.doc',
      }, {
        projectname: '智慧校园',
        projectrole: '主持',
        projectclass: '省级',
        projectpeople: '王老师',
        projecttime: '2020-8-20',
        enclosure: '附件材料.doc',
      }, {
        projectname: '教育厅报考项目',
        projectrole: '参与',
        projectclass: '国家级',
        projectpeople: '王老师',
        projecttime: '2020-8-20',
        enclosure: '附件材料.doc',
      }, {
        projectname: '网络安全建设',
        projectrole: '主持',
        projectclass: '国家级',
        projectpeople: '王老师',
        projecttime: '2020-8-20',
        enclosure: '附件材料.doc',
      }
      ],
      patentData: [{
        patentname: '转动机械自动化手臂',
        patentnum: 'IXSD988766',
        patentsub: '发明专利',
        patentpeople: '王老师',
        patentime: '2020-8-20',
        enclosure: '附件材料.doc',
      }, {
        patentname: 'AlTiC纳米硬质涂层',
        patentnum: 'IXSD983216',
        patentsub: '发明专利',
        patentpeople: '王老师',
        patentime: '2020-8-20',
        enclosure: '附件材料.doc',
      }, {
        patentname: '高模量超亲水生物支架',
        patentnum: 'IXSD087766',
        patentsub: '实用新型专利',
        patentpeople: '王老师',
        patentime: '2020-8-20',
        enclosure: '附件材料.doc',
      }, {
        patentname: '集成电路设计图',
        patentnum: 'IXSk944766',
        patentsub: '发明专利',
        patentpeople: '王老师',
        patentime: '2020-8-20',
        enclosure: '附件材料.doc',
      }, {
        patentname: '智能推荐系统',
        patentnum: 'Iewd980866',
        patentsub: '软件著作权',
        patentpeople: '王老师',
        patentime: '2020-8-20',
        enclosure: '附件材料.doc',
      }
      ],
      monographData: [{
        monographname: '语言入门',
        monographpublication: '王国勇',
        monographpress: '北京大学出版社',
        monographtime: '2020-8-20',
        enclosure: '附件材料.doc',
        monographsub: '自然科学'
      }, {
        monographname: '教育的未来',
        monographpublication: '王秦辉',
        monographpress: '机械工业出版社',
        monographtime: '2020-8-20',
        enclosure: '附件材料.doc',
        monographsub: '教育学'
      }, {
        monographname: '牛津国际关系手册',
        monographpublication: '詹朱宁',
        monographpress: '译林出版社',
        monographtime: '2020-8-20',
        enclosure: '附件材料.doc',
        monographsub: '人文与社会科学'
      }, {
        monographname: '我的渡世日记',
        monographpublication: '吴伟丽',
        monographpress: '上海人民出版社',
        monographtime: '2020-8-20',
        enclosure: '附件材料.doc',
        monographsub: '人文与社会科学'
      }
      ],
      fileList: [],
      deleteId: '',
      editId: '',
      editId1: '',
      editId2: '',
      editId3: '',
      id: 10,
      a: 0
    }
  },
  mounted() {
    this.getAllPaperInfos()
    this.getAllProjectInfo()
    this.getAllPatentInfo()
    this.getAllMonographInfo()
  },
  methods: {
    reset() {
      this.form = {
        declarationDate: '',
        projectPerson: '',
        projectLevel: '',
        projectRole: '',
        projectName: '',
        papersub: '',
        papername: '',
        isauthor: '',
        publication: '',
        press: '',
        pubtime: '',
        enclosure: '',
        patentname: '',
        patentnum: '',
        patentsub: '',
        applicant: '',
        patentpress: '',
        patenttime: '',
        patentenclosure: '',
        monographname: '',
        monographsub: '',
        monographpublication: '',
        monographpress: '',
        monographtime: '',
        monographsenclosure: '',
        threesname: '',
        threesisauthor: '',
        threespublication: '',
        threespress: '',
        threespubtime: '',
        threesenclosure: '',
        noncorename: '',
        noncoreisauthor: '',
        noncorepublication: '',
        noncorepress: '',
        noncorepubtime: '',
        noncoreenclosure: '',
      };
    },
    onSubmit() {
      console.log('submit!')
    },
    submit() {
      this.$message({
        type: 'success',
        message: '提交成功'
      })
    },
    handleUpdate(row) {
      this.dialogVisibleTwo = true;
      this.paperForm2 = row;
      this.title = "修改学术论文";
      this.editId = row.id
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    openDialog: function() {
      console.log('我点了')
      this.title = "新增学术论文";
      this.dialogVisibleOne = true;
      this.reset()
    },
    addChinesePaper: function() {
      this.$message({
        type: 'success',
        message: '提交成功'
      })
      this.dialogVisible = false
    },
    addPatent: function() {
      console.log('我点了')
      this.$message({
        type: 'success',
        message: '提交成功'
      })
      this.dialogVisiblePatent = false
    },
    openPatentDialog: function() {
      this.reset()
      this.title = "新增专利登记"
      console.log('我点了')
      this.dialogVisiblePatent = true
    },
    patentUpdate(row) {
      this.dialogVisiblePatent = true
      this.title = "修改专利登记"
      this.form = row;
      this.editId2 = row.id
    },
    addMonographs: function() {
      this.$message({
        type: 'success',
        message: '提交成功'
      })
      this.dialogVisibleMonographs = false
    },
    openMonographsDialog: function() {
      this.reset()
      this.title = '新增专著登记'
      console.log('我点了')
      this.dialogVisibleMonographs = true
    },
    monographUpdate(row) {
      this.title = '修改专著登记'
      this.form = row
      this.dialogVisibleMonographs = true
      this.editId3 = row.id
    },
    addNoncore: function() {
      this.$message({
        type: 'success',
        message: '提交成功'
      })
      this.dialogVisibleNoncore = false
    },
    openNoncoreDialog: function() {
      console.log('我点了')
      this.dialogVisibleNoncore = true
    },
    addThrees: function() {
      this.$message({
        type: 'success',
        message: '提交成功'
      })
      this.dialogVisibleThrees = false
    },
    openThreesDialog: function() {
      this.reset()
      this.title = "新增项目课题"
      console.log('我点了')
      this.dialogVisibleThrees = true
    },
    projectUpdate(row) {
      this.title = "修改项目课题"
      this.form = row;
      this.dialogVisibleThrees = true
      this.editId1 = row.id
    },
    //分页
    handleSizeChange(val) {
    console.log(`每页 ${val} 条`);
    // this.currentPage = 1;
    this.pagesize = val;
  },
  handleCurrentChange(val) {
    console.log(`当前页: ${val}`);
    this.currentPage = val;
  },
    // 与后台交互的方法
    // 学术论文模块
    // 学术论文获取所有信息
    getAllPaperInfos() {
      const prams = {
        tecUsername: localStorage.getItem('loginName')
      }
      getAllPaperInfos(prams).then(response => {
        console.log('测试教师获取科研能力所有论文内容接口')
        console.log(response.data)
        this.tableData = response.data.data
      })
    },
    // 教师根据论文类型获取论文信息
    selectOne() {
      const prams = {
        tecUsername: localStorage.getItem('loginName'),
        paperType: this.type_select_paper
      }
      getPaperInfosByTecAndPaperType(prams).then(response => {
        console.log('测试教师根据论文类型获取论文信息接口')
        console.log(response.data)
        this.tableData = response.data.data
      })
    },
    //教师删除学术论文信息
    deletePapersInfos(row) {
      this.deleteId = row.id
      console.log('测试row')
      console.log(row)
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const prams = {
          paperId: this.deleteId
        }
        deletePaperInfoById(prams).then(response => {
          console.log('测试删除')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '删除成功'
          });
          this.getAllPaperInfos()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
    // 教师新增论文信息
    notAddPaper() {
      this.dialogVisibleOne = false
    },
    confirmAddPaper() {
      console.log(Object.keys(this.paperForm1).length)
      // if (Object.keys(this.form).length !==6 ){
      //   this.$message({
      //     type:'warning',
      //     message:'基本信息未填写完整，请检查后提交'
      //   })
      // } else {
      console.log('测试学术论文新增提交参数');
      console.log(this.paperForm1);
      // let data = this.paperForm
      // this.paperForm.tecUsername = '10010'
      const prams = this.paperForm1
      prams.teacUsername = localStorage.getItem('loginName')
      insertPaperInfo(prams).then(response => {
        console.log('测试学术论文新增接口');
        console.log(response.data);
        this.$message({
          type: 'success',
          message: '新增成功'
        })
        this.dialogVisibleOne = false
        this.getAllPaperInfos()
      })
      // }
    },
    // 教师修改论文信息
    notEditPaper() {
      this.dialogVisibleTwo = false
    },
    confirmEditPaper(row) {
      // this.editId = row.id
      console.log('测试修改row')
      console.log(this.editId)
      console.log(Object.keys(this.paperForm2).length)
      // if (Object.keys(this.paperForm2).length !== 7) {
      //   this.$message({
      //     type: 'warning',
      //     message: '基本信息未填写完整，请检查后提交'
      //   })
      // } else {
        console.log('测试学术论文修改参数');
        console.log(this.paperForm2);
        const prams = this.paperForm2
        prams.id = this.editId
        prams.teacUsername = localStorage.getItem('loginName')
        updatePaperInfos(prams).then(response => {
          console.log('测试修改')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '修改成功'
          });
          this.getAllPaperInfos()
          this.dialogVisibleTwo = false
        })
      // }
    },
    // 课题项目模块
    // 课题项目获取所有信息
    getAllProjectInfo () {
      const prams = {
        tecUsername: localStorage.getItem('loginName')
      }
      getAllProjectInfo(prams).then(response => {
        console.log('测试教师获取科研能力所有课题项目内容接口')
        console.log(response.data)
        this.projectData = response.data.data
      })
    },
    // 教师根据项目级别获取项目信息
    selectTwo () {
      const prams = {
        tecUsername: localStorage.getItem('loginName'),
        projectLevel: this.type_select_project
      }
      getProjectInfoByTecAndPaperType(prams).then(response =>{
        console.log('测试教师根据项目级别获取项目信息接口')
        console.log(response.data)
        this.projectData = response.data.data
      })
    },
    switchTypeTwo (type) {
      if (type === 'add') {
        this.reset()
        this.title = "新增项目课题"
        console.log('项目新增')
        console.log(type)
        this.dialogVisibleThrees = true
        this.a = 0
      } else {
        console.log('项目修改')
        console.log(type)
        this.a = 1
      }
    },
    // 新增和修改课题项目信息
    notEditProject () {
      this.dialogVisibleThrees = false
    },
    confirmEditProject (row) {
      console.log(this.a)
      console.log(row)
      if (this.a === 0) {
        // 教师新增课题项目信息
        console.log(Object.keys(this.form).length)
        console.log('测试课题项目新增提交参数');
        console.log(this.form);
        const prams = this.form
        prams.tecUsername = localStorage.getItem('loginName')
        insertProjectInfo(prams).then(response => {
          console.log('测试课题项目新增接口');
          console.log(response.data);
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          console.log(response.data.data.projectRole)
          this.getAllProjectInfo()
          this.dialogVisibleThrees = false
        })
      } else {
        // 教师修改课题项目信息
        console.log('测试修改row')
        console.log(this.editId1)
        console.log(Object.keys(this.form).length)
        // if (Object.keys(this.paperForm2).length !== 7) {
        //   this.$message({
        //     type: 'warning',
        //     message: '基本信息未填写完整，请检查后提交'
        //   })
        // } else {
        console.log('测试课题项目修改参数');
        console.log(this.form);
        const prams = this.form
        prams.id = this.editId1
        // console.log(prams)
        updateProjectInfo(prams).then(response => {
          console.log('测试修改')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '修改成功'
          });
          this.getAllProjectInfo()
          this.dialogVisibleThrees = false
        })
      }
    },
    //教师删除课题项目信息
    deleteProjectInfoById(row) {
      this.deleteId = row.id
      console.log('测试row')
      console.log(row)
      console.log(this.deleteId)
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const prams = {
          projectId: this.deleteId
        }
        deleteProjectInfoById(prams).then(response => {
          console.log('测试删除')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '删除成功'
          });
          this.getAllProjectInfo ()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
    // 专利登记模块
    // 教师获取专利所有信息
    getAllPatentInfo () {
      const prams = {
        tecUsername: localStorage.getItem('loginName')
      }
      getAllPatentInfo(prams).then(response => {
        console.log('测试教师获取所有专利信息接口')
        console.log(response.data)
        this.patentData = response.data.data
      })
    },
    // 教师根据专利类型获取专利信息
    selectThree () {
      console.log(this.type_select_value)
      const prams = {
        tecUsername: localStorage.getItem('loginName'),
        patentType: this.type_select_value
      }
      getPatentInfoByTecAndPaperType(prams).then(response => {
        console.log('测试教师根据专利类型获取专利信息')
        console.log(response.data)
        this.patentData = response.data.data
      })
    },
    // 教师删除专利信息
    deletePatentInfoById (row) {
      this.deleteId = row.id
      console.log('测试row')
      console.log(row)
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const prams = {
          patentId: this.deleteId
        }
        deletePatentInfoById(prams).then(response => {
          console.log('测试删除')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '删除成功'
          });
          this.getAllPatentInfo ()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
    switchTypeThree (type) {
      if (type === 'add') {
        this.reset()
        this.title = "新增专利登记"
        // console.log('我点了')
        // this.dialogVisiblePatent = true
        console.log('专利新增')
        console.log(type)
        this.dialogVisiblePatent = true
        this.a = 0
      } else {
        console.log('专利修改')
        console.log(type)
        this.a = 1
      }
    },
    // 新增和修改专利信息
    notEditPatent () {
      this.dialogVisiblePatent = false
    },
    confirmEditPatent (row) {
      console.log(this.a)
      console.log(row)
      if (this.a === 0) {
        // 教师新增专利信息
        console.log(Object.keys(this.form).length)
        console.log('测试专利新增提交参数');
        console.log(this.form);
        const prams = this.form
        prams.tecUsername = localStorage.getItem('loginName')
        // const prams = this.form
        insertPatentInfo(prams).then(response => {
          console.log('测试专利新增接口');
          console.log(response.data);
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.getAllPatentInfo ()
          this.dialogVisiblePatent = false
        })
      } else {
        // 教师修改专利信息
        console.log('测试修改row')
        console.log(this.editId2)
        console.log(Object.keys(this.form).length)
        // if (Object.keys(this.paperForm2).length !== 7) {
        //   this.$message({
        //     type: 'warning',
        //     message: '基本信息未填写完整，请检查后提交'
        //   })
        // } else {
        console.log('测试专利修改参数');
        console.log(this.form);
        const prams = this.form
        prams.id = this.editId2
        // console.log(prams)
        updatePaperInfo(prams).then(response => {
          console.log('测试修改')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '修改成功'
          });
          this.getAllPatentInfo ()
          this.dialogVisiblePatent = false
        })
      }
    },
    // 专著登记模块
    // 教师获取专著所有信息
    getAllMonographInfo () {
      const prams = {
        tecUsername: localStorage.getItem('loginName')
      }
      getAllMonographInfo(prams).then(response => {
        console.log('测试教师获取所有专著信息接口')
        console.log(response.data)
        this.monographData = response.data.data
      })
    },
    // 教师根据id删除专著信息
    deleteMonographInfoById (row) {
      this.deleteId = row.id
      console.log('测试row')
      console.log(row)
      this.$confirm('此操作将永久删除，是否继续？','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const prams = {
          monographId: this.deleteId
        }
        deleteMonographInfoById(prams).then(response =>{
          console.log('测试删除')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '删除成功'
          });
          this.getAllMonographInfo()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
    switchTypeFour (type) {
      if (type === 'add') {
        this.reset()
        this.title = '新增专著登记'
        // console.log('我点了')
        // this.dialogVisibleMonographs = true
        console.log('专著新增')
        console.log(type)
        this.dialogVisibleMonographs = true
        this.a = 0
      } else {
        console.log('专著修改')
        console.log(type)
        this.a = 1
      }
    },
    // 新增和修改专著信息
    notEditMonograph () {
      this.dialogVisibleMonographs = false
    },
    confirmEditMonograph (row) {
      console.log(this.a)
      console.log(row)
      if (this.a === 0) {
        // 教师新增专著信息
        console.log(Object.keys(this.form).length)
        console.log('测试专著新增提交参数');
        console.log(this.form);
        // const prams = this.form
        const prams = this.form
        prams.tecUsername = localStorage.getItem('loginName')
        insertMonographInfo(prams).then(response => {
          console.log('测试专著新增接口');
          console.log(response.data);
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.getAllMonographInfo ()
          this.dialogVisibleMonographs = false
        })
      } else {
        // 教师修改专著信息
        console.log('测试修改row')
        console.log(this.editId3)
        console.log(Object.keys(this.form).length)
        // if (Object.keys(this.paperForm2).length !== 7) {
        //   this.$message({
        //     type: 'warning',
        //     message: '基本信息未填写完整，请检查后提交'
        //   })
        // } else {
        console.log('测试专著修改参数');
        console.log(this.form);
        const prams = this.form
        prams.id = this.editId3
        // console.log(prams)
        updateMonographInfo(prams).then(response => {
          console.log('测试修改')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '修改成功'
          });
          this.getAllMonographInfo ()
          this.dialogVisibleMonographs = false
        })
      }
    },
    //上传附件
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handleSubmitSuccess (response, file , filelist) {
      if (response.code === 200) {
        this.paperForm1.fileUrl = response.data.success
      } else {
        this.$message.error('上传失败，错误'+ response.code)
      }
    },
    //课题、专利、专著上传附件，因为这三个都是用同一个form表存储数据
    handleSubmitSuccess1 (response, file , filelist) {
      if (response.code === 200) {
        this.form.fileUrl = response.data.success
        // this.form.fileUrl = response.data.fileUrl
        // console.log('上传附件成功' + this.form.fileUrl)
      } else {
        this.$message.error('上传失败，错误'+ response.code)
      }
    }
  }
}
</script>

<style scoped>

</style>
