<template>
    <div class='top'>
      <el-button>全部</el-button>
      <el-button>待审核新闻</el-button>
      <el-button>已审核新闻</el-button>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='date' label='发布时间' width="120"></el-table-column>
          <el-table-column prop='author' label='发布人' width="120"></el-table-column>
          <el-table-column prop='inform' label='新闻标题' width="450"></el-table-column>
          <el-table-column label='操作' width="300">
            <template slot-scope='scope'>
              <el-button size="mini" @click='newsDetial(scope.row)'>查看详情</el-button>
              <el-button size="mini" type="primary">审核通过</el-button>
              <el-button size="mini" type="danger">审核失败</el-button>
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
        datas: [{
          date: '2016-05-02',
          author:'张小凡',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-04',
          author:'张小凡',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-01',
          author:'张小凡',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          author:'张小凡',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          author:'张小凡',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          author:'张小凡',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          author:'张小凡',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          author:'张小凡',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          author:'张小凡',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          author:'张小凡',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }],
      }
    },
    methods:{
      newsDetial(data){
        this.$router.push({path:"/new_detail",query:{data:data}})
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
