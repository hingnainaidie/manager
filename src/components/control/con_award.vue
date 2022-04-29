<template>
  <div>
    <div class="main">
      <el-badge :value="count" :max='99' style="margin-bottom: 20px;">
        <el-button @click="dataIn()" type='primary'>批量导入获奖数据</el-button>
        <el-button @click="dataOut()" type='primary'>点击导出获奖数据</el-button>
        <el-button @click="goNopass()">未审核获奖</el-button>
      </el-badge>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='cate_name' label='赛事类别' width="200" :filters="ccate" :filter-method="filterHandle"></el-table-column>
          <el-table-column prop='com_num' label='竞赛届数' width="120" :filters="cnum" :filter-method="filterHandle"></el-table-column>
          <el-table-column prop='award_level' label='获奖等级' width="120" :filters="alevel" :filter-method="filterHandle"></el-table-column>
          <el-table-column prop='user_name' label='学生名字' width="120"></el-table-column>
          <el-table-column prop='user_num' label='学生学号' width="120"></el-table-column>
          <el-table-column align="right">
            <template #header>
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  获奖分析<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="all">竞赛获奖总分析</el-dropdown-item>
                  <el-dropdown-item command="cate">赛事类别分析</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
            <template #default="scope">
              <el-button size="mini" type="primary" @click='detail(scope.row.award_id)'>查看详细信息</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <dataIn @ch_sure="sure" @ch_wait="wait" v-if="showNew"></dataIn>
    <el-table border :data='datas' style='width: 100%; padding: auto;' id='table' v-show="false">
      <el-table-column prop='cate_name' label='赛事类别' width="200" :filters="ccate" :filter-method="filterHandle"></el-table-column>
      <el-table-column prop='com_num' label='竞赛届数' width="120" :filters="cnum" :filter-method="filterHandle"></el-table-column>
      <el-table-column prop='award_level' label='获奖等级' width="120" :filters="alevel" :filter-method="filterHandle"></el-table-column>
      <el-table-column prop='user_name' label='学生名字' width="120"></el-table-column>
      <el-table-column prop='user_num' label='学生学号' width="120"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import dataIn from '../control/award_dataIn.vue'
  import FileSaver from 'file-saver'
  import * as XLSX from 'xlsx'
  export default {
    name: 'con_award',
    components:{
      dataIn
    },
    data() {
      return {
        showNew:false,
        count:0,
        ccate: [],
        cnum: [{
            text: '第一届',
            value: '第一届'
          },
          {
            text: '第二届',
            value: '第二届'
          },
          {
            text: '第三届',
            value: '第三届'
          },
          {
            text: '第四届',
            value: '第四届'
          },
          {
            text: '第五届',
            value: '第五届'
          }
        ],
        alevel: [{
            text: '一等奖',
            value: '一等奖'
          },
          {
            text: '二等奖',
            value: '二等奖'
          },
          {
            text: '三等奖',
            value: '三等奖'
          }
        ],
        datas: []
      }
    },
    mounted() {
      this.instance.awardConPass({
      }).then(res => {
        this.datas=res.data
      });
      this.instance.awardConCount().then(res => {
        this.count=res.data
      });
      this.instance.cateReFindall({}).then(res => {
        this.ccate=res.data
      });
    },
    methods: {
      dataIn(){
        this.showNew=true;
      },
      dataOut(){
        let workbook = XLSX.utils.table_to_book(document.getElementById('table')); //需要在table上定义一个id
        try {
          XLSX.writeFile(workbook, 'award.xlsx');
          this.$message({
            type: 'success',
            message: '导出成功,注意查收系统下载文件'
          })
        } catch (e) {
          this.$message({
            type: 'success',
            message: '导出失败,失败信息:' + e
          })
        }
      },
      sure() {
        this.instance.awardConPass({
        }).then(res => {
          this.datas=res.data
        });
        this.instance.awardConCount().then(res => {
          this.count=res.data
        });
        this.showNew = false
      },
      wait() {
        this.showNew = false
      },
      goNopass() {
        this.$router.push({
          path: "/Controller/con_award_nopass"
        })
      },
      detail(data) {
        this.$router.push({
          path: "/Controller/con_award_detail",
          query: {
            data: data
          }
        })
      },
      filterHandle(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleCommand(command) {
        if(command=='all'){
          this.$router.push("/Controller/con_awardAll").catch(()=>{})
        }else if(command=='cate'){
          this.$router.push("/Controller/con_awardCate").catch(()=>{})
        }else if(command=='level'){
          this.$router.push("/Controller/con_awardLevel").catch(()=>{})
        }else if(command=='award'){
          this.$router.push("/Controller/con_awardAward").catch(()=>{})
        }
      },
    }
  }
</script>

<style scoped lang='scss'>
  .main {
    width: 900px;
    margin: auto;
  }

  .com {
    margin-top: 10px;
  }
  .el-dropdown-link {
    font-size: 15px;
    cursor: pointer;
    color:gray;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
