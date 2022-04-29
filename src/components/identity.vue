<template>
  <div id="dialog">
    <div class="border">
      <div style="margin: 20px;">
        <el-select v-model="idt" placeholder='选择认证身份'>
          <el-option v-for='item in idts' :key='item' :label='item' :value='item'></el-option>
        </el-select>
      </div>
      <el-button type='primary' @click="ch_wait()">取消</el-button>
      <el-button type='primary' @click="ch_sure()">确定修改</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "identity",
    props:['user_id'],
    data(){
      return {
        idts:["项目管理员","竞赛负责人","学生"],
        idt:'',
      }
    },
    methods:{
      ch_sure(){
         //发送验证信息
         if(this.idt==''||this.name==''){
           alert("请填写完整信息");
         }
         var ident=3;
         if(this.idt=="项目管理员"){
           ident=0;
         }else if(this.idt=="竞赛负责人"){
           ident=1;
         }else if(this.idt=="学生"){
           ident=2;
         }
         this.instance.userIdentify({
            user_id:this.user_id,
            user_identity:ident
         }).then(res => {
           if(res.data.code==666){
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
    width: 250px;
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
