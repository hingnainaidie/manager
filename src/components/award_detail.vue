<template>
    <div>
      <div class="main">
        <el-row>
          <el-col :span='8'><el-button class='el-icon-back' @click='back'>返回</el-button></el-col>
          <el-col :span='14' class='title'>获奖具体信息</el-col>
        </el-row>
        <el-row class='about_css'>
          <el-col :span='12'>
            <div>
              <div>竞赛类别：{{cate_name}}</div>
              <div>竞赛届数：{{com_num}}</div>
              <div>获奖等级：{{award_level}}</div>
            </div>
          </el-col>
          <el-col :span='12'>
            <div>
              <div>获奖人名字：{{user_name}}</div>
              <div>获奖人学号：{{user_num}}</div>
              <div>获奖人联系方式：{{user_phone}}</div>
            </div>
          </el-col>
        </el-row>
        <div class='title'>获奖证明材料</div>
        <img class='img' :src=" 'data:image/png;base64,' + this.award_prove ">
      </div>
    </div>
</template>

<script>
  // import com_mng from '../components/manger/man_mng'
  export default {
    name: 'award_detail',
    // components:{
    //   com_mng
    // },
    data(){
      return{
        id:this.$route.query.data,
        cate_name:'',
        com_num:'',
        user_name:'',
        user_num:'',
        user_phone:'',
        award_level:'',
        award_prove:'',
        // cate_name:'全国大学生英语竞赛',
        // com_num:'第二届',
        // user_name:'小明',
        // user_num:'20202020',
        // user_phone:'12345678911',
        // award_level:'三等奖',
        // award_prove:'',
      }
    },
    mounted() {
      this.instance.awardIdsearch({
        award_id:this.id
      }).then(res => {
        this.cate_name=res.data.cate_name,
        this.com_num=res.data.com_num,
        this.user_name=res.data.user_name,
        this.user_num=res.data.user_num,
        this.user_phone=res.data.user_phone,
        this.award_level=res.data.award_level,
        this.award_prove=res.data.award_prove
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
  .img{
    max-width: 800px;
  }
 .title {
   line-height: 30px;
   color: gray;
   font-size: 20px;
   font-weight: bold;
   float: left;
 }
 .main{
   width: 900px;
   margin: auto;
 }
 .about_css {
   text-align: left;
   min-height: 100px;
   margin-top:20px;
   margin-bottom:20px;
   padding: 10px;
   background-color: $color-light;
   border-radius: 10px;
 }
</style>
