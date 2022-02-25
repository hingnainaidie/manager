<template>
  <div>
    <el-button @click="goNew()" style="margin-bottom: 10px;">发布新竞赛</el-button>
    <div class='com'>
      <el-table :data='datas' style='width: 100%; padding: auto;'>
        <el-table-column prop='main_name' label='竞赛名称' width="350"></el-table-column>
        <el-table-column prop='statue' label='竞赛状态' width="150"></el-table-column>
        <el-table-column prop='manager' label='竞赛负责人' width="150"></el-table-column>
        <el-table-column prop='manager' label='操作' width="350">
          <el-button size="mini" type="primary" @click='detail()'>查看竞赛详情</el-button>
          <el-button size="mini" type="warning" @click='change()'>修改</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <comnew @ch_sure="sure" @ch_wait="wait" v-if="showDialog1"></comnew>
    <comchange @ch_sure="sure" @ch_wait="wait" v-if="showDialog2"></comchange>
  </div>
</template>

<script>
  import comnew from '../../components/com_new'
  import comchange from '../../components/com_change'
  export default {
    name: 'man_com',
    data() {
      return {
        showDialog1:false,
        showDialog2:false,
        datas: [{
            main_name: '全国大学生英语竞赛',
            statue: '审核中',
            manager: '时影',
            sign_start: '2021/2/16',
            sign_end: '2021/2/17'
          },
          {
            main_name: '全国大学生英语竞赛',
            statue: '未完成',
            manager: '时影',
            sign_start: '2021/2/16',
            sign_end: '2021/2/17'
          },
          {
            main_name: '全国大学生英语竞赛',
            statue: '未完成',
            manager: '时影',
            sign_start: '2021/2/16',
            sign_end: '2021/2/17'
          },
          {
            main_name: '全国大学生英语竞赛',
            statue: '未完成',
            manager: '时影',
            sign_start: '2021/2/16',
            sign_end: '2021/2/17'
          },
          {
            main_name: '全国大学生英语竞赛',
            statue: '未完成',
            manager: '时影',
            sign_start: '2021/2/16',
            sign_end: '2021/2/17'
          },
          {
            main_name: '全国大学生英语竞赛',
            statue: '未完成',
            manager: '时影',
            sign_start: '2021/2/16',
            sign_end: '2021/2/17'
          },
          {
            main_name: '全国大学生英语竞赛',
            statue: '未完成',
            manager: '时影',
            sign_start: '2021/2/16',
            sign_end: '2021/2/17'
          },
          {
            main_name: '全国大学生英语竞赛',
            statue: '未完成',
            manager: '时影',
            sign_start: '2021/2/16',
            sign_end: '2021/2/17'
          },
        ]
      }
    },
    components:{
      comnew,
      comchange,
    },
    methods: {
      detail() {
        this.$router.push({
          path: "/man_mng/man_commsg/man_commsg1"
        })
      },
      change(){
        this.showDialog2=true;
      },
      goNew(){
        this.showDialog1=true;
      },
      sure(){
        this.showDialog1=false;
        this.showDialog2=false;
      },
      wait(){
        this.showDialog1=false;
        this.showDialog2=false;
      },
    }
  }
</script>

<style scoped lang="scss">
  .com {
  }
</style>
