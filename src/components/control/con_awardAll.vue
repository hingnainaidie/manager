<template>
    <div>
      <div class='top'>
        <el-row>
          <el-col :span='10'><el-button class='el-icon-back' @click='back'>返回</el-button></el-col>
          <el-col :span='14' class='title'>竞赛获奖总分析</el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'con_awardAll',
    data() {
      return {
      };
    },
    methods:{
      back(){
        this.$router.back();
      },
    }
  }
</script>

<style scoped>
  .top{
    margin-bottom: 20px;
  }
.title {
    line-height: 30px;
    color: gray;
    font-size: 20px;
    font-weight: bold;
    float: left;
  }
</style>
