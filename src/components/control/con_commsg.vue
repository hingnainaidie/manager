<template>
    <div>
      <div class='topbar'>
        <el-row>
          <el-col span='8'><div class="bar" @click="handleSelect('/con_mng/con_commsg/con_commsg1')">竞赛信息</div></el-col>
          <el-col span='8'><div class="bar" @click="handleSelect('/con_mng/con_commsg/con_commsg2')">报名信息</div></el-col>
          <el-col span='8'><div class="bar" @click="handleSelect('/con_mng/con_commsg/con_commsg3')">获奖信息</div></el-col>
        </el-row>
      </div>
      <router-view :com_id="com_id"></router-view>
    </div>
</template>

<script>
  export default {
    name: 'con_commsg',
    data(){
      return {
        com_id:this.$route.query.data
      }
    },
    methods:{
      handleSelect(key) {
        this.$router.push({
          path: key,
          query: {
            data: this.com_id
          }
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
