<template>
    <div class='top'>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='com_date' label='发布时间' width="120"></el-table-column>
          <el-table-column prop='com_manager' label='竞赛负责人' width="120"></el-table-column>
          <el-table-column prop='com_mainname' label='竞赛标题' width="350"></el-table-column>
<!--          <el-table-column prop='com_check' label='审核情况' width="100"></el-table-column> -->
          <el-table-column label='操作' width="120">
            <template slot-scope='scope'>
              <el-button size="mini" type="danger" @click='detial(scope.row.com_id)'>查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'con_com2',
    data(){
      return{
        datas:[],
      }
    },
    mounted() {
      this.getPass()
    },
    methods:{
      detail(data) {
        this.$router.push({
          path: "/con_mng/con_commsg",
          query:{data:data}
        })
      },
      getPass(){
        this.instance.comConPass().then(res => {
          this.datas=res.data.data
        })
      },
    }
  }
</script>

<style scoped lang='scss'>
.top{

}
.com{
  margin-top: 10px;
}

</style>
