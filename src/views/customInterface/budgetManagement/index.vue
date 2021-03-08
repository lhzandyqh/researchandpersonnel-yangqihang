<template>
    <div class="app-container">
      <div v-if="roles==='教师'" class="yusuan">
        <el-row :gutter="20">
          <div style="display: flex;align-items: center;margin: 15px 0;">
            <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请输入项目关键词:</div>
            <div>
              <el-input v-model="input" placeholder="请输入项目关键词"/>
            </div>
            <div>
              <el-button type="primary" style="margin-left:15px" @click="query">查询项目</el-button>
            </div>
          </div>
        </el-row>
        <el-divider/>
        <el-table
          :data="tableDataTea"
          stripe
          style="width: 100%">
          <el-table-column
            prop="xmbh"
            label="项目编号"
            width="100px"
          />
          <el-table-column
            prop="xmmc"
            label="项目名称"
          />
          <el-table-column
            prop="zdjs"
            label="主导教师"
          />
          <el-table-column
            prop="ssxy"
            label="所属学院"
          />
          <el-table-column
            prop="xmjd"
            label="项目进度"
          />
          <el-table-column
            prop="xmys"
            label="项目预算"
          />
          <el-table-column
            prop="qzsj"
            label="起止时间"
          />
          <el-table-column align="center" label="预算状态">
            <template slot-scope="scope">
              <el-tag type="success" v-if="scope.row.zhuangtai === 1">使用正常</el-tag>
              <el-tag type="warning" v-if="scope.row.zhuangtai === 2">使用告警</el-tag>
              <el-tag type="danger" v-if="scope.row.zhuangtai === 3">使用超额</el-tag>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作"  width="250px">
            <template slot-scope="scope">
              <el-button type="text" @click="openDetailsTeacher(scope.row)">使用详情</el-button>
              <el-button type="text" @click="opendistribute()">预算分布</el-button>
              <el-button type="text">导出</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="fenye">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 30]"
            :page-size="5"
            style="margin-top:20px;"
            :total= "tableData.length"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
      <div v-if="roles==='科研主管'" class="yusuan">
        <el-row :gutter="20">
          <div style="display: flex;align-items: center;margin: 15px 0;">
            <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择学院:</div>
            <div>
              <el-select v-model="value" placeholder="请选择学院">
                <el-option label="文学院" value="1"></el-option>
                <el-option label="理学院" value="2"></el-option>
                <el-option label="教育学院" value="3"></el-option>
                <el-option label="医学院" value="4"></el-option>
                <el-option label="商学院" value="5"></el-option>
                <el-option label="管理学院" value="6"></el-option>
                <el-option label="机械工程学院" value="7"></el-option>
                <el-option label="电子信息学院" value="8"></el-option>
                <el-option label="电气工程学院" value="9"></el-option>
              </el-select>
            </div>
<!--            <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">请选择部门:</div>-->
<!--            <div>-->
<!--              <el-select v-model="value1" placeholder="请选择部门">-->
<!--                <el-option label="校党委" value="1"></el-option>-->
<!--                <el-option label="教务处" value="2"></el-option>-->
<!--                <el-option label="科研处" value="3"></el-option>-->
<!--                <el-option label="电教设备处" value="4"></el-option>-->
<!--                <el-option label="审计处" value="5"></el-option>-->
<!--                <el-option label="档案中心" value="6"></el-option>-->
<!--              </el-select>-->
<!--            </div>-->
            <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请输入教师姓名:</div>
            <div>
              <el-input v-model="input" placeholder="请输入姓名"/>
            </div>
            <div>
              <el-button type="primary" style="margin-left:15px" @click="query">查询项目</el-button>
            </div>
          </div>
        </el-row>
        <el-divider/>
        <el-row>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="xmbh"
              label="项目编号"
              width="100px"
            />
            <el-table-column
              prop="xmmc"
              label="项目名称"
            />
            <el-table-column
              prop="zdjs"
              label="主导教师"
            />
            <el-table-column
              prop="ssxy"
              label="所属学院"
            />
            <el-table-column
              prop="xmjd"
              label="项目进度"
            />
            <el-table-column
              prop="xmys"
              label="项目预算"
            />
            <el-table-column
              prop="qzsj"
              label="起止时间"
            />
            <el-table-column align="center" label="操作"  width="250px">
              <template slot-scope="scope">
                <el-button type="text" @click="openDetails(scope.row)">使用详情</el-button>
                <el-button type="text" @click="opendistribute()">预算分布</el-button>
                <el-button type="text">导出</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="fenye">
            <el-pagination
              :current-page="currentPage"
              :page-sizes="[5, 10, 20, 30]"
              :page-size="5"
              style="margin-top:20px;"
              :total= "tableData.length"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </el-row>
      </div>
      <el-dialog
        title="使用详情"
        :visible.sync="dialogVisibleOne"
        width="90%"
        :before-close="handleClose">
        <div>
          <span>结算日期：2020-03-21</span>
          <el-divider></el-divider>
          <el-table
            :data="tableDataOne"
            stripe
            style="width: 100%">
            <el-table-column
              prop="shebei"
              label="设备费（已使用）"
            />
            <el-table-column
              prop="cailiao"
              label="材料费（已使用）"
            />
            <el-table-column
              prop="ceshi"
              label="测试化验加工费（已使用）"
            />
            <el-table-column
              prop="ranliao"
              label="燃料动力费（已使用）"
            />
            <el-table-column
              prop="chailv"
              label="差旅费（已使用）"
            />
            <el-table-column
              prop="huiyi"
              label="会议费（已使用）"
            />
            <el-table-column
              prop="ziliao"
              label="资料费（已使用）"
            />
            <el-table-column
              prop="laowu"
              label="劳务费（已使用）"
            />
            <el-table-column
              prop="zhuanjia"
              label="专家咨询费（已使用）"
            />
            <el-table-column
              prop="guanli"
              label="管理费（已使用）"
            />
            <el-table-column
              prop="jieyu"
              label="结余"
            />
          </el-table>
        </div>
        <div style="margin-top: 20px">
          <span>结算日期：2020-09-21</span>
          <el-divider></el-divider>
          <el-table
            :data="tableDataTwo"
            stripe
            style="width: 100%">
            <el-table-column
              prop="shebei"
              label="设备费（已使用）"
            />
            <el-table-column
              prop="cailiao"
              label="材料费（已使用）"
            />
            <el-table-column
              prop="ceshi"
              label="测试化验加工费（已使用）"
            />
            <el-table-column
              prop="ranliao"
              label="燃料动力费（已使用）"
            />
            <el-table-column
              prop="chailv"
              label="差旅费（已使用）"
            />
            <el-table-column
              prop="huiyi"
              label="会议费（已使用）"
            />
            <el-table-column
              prop="ziliao"
              label="资料费（已使用）"
            />
            <el-table-column
              prop="laowu"
              label="劳务费（已使用）"
            />
            <el-table-column
              prop="zhuanjia"
              label="专家咨询费（已使用）"
            />
            <el-table-column
              prop="guanli"
              label="管理费（已使用）"
            />
            <el-table-column
              prop="jieyu"
              label="结余"
            />
          </el-table>
        </div>
        <span slot="footer" class="dialog-footer">
<!--        <el-button @click="dialogVisibleOne = false">取 消</el-button>-->
           <el-button type="warning">预算告警</el-button>
           <el-button type="danger">预算超支</el-button>
           <el-button type="success">详情导出</el-button>
        <el-button type="primary" @click="dialogVisibleOne = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="预算分布"
        :visible.sync="dialogVisibleTwo"
        width="40%"
        :before-close="handleClose">
        <chart-budge-one></chart-budge-one>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleTwo = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleTwo = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="使用详情"
        :visible.sync="dialogVisibleThree"
        width="90%"
        :before-close="handleClose">
        <div>
          <span>结算日期：2020-03-21</span>
          <el-divider></el-divider>
          <el-table
            :data="tableDataOne"
            stripe
            style="width: 100%">
            <el-table-column
              prop="shebei"
              label="设备费（已使用）"
            />
            <el-table-column
              prop="cailiao"
              label="材料费（已使用）"
            />
            <el-table-column
              prop="ceshi"
              label="测试化验加工费（已使用）"
            />
            <el-table-column
              prop="ranliao"
              label="燃料动力费（已使用）"
            />
            <el-table-column
              prop="chailv"
              label="差旅费（已使用）"
            />
            <el-table-column
              prop="huiyi"
              label="会议费（已使用）"
            />
            <el-table-column
              prop="ziliao"
              label="资料费（已使用）"
            />
            <el-table-column
              prop="laowu"
              label="劳务费（已使用）"
            />
            <el-table-column
              prop="zhuanjia"
              label="专家咨询费（已使用）"
            />
            <el-table-column
              prop="guanli"
              label="管理费（已使用）"
            />
            <el-table-column
              prop="jieyu"
              label="结余"
            />
          </el-table>
        </div>
        <div style="margin-top: 20px">
          <span>结算日期：2020-09-21</span>
          <el-divider></el-divider>
          <el-table
            :data="tableDataTwo"
            stripe
            style="width: 100%">
            <el-table-column
              prop="shebei"
              label="设备费（已使用）"
            />
            <el-table-column
              prop="cailiao"
              label="材料费（已使用）"
            />
            <el-table-column
              prop="ceshi"
              label="测试化验加工费（已使用）"
            />
            <el-table-column
              prop="ranliao"
              label="燃料动力费（已使用）"
            />
            <el-table-column
              prop="chailv"
              label="差旅费（已使用）"
            />
            <el-table-column
              prop="huiyi"
              label="会议费（已使用）"
            />
            <el-table-column
              prop="ziliao"
              label="资料费（已使用）"
            />
            <el-table-column
              prop="laowu"
              label="劳务费（已使用）"
            />
            <el-table-column
              prop="zhuanjia"
              label="专家咨询费（已使用）"
            />
            <el-table-column
              prop="guanli"
              label="管理费（已使用）"
            />
            <el-table-column
              prop="jieyu"
              label="结余"
            />
          </el-table>
        </div>
        <span slot="footer" class="dialog-footer">
<!--        <el-button @click="dialogVisibleOne = false">取 消</el-button>-->
           <el-button type="success">详情导出</el-button>
        <el-button type="primary" @click="dialogVisibleThree = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
  import chartBudgeOne from '@/views/customInterface/budgetManagement/echarts/chart_budge_one'
    export default {
      name: "index",
      components: {
        chartBudgeOne
      },
      data(){
        return{
          dialogVisibleOne: false,
          dialogVisibleTwo: false,
          dialogVisibleThree: false,
          temData: {},
          tableDataOne: [
            {
              shebei: '3',
              cailiao: '0.2',
              ceshi: '0.1',
              ranliao: '0.02',
              chailv: '0.1',
              huiyi: '0',
              ziliao: '0.2',
              laowu: '0.2',
              zhuanjia: '0.4',
              guanli: '0',
              jieyu: '13.66'
            }
          ],
          tableDataTwo: [
            {
              shebei: '2',
              cailiao: '2',
              ceshi: '1',
              ranliao: '0.5',
              chailv: '1',
              huiyi: '1',
              ziliao: '1',
              laowu: '2',
              zhuanjia: '1',
              guanli: '1',
              jieyu: '7.4'
            }
          ],
          tableData:[{
            xmbh: '0201011',
            zdjs: '刘老师',
            xmmc: '智慧校园建设',
            ssxy: '计算机学院',
            xmjd: '进行中',
            xmys: '200000',
            qzsj: '2019.09-2021.09'
          }, {
            xmbh: '0201012',
            zdjs: '赵老师',
            xmmc: '教育整改系统',
            ssxy: '计算机学院',
            xmjd: '进行中',
            xmys: '1000000',
            qzsj: '2020.09-2023.09'
          }, {
            xmbh: '0201013',
            zdjs: '邓老师',
            xmmc: '自然语言处理问答系统',
            ssxy: '计算机学院',
            xmjd: '进行中',
            xmys: '100000',
            qzsj: '2020.09-2021.03'
          }, {
            xmbh: '0201014',
            zdjs: '吴老师',
            xmmc: '高点探测智能分析',
            ssxy: '计算机学院',
            xmjd: '进行中',
            xmys: '350000',
            qzsj: '2018.07-2020.09'
          }, {
            xmbh: '0201014',
            zdjs: '李老师',
            xmmc: '大数据下的可视化进展',
            ssxy: '计算机学院',
            xmjd: '进行中',
            xmys: '1500000',
            qzsj: '2018.04-2022.06'
          }],
          tableDataTea: [{
            xmbh: '0201011',
            zdjs: '刘老师',
            xmmc: '智慧校园建设',
            ssxy: '计算机学院',
            xmjd: '进行中',
            xmys: '200000',
            qzsj: '2019.09-2021.09',
            zhuangtai: 1
          }, {
            xmbh: '0201043',
            zdjs: '刘老师',
            xmmc: '智能公交系统',
            ssxy: '计算机学院',
            xmjd: '进行中',
            xmys: '1000000',
            qzsj: '2020.09-2023.09',
            zhuangtai: 1
          }, {
            xmbh: '0201076',
            zdjs: '刘老师',
            xmmc: '中学智能成绩平台',
            ssxy: '计算机学院',
            xmjd: '进行中',
            xmys: '100000',
            qzsj: '2020.09-2021.03',
            zhuangtai: 2
          }, {
            xmbh: '0202001',
            zdjs: '刘老师',
            xmmc: '教师测评平台',
            ssxy: '计算机学院',
            xmjd: '进行中',
            xmys: '350000',
            qzsj: '2018.07-2020.09',
            zhuangtai: 1
          }, {
            xmbh: '0202023',
            zdjs: '刘老师',
            xmmc: '智能工地监控平台',
            ssxy: '计算机学院',
            xmjd: '进行中',
            xmys: '1500000',
            qzsj: '2018.04-2022.06',
            zhuangtai: 3
          }]
        }
      },
      methods: {
        openDetails: function (scope) {
          this.dialogVisibleOne = true
          console.log('测试查看详情每次选中的数据')
          console.log(scope)
          this.temData = scope
        },
        openDetailsTeacher: function (scope) {
          this.dialogVisibleThree = true
          // console.log('测试查看详情每次选中的数据')
          console.log(scope)
          this.temData = scope
        },
        opendistribute: function(){
          this.dialogVisibleTwo = true
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      },
      computed:{
        roles() {
          return this.$store.getters.roles[0]
        }
      },
    }

</script>

<style scoped>
  .fenye{
    text-align: center;
  }
</style>
