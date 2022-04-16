<template>
    <div class='top'>
      <el-button>用户验证</el-button>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='name' label='学生名字' width="245"></el-table-column>
          <el-table-column prop='act' label='身份' width="150"></el-table-column>
          <el-table-column prop='num' label='学号' width="150"></el-table-column>
          <el-table-column prop='phone' label='联系方式' width="150"></el-table-column>
          <el-table-column label='操作' width="200">
            <template slot-scope='scope'>
              <el-button size="mini" type="warning" @click='detail(scope.row)'>修改用户身份</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'com_user2',
    data(){
      return{
        datas:[
          {name:'张三',num:'20221010',act:'学生',phone:'13377689021'},
          {name:'李二四',num:'20191010',act:'学生',phone:'17876892021'},
          {name:'张三',num:'20221010',act:'学生',phone:'13377689021'},
          {name:'李二四',num:'20191010',act:'学生',phone:'17876892021'},
          {name:'张三',num:'20221010',act:'学生',phone:'13377689021'},
          {name:'李二四',num:'20191010',act:'学生',phone:'17876892021'},
          {name:'张三',num:'20221010',act:'学生',phone:'13377689021'},
          {name:'李二四',num:'20191010',act:'学生',phone:'17876892021'},
          {name:'张三',num:'20221010',act:'学生',phone:'13377689021'},
          {name:'李二四',num:'20191010',act:'学生',phone:'17876892021'},
        ]
      }
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
