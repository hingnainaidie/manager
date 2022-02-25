<template>
  <div class="home">
    <topbar></topbar>
    <router-view/>
  </div>
</template>

<script>
import topbar from '../components/topbar.vue'
export default {
  name: 'Home',
  components:{
    topbar
  }
}
</script>
<style lang="scss">
.home{
  min-width: 1200px;
}
    .button{
      text-align: center;
     background-color: $color-mid;
      min-width: 70px;
      height: 40px;
      line-height: 40px;
      color:white;
      border-radius: 10px;
      border:0px;
    }
    .button:active{
      transform: scale(1.10);
    }
    .button:focus{
      background-color: $color-bblue;
      border:0px solid;
      outline: none;
    }
    .input{
      width: 100%;
      border: 2px solid $color-mid;
      border-radius: 10px; /*css3属性IE不支持*/
    }
    .input:focus{
      border-color: $color-bblue;
      outline: 0;
    }
</style>
