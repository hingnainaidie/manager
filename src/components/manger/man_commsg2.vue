<template>
    <div class='top'>
      <el-button>批量报名</el-button>
      <el-button>单个报名</el-button>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='name' label='学生名字' width="245"></el-table-column>
          <el-table-column prop='num' label='学号' width="150"></el-table-column>
          <el-table-column prop='phone' label='联系方式' width="150"></el-table-column>
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
    name: 'man_commsg2',
    data(){
      return{
        datas:[
          {name:'张三',num:'20221010',phone:'13377689021'},
          {name:'李二四',num:'20191010',phone:'17876892021'},
          {name:'张三',num:'20221010',phone:'13377689021'},
          {name:'李二四',num:'20191010',phone:'17876892021'},
          {name:'张三',num:'20221010',phone:'13377689021'},
          {name:'李二四',num:'20191010',phone:'17876892021'},
          {name:'张三',num:'20221010',phone:'13377689021'},
          {name:'李二四',num:'20191010',phone:'17876892021'},
          {name:'张三',num:'20221010',phone:'13377689021'},
          {name:'李二四',num:'20191010',phone:'17876892021'},
        ]
      }
    }
  }
</script>

<style scoped lang='scss'>
.top{
  width: 800px;
  margin: auto;
}
.com{
  margin-top: 10px;
}

</style>
