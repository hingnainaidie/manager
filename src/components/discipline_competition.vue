<template>
    <div class="top">
      <div class="hot">
        <el-carousel :interval="4000" type="card" height="130px">
            <el-carousel-item v-for="item in datas" :key="item">
              <div class='hottop'>
                <div class='hot1'>{{ item.main_name }}</div>
                <div class='hot2'>{{item.statue}}</div>
                <div class='hot3'>竞赛负责人：{{item.manager}}</div>
                <div class='hot3'>报名时间：{{item.sign_start}}-{{item.sign_end}}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
      </div>
      <div class="search">
        <el-row>
          <el-col :span="6">
            <input class='input' type="text" v-model='input' placeholder="请输入关键词"/>
          </el-col>
          <el-col :span="2"><button class="button">搜索</button></el-col>
          <el-col :span="6">
            <el-date-picker
              v-model="date"
              type="date"
              @change='dateChange()'
              placeholder="选择日期">
            </el-date-picker>
          </el-col>
          <el-col :span='4'>
            <el-select v-model="level" placeholder='选择赛事级别' @change='levelChange()'>
              <el-option v-for='item in levels' :key='item' :label='item' :value='item'></el-option>
            </el-select>
          </el-col>
          <el-col :span='6'>
            <el-select v-model="major" placeholder='选择专业' @change='majorChange()'>
              <el-option v-for='item in majors' :key='item' :label='item' :value='item'></el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div class='com'>
        <el-table :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='main_name' label='竞赛名称' width="400"></el-table-column>
          <el-table-column prop='statue' label='竞赛状态' width="120"></el-table-column>
          <el-table-column prop='manager' label='竞赛负责人' width="120"></el-table-column>
          <el-table-column prop='sign_start' label='报名开始时间' width="150"></el-table-column>
          <el-table-column prop='sign_end' label='报名结束时间' width="150"></el-table-column>
          <el-table-column label='操作' width="200">
            <el-button size="mini" type="primary" @click='detail()'>查看详情</el-button>
            <el-button size="mini" type="warning" @click='sign()'>我要报名</el-button>
          </el-table-column>
        </el-table>
      </div>
      <div class='page'>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :current-page="tablePage.pageNum"
          :page-size="tablePage.pageSize"
          :page-sizes="pageSizes"
          :total="tablePage.total"
          @size-change="handleSizeChange"
          @current-change="handlePageChange"
        />
      </div>
    </div>
</template>

<script>
  export default {
    name: 'discipline_competition',
    data(){
      return{
        tablePage: {
          pageNum: 1, // 第几页
          pageSize: 10, // 每页多少条
          total: 50 ,// 总记录数
        },
        pageSizes: [10, 20, 30],
        level:'',
        levels:['A类','B类','C类','D类','E类'],
        major:'',
        majors:['计算机科学与技术','信息安全技术','物联网'],
        date:'',
        input:'',
        datas:[
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
          {main_name:'全国大学生英语竞赛',
          statue:'已完成',
          manager:'时影',
          sign_start:'2021/2/16',
          sign_end:'2021/2/17'},
        ]
      }
    },
    methods:{
      dateChange(){
        this.input='',
        this.level='',
        this.major=''
      },
      levelChange(){
        this.input='',
        this.date='',
        this.major=''
      },
      majorChange(){
        this.input='',
        this.level='',
        this.date=''
      },
      handlePageChange(currentPage) {
        this.tablePage.pageNum = currentPage
      },
      handleSizeChange(pageSize) {
        this.tablePage.pageSize = pageSize
      },
      detail() {
        this.$router.push({
          path: "/user_mng/com_con"
        })
      },
      sign(){
        //学生登录之后才能报名
      }
    }
  }
</script>

<style scoped lang="scss">
.top{
  background-color:$color-white;
	text-align: center;
  width: 1200px;
  min-height: 600px;
  margin: auto;
  margin-top:5px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px $color-bblue;
}
.search{
  margin:10px;
  margin-top:0px;
}
  .hot{
    margin: 10px;
    margin-bottom: 0px;
    height: 180px;
  }
  .hottop{
    font-family: '楷体';
    margin-top: 10px;
  }
  .hot1{
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
  }
  .hot2{
    margin: auto;
    width: 70px;
    border-radius: 10px;
    background-color: $color-bblue;
    height: 20px;
    line-height: 20px;
    color:$color-white;
  }
  .hot3{
    color:$color-gray;
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: $color-white;
    border: 2px solid #99a9bf;
    border-radius: 10px;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: $color-light;
  }
  .com{
    padding: 10px;
    margin-bottom: 20px;
  }
  .page{
    margin-bottom: 10px;
  }
</style>
