<template>
    <div>
      <div class="main">
        <el-row>
          <el-col :span='8'><el-button class='el-icon-back' @click='back'>返回</el-button></el-col>
          <el-col :span='14' class='title'>专利具体信息</el-col>
        </el-row>
        <el-row class='about_css'>
          <el-col :span='12'>
            <div>
              <div>竞赛类别：{{cate_name}}</div>
              <div>竞赛届数：{{com_num}}</div>
              <div>专利名称：{{patent_name}}</div>
            </div>
          </el-col>
          <el-col :span='12'>
            <div>
              <div>专利作者名字：{{user_name}}</div>
              <div>专利作者学号：{{user_num}}</div>
              <div>专利作者联系方式：{{user_phone}}</div>
            </div>
          </el-col>
        </el-row>
        <div class='title'>专利证明材料</div>
        <img class='img' :src=" 'data:image/png;base64,' + this.patent_prove ">
      </div>
    </div>
</template>

<script>
  // import com_mng from '../components/manger/man_mng'
  export default {
    name: 'patent_detail',
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
        patent_name:'',
        patent_prove:'',
      }
    },
    mounted() {
      this.instance.patentIdsearch({
        patent_id:this.id
      }).then(res => {
        this.cate_name=res.data.cate_name,
        this.com_num=res.data.com_num,
        this.user_name=res.data.user_name,
        this.user_num=res.data.user_num,
        this.user_phone=res.data.user_phone,
        this.patent_name=res.data.patent_name,
        this.patent_prove=res.data.patent_prove
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
