<template>
    <div class>
      <div class="bar">
        <el-menu
          :default-active="$router.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/leader">首页</el-menu-item>
          <el-menu-item index="/news">新闻中心</el-menu-item>
          <el-menu-item index="/informs">通知公告</el-menu-item>
          <el-menu-item index="/discipline_competition">学科竞赛</el-menu-item>
          <el-menu-item index="/user_mng/user_basemsg">我的</el-menu-item>
          <el-menu-item index="/man_mng/man_basemsg">竞赛负责人</el-menu-item>
          <el-menu-item index="/con_mng/con_basemsg">项目管理员</el-menu-item>
          <el-menu-item index="/com_con">信息模板</el-menu-item>
        </el-menu>
      </div>
    </div>
</template>

<script>
    export default {
        name: "topbar",
        methods: {
          handleSelect(key) {
            this.$router.push({
              path: key
            })
          }
        }
    }
</script>

<style scoped>
.bar{
  min-width: 800px;
}
</style>
