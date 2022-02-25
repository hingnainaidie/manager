<template>
    <div>
      <div class="word_css">
        <div class="top">
          <button class="button" @click="back" >返回</button>
          <div class="date">{{time}}</div>
        </div>
        <div class="title">这里是公告标题{{title}}</div>
        <div class="detail">{{details}}</div>
      </div>
    </div>
</template>

<script>
  // import com_mng from '../components/manger/man_mng'
  export default {
    name: 'inform_detail',
    // components:{
    //   com_mng
    // },
    data(){
      return{
        time:this.$route.query.data.date,
        title:this.$route.query.data.title,
        details:this.$route.query.data.inform
      }
    },
    methods:{
      back(){
        this.$router.back();
      }
    }
  }
</script>

<style scoped lang='scss'>
  .button{
    float: left;
  }
  .word_css{
    border-radius: 10px;
    border: 2px solid $color-bblue;
    max-width: 1000px;
    min-width: 400px;
    margin:auto;
    margin-top:10px;
    padding:10px;
  }
  .top{
    height: 40px;
  }
  .date{
    color:$color-white;
    background-color: $color-mid;
    width: 100px;
    height: 40px;
    line-height:40px;
    text-align:center;
    border-radius: 10px;
    float: left;
    margin-left: 20px;
  }
.title{
  height: 50px;
  line-height:50px;
  text-align:center;
  font-size:25px;
  margin-bottom: 20px;
  border-radius: 10px;
}
  .detail{
    min-height: 50px;
  }
</style>
