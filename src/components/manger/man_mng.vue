<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="this.$router.path"
          class="el-menu"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/man_mng/man_basemsg">
            <i class="el-icon-setting"></i>
            <span slot="title">我的基本信息</span>
          </el-menu-item>
          <el-menu-item index="/man_mng/man_com">
            <i class="el-icon-setting"></i>
            <span slot="title">竞赛管理</span>
          </el-menu-item>
          <el-menu-item index="/man_mng/man_inform">
            <i class="el-icon-setting"></i>
            <span slot="title">公告管理</span>
          </el-menu-item>
          <el-menu-item index="/man_mng/man_new">
            <i class="el-icon-setting"></i>
            <span slot="title">赛事新闻管理</span>
          </el-menu-item>
        </el-menu>

      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'man_mng',
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
.el-menu{
  height: 100vh;
}
</style>
