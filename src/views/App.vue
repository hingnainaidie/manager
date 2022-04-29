<template>
  <div class='app'>
    <div class='appicon'>
      <img class='appiconimg' src='../picture/cqu_icon.png' />
      <div class='appname'>竞赛管理系统</div>
      <div class="user">
        <el-dropdown @command="handleCommand" v-if='myUser'>
          <span class="el-dropdown-link">
            {{this.user_name}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="basemsg">我的基本信息</el-dropdown-item>
            <el-dropdown-item command="changemsg">修改基本信息</el-dropdown-item>
            <el-dropdown-item command="changepwd">修改密码</el-dropdown-item>
            <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class='el-dropdown-link' @click='login()' v-if='noUser'>登录</div>
      </div>
    </div>
    <router-view />
    <changemsg @ch_sure="sure1()" @ch_wait="wait1()" v-if="showDialog1" :id='user_id' :name='user_name' :phone='user_phone'
      :num='user_num'></changemsg>
    <changepwd @ch_sure="sure2()" @ch_wait="wait2()" v-if="showDialog2" :id='user_id'></changepwd>
  </div>
</template>

<script>
  import changemsg from '../components/changemsg'
  import changepwd from '../components/changepwd'
  export default {
    name: 'App',
    components: {
      changemsg,
      changepwd,
    },
    mounted() {
      this.reflesh()
    },
    data() {
      return {
        showDialog1: false,
        showDialog2: false,
        myUser:false,
        noUser:true,
        user_id:'',
        user_name: '',
        user_num: '',
        user_phone: '',
        user_identity:'',
      }
    },
    methods: {
      reflesh(){
        var storage = window.localStorage;
        var token = storage.getItem('user_identity')
        if (!token) {
          this.myUser=false;
          this.noUser=true;
        } else{
          this.myUser=true;
          this.noUser=false;
          this.user_id = storage.user_id;
          this.user_name = storage.user_name;
          this.user_phone = storage.user_phone;
          this.user_num = storage.user_num;
          this.user_identity = storage.user_identity;
        }
      },
      handleCommand(command) {
        if(command=='changemsg'){
          this.changemsg()
        }else if(command=='changepwd'){
          this.changepwd()
        }else if(command=='loginout'){
          this.loginout()
        }else if(command=='basemsg'){
          if(this.user_identity==0){
            this.$router.push("/Controller/con_basemsg").catch(()=>{})
          }else if(this.user_identity==1){
            this.$router.push("/Manager/man_basemsg").catch(()=>{})
          }else if(this.user_identity==2){
            this.$router.push("/User/user_basemsg").catch(()=>{})
          }
        }
      },
      changemsg(user) {
        this.showDialog1 = true;
      },
      changepwd(user) {
        this.showDialog2 = true;
      },
      sure1() {
        this.reflesh();
        this.showDialog1 = false;
      },
      wait1() {
        this.showDialog1 = false;
      },
      sure2() {
        this.showDialog2 = false;
      },
      wait2() {
        this.showDialog2 = false;
      },
      loginout() {
        var storage = window.localStorage;
        storage.clear();
        this.myUser=false;
        this.noUser=true;
        this.$router.push("/login").catch(() => {
          alert('请先登出')
        })
      },
      login(){
        this.$router.push("/login").catch(() => {
          alert('请先登录')
        })
      }
    }
  }
</script>


<style lang='scss'>
  .app {
    min-width: 1200px;
  }

  .appicon {
    height: 80px;
    width: 100%;
    background-color: #545c64;
    margin-bottom: 3px;
  }

  .appiconimg {
    margin: 10px;
    height: 60px;
    width: 230px;
    float: left;
  }

  .appname {
    line-height: 80px;
    color: $color-white;
    font-size: 30px;
    font-weight: bold;
    float: left;
  }

  .user {
    line-height: 80px;
    float: right;
    margin-right: 20px;
  }

  .el-dropdown-link {
    font-size: 20px;
    cursor: pointer;
    color: white;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .button {
    text-align: center;
    background-color: $color-mid;
    min-width: 70px;
    height: 40px;
    line-height: 40px;
    color: white;
    border-radius: 10px;
    border: 0px;
  }

  .button:active {
    transform: scale(1.10);
  }

  .button:focus {
    background-color: $color-bblue;
    border: 0px solid;
    outline: none;
  }

  .input {
    width: 100%;
    border: 2px solid $color-mid;
    border-radius: 10px;
    /*css3属性IE不支持*/
  }

  .input:focus {
    border-color: $color-bblue;
    outline: 0;
  }
</style>
