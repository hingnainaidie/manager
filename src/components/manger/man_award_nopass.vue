<template>
  <div>
    <div class="main">
      <div>
        <el-row>
          <el-col :span='8'><el-button class='el-icon-back' @click='back'>返回</el-button></el-col>
          <el-col :span='14' class='title'>未审核获奖信息</el-col>
        </el-row>
      </div>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='com_cate' label='赛事类别' width="280" :filters="ccate" :filter-method="filterHandler"></el-table-column>
          <el-table-column prop='com_num' label='竞赛届数' width="120" :filters="cnum" :filter-method="filterHandler"></el-table-column>
          <el-table-column prop='award_level' label='获奖等级' width="120" :filters="alevel" :filter-method="filterHandler"></el-table-column>
          <el-table-column label='操作' width="360">
            <template slot-scope='scope'>
              <el-button size="mini" @click='detail(scope.row)'>查看详细信息</el-button>
              <el-button size="mini" type="primary" @click='detail(scope.row)'>审核通过</el-button>
              <el-button size="mini" type="danger" @click='detail(scope.row)'>审核失败</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'man_award_nopass',
    data() {
      return {
        ccate:[{ text: '大学生英语竞赛', value: '大学生英语竞赛' },
              { text: '数模比赛', value: '数模比赛' },
              { text: '程序设计大赛', value: '程序设计大赛' }],
        cnum:[{ text: '第一届', value: '第一届' },
                { text: '第二届', value: '第二届' },
                { text: '第三届', value: '第三届' },
                { text: '第四届', value: '第四届' },
                { text: '第五届', value: '第五届' }],
        alevel:[{ text: '一等奖', value: '一等奖' },
                { text: '二等奖', value: '二等奖' },
                { text: '三等奖', value: '三等奖' }],
        datas:[
          {
            com_cate:'大学生英语竞赛',
            com_num:'第一届',
            award_level:'一等奖'
          },
          {
            com_cate:'数模比赛',
            com_num:'第一届',
            award_level:'三等奖'
          },
          {
            com_cate:'大学生英语竞赛',
            com_num:'第四届',
            award_level:'二等奖'
          },
          {
            com_cate:'程序设计大赛',
            com_num:'第五届',
            award_level:'一等奖'
          },
        ]
      }
    },
    mounted() {
      // this.find_pass()
    },
    methods: {
      del(data){

      },
      back(){
        this.$router.back();
      },
      detail(data) {
        this.$router.push({
          path: "/Manager/man_award_detail"
        })
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>

<style scoped lang='scss'>
  .title {
    line-height: 30px;
    color: gray;
    font-size: 20px;
    font-weight: bold;
    float: left;
  }
  .main{
    width: 900px;
    margin: auto;
  }
  .com{
    margin-top:10px;
  }
</style>
