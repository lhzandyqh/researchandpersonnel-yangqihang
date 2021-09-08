<template>
  <div class="app-container">
    <el-row style="margin: 10px 10px 10px 20px">
      <el-col :span="24">
        <el-button  @click="switchType('add')" style="float: right; padding: 3px 0;margin-right: 15px" size="medium" type="text">新增结题</el-button>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      stripe
      style="width: 100%">
      <el-table-column
        prop="projectName"
        label="课题名称"
        />
      <el-table-column
        prop="reviewerExpert"
        label="结题评审专家"
        />
      <el-table-column
        prop="leader"
        label="项目负责人"
        />
      <el-table-column
        label="中期评议结果"
        align="center"
      >
        <template slot-scope="scope">
          <el-button @click="viewResultDetails(scope.row)" type="text" size="medium">查看</el-button>
        </template>
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="jietiDate"-->
<!--        label="结题答辩时间"-->
<!--        />-->
<!--      <el-table-column-->
<!--        prop="discussionResult"-->
<!--        label="结题评议结果"-->
<!--        />-->
      <el-table-column
        prop="appendix"
        label="附件资料"
        />
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
<!--          <el-button @click="changeinfo(scope.row);switchType('edit')" type="text" size="medium">修改</el-button>-->
          <el-button @click="viewdetails(scope.row)" type="text" size="medium">查看详细信息</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div>
      <el-dialog :visible.sync="showdetails" title="课题详细信息" width="600px" >
        <div class="clearfix">
          <el-row style="margin-top: 10px">
            <span style="font-weight: bolder; font-size: 15px">基本信息：</span>
          </el-row>
          <el-row  style="padding-top: 10px">
            <el-col >
              <div>
                <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '基本信息'">
                  <span class="detailName">{{item.contentName}}：</span>
                  <span class="detailValue">{{item.contentValue}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px">
            <span style="font-weight: bolder; font-size: 15px">项目信息：</span>
          </el-row>
          <el-row  style="padding-top: 10px">
            <el-col >
              <div>
                <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '项目信息'">
                  <span class="detailName">{{item.contentName}}：</span>
                  <span class="detailValue">{{item.contentValue}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px">
            <span style="font-weight: bolder; font-size: 15px">预算信息：</span>
          </el-row>
          <el-row  style="padding-top: 10px">
            <el-col >
              <div>
                <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '预算信息'">
                  <span class="detailName">{{item.contentName}}：</span>
                  <span class="detailValue">{{item.contentValue}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-divider/>
        <el-row :gutter="20" style="padding-top: 5px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">项目申报书：</span>
                <el-button type="text" >查看</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
        <!--        <div class="foot">-->
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="showdetails = false">关 闭</el-button>
          <!--                    <el-button @click="viewResultVisible = false">取 消</el-button>-->
          </span>

        <!--        <div v-for="(item, key) in detailTable" :key="key">-->
        <!--          <div  class="a">基本信息：-->
        <!--            <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '基本信息'">-->
        <!--              <span class="biaoqian">{{item.contentName}}：</span>-->
        <!--              <span class="content">{{item.contentValue}}</span>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="a">项目信息：-->
        <!--            <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '项目信息'">-->
        <!--              <span class="biaoqian">{{item.contentName}}：</span>-->
        <!--              <span class="content">{{item.contentValue}}</span>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="a">预算信息：-->
        <!--            <div v-for="(item, key) in detailTable" :key="key" v-if="item.type === '预算信息'">-->
        <!--              <span class="biaoqian">{{item.contentName}}：</span>-->
        <!--              <span class="content">{{item.contentValue}}</span>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <span class="detailName">{{item.contentName}}：</span>-->
        <!--          <span class="detailValue">{{item.contentValue}}</span>-->
        <!--          <div class="single">-->
        <!--            <div class="biaoqian">-->
        <!--              <span>{{item.contentName}}：</span>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="single">-->
        <!--            <div class="biaoqian">-->
        <!--              <span>{{item.contentValue}}</span>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        <el-tabs v-model="activeName">-->
        <!--          <el-tab-pane label="基本信息" name="first">-->
        <!--            <el-card class="box-card">-->
        <!--              <div class="card-container">-->
        <!--                <el-row :gutter="20" style="padding-top: 5px">-->
        <!--                  <el-col :span="8">-->
        <!--                    <span style="font-weight: bolder;float: left;font-size: 16px">项目信息：</span>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder;">课题名称：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.projectName}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">中期评审专家：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.reviewerExpert}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">项目负责人：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.leader}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">中期答辩时间：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.zhongqiDate}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">中期评议结果：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.discussionResult}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">附件资料：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.appendix}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 20px">-->
        <!--                  <el-col :span="8">-->
        <!--                    <span style="font-weight: bolder;float: left;font-size: 16px">团队成员：</span>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">成员1姓名：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.member1}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">民族：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.nation1}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职称：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.positionTitle1}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职务：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.duty1}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">成员2姓名：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.member2}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">民族：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.nation2}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职称：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.positionTitle2}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职务：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.duty2}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">成员3姓名：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.member3}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">民族：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.nation3}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职称：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.positionTitle3}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职务：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span>{{detailTableData.duty3}}</span>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--              </div>-->
        <!--            </el-card>-->
        <!--          </el-tab-pane>-->
        <!--          <el-tab-pane label="课题论证" name="second">-->
        <!--            <el-card class="box-card">-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="8">-->
        <!--                  <span style="font-weight: bolder;float: left;font-size: 16px">课题论证：</span>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="24">-->
        <!--                  <p>{{detailTableData.projectDemonstration}}</p>-->
        <!--&lt;!&ndash;                  <p>这里主要用到了v-html,  如果只用v-html只能解决 option中的显示问题，无法解决选中后input中的显示。这里自己找了一个方法toBlank，暂时解决了。本人后端开发，刚接触vue，如果处理的不合适请大神指点&ndash;&gt;-->
        <!--&lt;!&ndash;                    企鹅号:420026004  有问题大家可以交流</p>&ndash;&gt;-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--            </el-card>-->
        <!--          </el-tab-pane>-->
        <!--          <el-tab-pane label="研究基础" name="third">-->
        <!--            <el-card class="box-card">-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="8">-->
        <!--                  <span style="font-weight: bolder;float: left;font-size: 16px">研究基础：</span>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="24">-->
        <!--                  <p>{{detailTableData.researchBasis}}</p>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--            </el-card>-->
        <!--          </el-tab-pane>-->
        <!--          <el-tab-pane label="条件保障" name="fourth">-->
        <!--            <el-card class="box-card">-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="8">-->
        <!--                  <span style="font-weight: bolder;float: left;font-size: 16px">条件保障：</span>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="24">-->
        <!--                  <p>{{detailTableData.conditionGuarantee}}</p>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--            </el-card>-->
        <!--          </el-tab-pane>-->
        <!--        </el-tabs>-->
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="changeketi" :title="title" width="600px" style="padding-left: 200px">
        <!--        <el-tabs v-model="activeName">-->
        <el-form ref="form" :model="form" label-width="100px" style="margin-top: 40px">
          <el-form-item label="项目名称:">
            <el-select v-model="form.projectRole" style="width: 50% " placeholder="请选择">
              <el-option label="主持" value="主持"></el-option>
              <el-option label="参与" value="参与"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="评审专家:">
            <span class="expert">&#8195;xx</span>
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
              :on-success="handleSubmitSuccess"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary">上传中期报告书</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
        <!--          </div>-->
        <!--          <el-tab-pane label="基本信息" name="first">-->
        <!--            <el-card class="box-card1">-->
        <!--              <div class="card-container">-->
        <!--                <el-row :gutter="20" style="padding-top: 5px">-->
        <!--                  <el-col :span="8">-->
        <!--                    <span style="font-weight: bolder;float: left;font-size: 16px">项目信息：</span>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder;">课题名称：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <el-input v-model="editForm.projectName" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">中期评审专家：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <el-input v-model="editForm.reviewerExpert" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">项目负责人：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <el-input v-model="editForm.leader" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">中期答辩时间：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content" style="width: 185px">-->
        <!--                        <el-date-picker  v-model="editForm.zhongqiDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">中期评议结果：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <el-input v-model="editForm.discussionResult" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="8">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">附件资料：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <span></span>-->
        <!--                        <el-upload-->
        <!--                          class="upload-demo"-->
        <!--                          name="files"-->
        <!--                          :limit="1"-->
        <!--                          :file-list="fileList"-->
        <!--                          ref="batchUpload"-->
        <!--                          action="http://58.119.112.15:11002/upload/fileUpload"-->
        <!--                          :on-remove="handleRemove"-->
        <!--                          :before-remove="beforeRemove"-->
        <!--                          :on-success="handleSubmitSuccess"-->
        <!--                          :auto-upload="false"-->
        <!--                        >-->
        <!--                          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
        <!--                          &lt;!&ndash;              <el-button style="margin-left: 10px;background: #42b983" size="small" type="success" @click="submit">上传</el-button>&ndash;&gt;-->
        <!--                        </el-upload>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 20px">-->
        <!--                  <el-col :span="8">-->
        <!--                    <span style="font-weight: bolder;float: left;font-size: 16px">团队成员：</span>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                  <el-col :span="7">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">成员1姓名：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content"  style="width: 150px">-->
        <!--                        <el-input v-model="editForm.member1" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="5">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">民族：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content" style="width: 110px">-->
        <!--                        <el-input v-model="editForm.nation1" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职称：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <el-input v-model="editForm.positionTitle1" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职务：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <el-input v-model="editForm.duty1" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                  <el-col :span="7">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">成员2姓名：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content" style="width: 150px">-->
        <!--                        <el-input v-model="editForm.member2" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="5">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">民族：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content" style="width: 110px">-->
        <!--                        <el-input v-model="editForm.nation2" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职称：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <el-input v-model="editForm.positionTitle2" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职务：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <el-input v-model="editForm.duty2" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--                <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                  <el-col :span="7">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">成员3姓名：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content" style="width: 150px">-->
        <!--                        <el-input v-model="editForm.member3" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="5">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">民族：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content" style="width: 110px">-->
        <!--                        <el-input v-model="editForm.nation3" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职称：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <el-input v-model="editForm.positionTitle3" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                  <el-col :span="6">-->
        <!--                    <div class="single">-->
        <!--                      <div class="biaoqian">-->
        <!--                        <span style="font-weight: bolder">职务：</span>-->
        <!--                      </div>-->
        <!--                      <div class="content">-->
        <!--                        <el-input v-model="editForm.duty3" placeholder="请输入内容"/>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-col>-->
        <!--                </el-row>-->
        <!--              </div>-->
        <!--            </el-card>-->
        <!--          </el-tab-pane>-->
        <!--          <el-tab-pane label="课题论证" name="second">-->
        <!--            <el-card class="box-card1">-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="8">-->
        <!--                  <span style="font-weight: bolder;float: left;font-size: 16px">课题论证：</span>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="24">-->
        <!--                  <el-input v-model="editForm.projectDemonstration" type="textarea" :rows="10" size="medium" placeholder="请输入内容"/>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--            </el-card>-->
        <!--          </el-tab-pane>-->
        <!--          <el-tab-pane label="研究基础" name="third">-->
        <!--            <el-card class="box-card1">-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="8">-->
        <!--                  <span style="font-weight: bolder;float: left;font-size: 16px">研究基础：</span>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="24">-->
        <!--                  <el-input v-model="editForm.researchBasis" type="textarea" :rows="10" size="medium" placeholder="请输入内容"/>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--            </el-card>-->
        <!--          </el-tab-pane>-->
        <!--          <el-tab-pane label="条件保障" name="fourth">-->
        <!--            <el-card class="box-card1">-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="8">-->
        <!--                  <span style="font-weight: bolder;float: left;font-size: 16px">条件保障：</span>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--              <el-row :gutter="20" style="padding-top: 10px">-->
        <!--                <el-col :span="24">-->
        <!--                  <el-input v-model="editForm.conditionGuarantee" type="textarea" :rows="10" size="medium" placeholder="请输入内容"/>-->
        <!--                </el-col>-->
        <!--              </el-row>-->
        <!--            </el-card>-->
        <!--          </el-tab-pane>-->
        <!--        </el-tabs>-->
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEdit">取 消</el-button>
          <el-button @click="confirmEdit" type="primary">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog
        title="专家评审意见"
        :visible.sync="viewResultVisible"
        width="40%"
        :before-close="handleClose">
        <span class="resultTitle">xxxxxxxxdasdasdasdaodsjaiosdjaiodsaoishdaiohdsaoihsdaoihdoaihdsaoihdsoiahdoiahdoiahsdoiahdoiahdoiahdoaihxx</span>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="viewResultVisible = false">关 闭</el-button>
          <!--          <el-button @click="viewResultVisible = false">取 消</el-button>-->
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {getProjectConclusion, insertProjectConclusion, updateProjectConclusion} from '@/api/tecProjectManagement'
export default {
  name: 'ProjectFinal',
  data() {
    return {
      form: {},
      currentPage: 1,
      pageSize: 5,
      changeketi:false,
      activeName: 'first',
      showdetails: false,
      viewResultVisible: false,
      detailTableData:{},
      title : '',
      a : 0,
      fileList: [],
      editForm :{
        submitPersonTid: localStorage.getItem('loginName')
      },
      tableData: [{
        date: '2018-05-02',
        score:'优秀',
        name: '学生心理模型测评',
        people:'王老师',
        ziliao:'项目结题汇总.pdf'

      }, {
        date: '2019-03-04',
        score:'良好',
        name: '自然语言处理问答系统',
        people:'刘老师',
        ziliao:'系统设计结题报告.doc'

      }, {
        date: '2019-12-01',
        name: '高点探测智能分析',
        score:'优秀',
        people:'李老师',
        ziliao:'结题分析报告.doc'
      }, {
        date: '2020-03-01',
        name: 'NLP语言智能识别',
        score:'优秀',
        people:'李老师',
        ziliao:'结题.doc'
      }]
    }
  },
  mounted() {
    this.getProjectConclusion()
  },
  methods: {
    reset () {
      this.editForm = {
        appendix: undefined,
        conditionGuarantee: undefined,
        discussionResult: undefined,
        duty1: undefined,
        duty2: undefined,
        duty3: undefined,
        leader: undefined,
        member1: undefined,
        member2: undefined,
        member3: undefined,
        nation1: undefined,
        nation2: undefined,
        nation3: undefined,
        positionTitle1: undefined,
        positionTitle2: undefined,
        positionTitle3: undefined,
        projectDemonstration: undefined,
        projectName: undefined,
        researchBasis: undefined,
        reviewerExpert: undefined,
        jietiDate: undefined
      }
    },
    viewResultDetails(row) {
      this.viewResultVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    viewdetails(row){
      this.showdetails = true
      this.detailTableData = row
    },
    changeinfo(row){
      // this.changeketi = true
      this.editForm = row
    },
    submit(){
      this.changeketi = false
      this.$message({
        type:'success',
        message:'提交成功'
      })
    },
    // 分页
    handleSizeChange(val) {
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    // 获取项目结题所有信息
    getProjectConclusion () {
      const prams = {
        submitPersonTid: localStorage.getItem('loginName')
      }
      getProjectConclusion(prams).then(response => {
        console.log('测试教师获取项目结题所有信息');
        console.log(response.data);
        this.tableData = response.data.data
      })
    },
    // 教师新增和修改项目结题信息
    switchType(type) {
      if (type === 'add') {
        console.log('新增结题')
        this.changeketi = true;
        this.reset()
        this.title = '新增课题结题';
        this.a = 0
      } else {
        console.log('修改结题')
        this.changeketi = true;
        this.title = '修改课题结题';
        this.a = 1
      }
    },
    notEdit() {
      this.changeketi = false;
    },
    confirmEdit (row) {
      console.log(this.a);
      console.log(row)
      if (this.a === 0) {
        // console.log('测试新增')
        console.log(Object.keys(this.editForm).length);
        console.log('测试教师新增项目结题提交参数');
        console.log(this.editForm);
        const prams = this.editForm
        prams.submitPersonTid = localStorage.getItem('loginName')
        insertProjectConclusion (prams).then(response => {
          console.log('测试课题结题新增接口');
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.changeketi = false;
        })
      } else {
        // console.log('测试修改')
        console.log(this.editForm.id);
        console.log(Object.keys(this.editForm).length);
        console.log('测试课题项目修改参数');
        console.log(this.editForm);
        const prams = this.editForm
        prams.submitPersonTid = localStorage.getItem('loginName')
        updateProjectConclusion(prams).then(response => {
          console.log('测试课题结题修改信息接口');
          console.log(response.data);
          this.$message({
            type: 'success',
            message: '修改成功'
          });
          this.changeketi = false;
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
        this.editForm.fileUrl = response.data.success
      } else {
        this.$message.error('上传失败，错误'+ response.code)
      }
    }
  }
}
</script>

<style scoped>
  /deep/ .el-dialog__body{
    padding-top: 0px;
    padding-bottom: 0px;
  }
  /deep/ .el-card__body{
    padding-top: 0px;
  }
  .box-card {
    width: 100%;
    height: 250px;
  }
  .box-card1{
    width: 100%;
    height: 350px;
  }

  .single{
    display: inline-block;
    float:left;
    font-size: 15px;
  }
  .biaoqian{
    display: inline-block;
  }
  .content{
    display: inline-block;
  }
  .card-container{
    margin-top: 10px;
  }
  .fenye{
    text-align: center;
    margin-top: 20px;
  }
  .expert {
    display: inline-block;
    width: 50%;
    border-radius: 5px;
    border-color: rgba(0,0,0,0.1);
    border-style: solid ;
    border-width: 1px;
    /*background-color: blue;*/
  }
  .detailName {
    float: left;
    /*display: inline-block;*/
    width: 90px;
    /*height: 20px;*/
    /*line-height: 20px;*/
    font-weight: 700

  }
  .detailValue {
    float: left;
    /*display: inline-block;*/
    width: 160px;
    font-weight: 400
  }
  .resultTitle {
    display: inline-block;
    width: 100%;
    height: 300px;
    font-size: 16px;
    padding-left: 1rem ;
    margin-top: 15px;
    margin-bottom: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0,0,0,0.3);
    border-radius: 3px;
  }
</style>
