<template>
    <div class='top'>
      <el-button type="primary" @click="dataIn()">批量导入用户</el-button>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='user_name' label='学生名字' width="120"></el-table-column>
          <el-table-column prop='user_identity' label='身份' :formatter="idt" width="150"></el-table-column>
          <el-table-column prop='user_num' label='学号' width="150"></el-table-column>
          <el-table-column prop='user_phone' label='联系方式' width="150"></el-table-column>
          <el-table-column label='操作' width="300">
            <template slot-scope='scope'>
              <el-button size="mini" type="warning" @click='identity(scope.row.user_id)'>修改用户身份</el-button>
              <el-button size="mini" type="danger" @click='del(scope.row.user_id)'>删除用户</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <ident @ch_sure="sure1()" @ch_wait="wait1()" v-if="showDialog1" :user_id='user_id'></ident>
      <userIn @ch_sure="sure()" @ch_wait="wait()" v-if="showNew"></userIn>
      <dialog1 @ch_sure="sure2()" @ch_wait="wait2()" v-if="showDialog2" :msg="msg" :msg1="msg1" :msg2="msg2"></dialog1>
    </div>
</template>

<script>
  import userIn from '../control/userIn.vue'
  import ident from '../../components/identity'
  import dialog1 from '../../components/dialog1'
  export default {
    name: 'com_user',
    mounted() {
      this.userAll()
    },
    components:{
      ident,
      userIn,
      dialog1
    },
    data(){
      return{
        datas:[],
        showDialog1:false,
        showDialog2:false,
        delId:'',
        user_id:'',
        showNew:false
      }
    },
    methods:{
      del(data){
        this.msg = "确定删除该数据";
        this.msg1 = "我不确定";
        this.msg2 = "确认删除";
        this.delId=data;
        this.showDialog2=true;
      },
      userAll(){
        this.instance.userCom({}).then(res => {
          this.datas=res.data
        })
      },
      dataIn(){
        this.showNew=true;
      },
      idt(row,column,cellValue,index){
        if(cellValue==0){
          return "项目管理员"
        }else if(cellValue==1){
          return "竞赛负责人"
        }else if(cellValue==2){
          return "学生"
        }else{
          return "游客"
        }
      },
      identity(data){
        this.user_id=data;
        this.showDialog1=true;
      },
      sure1(){
        this.userAll();
        this.showDialog1=false;
      },
      wait1(){
        this.showDialog1=false;
      },
      sure(){
        this.userAll();
        this.showNew=false;
      },
      wait(){
        this.showNew=false;
      },
      sure2(){
        this.instance.userDelete({
          user_id:this.delId
        }).then(res => {
          if(res.data==666){
            this.userAll();
            this.showDialog2=false;
          }
        })
      },
      wait2(){
        this.showDialog2=false;
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
