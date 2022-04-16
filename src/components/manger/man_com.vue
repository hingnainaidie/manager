<template>
  <div>
    <el-button @click="goNew()" type="primary" style="margin-bottom: 10px;">发布新竞赛</el-button>
    <el-button @click='com_nopass()'>待审核竞赛</el-button>
    <el-button @click='com_pass()'>已审核竞赛</el-button>
    <div class='com'>
      <el-table :data='datas' style='width: 100%; padding: auto;'>
        <el-table-column prop='com_date' label='创建时间' width="150"></el-table-column>
        <el-table-column prop='com_mainname' label='竞赛名称' width="300"></el-table-column>
        <el-table-column prop='com_manager' label='竞赛负责人' width="150"></el-table-column>
        <el-table-column label='操作' width="350">
          <template slot-scope='scope'>
            <el-button size="mini" type="primary" @click='detail(scope.row.com_id)'>查看竞赛详情</el-button>
            <el-button size="mini" type="warning" @click='change(scope.row.com_id)'>修改</el-button>
            <el-button size="mini" type="danger" @click='del(scope.row.com_id)'>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <comnew @ch_sure="sure1()" @ch_wait="wait1()" v-if="showDialog1"></comnew>
    <comchange @ch_sure="sure2()" @ch_wait="wait2()" v-if="showDialog2" :com_id="changeId"></comchange>
    <dialog1 @ch_sure="sure3()" @ch_wait="wait3()" v-if="showDialog3" :msg="msg" :msg1="msg1" :msg2="msg2"></dialog1>
  </div>
</template>

<script>
  import dialog1 from '../../components/dialog1'
  import comnew from '../../components/com_new'
  import comchange from '../../components/com_change'
  export default {
    name: 'man_com',
    data() {
      return {
        msg : "确定删除该数据",
        msg1 : "我不确定",
        msg2 : "确认删除",
        showDialog1:false,
        showDialog2:false,
        showDialog3:false,
        datas: [],
        delId:'',
        changeId:''
      }
    },
    components:{
      comnew,
      comchange,
      dialog1
    },
    mounted() {
      this.com_nopass()
    },
    methods: {
      com_nopass(){
        var storage = window.localStorage;
        this.instance.comUserfindNopass({
          user_id:storage.user_id
        }).then(res => {
          this.datas=res.data.data
        })
      },
      com_pass(){
        var storage = window.localStorage;
        this.instance.comUserfindPass({
          user_id:storage.user_id
        }).then(res => {
          this.datas=res.data.data
        })
      },
      detail(data) {
        this.$router.push({
          path: "/man_mng/man_commsg",
          query: {data: data}
        })
      },
      change(data){
        this.changeId=data;
        this.showDialog2=true;
      },
      del(data){
        this.delId=data;
        this.showDialog3=true;
      },
      goNew(){
        this.showDialog1=true;
      },
      sure1(){
        this.showDialog1=false;
      },
      wait1(){
        this.showDialog1=false;
      },
      sure2(){
        this.showDialog2=false;
      },
      wait2(){
        this.showDialog2=false;
      },
      sure3(){
        this.instance.comDelete({
          com_id:this.delId
        }).then(res => {})
        this.showDialog3=false;
      },
      wait3(){
        this.showDialog3=false;
      },
    }
  }
</script>

<style scoped lang="scss">
  .com {
  }
</style>
