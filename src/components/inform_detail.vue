<template>
    <div>
      <div class="word_css">
        <div class="top">
          <button class="button" @click="back" >返回</button>
          <div class="date">{{date}}</div>
        </div>
        <div class="title">{{title}}</div>
        <div class="detail">{{essay}}</div>
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
        id:this.$route.query.data,
        date:'',
        title:'',
        essay:''
      }
    },
    mounted() {
      console.log(this.id)
      this.instance.informIdsearch({
        inform_id:this.id
      }).then(res => {
        this.date=res.data.ann.date,
        this.title=res.data.ann.title,
        this.essay=res.data.ann.essay
      })
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
