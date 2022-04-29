<template>
    <div class='top'>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='date' label='发布时间' width="200"></el-table-column>
          <el-table-column prop='author' label='发布人' width="120"></el-table-column>
          <el-table-column prop='title' label='公告标题' width="250"></el-table-column>
          <el-table-column label='操作' width="300">
            <template slot-scope='scope'>
              <el-button size="mini" @click='informDetial(scope.row)'>查看详情</el-button>
              <el-button size="mini" type="primary" @click='controlPass(scope.row)'>审核通过</el-button>
              <el-button size="mini" type="danger" @click='controlNopass(scope.row)'>审核失败</el-button>
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
      this.getNopass()
    },
    methods:{
      informDetial(data){
        this.$router.push({path:"/Controller/con_news_detail",query:{data:data.inform_id}})
      },
      getNopass(){
        this.instance.informConNopass().then(res => {
          this.datas=res.data
        })
      },
      controlNopass(data){
        this.instance.informControl({
          inform_id:data.inform_id,
          check:2
        }).then(res => {
          this.getNopass()
        })
      },
      controlPass(data){
        this.instance.informControl({
          inform_id:data.inform_id,
          check:1
        }).then(res => {
          this.getNopass()
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
