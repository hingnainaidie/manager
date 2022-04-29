<template>
    <div class='top'>
      <el-button @click="dataIn()" type="primary">批量导入获奖信息</el-button>
      <el-button @click='exportExcel()'>批量导出</el-button>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;' id='table'>
          <el-table-column prop='user_name' label='学生名字' width="150"></el-table-column>
          <el-table-column prop='user_num' label='学号' width="150"></el-table-column>
          <el-table-column prop='com_mainname' label='竞赛名称' width="350"></el-table-column>
          <el-table-column prop='award_level' label='获奖等级' width="150"></el-table-column>
        </el-table>
      </div>
      <dataIn @ch_sure="sure" @ch_wait="wait" v-if="showNew"></dataIn>
    </div>
</template>

<script>
  import dataIn from '../control/award_dataIn.vue'
  import FileSaver from 'file-saver'
  import * as XLSX from 'xlsx'
  export default {
    name: 'man_commsg3',
    props:['com_id'],
    components:{
      dataIn
    },
    mounted() {
      this.instance.comIdaward({
        com_id:this.com_id
      }).then(res => {
        this.datas=res.data.data
      })
    },
    data(){
      return{
        datas:[],
        showNew:false,
      }
    },
    methods:{
      dataIn(){
        this.showNew=true;
      },
      exportExcel(){
        let workbook = XLSX.utils.table_to_book(document.getElementById('table')); //需要在table上定义一个id
        try {
          XLSX.writeFile(workbook, 'text.xlsx');
          this.$message({
            type: 'success',
            message: '导出成功,注意查收系统下载文件'
          })
        } catch (e) {
          this.$message({
            type: 'success',
            message: '导出失败,失败信息:' + e
          })
        }
      },
      sure() {
        this.instance.comIdaward({
          com_id:this.com_id
        }).then(res => {
          this.datas=res.data.data
        })
        this.showNew = false
      },
      wait() {
        this.showNew = false
      },
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
  width: 900px;
  margin: auto;
}
.com{
  margin-top: 10px;
}

</style>
