<template>
    <div class='top'>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='date' label='发布时间' width="200"></el-table-column>
          <el-table-column prop='author' label='发布人' width="120"></el-table-column>
          <el-table-column prop='title' label='公告标题' width="250"></el-table-column>
          <el-table-column prop='inform_check' label='审核情况' width="100">
            <template slot-scope="scope">
              {{scope.row.inform_check===1?"通过":"失败"}}
            </template>
          </el-table-column>
          <el-table-column label='操作' width="120">
            <template slot-scope='scope'>
              <el-button size="mini" @click='informDetial(scope.row)'>查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'com_inform',
    data(){
      return{
        datas: [],
      }
    },
    mounted() {
      this.getPass()
    },
    methods:{
      informDetial(data){
        this.$router.push({path:"/inform_detail",query:{data:data.inform_id}})
      },
      getPass(data){
        this.instance.informConPass().then(res => {
          this.datas=res.data
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
