<template>
  <div class="top">
    <el-descriptions :column="1" border>
      <el-descriptions-item label="姓名">{{user.name}}</el-descriptions-item>
      <el-descriptions-item label="手机号">{{user.phone}}</el-descriptions-item>
      <el-descriptions-item label="统一身份认证号" :span="2">{{user.num}}</el-descriptions-item>
      <el-descriptions-item label="身份">
        <el-tag size="small">{{user.idt}}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
</div>
</template>

<script>
  export default {
    name: 'user_basemsg',
    data(){
      return{
        user:{
          id:'',
          name:'',
          phone:'',
          num:'',
          idt:'',
        }
      }
    },
    mounted() {
      var storage = window.localStorage;
      this.user.id=storage.user_id;
      this.user.name=storage.user_name;
      this.user.phone=storage.user_phone;
      this.user.num=storage.user_num;
      if(storage.user_identity==0){
        this.user.idt='项目管理员'
      }else if(storage.user_identity==1){
        this.user.idt='竞赛负责人'
      }else if(storage.user_identity==2){
        this.user.idt='学生'
      }
    },
    methods:{
    }
  }
</script>

<style scoped lang='scss'>
.top{
  width: 80%;
  margin: auto;
  padding: 10px;
}

</style>
