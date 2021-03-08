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
              <el-select v-model="type_select_paper" placeholder="请选择您的学术论文类型" >
                <el-option label="中文核心论文" value="hexin"/>
                <el-option label="三大检索论文" value="threesearch"/>
                <el-option label="其他" value="others"/>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-button @click="openDialog" style="float: right;margin-right: 15px" type="text">新增</el-button>
<!--        <el-button @click="handleUpdate(scope.row)" style="float: right;margin-right: 15px" type="text">修改</el-button>-->
        <el-table
          :data="tableData"
          style="width: 100%"
          stripe
        >
          <el-table-column
            prop="papername"
            label="论文名称"
            />
          <el-table-column
            prop="isauthor"
            label="是否第一作者"
            />
          <el-table-column
            prop="papersub"
            label="论文类型"
          />
          <el-table-column
            prop="publication"
            label="发表刊物"
            />
          <el-table-column
            prop="press"
            label="出版社"
          />
          <el-table-column
            prop="pubtime"
            label="发表时间"
            />
          <el-table-column
            prop="enclosure"
            label="附件"
            />
          <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)">修改</el-button>
              <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div style="text-align: center; margin-top: 10px;">
          <el-pagination
            @current-change="2"
            :current-page="1"
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
              <el-select v-model="type_select_project" placeholder="请选择您的项目类型" >
                <el-option label="国家级项目" value="first"/>
                <el-option label="省级项目" value="second"/>
                <el-option label="其他" value="third"/>
              </el-select>
            </div>
          </el-col>
        </el-row>
          <el-button @click="openThreesDialog" style="float: right;margin-right: 15px" type="text">新增</el-button>
<!--          <el-button style="float: right;margin-right: 15px" type="text">修改</el-button>-->
          <el-table
            :data="projectData"
            style="width: 100%"
          stripe>
            <el-table-column
              prop="projectname"
              label="项目名称"
            />
            <el-table-column
              prop="projectrole"
              label="项目角色"
            />
            <el-table-column
              prop="projectclass"
              label="项目级别"
              />
            <el-table-column
              prop="projectpeople"
              label="项目负责人"
              />
            <el-table-column
              prop="projecttime"
              label="申报时间"
              />
            <el-table-column
              prop="enclosure"
              label="附件"
            />
            <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
              <template slot-scope="scope">
                <el-button size="mini" type="text" icon="el-icon-edit" @click="projectUpdate(scope.row)">修改</el-button>
                <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        <div style="text-align: center; margin-top: 10px;">
          <el-pagination
            @current-change="2"
            :current-page="1"
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
              <el-select v-model="type_select_value" placeholder="请选择您的专利类型" >
                <el-option label="发明专利" value="faming"/>
                <el-option label="实用新型专利" value="new"/>
                <el-option label="软件著作权" value="softe"/>
              </el-select>
            </div>
          </el-col>
        </el-row>
<!--        <h4 style="text-align: center;margin: 28px 0px 0px 0px;">专利申报表</h4>-->
        <el-button @click="openPatentDialog" style="float: right;margin-right: 15px" type="text">新增</el-button>
<!--        <el-button style="float: right;margin-right: 15px" type="text">修改</el-button>-->
        <el-table
          :data="patentData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="patentname"
            label="专利名称"
          />
          <el-table-column
            prop="patentnum"
            label="专利编号"
          />
          <el-table-column
            prop="patentpeople"
            label="申请人(单位)"
          />
          <el-table-column
            prop="patentsub"
            label="专利类型"
          />
          <el-table-column
            prop="patentime"
            label="申请时间"
          />
          <el-table-column
            prop="enclosure"
            label="附件"
          />
          <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button size="mini" type="text" icon="el-icon-edit" @click="patentUpdate(scope.row)">修改</el-button>
              <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: center; margin-top: 10px;">
          <el-pagination
            @current-change="2"
            :current-page="1"
            :page-size="pagesize"
            :page-sizes="[5, 10]"
            :total="tableData.length"
            layout="total, sizes, prev, pager, next, jumper"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="专著登记">
        <h4 style="text-align: center;margin: 28px 0px 0px 0px;">专著登记表</h4>
        <el-button @click="openMonographsDialog" style="float: right;margin-right: 15px" type="text">新增</el-button>
<!--        <el-button style="float: right;margin-right: 15px" type="text">修改</el-button>-->
        <el-table
          :data="monographData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="monographname"
            label="专著名称"
            />
          <el-table-column
            prop="monographsub"
            label="专著类型"
            />
          <el-table-column
            prop="monographpublication"
            label="发表刊物"
            />
          <el-table-column
            prop="monographpress"
            label="出版社"
           />
          <el-table-column
            prop="monographtime"
            label="发表时间"
           />
          <el-table-column
            prop="enclosure"
            label="附件"
          />
          <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button size="mini" type="text" icon="el-icon-edit" @click="monographUpdate(scope.row)">修改</el-button>
              <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: center; margin-top: 10px;">
          <el-pagination
            @current-change="2"
            :current-page="1"
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
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="专利名称">
            <el-input v-model="form.patentname"/>
          </el-form-item>
          <el-form-item label="专利编号">
            <el-input v-model="form.patentnum"/>
          </el-form-item>
          <el-form-item label="申请人（单位）">
            <el-input v-model="form.patentpeople"/>
          </el-form-item>
          <el-form-item label="专利类型">
            <el-input v-model="form.patentsub"/>
          </el-form-item>
          <el-form-item label="申请时间">
            <el-col :span="11">
              <el-date-picker v-model="form.patenttime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload
              v-model="form.patentenclosure"
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
          <el-button @click="dialogVisiblePatent = false">取 消</el-button>
          <el-button type="primary" @click="addPatent" >确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="dialogVisibleMonographs" title="专著登记">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="专著名称">
            <el-input v-model="form.monographname"/>
          </el-form-item>
          <el-form-item label="专著类型">
            <el-input v-model="form.monographsub"/>
          </el-form-item>
          <el-form-item label="负责人">
            <el-input v-model="form.monographpublication"/>
          </el-form-item>
          <el-form-item label="出版社">
            <el-input v-model="form.monographpress"/>
          </el-form-item>
          <el-form-item label="发表时间">
            <el-col :span="11">
              <el-date-picker v-model="form.monographtime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload
              v-model="form.monographsenclosure"
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
          <el-button @click="dialogVisibleMonographs = false">取 消</el-button>
          <el-button type="primary" @click="addMonographs">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="dialogVisibleThrees" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="项目课题名称">
            <el-input v-model="form.projectname"/>
          </el-form-item>
          <el-form-item label="项目角色">
            <el-select v-model="form.projectrole" style="width: 310px" placeholder="请选择">
              <el-option label="主持" value="1"></el-option>
              <el-option label="参与" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目级别">
            <el-input v-model="form.projectclass"/>
          </el-form-item>
          <el-form-item label="项目负责人">
            <el-input v-model="form.projectpeople"/>
          </el-form-item>
          <el-form-item label="发表时间">
            <el-col :span="11">
              <el-date-picker v-model="form.projecttime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload
              v-model="form.enclosure"
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
          <el-button @click="dialogVisibleThrees = false">取 消</el-button>
          <el-button type="primary" @click="addThrees">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="dialogVisible" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="论文名称">
            <el-input v-model="form.papername"/>
          </el-form-item>
          <el-form-item label="是否第一作者">
            <el-select v-model="form.isauthor" style="width: 310px" placeholder="请选择">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="论文类型">
            <el-select v-model="form.papersub" placeholder="请选择您的学术论文类型" >
              <el-option label="中文核心论文" value="hexin"/>
              <el-option label="三大检索论文" value="threesearch"/>
              <el-option label="其他" value="others"/>
            </el-select>
          </el-form-item>
          <el-form-item label="发表刊物">
            <el-input v-model="form.publication"/>
          </el-form-item>
          <el-form-item label="出版社">
              <el-input v-model="form.press"/>
          </el-form-item>
          <el-form-item label="发表时间">
            <el-col :span="11">
              <el-date-picker v-model="form.pubtime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload
              v-model="form.enclosure"
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
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addChinesePaper">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManyTimesCollection',
  data() {
    return {
      title:'',
      type_select_project:'',
      type_select_paper:'',
      type_select_value:'',
      pagesize: 10,
      // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      form: {},
      options: [{
        value: '1',
        label: '是'
      }, {
        value: '2',
        label: '否'
      }],
      value: '',
      value1: '',
      dialogVisiblePatent:false,
      dialogVisible:false,
      dialogVisibleMonographs:false,
      dialogVisibleNoncore:false,
      dialogVisibleThrees:false,
      tableData: [{
        papername: '大数据研究',
        isauthor: '是',
        publication: '软件学报',
        press:'北京出版社',
        pubtime:'2020-8-20',
        enclosure:'附件材料.doc',
        papersub:'中文核心'
      }, {
        papername: '自然语言问答系统',
        isauthor: '是',
        publication: '计算机学报',
        press:'北京出版社',
        pubtime:'2020-8-20',
        enclosure:'附件材料.doc',
        papersub:'中文核心'
      }, {
        papername: '供电系统研究',
        isauthor: '是',
        publication: '辅助设计',
        press:'北京出版社',
        pubtime:'2020-8-20',
        enclosure:'附件材料.doc',
        papersub:'中文核心'
      },{
        papername: '大数据下的可视化进展',
        isauthor: '是',
        publication: '计算机学报',
        press:'北京出版社',
        pubtime:'2020-8-20',
        enclosure:'附件材料.doc',
        papersub:'中文核心'
      },{
        papername: '大屏可视化',
        isauthor: '是',
        publication: '计算机学报',
        press:'北京出版社',
        pubtime:'2020-8-20',
        enclosure:'附件材料.doc',
        papersub:'其他'
      },{
        papername: '智慧校园建设',
        isauthor: '是',
        publication: '计算机学报',
        press:'北京出版社',
        pubtime:'2020-8-20',
        enclosure:'附件材料.doc',
        papersub:'三大检索'
      }
      ],
      projectData: [{
        projectname: '大数据大屏可視化',
        projectrole: '主持',
        projectclass: '国家级',
        projectpeople:'王老师',
        projecttime:'2020-8-20',
        enclosure:'附件材料.doc',
      }, {
        projectname: '智能语音识别系统',
        projectrole: '主持',
        projectclass: '国家级',
        projectpeople:'王老师',
        projecttime:'2020-8-20',
        enclosure:'附件材料.doc',
      }, {
        projectname: '智慧校园',
        projectrole: '主持',
        projectclass: '省级',
        projectpeople:'王老师',
        projecttime:'2020-8-20',
        enclosure:'附件材料.doc',
      },{
        projectname: '教育厅报考项目',
        projectrole: '参与',
        projectclass: '国家级',
        projectpeople:'王老师',
        projecttime:'2020-8-20',
        enclosure:'附件材料.doc',
      },{
        projectname: '网络安全建设',
        projectrole: '主持',
        projectclass: '国家级',
        projectpeople:'王老师',
        projecttime:'2020-8-20',
        enclosure:'附件材料.doc',
      }
      ],
      patentData: [{
        patentname: '转动机械自动化手臂',
        patentnum: 'IXSD988766',
        patentsub: '发明专利',
        patentpeople:'王老师',
        patentime:'2020-8-20',
        enclosure:'附件材料.doc',
      }, {
        patentname: 'AlTiC纳米硬质涂层',
        patentnum: 'IXSD983216',
        patentsub: '发明专利',
        patentpeople:'王老师',
        patentime:'2020-8-20',
        enclosure:'附件材料.doc',
      }, {
        patentname: '高模量超亲水生物支架',
        patentnum: 'IXSD087766',
        patentsub: '实用新型专利',
        patentpeople:'王老师',
        patentime:'2020-8-20',
        enclosure:'附件材料.doc',
      },{
        patentname: '集成电路设计图',
        patentnum: 'IXSk944766',
        patentsub: '发明专利',
        patentpeople:'王老师',
        patentime:'2020-8-20',
        enclosure:'附件材料.doc',
      },{
        patentname: '智能推荐系统',
        patentnum: 'Iewd980866',
        patentsub: '软件著作权',
        patentpeople:'王老师',
        patentime:'2020-8-20',
        enclosure:'附件材料.doc',
      }
      ],
      monographData: [{
        monographname: '语言入门',
        monographpublication: '王国勇',
        monographpress: '北京大学出版社',
        monographtime:'2020-8-20',
        enclosure:'附件材料.doc',
        monographsub:'自然科学'
      }, {
        monographname: '教育的未来',
        monographpublication: '王秦辉',
        monographpress: '机械工业出版社',
        monographtime:'2020-8-20',
        enclosure:'附件材料.doc',
        monographsub:'教育学'
      }, {
        monographname: '牛津国际关系手册',
        monographpublication: '詹朱宁',
        monographpress: '译林出版社',
        monographtime:'2020-8-20',
        enclosure:'附件材料.doc',
        monographsub:'人文与社会科学'
      },{
        monographname: '我的渡世日记',
        monographpublication: '吴伟丽',
        monographpress: '上海人民出版社',
        monographtime:'2020-8-20',
        enclosure:'附件材料.doc',
        monographsub:'人文与社会科学'
      }
      ],
      fileList: '',

    }
  },
  methods: {
    reset() {
      this.form = {
        projecttime:undefined,
        projectpeople:undefined,
        projectclass:undefined,
        projectrole:undefined,
        projectname:undefined,
        papersub:undefined,
        papername: undefined,
        isauthor: undefined,
        publication: undefined,
        press:undefined,
        pubtime:undefined,
        enclosure:undefined,
        patentname:undefined,
        patentnum:undefined,
        patentsub:undefined,
        applicant:undefined,
        patentpress:undefined,
        patenttime:undefined,
        patentenclosure:undefined,
        monographname:undefined,
        monographsub: undefined,
        monographpublication: undefined,
        monographpress:undefined,
        monographtime:undefined,
        monographsenclosure:undefined,
        threesname: undefined,
        threesisauthor: undefined,
        threespublication: undefined,
        threespress:undefined,
        threespubtime:undefined,
        threesenclosure:undefined,
        noncorename: undefined,
        noncoreisauthor: undefined,
        noncorepublication: undefined,
        noncorepress:undefined,
        noncorepubtime:undefined,
        noncoreenclosure:undefined
      };
    },
    onSubmit() {
      console.log('submit!')
    },
    submit(){
      this.$message({
        type:'success',
        message:'提交成功'
      })
    },
    handleUpdate(row){
      this.dialogVisible = true;
      this.form = row;
      this.title = "修改学术论文";
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    openDialog: function() {
      console.log('我点了')
      this.title = "新增学术论文";
      this.dialogVisible = true;
      this.reset()
    },
    addChinesePaper: function() {
      this.$message({
        type:'success',
        message:'提交成功'
      })
      this.dialogVisible = false
    },
    addPatent: function() {
      console.log('我点了')
        this.$message({
          type:'success',
          message:'提交成功'
        })
      this.dialogVisiblePatent = false
    },
    openPatentDialog: function() {
      this.reset()
      this.title ="新增专利登记"
      console.log('我点了')
      this.dialogVisiblePatent = true
    },
    patentUpdate(row){
      this.dialogVisiblePatent = true
      this.title ="修改专利登记"
      this.form = row;
    },
    addMonographs: function() {
      this.$message({
        type:'success',
        message:'提交成功'
      })
      this.dialogVisibleMonographs = false
    },
    openMonographsDialog: function() {
      this.reset()
      this.title = '新增专著登记'
      console.log('我点了')
      this.dialogVisibleMonographs = true
    },
    monographUpdate(row){
      this.title = '修改专著登记'
      this.form = row
      this.dialogVisibleMonographs = true
    },
    addNoncore: function() {
      this.$message({
        type:'success',
        message:'提交成功'
      })
      this.dialogVisibleNoncore = false
    },
    openNoncoreDialog: function() {
      console.log('我点了')
      this.dialogVisibleNoncore = true
    },
    addThrees: function() {
      this.$message({
        type:'success',
        message:'提交成功'
      })
      this.dialogVisibleThrees = false
    },
    openThreesDialog: function() {
      this.reset()
      this.title = "新增项目课题"
      console.log('我点了')
      this.dialogVisibleThrees = true
    },
    projectUpdate(row){
      this.title = "修改项目课题"
      this.form = row;
      this.dialogVisibleThrees = true
    }

  }
}
</script>

<style scoped>

</style>
