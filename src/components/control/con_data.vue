<template>
    <div>
      <el-button @click="createall()">创建模拟数据</el-button>
      <el-button type='danger' @click="deleteall()">清空所有数据</el-button>
    </div>
</template>

<script>
  export default {
    name: 'com_data',
    methods:{
      createall(){
        this.instance.createdata().then(res => {})
      },
      deleteall(){
        this.instance.deletedata().then(res => {})
      },
    }
  }
</script>

<style scoped lang='scss'>
</style>
