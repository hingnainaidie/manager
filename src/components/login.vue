<template>
    <div>
      <div class="msg">
        <el-card class="box-card">
          <div slot="header">
            <span>USER-LOGIN</span>
          </div>
          <div>
            <el-form :model="form">
              <el-form-item>
                <el-input size="medium" v-model="form.usermsg" placeholder="请输入用户名/电话/邮箱"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input size="medium" type="password" v-model="form.pwd" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submsg()" size="medium" class="w-100">登录</el-button>
              </el-form-item>
            </el-form>
            <div class="tip">
              <el-link type="primary" href="/new_login">新用户注册</el-link>
              <span> | </span>
              <el-link type="primary">忘记密码</el-link>
            </div>
          </div>
        </el-card>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        form: {
          usermsg: '',
          pwd: ''
        }
      };
    },
    methods:{
      submsg(){
        if (this.form.usermsg == '') {
          alert("请输入用户名");
        } else if (this.form.pwd == '') {
          alert("请输入密码");
        }else{
          this.instance.userLogin({
            username: this.form.usermsg,
            pwd: this.form.pwd
          }).then(res => {
            //获取用户的一系列信息，保存在localstorage
          })
        }
      }
    }
  }
</script>

<style scoped>
.msg{
  width:500px;
  text-align: center;
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
  .tip{
    margin-right:0;
    margin-left:300px;
  }
</style>
