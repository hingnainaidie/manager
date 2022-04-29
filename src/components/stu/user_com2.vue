<template>
  <div>
    <div class='topbar'>
      <el-row>
        <el-col span='12'>
          <div class='none'></div>
        </el-col>
        <el-col span='12'>
          <div class='line'></div>
        </el-col>
      </el-row>
    </div>
    <div class='com'>
      <el-table :data='datas' style='width: 100%; padding: auto;'>
        <el-table-column prop='com_mainname' label='竞赛名称' width="350"></el-table-column>
        <el-table-column prop='com_status' label='竞赛状态' width="120" :formatter="stu"></el-table-column>
        <el-table-column prop='user_name' label='竞赛负责人' width="120"></el-table-column>
        <el-table-column label='获奖情况' width="120"></el-table-column>
        <el-table-column label='操作' width="150">
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
        datas: []
      }
    },
    mounted() {
      var storage = window.localStorage;
      this.instance.com_stucom({
        user_id:storage.user_id
      }).then(res => {
        this.datas=res.data.stuComcom
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
      sure1(){
        this.showDialog3=false;
      },
      wait1(){
        this.showDialog3=false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .topbar {
    margin: auto;
    width: 300px;
    margin-bottom: 30px;
  }

  .line {
    height: 5px;
    width: 50px;
    background-color: #ffd04b;
  }

  .none {
    height: 5px;
    width: 50px;
  }

  .com {
    width: 900px;
    margin: auto;
  }
</style>
