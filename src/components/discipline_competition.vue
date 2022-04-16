<template>
    <div class="top">
      <div class="hot">
        <el-carousel :interval="4000" type="card" height="130px">
            <el-carousel-item v-for="item in hotData" :key="item.com_id" @click.native="detail(item.com_id)">
              <div class='hottop'>
                <div class='hot1'>{{ item.com_mainname }}</div>
                <div class='hot2'>{{transtatus(item.com_status)}}</div>
                <div class='hot3'>竞赛负责人：{{item.com_manager}}</div>
                <div class='hot3'>报名时间：{{item.sign_up_start}}-{{item.sign_up_end}}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
      </div>
      <div class="search">
        <el-row>
          <el-col :span="6">
            <input class='input' type="text" v-model='input' placeholder="请输入关键词"/>
          </el-col>
          <el-col :span="2"><button class="button" @click="keysearch()">搜索</button></el-col>
        </el-row>
        <el-row class='search2'>
          <el-col :span="5">
            <el-date-picker
              v-model="date"
              type="date"
              value-format="yyyy-MM-dd"
              @change='dateChange()'
              placeholder="选择日期">
            </el-date-picker>
          </el-col>
          <el-col :span='5'>
            <el-select v-model="level" placeholder='选择赛事级别' @change='levelChange()'>
              <el-option v-for='item in levels' :key='item' :label='item' :value='item'></el-option>
            </el-select>
          </el-col>
          <el-col :span='6'>
            <el-select v-model="category" placeholder='选择赛事类别' @change='categoryChange()'>
              <el-option v-for='item in categories' :key='item' :label='item' :value='item'></el-option>
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
          <el-table-column prop='com_mainname' label='竞赛名称' width="400"></el-table-column>
          <el-table-column prop='com_status' label='竞赛状态' :formatter="stu" width="120"></el-table-column>
          <el-table-column prop='com_manager' label='竞赛负责人' width="120"></el-table-column>
          <el-table-column prop='sign_up_start' label='报名开始时间' width="150"></el-table-column>
          <el-table-column prop='sign_up_end' label='报名结束时间' width="150"></el-table-column>
          <el-table-column label='操作' width="200">
            <template slot-scope='scope'>
              <el-button size="mini" type="primary" @click='detail(scope.row.com_id)'>查看详情</el-button>
              <el-button size="mini" type="warning" @click='sign(scope.row.com_id)'>我要报名</el-button>
            </template>
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
          total: 0 ,// 总记录数
        },
        pageSizes: [10, 20, 30],
        level:'',
        levels:['A类','B类','C类','D类','E类'],
        major:'',
        majors:['计算机科学与技术','信息安全技术','物联网'],
        category:'',
        categories:['体育类', '艺术类', '科技类', '电子类'],
        date:'',
        input:'',
        hotData:[],
        datas:[]
      }
    },
    mounted() {
      this.instance.comHot().then(res => {
        this.hotData=res.data.data
      }),
      this.findall()
    },
    methods:{
      stu(row,column,cellValue,index){
        if(cellValue==0){
          return "未开始"
        }else if(cellValue==1){
          return "进行中"
        }else if(cellValue==2){
          return "已完成"
        }else{
          return "游客"
        }
      },
      transtatus(data){
        if(data==0){
          return "未完成"
        }else if(data==1){
          return "进行中"
        }else{
          return "已结束"
        }
      },
      keysearch(){
        this.date='',
        this.level='',
        this.major='',
        this.category='',
        this.tablePage.pageNum=1,
        this.instance.comKeysearch({
          pageNum:this.tablePage.pageNum,
          pageSize:this.tablePage.pageSize,
          key:this.input
        }).then(res => {
          this.datas=res.data.data,
          this.tablePage.total=res.data.total
        })
      },
      dateChange(){
        this.input='',
        this.level='',
        this.major='',
        this.category='',
        this.tablePage.pageNum=1,
        this.instance.comDatesearch({
          pageNum:this.tablePage.pageNum,
          pageSize:this.tablePage.pageSize,
          date:this.date
        }).then(res => {
          this.datas=res.data.data,
          this.tablePage.total=res.data.total
        })
      },
      levelChange(){
        this.input='',
        this.date='',
        this.major='',
        this.category='',
        this.tablePage.pageNum=1,
        this.instance.comLevelsearch({
          pageNum:this.tablePage.pageNum,
          pageSize:this.tablePage.pageSize,
          level:this.level
        }).then(res => {
          this.datas=res.data.data,
          this.tablePage.total=res.data.total
        })
      },
      majorChange(){
        this.input='',
        this.level='',
        this.date='',
        this.category='',
        this.tablePage.pageNum=1,
        this.instance.comMajorsearch({
          pageNum:this.tablePage.pageNum,
          pageSize:this.tablePage.pageSize,
          major:this.major
        }).then(res => {
          this.datas=res.data.data,
          this.tablePage.total=res.data.total
        })
      },
      categoryChange(){
        this.input='',
        this.level='',
        this.date='',
        this.major='',
        this.tablePage.pageNum=1,
        this.instance.comCatesearch({
          pageNum:this.tablePage.pageNum,
          pageSize:this.tablePage.pageSize,
          category:this.category
        }).then(res => {
          this.datas=res.data.data,
          this.tablePage.total=res.data.total
        })
      },

      findall(){
        this.instance.comFindall({
          pageNum:this.tablePage.pageNum,
          pageSize:this.tablePage.pageSize,
        }).then(res => {
          this.datas=res.data.comList,
          this.tablePage.total=res.data.total
        })
      },
      handlePageChange(currentPage) {
        this.tablePage.pageNum = currentPage
        this.findall()
      },
      handleSizeChange(pageSize) {
        this.tablePage.pageSize = pageSize
      },
      detail(data,index) {
        console.log(data)
        this.$router.push({
          path: "/com_con",
          query: {
            data: data
          }
        })
      },
      sign(data){
        //学生登录之后才能报名
        var storage = window.localStorage;
        if(!storage.user_identity){
          this.$router.push({
            path: "/login"
          })
        }else if(storage.user_identity==2){
          this.instance.comSign({
            com_id:data,

          }).then(res => {
            this.tableData=res.data.newsList,
            this.tablePage.total=res.data.total
          })
        }
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
.search2{
  margin-top:20px;
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
