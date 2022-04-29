<template>
  <div class='top'>
    <el-button @click="signall()" type="primary">批量报名</el-button>
    <el-button @click='exportExcel()'>导出报名结果</el-button>
    <div class='com'>
      <el-table border :data='datas' id='table' style='width: 100%; padding: auto;'>
        <el-table-column prop='user_name' label='学生名字' width="245"></el-table-column>
        <el-table-column prop='user_num' label='学号' width="150"></el-table-column>
        <el-table-column prop='user_phone' label='联系方式' width="150"></el-table-column>
      </el-table>
    </div>
    <signIn @ch_sure="sure" @ch_wait="wait" v-if="showSign" :id="id"></signIn>
  </div>
</template>

<script>
  import signIn from '../control/con_signIn.vue'
  import FileSaver from 'file-saver'
  import * as XLSX from 'xlsx'
  export default {
    name: 'man_commsg2',
    components: {
      signIn
    },
    props:['com_id'],
    mounted() {
      this.instance.comIdsign({
        com_id:this.com_id
      }).then(res => {
        this.datas=res.data.data
      }),
      this.id=this.com_id
    },
    data() {
      return {
        datas: [],
        showSign:false,
        id:''
      }
    },
    methods: {
      signall(){
        this.showSign=true
      },
      exportExcel() {
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
        this.instance.comIdsign({
          com_id:this.com_id
        }).then(res => {
          this.datas=res.data.data
        }),
        this.showSign = false
      },
      wait() {
        this.showSign = false
      },

    },
  }
</script>

<style scoped lang='scss'>
  .top {
    width: 800px;
    margin: auto;
  }

  .com {
    margin-top: 10px;
  }
</style>
