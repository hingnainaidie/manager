<template>
    <div class='top'>
      <el-button>全部</el-button>
      <el-button>待审核竞赛</el-button>
      <el-button>已审核竞赛</el-button>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='sign_start' label='发布时间' width="120"></el-table-column>
          <el-table-column prop='manager' label='竞赛负责人' width="120"></el-table-column>
          <el-table-column prop='main_name' label='竞赛标题' width="450"></el-table-column>
          <el-table-column label='操作' width="300">
            <template slot-scope='scope'>
              <el-button size="mini" @click='detail()'>查看详情</el-button>
              <el-button size="mini" type="primary">审核通过</el-button>
              <el-button size="mini" type="danger" @click='newsDetial(scope.row)'>审核失败</el-button>
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
        datas:[
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
        ]
      }
    },
    methods:{
      detail() {
        this.$router.push({
          path: "/con_mng/con_commsg/con_commsg1"
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
