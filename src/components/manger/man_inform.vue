<template>
  <div>
    <div class="main">
      <el-button @click="goNew()">发布新公告</el-button>
      <div class='com'>
        <el-table :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='date' label='发布时间' width="100"></el-table-column>
          <el-table-column prop='title' label='公告标题' width="600"></el-table-column>
          <el-table-column prop='author' label='公告发布者' width="150"></el-table-column>
          <el-table-column label='操作' width="250">
            <template slot-scope='scope'>
              <el-button size="mini" type="primary" @click='detail(scope.row)'>查看</el-button>
              <el-button size="mini" type="warning" @click='change(scope.row)'>修改</el-button>
              <el-button size="mini" type="danger" @click='del()'>删除</el-button>
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
        datas: [{
          date: '2016-05-01',
          author:'张小凡',
          title: '这里是竞赛的标题等等关于xxxxx竞赛',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-02',
          author:'张小凡',
          title: '这里是竞赛的标题等等关于xxxxx竞赛',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          author:'张小凡',
          title: '这里是竞赛的标题等等关于xxxxx竞赛',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-04',
          author:'张小凡',
          title: '这里是竞赛的标题等等关于xxxxx竞赛',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-05',
          author:'张小凡',
          title: '这里是竞赛的标题等等关于xxxxx竞赛',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-05',
          author:'张小凡',
          title: '这里是竞赛的标题等等关于xxxxx竞赛',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-05',
          author:'张小凡',
          title: '这里是竞赛的标题等等关于xxxxx竞赛',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }]
      }
    },
    methods: {
      goNew() {
        this.$router.push({
          path: "/man_mng/edit_inform"
        })
      },
      detail(data) {
        this.$router.push({
          path: "/inform_detail",
          query: {
            data: data
          }
        })
      },
      change(data) {
        this.$router.push({
          path: "/man_mng/inform_change",
          query: {
            data: data
          }
        })
      },
      del(data) {
        this.msg = "确定删除该数据";
        this.msg1 = "我不确定";
        this.msg2 = "确认删除";
        this.vm.showDialog = true;
      },
      sure() {
        this.vm.showDialog = false;
        //在这里删除数据
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
