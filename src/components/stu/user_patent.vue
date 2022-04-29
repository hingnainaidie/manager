<template>
  <div>
    <div class="main">
      <el-button @click="goNew()" type='primary' style="margin-bottom: 20px; margin-right: 20px;">新增专利信息</el-button>
      <el-badge :value="count" :max='99' style="margin-right: 20px;">
        <el-button @click="goNopass()">未审核专利</el-button>
      </el-badge>
      <el-badge :value="nocount" :max='99' style="margin-right: 20px;">
        <el-button @click="goNonopass()">审核失败专利</el-button>
      </el-badge>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='cate_name' label='赛事类别' width="300" :filters="ccate" :filter-method="filterHandler">
          </el-table-column>
          <el-table-column prop='com_num' label='竞赛届数' width="180" :filters="cnum" :filter-method="filterHandler">
          </el-table-column>
          <el-table-column prop='patent_name' label='专利名称' width="180">
          </el-table-column>
          <el-table-column label='操作' width="180">
            <template slot-scope='scope'>
              <el-button size="mini" type="primary" @click='detail(scope.row.patent_id)'>查看详细信息</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <patent_new @ch_sure="sure" @ch_wait="wait" v-if="showNew"></patent_new>
  </div>
</template>

<script>
  import patent_new from '../stu/user_patent_new.vue'
  export default {
    name: 'user_patent',
    components: {
      patent_new
    },
    mounted() {
      var storage = window.localStorage;
      this.instance.patentStuPass({
        user_id:storage.user_id
      }).then(res => {
        this.datas=res.data
      });
      this.instance.patentStuCount({
        user_id:storage.user_id
      }).then(res => {
        this.count=res.data
      });
      this.instance.patentStuNoCount({
        user_id:storage.user_id
      }).then(res => {
        this.nocount=res.data
      });
      this.instance.cateReFindall({}).then(res => {
              this.ccate=res.data
            });
    },
    data() {
      return {
        count:0,
        nocount:0,
        showNew: false,
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
    methods: {
      goNew() {
        this.showNew = true
      },
      sure() {
        var storage = window.localStorage;
        this.instance.patentStuCount({
          user_id:storage.user_id
        }).then(res => {
          this.count=res.data
        });
        this.showNew = false
      },
      wait() {
        this.showNew = false
      },
      goNopass() {
        this.$router.push({
          path: "/User/user_patent_nopass"
        })
      },
      goNonopass() {
        this.$router.push({
          path: "/User/user_patent_nonopass"
        })
      },
      detail(data) {
        this.$router.push({
          path: "/User/user_patent_detail",
          query: {
            data: data
          }
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
  .main {
    width: 900px;
    margin: auto;
  }

  .com {
    margin-top: 10px;
  }
</style>
