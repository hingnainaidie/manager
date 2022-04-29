<template>
  <div>
    <el-button @click="goNew()" type="primary" style="margin-bottom: 10px;">发布新竞赛</el-button>
    <div class='com'>
      <el-table :data='datas' style='width: 100%; padding: auto;'>
        <el-table-column prop='com_check' label='审核状态' width="120" :filters="check" :filter-method="filterHandler" :formatter="fCheck"></el-table-column>
        <el-table-column prop='com_status' label='竞赛状态' width="120" :filters="status" :filter-method="filterHandler" :formatter="fStatus"></el-table-column>
        <el-table-column prop='com_date' label='创建时间' width="150"></el-table-column>
        <el-table-column prop='com_mainname' label='竞赛名称' width="200"></el-table-column>
        <el-table-column prop='user_name' label='竞赛负责人' width="120"></el-table-column>
        <el-table-column label='操作'>
          <template slot-scope='scope'>
            <el-button size="mini" type="primary" @click='detail(scope.row.com_id)'>查看竞赛详情</el-button>
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
        changeId:'',
        check: [{
            text: '未审核',
            value: 0
          },
          {
            text: '审核成功',
            value: 1
          },
          {
            text: '审核失败',
            value: 2
          }
        ],
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
    components:{
      comnew,
      comchange,
      dialog1
    },
    mounted() {
      this.com_nopass()
    },
    methods: {
      fCheck(row,column,cellValue,index){
        if(cellValue==0){
          return "未审核"
        }else if(cellValue==1){
          return "审核成功"
        }else if(cellValue==2){
          return "审核失败"
        }
      },
      fStatus(row,column,cellValue,index){
        if(cellValue==0){
          return "未开始"
        }else if(cellValue==1){
          return "进行中"
        }else if(cellValue==2){
          return "已完成"
        }
      },
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
          path: "/Manager/man_commsg",
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
        this.com_nopass();
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
        }).then(res => {
          if(res.data.code==666){
            this.com_nopass()
            this.showDialog3=false;
          }else{
            alert("删除操作失败！")
          }
        })
      },
      wait3(){
        this.showDialog3=false;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>

<style scoped lang="scss">
  .com {
  }
</style>
