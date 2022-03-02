<template>
  <div class='top'>
    <div class='icon'>
      <img class='iconimg' src='../picture/cqu_icon.png' />
      <div class='name'>竞赛管理系统</div>
    </div>
    <div class='mid'>
      <el-row>
        <el-col :span='8'>
          <div class='links'>
            <h4>常见链接</h4>
            <div class='link_item'><a href='https://www.cqu.edu.cn/' target="_blank" class='link'>重庆大学</a></div>
            <div class='link_item'><a href='https://my.cqu.edu.cn/' target="_blank" class='link'>重大教学</a></div>
            <div class='link_item'><a href='http://jwc.cqu.edu.cn/' target="_blank" class='link'>重庆大学本科教学信息网</a></div>
            <div class='link_item'><a href='http://zhaosheng.cqu.edu.cn/' target="_blank" class='link'>重庆大学本科招生网</a>
            </div>
            <div class='link_item'><a href='http://graduate.cqu.edu.cn/' target="_blank" class='link'>重庆大学研究生院</a></div>
            <div class='link_item'><a href='http://www.job.cqu.edu.cn/' target="_blank" class='link'>重庆大学毕业生就业信息网</a>
            </div>
          </div>
        </el-col>
        <el-col :span='16'>
          <div class='informs'>
            <h4>通知公告</h4>
            <div class="item" v-for="data in tableData" v-bind:key="data" @click="informDetial(data)">
              <div class="date">{{data.date}}</div>
              <div class="inform">{{data.inform}}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class='mid'>
      <el-row>
        <el-col :span='16'>
          <div class='news'>
            <h4>新闻中心</h4>
            <div class="item" v-for="data in tableData1" v-bind:key="data" @click="informDetial(data)">
              <div class="date">{{data.date}}</div>
              <div class="inform">{{data.inform}}</div>
            </div>
          </div>
        </el-col>
        <el-col :span='8'>
          <div class='download'>
            <h4>下载中心</h4>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class='buttom'>
      这里是一些基本信息和联系电话之类的
    </div>
  </div>
</template>

<script>
  export default {
    name: 'leader1',
    data() {
      return {
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
        }],
        tableData1: [{
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
        }]
      }
    },
    methods: {
      informDetial(data) {
        this.$router.push({
          path: "/new_detail",
          query: {
            data: data
          }
        })
      }
    }
  }
</script>

<style scoped lang='scss'>
  .icon {
    height: 100px;
    width: 100%;
  }

  .iconimg {
    height: 90px;
    width: 270px;
    float: left;
  }

  .name {
    line-height: 90px;
    color: $color-bblue;
    font-size: 30px;
    font-weight: bold;
    float: left;
  }

  .top {
    margin: auto;
    font-family: '楷体';
    text-align: center;
    height: 800px;
    min-width: 1000px;
  }

  .mid {
    margin: 10px;
    width: 100%;
  }

  .links {
    padding: 10px;
    height: 300px;
    color: black;
    border-radius: 20px;
    margin: 20px;
    border:2px solid $color-mid;
  }

  .link {
    font-family: '黑体';
    color: $color-bblue;
    font-size: 18px;
  }

  .link_item {
    height: 40px;
    line-height: 40px;
  }

  .informs {
    padding: 10px;
    height: 300px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    margin: 20px;
  }

  .item {
    color: $color-white;
    border: 1px solid $color-blue;
    height: 35px;
    margin: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .item:hover {
    transform: scale(1.02);
    border: 2px solid $color-white;
    cursor: pointer;
  }

  .inform {
    float: left;
    line-height: 35px;
    max-width: 600px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
  }

  .date {
    color: $color-lightgray;
    padding-right: 10px;
    float: left;
    line-height: 35px;
    text-align: center;
  }

  .news {
    padding: 10px;
    height: 250px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    margin: 20px;
  }

  .download {
    padding: 10px;
    height: 250px;
    color: black;
    border-radius: 20px;
    margin: 20px;
    border:2px solid $color-mid;
  }

  .buttom {
    height: 200px;
    width: 100%;
    background-color: orange;
    margin-top: 30px;
  }
</style>
