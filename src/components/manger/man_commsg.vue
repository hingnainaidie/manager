<template>
    <div>
      <man_bar></man_bar>
      <router-view></router-view>
    </div>
</template>

<script>
  import man_bar from '../manger/man_bar.vue'
  export default {
    name: 'man_commsg',
    components:{
      man_bar
    }
  }
</script>

<style scoped lang="scss">

</style>
