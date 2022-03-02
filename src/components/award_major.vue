<template>
    <div>
      <div class='search'>
        <el-row>
          <el-col :span='6'><el-date-picker v-model="date1" type="date" placeholder="选择开始时间"></el-date-picker></el-col>
          <el-col :span='6'><el-date-picker v-model="date2" type="date" placeholder="选择结束时间"></el-date-picker></el-col>
          <el-col :span='4'><el-button type="primary" @click='detail()'>查询详细竞赛</el-button></el-col>
          <el-col :span='4'><el-button type="primary" @click='pic()'>查看对比分析图</el-button></el-col>
        </el-row>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name:'award_major',
    data(){
      return{
        date1:'',
        date2:'',
      }
    },
    methods:{
      detail(){
        this.$router.push({path: "/award/award_major/a_major_detail"})
      },
      pic(){
        this.$router.push({path: "/award/award_major/a_major_pic"})
      }
    }
  }
</script>

<style scoped lang="scss">
.search{
  margin-left:20px;
  margin-bottom: 20px;
}
</style>
