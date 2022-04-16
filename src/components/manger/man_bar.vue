<template>
    <div>
      <div class='topbar'>
        <el-row>
          <el-col :span='8'><div class="bar" @click="handleSelect('/man_mng/man_commsg/man_commsg1')">竞赛信息</div></el-col>
          <el-col :span='8'><div class="bar" @click="handleSelect('/man_mng/man_commsg/man_commsg2')">报名信息</div></el-col>
          <el-col :span='8'><div class="bar" @click="handleSelect('/man_mng/man_commsg/man_commsg3')">获奖申报</div></el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'man_bar',
    methods:{
      handleSelect(key) {
        this.$router.push({
          path: key
        })
      }
    }
  }
</script>

<style scoped lang="scss">
.topbar{
  margin:auto;
  width: 300px;
  margin-bottom: 30px;
}
.bar:hover{
  cursor: pointer;
}
.bar:active{
  color:red;
}
</style>
