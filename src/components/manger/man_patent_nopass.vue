<template>
  <div>
    <div class="main">
      <div>
        <el-row>
          <el-col :span='8'>
            <el-button class='el-icon-back' @click='back'>返回</el-button>
          </el-col>
          <el-col :span='14' class='title'>未审核专利信息</el-col>
        </el-row>
      </div>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='cate_name' label='赛事类别' width="200" :filters="ccate" :filter-method="filterHandler">
          </el-table-column>
          <el-table-column prop='com_num' label='竞赛届数' width="100" :filters="cnum" :filter-method="filterHandler">
          </el-table-column>
          <el-table-column prop='patent_name' label='专利名称' width="120">
          </el-table-column>
          <el-table-column prop='user_name' label='学生名字' width="100"></el-table-column>
          <el-table-column prop='user_num' label='学生学号' width="100"></el-table-column>
          <el-table-column label='操作'>
            <template slot-scope='scope'>
              <el-button size="mini" @click='detail(scope.row.patent_id)'>查看详细信息</el-button>
              <el-button size="mini" type="primary" @click='pass(scope.row.patent_id)'>审核通过</el-button>
              <el-button size="mini" type="danger" @click='nopass(scope.row.patent_id)'>审核失败</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'man_patent_nopass',
    data() {
      return {
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
        datas: []
      }
    },
    mounted() {
      this.getMannopass();
      this.instance.cateReFindall({}).then(res => {
        this.ccate = res.data
      });
    },
    methods: {
      getMannopass() {
        var storage = window.localStorage;
        this.instance.patentManNopass({
          user_id: storage.user_id
        }).then(res => {
          this.datas = res.data
        });
      },
      back() {
        this.$router.back();
      },
      detail(data) {
        this.$router.push({
          path: "/Manager/man_patent_detail",
          query: {
            data: data
          }
        })
      },
      pass(data) {
        this.instance.patentCheck({
          patent_id: data,
          patent_check: 1
        }).then(res => {
          if (res.data == 666) {
            this.getMannopass();
          }
        });
      },
      nopass(data) {
        this.instance.patentCheck({
          patent_id: data,
          patent_check: 2
        }).then(res => {
          if (res.data == 666) {
            this.getMannopass();
          }
        });
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

  .main {
    width: 950px;
    margin: auto;
  }

  .com {
    margin-top: 10px;
  }
</style>
