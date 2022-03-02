<template>
    <div>
      <div class='search'>
        <el-row>
          <el-col :span='6'>
            <el-select v-model="year" placeholder='选择年份' @change='levelChange()'>
              <el-option v-for='item in years' :key='item' :label='item' :value='item'></el-option>
            </el-select>
          </el-col>
          <el-col :span='4'><el-button type="primary" @click='detail()'>查询详细竞赛</el-button></el-col>
          <el-col :span='4'><el-button type="primary" @click='pic()'>查看对比分析图</el-button></el-col>
        </el-row>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name:'award_year',
    data(){
      return{
        year:'',
        years:['2018','2019','2020','2021','2022']
      }
    },
    methods:{
      detail(){
        this.$router.push({path: "/award/award_year/a_year_detail"})
      },
      pic(){
        this.$router.push({path: "/award/award_year/a_year_pic"})
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
