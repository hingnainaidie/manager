<template>
    <div>
      <div class='top'>
        <el-row>
          <el-col :span='10'><el-button class='el-icon-back' @click='back'>返回</el-button></el-col>
          <el-col :span='14' class='title'>奖项级别获奖分析</el-col>
        </el-row>
      </div>
      <el-row>
        <el-col :span='6'>
          <el-select v-model="category" placeholder='选择奖项类别'>
            <el-option v-for='item in categories' :key='item' :label='item' :value='item'></el-option>
          </el-select>
        </el-col>
        <el-col :span='6'>
          <el-button type='primary'>生成分析图表</el-button>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'con_awardAll',
    data() {
      return {
        category:'',
        categories:['大学生英语竞赛', '数模比赛', '程序设计大赛'],
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
