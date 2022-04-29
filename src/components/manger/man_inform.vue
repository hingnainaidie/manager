<template>
  <div>
    <div class="main">
      <el-button @click="goNew()" type='primary'>发布新公告</el-button>
      <el-button @click="find_nopass()">未审核公告</el-button>
      <el-button @click="find_pass()">已审核公告</el-button>
      <div class='com'>
        <el-table :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='date' label='发布时间' width="180"></el-table-column>
          <el-table-column prop='title' label='公告标题' width="300"></el-table-column>
          <el-table-column label='操作'>
            <template slot-scope='scope'>
              <el-button size="mini" type="primary" @click='detail(scope.row.inform_id)'>查看</el-button>
              <el-button size="mini" type="warning" @click='change(scope.row.inform_id)'>修改</el-button>
              <el-button size="mini" type="danger" @click='del(scope.row.inform_id)'>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <dialog1 @ch_sure="sure" @ch_wait="wait" v-if="vm.showDialog" :msg="msg" :msg1="msg1" :msg2="msg2"></dialog1>
  </div>
</template>

<script>
  import dialog1 from '../../components/dialog1'
  export default {
    name: 'man_inform',
    components: {
      dialog1,
    },
    data() {
      return {
        msg1: '',
        msg2: '',
        msg: '',
        vm: {
          showDialog: false,
        },
        datas: [],
        delId:0,
        flag:0,
      }
    },
    mounted(){
      this.find_nopass()
    },
    methods: {
      goNew() {
        var storage = window.localStorage;
        this.$router.push({path:"/Manager/edit_inform",query:{data:storage.user_id}})
      },
      detail(data) {
        this.$router.push({
          path: "/Manager/man_inform_detail",
          query: {
            data: data
          }
        })
      },
      change(data) {
        this.$router.push({
          path: "/Manager/inform_change",
          query: {
            data: data
          }
        })
      },
      del(data) {
        this.msg = "确定删除该数据";
        this.msg1 = "我不确定";
        this.msg2 = "确认删除";
        this.delId=data;
        this.vm.showDialog = true;
      },
      sure() {
        this.vm.showDialog = false;
        this.instance.informDelete({
          inform_id:this.delId
        }).then(res => {
          if(res.data==666){
            this.reflesh();
          }
        })
      },
      wait() {
        this.vm.showDialog = false;
      },
      reflesh(){
        if(this.flag==0){
          this.find_nopass()
        }else{
          this.find_pass();
        }
      },
      find_pass(){
        this.flag=1;
        var storage = window.localStorage;
        this.instance.informUserfindPass({
          user_id:storage.user_id
        }).then(res => {
          this.datas=res.data
        })
      },
      find_nopass(){
        this.flag=0;
        var storage = window.localStorage;
        this.instance.informUserfindNopass({
          user_id:storage.user_id
        }).then(res => {
          this.datas=res.data
        })
      },
    }
  }
</script>

<style scoped lang='scss'>
  .com{
    margin-top:10px;
  }
</style>
