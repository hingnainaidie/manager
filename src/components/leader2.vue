<template>
  <div class='top'>
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
          <div class='informs' @click="goInform()">
            <h4>通知公告</h4>
            <div class="item" v-for="data in informData" v-bind:key="data.inform_id" @click.stop="informDetial(data.inform_id)">
              <div class="date">{{data.date}}</div>
              <div class="inform">{{data.title}}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class='mid'>
      <el-row>
        <el-col :span='16'>
          <div class='news' @click="goNew()">
            <h4>新闻中心</h4>
            <div class="item" v-for="data in newsData" v-bind:key="data.news_id" @click.stop="newDetial(data.news_id)">
              <div class="date">{{data.date}}</div>
              <div class="inform">{{data.title}}</div>
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
      <div>这里是一些基本信息和联系电话之类的</div>
      <div>小组信成员</div>
      <div>黄月婷</div>
      <div>杨单词</div>
      <div>周雨典</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'leader1',
    data() {
      return {
        informData:[],
        newsData:[]
      }
    },
    mounted() {
      this.instance.newsLeader().then(res => {
        this.newsData=res.data;
      }),
      this.instance.informLeader().then(res => {
        this.informData=res.data;
      })
    },
    methods: {
      informDetial(data) {
        console.log(data),
        this.$router.push({
          path: "/inform_detail",
          query: {
            data: data
          }
        })
      },
      newDetial(data) {
        this.$router.push({
          path: "/new_detail",
          query: {
            data: data
          }
        })
      },
      goInform(){
        this.$router.push("/informs")
      },
      goNew(){
        this.$router.push("/news")
      },
    }
  }
</script>

<style scoped lang='scss'>
  .top {
    margin: auto;
    font-family: '楷体';
    text-align: center;
    height: 800px;
    min-width: 1000px;
  }

  .mid {
    margin: 5px;
    width: 100%;
  }

  .links {
    padding: 10px;
    height: 300px;
    color: black;
    border-radius: 20px;
    margin: 10px;
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
    margin: 10px;
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
    margin: 10px;
  }

  .download {
    padding: 10px;
    height: 250px;
    color: black;
    border-radius: 20px;
    margin: 10px;
    border:2px solid $color-mid;
  }

  .buttom {
    height: 120px;
    width: 100%;
    background-color: orange;
  }
</style>
