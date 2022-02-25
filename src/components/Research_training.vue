<template>
    <div class="top">
      <div class="hot">
        <el-carousel :interval="4000" type="card" height="150px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">这里是竞赛{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
      </div>
      <div class="search">
        <el-row>
          <el-col :span="14"><input class='input' type="text" placeholder="请输入关键词"/></el-col>
          <el-col :span="2"><div class="button">搜索</div></el-col>
          <el-col :span="6">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-col>
          <el-col :span="2"><div class="button">搜索</div></el-col>
        </el-row>
      </div>
      <div class="classify">
        <div class="choose">
          <div class="kind" v-for="level in levels" v-bind:key="level">{{level}}</div>
        </div>
        <div class="detail">
          具体竞赛
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Research_training',
    data(){
      return{
        levels:['全部', '国创', '省创','市创','SRTP'],
        value1:''
      }
    }
  }
</script>

<style scoped lang="scss">
  .top{
    min-width: 1000px;
    text-align: center;
  }
.search{
  margin:10px;
}
  .hot{
    margin: 10px;
    height: 180px;
  }
  .input{
    height: 40px;
    width: 100%;
    border: 2px solid #b0cfe1;
    padding: 7px 0px;
    border-radius: 10px; /*css3属性IE不支持*/
    padding-left:5px;
  }
  .input:focus{
    border-color: #759EB8;
    outline: 0;
  }
  .input_css{
    width: 40%;
  }
  .button{
   background-color: #759EB8;
    // background-color: $color-main;
    width: 70px;
    height: 40px;
    line-height: 40px;
    color:white;
    border-radius: 10px;
    margin-left: 5px;
  }
  .classify{
    min-width: 600px;
    margin: 10px;
    height: 500px;
  }
  .kind{
    height: 80px;
    background-color: #759EB8;
    margin: 10px;
    line-height: 80px;
    border-radius: 10px;
    color:white
  }
  .choose{
    min-width: 150px;
    background-color:#d3dce6;
    height: 500px;
    width: 30%;
    float:left;
  }
  .detail{
    height: 500px;
    width: 70%;
    float:left;
    background-color: #d3dce6;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
