<template>
  <div id="dialog">
    <div class="border">
      <input class='input' type="text" placeholder="请输入姓名" v-model="user_name"/>
      <input class='input' type="text" placeholder="请输入手机号" v-model='user_phone'/>
      <el-alert title="修改信息需要重新身份认证嗷" type="success"></el-alert>
      <el-button type='primary' @click="ch_wait">取消</el-button>
      <el-button type='primary' @click="ch_sure">确定修改</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user_changemsg",
    data(){
      return {
        user_id:this.id,
        user_name:this.name,
        user_phone:this.phone,
        user_num:this.num,
      }
    },
    props:['id','name','phone','num'],
    methods:{
      ch_sure(){
         //给父组件传参
         this.instance.userChabasic({
            user_id:this.user_id,
            user_name:this.user_name,
            user_phone:this.user_phone,
            user_num:this.user_num
         }).then(res => {
           if(res.data.code==666){
            window.localStorage.setItem('user_name',this.user_name);
            window.localStorage.setItem('user_phone',this.user_phone);
            this.$emit('ch_sure')
           }
         })
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
