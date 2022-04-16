<template>
  <div>
    <div class='topbar'>
      <el-row>
        <el-col span='12'>
          <div class='line'></div>
        </el-col>
        <el-col span='12'>
          <div class='none'></div>
        </el-col>
      </el-row>
    </div>
    <div class='com'>
      <el-table :data='datas' style='width: 100%; padding: auto;'>
        <el-table-column prop='com_mainname' label='竞赛名称' width="350"></el-table-column>
        <el-table-column prop='com_status' label='竞赛状态' width="150"></el-table-column>
        <el-table-column prop='com_manager' label='竞赛负责人' width="150"></el-table-column>
        <el-table-column label='操作' width="150">
          <el-button size="mini" type="primary" @click='detail()'>查看竞赛详情</el-button>
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
      this.instance.com_stunocom({
        user_id:storage.user_id
      }).then(res => {
        this.datas=res.data.data
      })
    },
    methods: {
      detail() {
        this.$router.push({
          path: "/user_mng/com_con"
        })
      },
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
