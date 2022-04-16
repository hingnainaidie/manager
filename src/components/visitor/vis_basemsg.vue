<template>
  <div class="top">
    <el-button type="primary" style="margin-bottom: 10px;" @click='changemsg(user)'>修改基本信息</el-button>
    <el-button type="warning" style="margin-bottom: 10px;" @click='changepwd(user)'>修改密码</el-button>
    <el-button type="warning" style="margin-bottom: 10px;" @click='loginout()'>退出登录</el-button>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="姓名">{{user.name}}</el-descriptions-item>
      <el-descriptions-item label="手机号">{{user.phone}}</el-descriptions-item>
      <el-descriptions-item label="身份">
        <el-tag size="small" @click='identity()'>身份认证</el-tag>
      </el-descriptions-item>
    </el-descriptions>
    <changemsg @ch_sure="sure1()" @ch_wait="wait1()" v-if="showDialog1" :name='user.name' :phone='user.phone' :num='user.num'></changemsg>
    <changepwd @ch_sure="sure2()" @ch_wait="wait2()" v-if="showDialog2"></changepwd>
    <ident @ch_sure="sure3()" @ch_wait="wait3()" v-if="showDialog3" :user_id="id"></ident>
</div>
</template>

<script>
  import changemsg from '../../components/changemsg'
  import changepwd from '../../components/changepwd'
  import ident from '../../components/identity'
  export default {
    name: 'user_basemsg',
    data(){
      return{
        showDialog1:false,
        showDialog2:false,
        showDialog3:false,
        user:{
          id:'',
          name:'',
          phone:'',
        }
      }
    },
    components:{
      changemsg,
      changepwd,
      ident
    },
    mounted() {
      var storage = window.localStorage;
      this.user.id=storage.user_id;
      this.user.name=storage.user_name;
      this.user.phone=storage.user_phone;
    },
    methods:{
      identity(){
        this.showDialog3=true;
      },
      loginout(){
        var storage = window.localStorage;
        storage.clear()
        this.$router.push("/login").catch(()=>{alert('请先登出')})
      },
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
      },
      sure3(){
        this.showDialog3=false;
      },
      wait3(){
        this.showDialog3=false;
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
