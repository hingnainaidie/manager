<template>
    <div>
      <div class="word_css">
        <div class="top">
          <button class="button" @click="back" style="float: left; margin-right: 20px;">返回</button>
          <button class="button"  @click="out" style="float: left;">确认修改</button>
        </div>
        <textarea class='input' maxlength="20" v-model="title" style="text-align: center;height: 40px; margin-bottom: 20px;"></textarea>
        <textarea class="input" v-model="essay" style="min-height: 200px;"></textarea>
      </div>
      <dialog1 @ch_sure="sure" @ch_wait="wait" v-if="vm.showDialog" :msg="msg" :msg1="msg1" :msg2="msg2"></dialog1>
      <dialog_msg @ch_sure="msg_sure" v-if="vm.showDialogMsg" :msg="mmsg"></dialog_msg>
    </div>
</template>

<script>
  import dialog1 from '../components/dialog1'
  import dialog_msg from '../components/dialog_msg'
  export default {
    name: 'inform_change',
    components:{
      dialog1,
      dialog_msg
    },
    data(){
      return{
        msg1:'',
        msg2:'',
        msg:'',
        mmsg:"这里是一个警告",
        flag:0,
        vm:{
          showDialog:false,
          showDialogMsg:false
        },
        id:this.$route.query.data,
        title:'',
        essay:''
      }
    },
    mounted() {
      this.instance.informIdsearch({
        inform_id:this.id
      }).then(res => {
        this.title=res.data.ann.title,
        this.essay=res.data.ann.essay
      })
    },
    methods:{
      back(){
        this.$router.back();
      },
      out(){
        if(this.title==''){
          this.mmsg="标题为空！";
          this.vm.showDialogMsg=true
        }
        else if(this.details==''){
          this.mmsg="内容为空！";
          this.vm.showDialogMsg=true
        }
        else{
          this.msg="确定修改该公告";
          this.msg1="继续编辑";
          this.msg2="确定修改";
          this.vm.showDialog=true;
        }
      },
      msg_sure(){
        this.vm.showDialogMsg=false;
      },
      sure(){
        this.instance.informUpdate({
          inform_id:this.id,
          title:this.title,
          essay:this.essay
        }).then(res => {})
        this.vm.showDialog=false;
        this.$router.back();
      },
      wait(){
        this.vm.showDialog=false;
      }
    }
  }
</script>

<style scoped>
  .word_css{
    max-width: 1000px;
    min-width: 400px;
    margin:auto;
    padding:20px;
    text-align: center;
  }
  .top{
    margin-bottom: 20px;
    height: 30px;
  }
.title{
  width: 100%;
  height: 50px;
  text-align:center;
  font-size:25px;
  margin-bottom: 10px;
  border-radius: 10px;
}
  .detail{
    width: 100%;
    border-radius: 10px;
    min-height: 300px;
  }
</style>
