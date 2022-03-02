<template>
    <div>
      <con_bar></con_bar>
      <router-view></router-view>
    </div>
</template>

<script>
  import con_bar from '../control/con_bar.vue'
  export default {
    name: 'con_commsg',
    components:{
      con_bar
    }
  }
</script>

<style scoped lang="scss">

</style>
