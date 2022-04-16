<template>
  <div id="dialog">
    <div class="border">
      <input class='input' type="password" v-model='pwdOld' placeholder="请输入旧密码"/>
      <input class='input' type="password" v-model='pwdNew' placeholder="请输入新密码"/>
      <input class='input' type="password" v-model='pwdNew1' placeholder="请重新输入新密码"/>
      <el-button type='primary' @click="ch_wait">取消</el-button>
      <el-button type='primary' @click="ch_sure">确定修改</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "changepwd",
    data(){
      return {
        pwdNew:'',
        pwdNew1:'',
        pwdOld:''
      }
    },
    props:['id'],
    methods:{
      ch_sure(){
         //给父组件传参
         if(this.pwdNew==this.pwdNew1){
           this.instance.userChapass({
              user_id:this.id,
              user_password_old:this.pwdOld,
              user_password_new:this.pwdNew
           }).then(res => {})
           this.$emit('ch_sure')
         }else{
           alert("两次密码不正确")
         }
      },
      ch_wait(){
         //给父组件传参
         this.$emit('ch_wait')
      }
    }
  }
</script>

<style scoped>
  #dialog{
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    width: 100%;
    height: 100%;
  }
  .input{
    height: 40px;
    width: 200px;
    border: 2px solid #b0cfe1;
    margin: 10px;
    padding: 7px 0px;
    border-radius: 10px; /*css3属性IE不支持*/
    padding-left:5px;
  }
  .input:focus{
    border-color: #759EB8;
    outline: 0;
  }
  .message{
    text-align: center;
    margin-bottom: 20px;
    border-radius:10px;
    margin-bottom: 7px;
  }
  .border{
    padding: 10px;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    width: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
