<template>
  <div id="dialog">
    <div class="border">
      <div class="message">{{msg}}</div>
      <button class="button" @click="ch_wait" style="float: left;">{{msg1}}</button>
      <button class="button" @click="ch_sure" style="float: right;">{{msg2}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dialog1",
    data(){
      return {

      }
    },
    props:['msg','msg1','msg2'],
    methods:{
      ch_sure(){
         //给父组件传参
         this.$emit('ch_sure')
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
  .message{
    text-align: center;
    border-radius:10px;
    margin-bottom: 10px;
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
