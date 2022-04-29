<template>
  <div>
    <el-container>
      <el-aside width="250px">
        <el-menu default-active="this.$router.path" @select="handleSelect" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/Controller/con_leader">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index='1'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>新闻管理</span>
            </template>
            <el-menu-item index="/Controller/con_news">
              <i class="el-icon-setting"></i>
              <span slot="title">新闻中心</span>
            </el-menu-item>
            <el-menu-item index="/Controller/con_connews">
              <i class="el-icon-setting"></i>
              <span slot="title">新闻审核管理</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='2' style="background: red;">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>公告管理</span>
            </template>
            <el-menu-item index="/Controller/con_inform">
              <i class="el-icon-setting"></i>
              <span slot="title">公告中心</span>
            </el-menu-item>
            <el-menu-item index="/Controller/con_coninfrom">
              <i class="el-icon-setting"></i>
              <span slot="title">公告审核管理</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='3'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>竞赛管理</span>
            </template>
            <el-menu-item index="/Controller/con_discipline_competition">
              <i class="el-icon-setting"></i>
              <span slot="title">竞赛中心</span>
            </el-menu-item>
            <el-menu-item index="/Controller/con_concom">
              <i class="el-icon-setting"></i>
              <span slot="title">竞赛审核管理</span>
            </el-menu-item>
            <el-menu-item index="/Controller/con_concate">
              <i class="el-icon-setting"></i>
              <span slot="title">赛事类别管理</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='4'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>成果管理</span>
            </template>
            <el-menu-item index="/Controller/con_award">
              <i class="el-icon-setting"></i>
              <span slot="title">获奖管理</span>
            </el-menu-item>
            <el-menu-item index="/Controller/con_thesis">
              <i class="el-icon-setting"></i>
              <span slot="title">论文管理</span>
            </el-menu-item>
            <el-menu-item index="/Controller/con_patent">
              <i class="el-icon-setting"></i>
              <span slot="title">专利管理</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/Controller/con_user">
            <i class="el-icon-setting"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/Controller/con_data">
            <i class="el-icon-setting"></i>
            <span slot="title">我的数据管理</span>
          </el-menu-item>
          <el-menu-item index="/Controller/con_basemsg">
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
    name: 'Controller',
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
  .el-submenu .el-menu-item{
      background-color: #1F2D3D!important;
    }
    .el-submenu .el-menu-item:hover{
      background-color: #001528!important;
    }
    .el-submenu .el-submenu__title{
      background-color: #1F2D3D!important;
    }
    .el-submenu .el-submenu__title:hover{
      background-color: #001528!important;
    }
</style>
