<template>
  <div class='top'>
    <el-button>批量报名</el-button>
    <el-button @click='exportExcel()'>导出报名结果</el-button>
    <div class='com'>
      <el-table border :data='datas' style='width: 100%; padding: auto;'>
        <el-table-column prop='user_name' label='学生名字' width="245"></el-table-column>
        <el-table-column prop='user_num' label='学号' width="150"></el-table-column>
        <el-table-column prop='user_phone' label='联系方式' width="150"></el-table-column>
        <el-table-column label='操作' width="200">
          <template slot-scope='scope'>
            <el-button size="mini" type="primary" @click='detail(scope.row)'>查看</el-button>
            <el-button size="mini" type="danger" @click='del()'>取消报名</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-table v-show="false" id='table' :data='datas' style='width: 100%; padding: auto;'>
      <el-table-column prop='name' label='学生名字' width="245"></el-table-column>
      <el-table-column prop='num' label='学号' width="150"></el-table-column>
      <el-table-column prop='phone' label='联系方式' width="150"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import FileSaver from 'file-saver'
  import * as XLSX from 'xlsx'
  export default {
    name: 'man_commsg2',
    props:['com_id'],
    mounted() {
      this.instance.comIdsign({
        com_id:this.com_id
      }).then(res => {
        ths.datas=res.data
      })
    },
    data() {
      return {
        datas: []
      }
    },
    methods: {
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
