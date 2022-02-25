<template>
  <div class="top">
    <el-button type="primary" style="margin-bottom: 10px;" @click='changemsg(user)'>修改基本信息</el-button>
    <el-button type="warning" style="margin-bottom: 10px;" @click='changepwd(user)'>修改密码</el-button>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="姓名">{{user.name}}</el-descriptions-item>
      <el-descriptions-item label="手机号">{{user.phone}}</el-descriptions-item>
      <el-descriptions-item label="统一身份认证号" :span="2">{{user.num}}</el-descriptions-item>
      <el-descriptions-item label="身份">
        <el-tag size="small">{{user.idt}}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
    <changemsg @ch_sure="sure1()" @ch_wait="wait1()" v-if="showDialog1" :name='user.name' :phone='user.phone' :num='user.num'></changemsg>
    <changepwd @ch_sure="sure2()" @ch_wait="wait2()" v-if="showDialog2"></changepwd>
</div>
</template>

<script>
  import changemsg from '../../components/changemsg'
  import changepwd from '../../components/changepwd'
  export default {
    name: 'user_basemsg',
    data(){
      return{
        showDialog1:false,
        showDialog2:false,
        user:{
          name:'张三',
          phone:'1222097655',
          num:'20202200',
          idt:'竞赛负责人',
        }
      }
    },
    components:{
      changemsg,
      changepwd,
    },
    methods:{
      changemsg(user){
        this.showDialog1=true;
      },
      changepwd(user){
        this.showDialog2=true;
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
      }
    }
  }
</script>

<style scoped lang='scss'>
.top{
  width: 80%;
  margin: auto;
  padding: 10px;
}

</style>
