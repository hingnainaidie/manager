<template>
  <div>
    <div class="main">
      <el-badge :value="120" :max='99' style="margin-bottom: 20px;">
        <el-button @click="goNopass()">未审核获奖</el-button>
      </el-badge>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='com_cate' label='赛事类别' width="300" :filters="ccate" :filter-method="filterCate">
          </el-table-column>
          <el-table-column prop='com_num' label='竞赛届数' width="180" :filters="cnum" :filter-method="filterNum">
          </el-table-column>
          <el-table-column prop='award_level' label='获奖等级' width="180" :filters="alevel" :filter-method="filterAward">
          </el-table-column>
          <el-table-column align="right">
            <template #header>
              <el-button>获奖分析</el-button>
            </template>
            <template #default="scope">
              <el-button size="mini" type="primary" @click='detail(scope.row)'>查看详细信息</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <award_new @ch_sure="sure" @ch_wait="wait" v-if="showNew"></award_new>
  </div>
</template>

<script>
  import award_new from '../stu/user_award_new.vue'
  export default {
    name: 'man_award',
    components: {
      award_new
    },
    data() {
      return {
        showNew: false,
        ccate: [{
            text: '大学生英语竞赛',
            value: '大学生英语竞赛'
          },
          {
            text: '数模比赛',
            value: '数模比赛'
          },
          {
            text: '程序设计大赛',
            value: '程序设计大赛'
          }
        ],
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
        datas: [{
            com_cate: '大学生英语竞赛',
            com_num: '第一届',
            award_level: '一等奖'
          },
          {
            com_cate: '数模比赛',
            com_num: '第一届',
            award_level: '三等奖'
          },
          {
            com_cate: '大学生英语竞赛',
            com_num: '第四届',
            award_level: '二等奖'
          },
          {
            com_cate: '程序设计大赛',
            com_num: '第五届',
            award_level: '一等奖'
          },
        ]
      }
    },
    mounted() {
      // this.find_pass()
    },
    methods: {
      goNew() {
        this.showNew = true
      },
      sure() {
        this.showNew = false
      },
      wait() {
        this.showNew = false
      },
      goNopass() {
        this.$router.push({
          path: "/Manager/man_award_nopass"
        })
      },
      find_pass() {
        var storage = window.localStorage;
        this.instance.newsUserfindPass({
          user_id: storage.user_id
        }).then(res => {
          this.datas = res.data
        })
      },
      detail(data) {
        this.$router.push({
          path: "/Manager/man_award_detail"
        })
      },
      filterCate(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      filterNum(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      filterAward(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
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
</style>
