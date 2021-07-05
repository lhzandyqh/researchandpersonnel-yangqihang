<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">基本信息</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="openJibenDialog">修改</el-button>
          </div>
          <div class="card-container">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">姓&#8195;&#8195;名：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.fullName }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.sex }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">民&#8195;&#8195;族：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.nation }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">出生年月：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.birthDate }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.nativePlace }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">职&#8195;&#8195;别：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.positionClass }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">身份证号：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.idCard }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">政治面目：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.politicalStatus }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">入党团时间：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.joinPartyTime }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">家庭住址：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.address }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">手机号码：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.phone }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">Email：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.email }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">任教学科：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.subject }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">部门：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.department }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">参加工作时间：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.dateToWork }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">工作状态：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.workStatus }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">聘用合同起始时间：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.contractStartDate }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">聘用合同终止时间：</span>
                  </div>
                  <div class="content">
                    <span>{{ personalInfo.contractEndDate }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding-top: 10px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder;color:#409EFF ">专业能力</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="openZhuanyeDialog">修改</el-button>
        </div>
        <div class="card-container">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职&#8195;&#8195;称：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbilityInfo.positionTitle}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称评定时间：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbilityInfo.positionTitleDate}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">岗位级别：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbilityInfo.positionLevel}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">荣誉称号：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbilityInfo.honorTitle}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">荣誉称号取得时间：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbilityInfo.honorTitleDate}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业发展称号：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbilityInfo.professionalDevTitle}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业发展称号取得时间：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbilityInfo.professionalDevTitleDate}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">任现职以来担任学校工作：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbilityInfo.onDuty}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任工作起始时间：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbilityInfo.dutyStartDate}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任工作结束时间：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbilityInfo.dutyEndDate}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-row>
    <el-row style="padding-top:10px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder;color:#409EFF ">工作经历</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="openDialog">增加</el-button>
        </div>
        <div class="card-container">
<!--          <div v-for=" (item, i) in workExperience" :key="item" class="itemContainer">-->
<!--            <el-row v-for="(item,i) in workExperienceInfo" :key="i" :label="item" :gutter="20" style="padding-top: 10px">-->
<!--&lt;!&ndash;              <el-col :span="1">&ndash;&gt;-->
<!--&lt;!&ndash;                <span style="font-weight: bolder">xxxx</span>&ndash;&gt;-->
<!--&lt;!&ndash;              </el-col>&ndash;&gt;-->
<!--              <el-col :span="4">-->
<!--                <div class="biaoqian">-->
<!--                  <span style="font-weight: bolder">工作单位：</span>-->
<!--                </div>-->
<!--                <div class="content">-->
<!--                  <span>{{item.placeOfWord}}</span>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="4">-->
<!--                <div class="biaoqian">-->
<!--                  <span style="font-weight: bolder">担任职务：</span>-->
<!--                </div>-->
<!--                <div class="content">-->
<!--                  <span>{{item.position}}</span>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="4">-->
<!--                <div class="biaoqian">-->
<!--                  <span style="font-weight: bolder">开始时间：</span>-->
<!--                </div>-->
<!--                <div class="content">-->
<!--                  <span>{{item.workStartDate}}</span>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="4">-->
<!--                <div class="biaoqian">-->
<!--                  <span style="font-weight: bolder">结束时间：</span>-->
<!--                </div>-->
<!--                <div class="content">-->
<!--                  <span>{{item.workEndDate}}</span>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="4">-->
<!--                <div class="biaoqian">-->
<!--                  <span style="font-weight: bolder">证明人：</span>-->
<!--                </div>-->
<!--                <div class="content">-->
<!--                  <span>{{item.witness}}</span>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="2" >-->
<!--                <template>-->
<!--                  <div >-->
<!--                    <span style="display: inline-block" ><el-button @click="editWorkExperience(item)" type="text" style="margin-top: -20px">修改</el-button></span>-->
<!--                    <span style="display: inline-block" ><el-button type="text" style="margin-top: -20px" @click="deleteTecWorkExpById(item)">删除</el-button></span>-->
<!--                  </div>-->
<!--                </template>-->
<!--              </el-col>-->
<!--            </el-row>-->
          <el-table
            :data="workExperienceInfo"
            style="width: 100% ;font-weight : bold"
            stripe
          >
            <el-table-column
              prop="placeOfWord"
              label="工作单位"
            />
            <el-table-column
              prop="position"
              label="担任职务"
            />
            <el-table-column
              prop="workStartDate"
              label="开始时间"
            />
            <el-table-column
              prop="workEndDate"
              label="结束时间"
            />
            <el-table-column
              prop="witness"
              label="证明人"
            />
            <el-table-column
              prop="remarks"
              label="备注"
            />
<!--            <el-table-column-->
<!--              prop="publishTime"-->
<!--              label="发表时间"-->
<!--            />-->
<!--            <el-table-column-->
<!--              prop="attachment"-->
<!--              label="附件"-->
<!--            />-->
            <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
              <template slot-scope="scope">
                <span style="display: inline-block" ><el-button @click="editWorkExperience(scope.row)" type="text" style="margin-top: -20px">修改</el-button></span>
                <span style="display: inline-block" ><el-button type="text" style="margin-top: -20px" @click="deleteTecWorkExpById(scope.row)">删除</el-button></span>
                <!--                    <span style="display: inline-block" ><el-button type="text" style="margin-top: -20px" @click="deleteTecWorkExpById(item)">删除</el-button></span>-->
<!--                <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)">修改</el-button>-->
<!--                <el-button size="mini" type="text" icon="el-icon-delete" @click="deletePapersInfos(scope.row)" style="color: red">删除</el-button>-->
              </template>
            </el-table-column>
          </el-table>
          </div>
      </el-card>
    </el-row>
    <div>
      <el-dialog :visible.sync="dialogVisible" title="增加工作经历">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="工作单位">
            <el-input v-model="form.placeOfWord"/>
          </el-form-item>
          <el-form-item label="担任职务">
            <!--            <el-input v-model="form.zhiwu"/>-->
            <el-input v-model="form.position"/>
          </el-form-item>
          <el-form-item label="证明人">
            <el-input v-model="form.witness"/>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.workStartDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="form.workEndDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.remarks"/>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notAddWorkExperience">取 消</el-button>
          <el-button type="primary" @click="confirmAddWorkExperience">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="editDialogVisible" title="修改工作经历">
        <el-form ref="form" v-model="editform" label-width="100px">
          <el-form-item label="工作单位">
            <el-input v-model="editform.placeOfWord"/>
          </el-form-item>
          <el-form-item label="担任职务">
            <!--            <el-input v-model="editform.zhiwu"/>-->
            <el-input v-model="editform.position"/>
          </el-form-item>
          <el-form-item label="证明人">
            <el-input v-model="editform.witness"/>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-col :span="11">
              <el-date-picker v-model="editform.workStartDate" value-format=" yyyy-MM-dd" format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="editform.workEndDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="editform.remarks"/>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditWorkExperience">取 消</el-button>
          <el-button type="primary" @click="confirmEditWorkExperience">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="zhuanyeDialogVisible" title="修改专业能力" width="80%">
        <el-row>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">职称：</span>
              </div>
              <div class="content">
                <el-input v-model="professionalAbilityForm.positionTitle" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">职称评定时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="professionalAbilityForm.positionTitleDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">岗位级别：</span>
              </div>
              <div class="content">
                <el-input v-model="professionalAbilityForm.positionLevel" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业发展称号：</span>
              </div>
              <div class="content">
                <el-input v-model="professionalAbilityForm.professionalDevTitle" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业发展称号取得时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="professionalAbilityForm.professionalDevTitleDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">荣誉称号：</span>
              </div>
              <div class="content">
                  <el-input v-model="professionalAbilityForm.honorTitle" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">荣誉称号取得时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="professionalAbilityForm.honorTitleDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">任现职以来担任学校工作：</span>
              </div>
              <div class="content">
                  <el-input v-model="professionalAbilityForm.onDuty" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">担任工作起始时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="professionalAbilityForm.dutyStartDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">担任工作结束时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="professionalAbilityForm.dutyEndDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditProfessionalAbility">取 消</el-button>
          <el-button type="primary" @click="confirmEditProfessionalAbility">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="basicDialogVisible" title="修改基本信息" width="80%">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">姓&#8195;&#8195;名：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.fullName" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
              </div>
              <div class="content">
                <el-select v-model="basicForm.sex" style="width: 185px" placeholder="请选择">
                  <el-option label="男" value="男"/>
                  <el-option label="女" value="女"/>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">民&#8195;&#8195;族：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.nation"  placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">出生年月：</span>
              </div>
              <div class="content" style="width: 185px">
                <el-date-picker v-model="basicForm.birthDate"  type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.nativePlace"  placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">职&#8195;&#8195;别：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.positionClass" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">身份证号：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.idCard" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">政治面目：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.politicalStatus" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder;">&#8195;&#8195;&#8195;入党团时间：</span>
              </div>
              <div class="content" style="width: 176px;padding: 0 0 ">
                <el-date-picker v-model="basicForm.joinPartyTime" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">家庭住址：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.address" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">手机号码：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.phone"  placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">Email：</span>
              </div>
              <div class="content" style="width: 200px">
                <el-input v-model="basicForm.email" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">任教学科：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.subject" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">部&#8195;&#8195;门：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.department"  placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;参加工作时间：</span>
              </div>
              <div class="content" style="width: 155px;padding: 0 0">
                <el-date-picker v-model="basicForm.dateToWork"  type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">工作状态：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.workStatus" style="width: 185px" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;聘用合同起始时间：</span>
              </div>
              <div class="content" style="width: 160px">
                <el-date-picker v-model="basicForm.contractStartDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;聘用合同终止时间：</span>
              </div>
              <div class="content" style="width: 160px">
                <el-date-picker v-model="basicForm.contractEndDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditJiben">取 消</el-button>
          <el-button type="primary" @click="confirmEditJiben">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import { teacherGetBasicInforma, teacherEditBasicInfo,updateTeaProfessAbilityInfoById,updateWorkExp,insertWorkExp,deleteTecWorkExpById ,getWorkExp} from '@/api/teacherGetData'
export default {
  name: 'OneTimeCollection',
  mounted(){
    this.getBasic()
    this.getProfessionalAbilityInfo()
    this.getWorkExperienceInfo()
  },
  data() {
    return {
      sex:'',
      zhuanyeDialogVisible: false,
      dialogVisible: false,
      basicDialogVisible: false,
      editDialogVisible: false,
      editform: {
        // tecUsername: 10010
      },
      form: {

      },
      basicForm: {
      },
      professionalAbilityForm:{
      },
      personalInfo: {
      },
      professionalAbilityInfo: {
      },
      workExperienceInfo:[]
    }
  },
  methods: {
    reset () {
      this.form = {
        placeOfWord: '',
        position: '',
        witness: '',
        workStartDate: '',
        workEndDate: '',
        remarks: ''
      }
    },
    // 获取教师基本信息
    getBasic: function(){
      const prams = {
        tecUsername: localStorage.getItem('loginName')
      }
      teacherGetBasicInforma(prams).then(response=>{
        console.log('测试教师获取基本信息接口')
        console.log(response.data)
        this.personalInfo = response.data.data.baseInfo
        this.basicForm = response.data.data.baseInfo
      })
    },
    // 获取教师专业能力
    getProfessionalAbilityInfo: function() {
      const prams = {
        tecUsername: localStorage.getItem('loginName')
      }
      teacherGetBasicInforma(prams).then(response=>{
        console.log('测试教师获取专业能力接口');
        console.log(response.data);
        this.professionalAbilityInfo = response.data.data.professionalAbility
        this.professionalAbilityForm = response.data.data.professionalAbility
      })
    },
    // 获取教师工作经历
    getWorkExperienceInfo: function() {
      const prams = {
        tecUsername: localStorage.getItem('loginName')
      }
      getWorkExp(prams).then(response=>{
        console.log('测试教师获取工作经历接口');
        console.log(response.data);
        this.workExperienceInfo = response.data.data
      })
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
    change(){
      this.$message({
        type:'success',
        message:'修改成功'
      })
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
    openJibenDialog: function() {
      console.log('我点了我点了我点了')
      this.basicDialogVisible = true
    },
    openDialog: function() {
      this.reset()
      console.log('我点了')
      this.dialogVisible = true
    },
    openZhuanyeDialog: function() {
      this.zhuanyeDialogVisible = true
    },
    // 教师修改基本信息
    notEditJiben: function() {
      this.basicDialogVisible = false
    },
    confirmEditJiben: function() {
      console.log(Object.keys(this.basicForm).length)
      if(Object.keys(this.basicForm).length!==18){
        this.$message({
          type:'warning',
          message:'基本信息未填写完整，请检查后提交'
        })
      } else {
        console.log('测试基本信息修改提交参数')
        console.log(this.basicForm)
        var prams =  this.basicForm
        prams.tecUsername = localStorage.getItem('loginName')
        teacherEditBasicInfo(prams).then(response => {
          console.log('测试基本信息修改')
          console.log(response.data)
          this.getBasic()
          this.$message({
            type:'success',
            message:'修改成功'
          })
          this.basicDialogVisible = false
        })
      }
    },
    // 教师修改专业能力
    notEditProfessionalAbility: function() {
      this.zhuanyeDialogVisible = false
      // const prams = {
      //   infotype: '专业能力'
      // }
    },
    //教师修改专业能力
    confirmEditProfessionalAbility: function() {
      console.log(Object.keys(this.professionalAbilityForm).length)
      if (Object.keys(this.professionalAbilityForm).length !==10 ){
        this.$message({
          type:'warning',
          message:'基本信息未填写完整，请检查后提交'
        })
      } else {
        console.log('测试专业能力修改提交参数');
        console.log(this.professionalAbilityForm);
        var prams = this.professionalAbilityForm
        prams.tecUsername = localStorage.getItem('loginName')
        updateTeaProfessAbilityInfoById(prams).then(response => {
          console.log('测试专业能力修改');
          console.log(response.data);
          this.$message({
            type:'success',
            message:'修改成功'
          })
          this.zhuanyeDialogVisible = false
        })
      }
    },
    //教师新增工作经历
    notAddWorkExperience () {
     this.dialogVisible = false
    },
    confirmAddWorkExperience () {
      //先判断该对象非空键值对的长度,然后审核信息长度没有填完整的话提示信息
      let i = 0;
      for (let key in this.form) {
        if (this.form[key] == '') {
          continue
        } else {
          i ++
        }
      }
      console.log('form对象非空键值对长度' + i)
      console.log(Object.keys(this.form).length);
      if (i !==6 ){
        this.$message({
          type:'warning',
          message:'基本信息未填写完整，请检查后提交'
        })
      } else {
        console.log('测试教师新增工作经历提交参数');
        this.form.tecUsername = localStorage.getItem('loginName')
        console.log(this.form);
        const prams = this.form
        insertWorkExp(prams).then(response => {
          console.log('测试教师工作经历新增接口');
          console.log(response.data)
          // console.log(response.data)
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.dialogVisible = false;
          this.getWorkExperienceInfo()
        })
      }
    } ,
    //教师修改工作经历
    editWorkExperience (item) {
      console.log('我点了修改按钮');
      console.log(item)
      console.log(item.id)
      this.editDialogVisible = true;
      this.editform = item

    },
    // 教师修改工作经历
    notEditWorkExperience: function() {
      this.editDialogVisible = false
    },
    confirmEditWorkExperience: function() {
      console.log(Object.keys(this.editform).length)
      // if (Object.keys(this.editform).length !== 5) {
      //   this.$message({
      //     type:'warning',
      //     message:'基本信息未填写完整，请检查后提交'
      //   })
      // } else {
      console.log('测试工作经历修改提交参数');
      console.log(this.editform);
      var prams = this.editform
      updateWorkExp(prams).then(response => {
        console.log('测试工作经历修改');
        console.log(response.data);
        this.$message({
          type:'success',
          message:'修改成功'
        })
        this.editDialogVisible = false;
        this.getWorkExperienceInfo()
      })
    },
    //教师删除工作经历
    deleteTecWorkExpById (item) {
      // this.workId = item.id
      console.log('测试工作经历删除提交参数');
      console.log(item.id);
      const prams = {
        workId: item.id
      }
      deleteTecWorkExpById(prams).then(response => {
        console.log('测试工作经历删除');
        console.log(response.data);
        this.$message({
          type:'success',
          message:'删除成功'
        })
        this.getWorkExperienceInfo()
      })
    }
  }
}

</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 100%;
  }
  .single{
    display: inline-block;
  }
  .biaoqian{
    display: inline-block;
  }
  .content{
    display: inline-block;
  }
  .row-container{
    padding-top: 10px;
  }
  .button{
    display: inline-block;
    margin-left: 80px;
  }
  .card-container{
    margin-top: 10px;
  }
  .twoButton{
    display: inline-block;
  }
</style>

