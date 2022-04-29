<template>
  <div>
    <div class='com'>
      <el-table border :data='datas' style='width: 100%; padding: auto;'>
        <el-table-column prop='com_status' label='竞赛状态' width="150" :formatter="stu" :filters="status" :filter-method="filterHandler"></el-table-column>
        <el-table-column prop='com_mainname' label='竞赛名称' width="350"></el-table-column>
        <el-table-column prop='user_name' label='竞赛负责人' width="150"></el-table-column>
        <el-table-column label='操作'>
          <template slot-scope='scope'>
            <el-button size="mini" type="primary" @click='detail(scope.row.com_id)'>查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user_com1',
    data() {
      return {
        datas: [],
        status: [{
            text: '未开始',
            value: 0
          },
          {
            text: '进行中',
            value: 1
          },
          {
            text: '已结束',
            value: 2
          },
        ],
      }
    },
    mounted() {
      var storage = window.localStorage;
      this.instance.com_stunocom({
        user_id:storage.user_id
      }).then(res => {
        this.datas=res.data.stunoCom
      })
    },
    methods: {
      stu(row,column,cellValue,index){
        if(cellValue==0){
          return "未开始"
        }else if(cellValue==1){
          return "进行中"
        }else if(cellValue==2){
          return "已完成"
        }
      },
      detail(data) {
        this.$router.push({
          path: "/User/user_com_detail",
          query: {
            data: data
          }
        })
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
    }
  }
</script>

<style scoped lang="scss">

  .com {
    width: 900px;
    margin: auto;
  }
</style>
