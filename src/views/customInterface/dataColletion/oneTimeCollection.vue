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
                    <span>王老师</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
                  </div>
                  <div class="content">
                    <span>女</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">民&#8195;&#8195;族：</span>
                  </div>
                  <div class="content">
                    <span>汉</span>
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
                    <span>1980-3-2</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
                  </div>
                  <div class="content">
                    <span>北京</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">职&#8195;&#8195;别：</span>
                  </div>
                  <div class="content">
                    <span>讲师</span>
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
                    <span>234445198xxxxxxxxx</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">政治面目：</span>
                  </div>
                  <div class="content">
                    <span>党员</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">入党团时间：</span>
                  </div>
                  <div class="content">
                    <span>2003-2-3</span>
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
                    <span>北京市朝阳区xxxxxxxxxxxx</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">手机号码：</span>
                  </div>
                  <div class="content">
                    <span>12345678943</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">Email：</span>
                  </div>
                  <div class="content">
                    <span>222334424#ddd</span>
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
                    <span>计算机教学</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">部门：</span>
                  </div>
                  <div class="content">
                    <span>计算机学院</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">参加工作时间：</span>
                  </div>
                  <div class="content">
                    <span>2009.3.1</span>
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
                    <span>任职</span>
                  </div>
                </div>
              </el-col>

              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">聘用合同起始时间：</span>
                  </div>
                  <div class="content">
                    <span></span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">聘用合同终止时间：</span>
                  </div>
                  <div class="content">
                    <span></span>
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
                  <span>教授</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称评定时间：</span>
                </div>
                <div class="content">
                  <span>2013.5.4</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">岗位级别：</span>
                </div>
                <div class="content">
                  <span>教授</span>
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
                  <span>名誉教授</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">荣誉称号取得时间：</span>
                </div>
                <div class="content">
                  <span>2003.3.3</span>
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
                  <span>学科带头人</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业发展称号取得时间：</span>
                </div>
                <div class="content">
                  <span>2019.4.3</span>
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
                  <span>科研</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任工作起始时间：</span>
                </div>
                <div class="content">
                  <span>2003.3.3</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任工作结束时间：</span>
                </div>
                <div class="content">
                  <span>2003.3.4</span>
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
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="1">
                <span style="font-weight: bolder">xxx</span>
              </el-col>
              <el-col :span="4">
                <div class="biaoqian">
                  <span style="font-weight: bolder">工作单位：</span>
                </div>
                <div class="content">
                  <span>大学</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任职务：</span>
                </div>
                <div class="content">
                  <span>讲师</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="biaoqian">
                  <span style="font-weight: bolder">开始时间：</span>
                </div>
                <div class="content">
                  <span>2000</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="biaoqian">
                  <span style="font-weight: bolder">结束时间：</span>
                </div>
                <div class="content">
                  <span>xxxxxx</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="biaoqian">
                  <span style="font-weight: bolder">证明人：</span>
                </div>
                <div class="content">
                  <span>王老师</span>
                </div>
              </el-col>
              <el-col :span="2">
                <div >
                  <span style="display: inline-block" ><el-button type="text" style="margin-top: -20px">修改</el-button></span>
                  <span style="display: inline-block" ><el-button type="text" style="margin-top: -20px">删除</el-button></span>
                </div>
              </el-col>
            </el-row>
          </div>
      </el-card>
    </el-row>
    <div>
      <el-dialog :visible.sync="dialogVisible" title="增加工作经历">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="工作单位">
            <el-input v-model="form.danwei"/>
          </el-form-item>
          <el-form-item label="担任职务">
            <!--            <el-input v-model="form.zhiwu"/>-->
            <el-input v-model="form.zhiwu"/>
          </el-form-item>
          <el-form-item label="证明人">
            <el-input v-model="form.people"/>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.begindate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="form.overdate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.beizhu"/>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="editDialogVisible" title="修改工作经历">
        <el-form ref="form" :model="editform" label-width="100px">
          <el-form-item label="工作单位">
            <el-input v-model="editform.danwei"/>
          </el-form-item>
          <el-form-item label="担任职务">
            <!--            <el-input v-model="editform.zhiwu"/>-->
            <el-input v-model="editform.zhiwu"/>
          </el-form-item>
          <el-form-item label="证明人">
            <el-input v-model="editform.people"/>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-col :span="11">
              <el-date-picker v-model="editform.begindate" value-format=" yyyy-MM-dd" format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="editform.overdate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
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
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">职称评定时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker  value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">岗位级别：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
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
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业发展称号取得时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
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
                  <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">荣誉称号取得时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
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
                  <el-input placeholder="请输入内容"/>
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
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">担任工作结束时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button >取 消</el-button>
          <el-button type="primary" @click="change">确 定</el-button>
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
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
              </div>
              <div class="content">
                <el-select v-model="sex" style="width: 185px" placeholder="请选择">
                  <el-option label="男" value="1"/>
                  <el-option label="女" value="0"/>
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
                <el-input  placeholder="请输入内容"/>
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
                <el-date-picker  type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">职&#8195;&#8195;别：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
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
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">政治面目：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder;">&#8195;&#8195;&#8195;入党团时间：</span>
              </div>
              <div class="content" style="width: 176px;padding: 0 0 ">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
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
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">手机号码：</span>
              </div>
              <div class="content">
                <el-input  placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">Email：</span>
              </div>
              <div class="content" style="width: 200px">
                <el-input placeholder="请输入内容"/>
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
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">部&#8195;&#8195;门：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;参加工作时间：</span>
              </div>
              <div class="content" style="width: 155px;padding: 0 0">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;padding-right: 0px"/>
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
                <el-input style="width: 185px" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;聘用合同起始时间：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker type="month" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;聘用合同终止时间：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;padding-right: 0px"/>
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
  import { teacherGetBasicInforma } from '@/api/teacherGetData'
export default {
  name: 'OneTimeCollection',
  mounted(){
    this.getBasic()
  },
  data() {
    return {
      sex:'',
      zhuanyeDialogVisible: false,
      dialogVisible: false,
      basicDialogVisible: false,
      editDialogVisible: false,
      // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      form: {
        zhiwu: '',
        begindate: '',
        overdate: '',
        danwei: '',
        people: '',
        beizhu: ''
      },
      editform: {
        zhiwu: '',
        begindate: '',
        overdate: '',
        danwei: '',
        people: ''
      },
      options: [{
        value: 1,
        label: '东南',
        children: [{
          value: 2,
          label: '上海',
          children: [
            { value: 3, label: '普陀' },
            { value: 4, label: '黄埔' },
            { value: 5, label: '徐汇' }
          ]
        }, {
          value: 7,
          label: '江苏',
          children: [
            { value: 8, label: '南京' },
            { value: 9, label: '苏州' },
            { value: 10, label: '无锡' }
          ]
        }, {
          value: 12,
          label: '浙江',
          children: [
            { value: 13, label: '杭州' },
            { value: 14, label: '宁波' },
            { value: 15, label: '嘉兴' }
          ]
        }]
      }, {
        value: 17,
        label: '西北',
        children: [{
          value: 18,
          label: '陕西',
          children: [
            { value: 19, label: '西安' },
            { value: 20, label: '延安' }
          ]
        }, {
          value: 21,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 22, label: '乌鲁木齐' },
            { value: 23, label: '克拉玛依' }
          ]
        }]
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    getBasic: function(){
      const prams = {
        tid: 1
      }
      teacherGetBasicInforma(prams).then(response=>{
        console.log('测试教师获取基本信息接口')
        console.log(response.data)
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
      console.log('我点了')
      this.dialogVisible = true
    },
    openZhuanyeDialog: function() {
      this.zhuanyeDialogVisible = true
    },
    notEditJiben: function() {
      this.basicDialogVisible = false
      const prams = {
        infotype: '基础信息'
      }
    },
    confirmEditJiben: function() {
      this.$message({
        type:'success',
        message:'修改成功'
      })
      this.basicDialogVisible = false
    },
    notEditProfessionalAbility: function() {
      this.zhuanyeDialogVisible = false
      const prams = {
        infotype: '专业能力'
      }
    },
    confirmEditProfessionalAbility: function() {
      this.zhuanyeDialogVisible = false
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

