<template>
    <div class='top'>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='com_date' label='发布时间' width="120"></el-table-column>
          <el-table-column prop='com_manager' label='竞赛负责人' width="120"></el-table-column>
          <el-table-column prop='com_mainname' label='竞赛标题' width="350"></el-table-column>
          <el-table-column label='操作' width="300">
            <template slot-scope='scope'>
              <el-button size="mini" @click='detail(scope.row.com_id)'>查看详情</el-button>
              <el-button size="mini" type="primary" @click='controlPass(scope.row.com_id)'>审核通过</el-button>
              <el-button size="mini" type="danger" @click='controlNopass(scope.row.com_id)'>审核失败</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'con_com',
    data(){
      return{
        datas:[],
      }
    },
    mounted() {
      this.getNopass()
    },
    methods:{
      detail(data) {
        this.$router.push({
          path: "/con_mng/con_commsg",
          query: {data: data}
        })
      },
      getNopass(){
        this.instance.comConNopass().then(res => {
          this.datas=res.data.data
        })
      },
      controlNopass(data){
        this.instance.comControl({
          com_id:data,
          check:2
        }).then(res => {})
      },
      controlPass(data){
        this.instance.comControl({
          com_id:data,
          check:1
        }).then(res => {})
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
