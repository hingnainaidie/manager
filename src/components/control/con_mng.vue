<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="this.$router.path" class="el-menu" @select="handleSelect" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/con_mng/con_basemsg">
            <i class="el-icon-setting"></i>
            <span slot="title">我的基本信息</span>
          </el-menu-item>
          <el-submenu index='1'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>竞赛管理</span>
            </template>
            <el-menu-item index="/con_mng/con_com">
              <i class="el-icon-setting"></i>
              <span slot="title">未审核竞赛</span>
            </el-menu-item>
            <el-menu-item index="/con_mng/con_com2">
              <i class="el-icon-setting"></i>
              <span slot="title">已审核竞赛</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='2'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>公告管理</span>
            </template>
            <el-menu-item index="/con_mng/con_inform">
              <i class="el-icon-setting"></i>
              <span slot="title">未审核公告</span>
            </el-menu-item>
            <el-menu-item index="/con_mng/con_inform1">
              <i class="el-icon-setting"></i>
              <span slot="title">已审核公告</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='3'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>赛事新闻管理</span>
            </template>
            <el-menu-item index="/con_mng/con_new">
              <i class="el-icon-setting"></i>
              <span slot="title">未审核新闻</span>
            </el-menu-item>
            <el-menu-item index="/con_mng/con_new2">
              <i class="el-icon-setting"></i>
              <span slot="title">已审核新闻</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='4'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/con_mng/con_user">
              <i class="el-icon-setting"></i>
              <span slot="title">用户信息管理</span>
            </el-menu-item>
            <el-menu-item index="/con_mng/con_user2">
              <i class="el-icon-setting"></i>
              <span slot="title">用户验证</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/con_mng/con_data">
            <i class="el-icon-setting"></i>
            <span slot="title">数据管理</span>
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
