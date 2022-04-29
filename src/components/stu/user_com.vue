<template>
    <div>
      <div class='topbar'>
        <el-row>
          <el-col :span='12'><div class="bar" @click="handleSelect('/User/user_com/user_com1')">未完成</div></el-col>
          <el-col :span='12'><div class="bar" @click="handleSelect('/User/user_com/user_com2')">已完成</div></el-col>
        </el-row>
      </div>
      <router-view></router-view>
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
}
.bar:hover{
  cursor: pointer;
}
.bar:active{
  color:red;
}
</style>
