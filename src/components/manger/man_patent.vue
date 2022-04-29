<template>
  <div>
    <div class="main">
      <el-badge :value="count" :max='99' style="margin-bottom: 20px;">
        <el-button @click="goNopass()">未审核专利</el-button>
      </el-badge>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='cate_name' label='赛事类别' width="200" :filters="ccate" :filter-method="filterHandle">
          </el-table-column>
          <el-table-column prop='com_num' label='竞赛届数' width="120" :filters="cnum" :filter-method="filterHandle">
          </el-table-column>
          <el-table-column prop='patent_name' label='专利名称' width="180">
          </el-table-column>
          <el-table-column prop='user_name' label='学生名字' width="120"></el-table-column>
          <el-table-column prop='user_num' label='学生学号' width="120"></el-table-column>
          <el-table-column label='操作'>
            <template slot-scope='scope'>
              <el-button size="mini" @click='detail(scope.row.patent_id)'>查看详细信息</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'man_award',
    data() {
      return {
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
        datas: []
      }
    },
    mounted() {
      var storage = window.localStorage;
      this.instance.patentManPass({
        user_id:storage.user_id
      }).then(res => {
        this.datas=res.data
      });
      this.instance.patentManCount({
        user_id:storage.user_id
      }).then(res => {
        this.count=res.data
      });
      this.instance.cateReFindall({}).then(res => {
        this.ccate=res.data
      });
    },
    methods: {
      goNopass() {
        this.$router.push({
          path: "/Manager/man_patent_nopass"
        })
      },
      detail(data) {
        this.$router.push({
          path: "/Manager/man_patent_detail",
          query: {
            data: data
          }
        })
      },
      filterHandle(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
    }
  }
</script>

<style scoped lang='scss'>
  .main {
    width: 950px;
    margin: auto;
  }

  .com {
    margin-top: 10px;
  }
</style>
