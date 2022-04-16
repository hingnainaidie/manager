<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="this.$router.path" class="el-menu" @select="handleSelect" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/User/leader">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/User/news">
            <i class="el-icon-setting"></i>
            <span slot="title">新闻中心</span>
          </el-menu-item>
          <el-menu-item index="/User/inform">
            <i class="el-icon-setting"></i>
            <span slot="title">通知公告</span>
          </el-menu-item>
          <el-submenu index='1'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>竞赛管理</span>
            </template>
            <el-menu-item index="/User/discipline_competition">
              <i class="el-icon-setting"></i>
              <span slot="title">竞赛中心</span>
            </el-menu-item>
            <el-menu-item index="/User/user_com">
              <i class="el-icon-setting"></i>
              <span slot="title">我的竞赛</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='2'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>成果管理</span>
            </template>
            <el-menu-item index="/User/user_achieve/user_award">
              <i class="el-icon-setting"></i>
              <span slot="title">我的获奖</span>
            </el-menu-item>
            <el-menu-item index="/User/user_achieve/user_thesis">
              <i class="el-icon-setting"></i>
              <span slot="title">我的论文</span>
            </el-menu-item>
            <el-menu-item index="/User/user_achieve/user_patent">
              <i class="el-icon-setting"></i>
              <span slot="title">我的专利</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/User/user_basemsg">
            <i class="el-icon-setting"></i>
            <span slot="title">我的基本信息</span>
          </el-menu-item>
        </el-menu>

      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'con_mng',
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
  .el-menu {
    height: 100vh;
  }
</style>
