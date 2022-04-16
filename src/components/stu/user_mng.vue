<template>
    <div>
        <el-container>
          <el-aside width="200px">
            <el-menu
              default-active="$router.path"
              class="el-menu"
              @open="handleOpen"
              @close="handleClose"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="/user_mng/user_basemsg">
                <i class="el-icon-setting"></i>
                <span slot="title">我的基本信息</span>
              </el-menu-item>
              <el-menu-item index="/user_mng/user_com/user_com1">
                <i class="el-icon-setting"></i>
                <span slot="title">我的竞赛管理</span>
              </el-menu-item>
              <el-menu-item index="/user_mng/user_thesis">
                <i class="el-icon-setting"></i>
                <span slot="title">我的论文</span>
              </el-menu-item>
              <el-menu-item index="/user_mng/user_patent">
                <i class="el-icon-setting"></i>
                <span slot="title">我的专利</span>
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
    name: 'user_mng',
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
