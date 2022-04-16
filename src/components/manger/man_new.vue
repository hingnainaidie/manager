<template>
  <div>
    <div class="main">
      <el-button @click="goNew()" type='primary'>发布新新闻</el-button>
      <el-button @click="find_nopass()">未审核新闻</el-button>
      <el-button @click="find_pass()">已审核新闻</el-button>
      <div class='com'>
        <el-table :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='date' label='发布时间' width="200"></el-table-column>
          <el-table-column prop='title' label='新闻标题' width="400"></el-table-column>
          <el-table-column prop='author' label='新闻作者' width="120"></el-table-column>
          <el-table-column label='操作' width="250">
            <template slot-scope='scope'>
              <el-button size="mini" type="primary" @click='detail(scope.row)'>查看</el-button>
              <el-button size="mini" type="warning" @click='change(scope.row)'>修改</el-button>
              <el-button size="mini" type="danger" @click='del(scope.row)'>删除</el-button>
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
    name: 'man_new',
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
        delId:0,
        datas: [],
        flag:0,
      }
    },
    mounted() {
      this.find_nopass()
    },
    methods: {
      goNew() {
        this.$router.push({
          path: "/man_mng/edit_new"
        })
      },
      find_pass(){
        this.flag=1;
        var storage = window.localStorage;
        this.instance.newsUserfindPass({
          user_id:storage.user_id
        }).then(res => {
          this.datas=res.data
        })
      },
      find_nopass(){
        this.flag=0;
        var storage = window.localStorage;
        this.instance.newsUserfindNopass({
          user_id:storage.user_id
        }).then(res => {
          this.datas=res.data
        })
      },
      detail(data) {
        this.$router.push({
          path: "/new_detail",
          query: {
            data: data.id
          }
        })
      },
      change(data) {
        this.$router.push({
          path: "/man_mng/new_change",
          query: {
            data: data.news_id
          }
        })
      },
      del(data) {
        this.msg = "确定删除该数据";
        this.msg1 = "我不确定";
        this.msg2 = "确认删除";
        this.delId=data.news_id;
        this.vm.showDialog = true
      },
      sure() {
        this.vm.showDialog = false;
        this.instance.newsDelete({
          news_id:this.delId
        }).then(res => {})
        this.reflesh();
      },
      reflesh(){
        if(this.flag==0){
          this.find_nopass()
        }else{
          this.find_pass();
        }
      },
      wait() {
        this.vm.showDialog = false;
      }
    }
  }
</script>

<style scoped lang='scss'>
  .com{
    margin-top:10px;
  }
</style>
