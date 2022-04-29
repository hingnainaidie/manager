<template>
    <div class='top'>
      <el-button @click="back">返回</el-button>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='com_status' label='竞赛状态' width="100" :formatter="stu" :filters="status" :filter-method="filterHandler"></el-table-column>
          <el-table-column prop='com_year' label='竞赛年份' width="120"></el-table-column>
          <el-table-column prop='user_name' label='竞赛负责人' width="120"></el-table-column>
          <el-table-column prop='com_mainname' label='竞赛标题' width="350"></el-table-column>
          <el-table-column label='操作' width="120">
            <template slot-scope='scope'>
              <el-button size="mini" type="primary" @click='detial(scope.row.com_id)'>查看详情</el-button>
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
        status: [{
            text: '未开始',
            value: 0
          },
          {
            text: '进行中',
            value: 1
          },
          {
            text: '已结束',
            value: 2
          },
        ],
      }
    },
    mounted() {
      this.getPass()
    },
    methods:{
      stu(row,column,cellValue,index){
        if(cellValue==0){
          return "未开始"
        }else if(cellValue==1){
          return "进行中"
        }else if(cellValue==2){
          return "已完成"
        }
      },
      back() {
        this.$router.back();
      },
      detail(data) {
        this.$router.push({
          path: "/Controller/con_commsg",
          query: {data: data}
        })
      },
      getPass(){
        this.instance.comConPass().then(res => {
          this.datas=res.data.data
        })
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
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
