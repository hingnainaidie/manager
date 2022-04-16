<template>
  <div>
    <div class='search'>
      <el-row>
        <el-col :span='6'>
          <el-date-picker v-model="date1" value-format="yyyy-MM-dd" type="date" placeholder="选择开始时间"></el-date-picker>
        </el-col>
        <el-col :span='6'>
          <el-date-picker v-model="date2" value-format="yyyy-MM-dd" type="date" placeholder="选择结束时间"></el-date-picker>
        </el-col>
        <el-col :span='4'>
          <el-button type="primary" @click='detail()'>查询详细竞赛</el-button>
        </el-col>
        <el-col :span='4'>
          <el-button type="primary" @click='pic()'>查看对比分析图</el-button>
        </el-col>
      </el-row>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'award_level',
    data() {
      return {
        date1: '',
        date2: '',
      }
    },
    methods: {
      detail() {
        if (this.date1 == '' || this.date2 == '') {
          alert("请选择时间")
        } else if (this.compareDate(this.date1, this.date2)) {
          alert("时间顺序错误")
        } else {
          this.$router.push({
            path: "/award/award_level/a_level_detail",
            query: {
              date1: this.date1,
              date2: this.date2
            }
          })
        }
      },
      pic() {
        if (this.date1 == '' || this.date2 == '') {
          alert("请选择时间")
        } else if (this.compareDate(this.date1, this.date2)) {
          alert("时间顺序错误")
        } else {
          this.$router.push({
            path: "/award/award_level/a_level_pic",
            query: {
              date1: this.date1,
              date2: this.date2
            }
          })

        }
      },
      compareDate(d1, d2) { //判断两个日期的大小
        let reg = new RegExp('-', 'g')
        if (((new Date(d1.replace(reg, '/'))) > (new Date(d2.replace(reg, '/'))))) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    margin-left: 20px;
    margin-bottom: 20px;
  }
</style>
