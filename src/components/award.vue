<template>
    <div>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="this.$router.path"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/award/award_year">
              <i class="el-icon-setting"></i>
              <span slot="title">年综合获奖分析</span>
            </el-menu-item>
            <el-menu-item index="/award/award_major">
              <i class="el-icon-setting"></i>
              <span slot="title">专业获奖分析</span>
            </el-menu-item>
            <el-menu-item index="/award/award_class">
              <i class="el-icon-setting"></i>
              <span slot="title">赛事类别获奖分析</span>
            </el-menu-item>
            <el-menu-item index="/award/award_level">
              <i class="el-icon-setting"></i>
              <span slot="title">赛事级别获奖分析</span>
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
    name: 'award',
    data(){
      return{
        radio1:'年综合'
      }
    },
    methods: {
      handleSelect(key) {
        this.$router.push({
          path: key
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
