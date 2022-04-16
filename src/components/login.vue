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
            user_in: this.form.usermsg,
            user_password: this.form.pwd
          }).then(res => {
            //获取用户的一系列信息，保存在localstorage
              if (!window.localStorage) {
                console.log('浏览器版本太低，不支持localStorage')
              } else {
                if(res.data.code==666){
                  //存储用户信息
                  var storage = window.localStorage;
                  storage.user_id = res.data.user.user_id;
                  storage.user_identity = res.data.user.user_identity;
                  storage.user_name = res.data.user.user_name;
                  storage.user_num = res.data.user.user_num;
                  storage.user_phone = res.data.user.user_phone;
                  if (res.data.user.user_identity == 1) {
                    this.$router.push("/Manager/man_leader").catch(()=>{})
                  } else if ((res.data.user.user_identity == 0)) {
                    this.$router.push("/Controller/con_leader").catch(()=>{})
                  } else if (res.data.user.user_identity == 2) {
                    this.$router.push("/User/user_leader").catch(()=>{})
                  }
                }else{
                  alert("用户名或密码错误")
                }
              }
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
