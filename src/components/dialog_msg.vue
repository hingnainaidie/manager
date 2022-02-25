<template>
  <div id="dialog">
    <div class="border">
      <div class="message">{{msg}}</div>
      <button class="button" @click="ch_sure">确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dialog_msg",
    data(){
      return {
      }
    },
    props:['msg'],
    methods:{
      ch_sure(){
         //给父组件传参
         this.$emit('ch_sure')
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
