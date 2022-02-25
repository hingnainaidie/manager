<template>
    <div class='top'>
      <h3 class="title">通知公告</h3>
      <div class="search">
        <el-row>
          <el-col :span="10"><input class='input' type="text" placeholder="请输入关键词"/></el-col>
          <el-col :span="3"><button class="button">搜索</button></el-col>
          <el-col :span="6">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-col>
          <el-col :span="3"><button class="button">搜索</button></el-col>
          <el-col :span="2"><button class="button">重置</button></el-col>
        </el-row>
      </div>
      <div class="items">
        <div class="item" v-for="data in tableData" v-bind:key="data" @click="informDetial(data)">
          <div class="date">{{data.date}}</div>
          <div class="inform">{{data.inform}}</div>
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
    name: 'informs',
    data() {
      return {
        value1:'',
        tablePage: {
          pageNum: 1, // 第几页
          pageSize: 10, // 每页多少条
          total: 50 ,// 总记录数
        },
        pageSizes: [10, 20, 30],
        tableData: [{
          date: '2016-05-02',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-04',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-01',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }, {
          date: '2016-05-03',
          inform: '关于xxxxx竞赛的报名已经开始，如果要了解详细信息，请。。。。'
        }],
      }
    },
    methods: {
      handlePageChange(currentPage) {
        this.tablePage.pageNum = currentPage
      },
      handleSizeChange(pageSize) {
        this.tablePage.pageSize = pageSize
      },
      informDetial(data){
        this.$router.push({path:"/inform_detail",query:{data:data}})
      }
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
  // background-color: $color-bblue;
  background-color: darkred;
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
