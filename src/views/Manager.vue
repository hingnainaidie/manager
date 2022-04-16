<template>
  <div>
    <el-container>
      <el-aside width="250px">
        <el-menu default-active="this.$router.path" class="el-menu" @select="handleSelect" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/Manager/man_leader">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index='1'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>新闻管理</span>
            </template>
            <el-menu-item index="/Manager/man_news">
              <i class="el-icon-setting"></i>
              <span slot="title">新闻中心</span>
            </el-menu-item>
            <el-menu-item index="/Manager/man_connews">
              <i class="el-icon-setting"></i>
              <span slot="title">我的新闻管理</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='2'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>公告管理</span>
            </template>
            <el-menu-item index="/Manager/man_inform">
              <i class="el-icon-setting"></i>
              <span slot="title">公告中心</span>
            </el-menu-item>
            <el-menu-item index="/Manager/man_coninform">
              <i class="el-icon-setting"></i>
              <span slot="title">我的公告管理</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='3'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>竞赛管理</span>
            </template>
            <el-menu-item index="/Manager/man_discipline_competition">
              <i class="el-icon-setting"></i>
              <span slot="title">竞赛中心</span>
            </el-menu-item>
            <el-menu-item index="/Manager/man_concom">
              <i class="el-icon-setting"></i>
              <span slot="title">我的竞赛管理</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='4'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>成果管理</span>
            </template>
            <el-menu-item index="/Manager/man_award">
              <i class="el-icon-setting"></i>
              <span slot="title">获奖审核</span>
            </el-menu-item>
            <el-menu-item index="/Manager/man_thesis">
              <i class="el-icon-setting"></i>
              <span slot="title">论文审核</span>
            </el-menu-item>
            <el-menu-item index="/Manager/man_patent">
              <i class="el-icon-setting"></i>
              <span slot="title">专利审核</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/Manager/man_basemsg">
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
    name: 'Manager',
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
