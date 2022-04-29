<template>
  <div>
    <div class="msg">
      <el-card class="box-card">
        <div slot="header">
          <span>USER-LOGIN-NEW</span>
        </div>
        <div>
          <el-form :model="form">
            <el-form-item>
              <el-input size="medium" v-model="form.username" placeholder="请设置用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input size="medium" v-model="form.usernum" placeholder="请输入学号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input size="medium" type="password" v-model="form.pwd" placeholder="请设置登录密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input size="medium" type="password" v-model="form.repwd" placeholder="请再次输入登录密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input size="medium" v-model="form.phone" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submsg()" size="medium" class="w-100">同意并注册</el-button>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked"></el-checkbox>
               <el-link type="primary">同意条款和隐私权政策</el-link>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'new_login',
    data() {
      return {
        form: {
          username: '',
          usernum:'',
          pwd: '',
          repwd: '',
          phone: ''
        },
        checked: false
      };
    },
    methods: {
      submsg() {
        if (this.form.username == '') {
          alert("请输入用户名")
        } else if (this.form.pwd == '') {
          alert("请输入密码")
        } else if (this.form.pnum == '') {
          alert("请输入电话号码")
        } else if (this.form.pwd != this.form.repwd) {
          alert("两次输入密码不一样")
        } else if(!this.checked){
          alert("请勾选同意条款和隐私权政策")
        }else {
          this.instance.userNewLogin({
            user_name: this.form.username,
            user_num: this.form.usernum,
            user_password: this.form.pwd,
            user_phone: this.form.phone
          }).then(res => {
            if(res.data==700){
              alert('用户名重复')
            }else if(res.data==701){
              alert('该号码已注册')
            }else if(res.data==666){
              alert('注册成功')
              console.log("注册成功")
              this.$router.push({path:"/login"})
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .msg {
    width: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .tip {
    margin-right: 0;
    margin-left: 300px;
  }
</style>
