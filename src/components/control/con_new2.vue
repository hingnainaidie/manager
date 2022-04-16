<template>
    <div class='top'>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='date' label='发布时间' width="200"></el-table-column>
          <el-table-column prop='user_name' label='发布人' width="120"></el-table-column>
          <el-table-column prop='title' label='新闻标题' width="350"></el-table-column>
          <el-table-column prop='news_check' label='审核情况' width="150">
            <template slot-scope="scope">
              {{scope.row.news_check===1?"通过":"失败"}}
            </template>
          </el-table-column>
          <el-table-column label='操作' width="120">
            <template slot-scope='scope'>
              <el-button size="mini" @click='newsDetial(scope.row)'>查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'com_new',
    data(){
      return{
        datas: [],
      }
    },
    mounted() {
      this.getPass()
    },
    methods:{
      newsDetial(data){
        this.$router.push({path:"/new_detail",query:{data:data.news_id}})
      },
      getPass(){
        this.instance.newsConPass().then(res => {
          this.datas=res.data
        })
      },
      controlNopass(data){
        this.instance.newsControl({
          inform_id:data.news_id,
          check:2
        }).then(res => {})
      },
      controlPass(data){
        this.instance.newsControl({
          inform_id:data.news_id,
          check:1
        }).then(res => {})
      },
    },
  }
</script>

<style scoped lang='scss'>
.top{

}
.com{
  margin-top: 10px;
}

</style>
