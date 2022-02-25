<template>
    <div>
      <div class="word_css">
        <div class="top">
          <button class="button" @click="back" >返回</button>
          <div class="date">{{time}}</div>
        </div>
        <div class="title">这里是新闻标题{{title}}</div>
        <div class="author">这里是新闻作者{{author}}</div>
        <div class="detail">{{details}}</div>
      </div>
    </div>
</template>

<script>
  // import com_mng from '../components/manger/man_mng'
  export default {
    name: 'new_detail',
    // components:{
    //   com_mng
    // },
    data(){
      return{
        time:this.$route.query.data.date,
        title:this.$route.query.data.title,
        details:this.$route.query.data.inform,
        author:this.$route.query.data.author
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
  .author{
    color:$color-gray;
    height: 20px;
    line-height:20px;
    text-align:center;
    font-size:15px;
    margin-bottom: 30px;
  }
.title{
  height: 30px;
  line-height:30px;
  text-align:center;
  font-size:25px;
  margin-bottom: 10px;
}
  .detail{
    min-height: 50px;
  }
</style>
