<template>
    <div class='top'>
      <el-button>批量导出</el-button>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='user_name' label='学生名字' width="100"></el-table-column>
          <el-table-column prop='user_num' label='学号' width="120"></el-table-column>
          <el-table-column prop='com_mainname' label='竞赛名称' width="350"></el-table-column>
          <el-table-column prop='com_id' label='竞赛编号' width="120"></el-table-column>
          <el-table-column prop='award' label='获奖等级' width="100"></el-table-column>
          <el-table-column label='操作' width="200">
            <template slot-scope='scope'>
              <el-button size="mini" type="primary" @click='detail(scope.row)'>查看</el-button>
              <el-button size="mini" type="danger" @click='del()'>取消报名</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'man_commsg3',
    props:['com_id'],
    mounted() {
      this.instance.comIdaward({
        com_id:this.com_id
      }).then(res => {
        ths.datas=res.data
      })
    },
    data(){
      return{
        datas:[]
      }
    },
    watch:{
      com_id:function(newItemVal,oldItemVal){
        this.com_id=newItemVal
      }
    }
  }
</script>

<style scoped lang='scss'>
.top{
  width: 1000px;
  margin: auto;
}
.com{
  margin-top: 10px;
}

</style>
