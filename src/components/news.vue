<template>
    <div class='top'>
      <h3 class="title">新闻中心</h3>
      <div class="search">
        <el-row>
          <el-col :span="10"><input class='input' type="text" v-model='key' placeholder="请输入关键词"/></el-col>
          <el-col :span="3"><button class="button" @click='keysearch()'>搜索</button></el-col>
          <el-col :span="6">
            <el-date-picker
              v-model="date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-col>
          <el-col :span="3"><button class="button" @click='datesearch()'>搜索</button></el-col>
          <el-col :span="2"><button class="button" @click='reset()'>重置</button></el-col>
        </el-row>
      </div>
      <div class="items">
        <div class="item" v-for="data in tableData" v-bind:key="data.news_id" @click="newsDetial(data.news_id)">
          <div class="date">{{data.date}}</div>
          <div class="author">{{data.user_name}}</div>
          <div class="inform">{{data.title}}</div>
        </div>
      </div>
      <div>
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
    name: 'news',
    data() {
      return {
        search:0,
        key:'',
        date:'',
        tablePage: {
          pageNum: 1, // 第几页
          pageSize: 10, // 每页多少条
          total: 0 ,// 总记录数
        },
        pageSizes: [10, 20, 30],
        tableData: [],
      }
    },
    mounted(){
      this.findall()
    },
    methods: {
      findall(){
        if(this.search!=0){
          this.tablePage.pageNum=1;
        }
        this.search=0,
        this.date='',
        this.key='',
        this.instance.newsFindall({
          pageNum:this.tablePage.pageNum,
          pageSize:this.tablePage.pageSize
        }).then(res => {
          this.tableData=res.data.newsList,
          this.tablePage.total=res.data.total
        })
      },
      keysearch(){
        if(this.search!=1){
          this.tablePage.pageNum=1;
        }
        this.search=1,
        this.date='';
        console.log(this.tablePage.pageNum)
        console.log(this.tablePage.pageSize)
        if(this.key==''){
          alert("请输入关键字");
        }else{
          this.instance.newsKeysearch({
            key:this.key,
            pageNum:this.tablePage.pageNum,
            pageSize:this.tablePage.pageSize
          }).then(res => {
            this.tableData=res.data.newsList,
            this.tablePage.total=res.data.total
          })
        }
      },
      datesearch(){
        if(this.search!=2){
          this.tablePage.pageNum=1;
        }
        this.search=2,
        this.key='';
        if(this.date==''){
          alert("请选择日期");
        }else{
          this.instance.newsDatesearch({
            date:this.date,
            pageNum:this.tablePage.pageNum,
            pageSize:this.tablePage.pageSize
          }).then(res => {
            this.tableData=res.data.newsList,
            this.tablePage.total=res.data.total
          })
        }
      },
      reset(){
        this.key='',
        this.date='',
        this.findall()
      },
      handlePageChange(currentPage) {
        this.tablePage.pageNum = currentPage
        if(this.search==0){
          this.findall()
        }else if(this.search==1){
          this.keysearch()
        }else if(this.search==2){
          this.datesearch()
        }
      },
      handleSizeChange(pageSize) {
        this.tablePage.pageSize = pageSize
      },
      newsDetial(data) {
        var storage = window.localStorage;
        if (storage.user_identity == 0) {
          this.$router.push({
            path: "/Controller/con_news_detail",
            query: {
              data: data
            }
          })
        } else if (storage.user_identity == 1) {
          this.$router.push({
            path: "/Manager/man_news_detail",
            query: {
              data: data
            }
          })
        } else if (storage.user_identity == 2) {
          this.$router.push({
            path: "/User/user_news_detail",
            query: {
              data: data
            }
          })
        }
      },
    }
  }
</script>

<style scoped lang="scss">
.top{
  background-color:$color-white;
	text-align: center;
  width: 1000px;
  margin: auto;
  margin-top:5px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px $color-bblue;
}
.title{
  color:$color-white;
  background-color: $color-bblue;
  border-radius: 10px;
  height: 60px;
  line-height: 60px;
}
.items{
  margin-bottom: 20px;
}
.item{
    color:$color-bblue;
    // background-color:$color-light;
    border: 1px solid $color-mid;
    height: 35px;
    margin: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .item:hover{
    transform: scale(1.02);
    border: 2px solid $color-bblue;
    cursor: pointer;
    }
.inform{
    float: left;
    line-height:35px;
    max-width: 600px;
    text-align:center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
  }
  .date{
    color:$color-gray;
    padding-right: 10px;
    float: left;
    line-height:35px;
    text-align:center;
  }
  .author{
    color:$color-gray;
    font-size: 10px;
    padding-right: 10px;
    float: left;
    line-height:35px;
    text-align:center;
  }
  h2{
    color:$color-bblue;
  }
  .search{
    margin:10px;
    margin-top:20px;
    margin-bottom: 20px;
  }
    .input{
      height: 40px;
      width: 100%;
      border: 2px solid $color-mid;
      padding: 7px 0px;
      border-radius: 10px; /*css3属性IE不支持*/
      padding-left:5px;
    }
    .input:focus{
      border-color: $color-bblue;
      outline: 0;
    }
</style>
