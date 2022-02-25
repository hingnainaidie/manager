<template>
  <div>
    <div class='bg'></div>
    <div class='top'>
      <div class='icon'>
        <img class='iconimg' src='../picture/cqu_icon.png'/>
        <div class='name'>竞赛管理系统</div>
      </div>
      <div class="hot">
        <el-carousel :interval="4000" type="card" height="280px">
            <el-carousel-item><img class='img' src="../picture/img1.jpeg"/></el-carousel-item>
            <el-carousel-item><img class='img' src="../picture/img2.jpeg"/></el-carousel-item>
            <el-carousel-item><img class='img' src="../picture/img3.jpeg"/></el-carousel-item>
            <el-carousel-item><img class='img' src="../picture/img4.jpeg"/></el-carousel-item>
            <el-carousel-item><img class='img' src="../picture/img5.jpeg"/></el-carousel-item>
            <el-carousel-item><img class='img' src="../picture/img6.jpeg"/></el-carousel-item>
            <el-carousel-item><img class='img' src="../picture/img7.jpeg"/></el-carousel-item>
            <el-carousel-item><img class='img' src="../picture/img8.jpeg"/></el-carousel-item>
        </el-carousel>
      </div>
      <div class='mid'>
        <el-row>
          <el-col :span='8'>
            <div class='links'>
              <h4>常见链接</h4>
              <div class='link_item'><a href='https://www.cqu.edu.cn/' target="_blank" class='link'>重庆大学</a></div>
              <div class='link_item'><a href='https://my.cqu.edu.cn/' target="_blank" class='link'>重大教学</a></div>
              <div class='link_item'><a href='http://jwc.cqu.edu.cn/' target="_blank" class='link'>重庆大学本科教学信息网</a></div>
              <div class='link_item'><a href='http://zhaosheng.cqu.edu.cn/' target="_blank" class='link'>重庆大学本科招生网</a></div>
              <div class='link_item'><a href='http://graduate.cqu.edu.cn/' target="_blank" class='link'>重庆大学研究生院</a></div>
              <div class='link_item'><a href='http://www.job.cqu.edu.cn/' target="_blank" class='link'>重庆大学毕业生就业信息网</a></div>
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
  </div>
</template>

<script>
  export default {
    name: 'leader1',
    data(){
      return{
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
      informDetial(data){
        this.$router.push({path:"/new_detail",query:{data:data}})
      }
    }
  }
</script>

<style scoped lang='scss'>
.bg{
  position: absolute;
  text-align: center;
  width: 100%;
  height:1200px;
  filter: blur(3px);
  background:url(../picture/img3.jpeg) ;
}
.icon{
  height: 100px;
  width: 100%;
}
.iconimg{
  height: 90px;
  width: 270px;
  float: left;
}
.name{
  line-height: 90px;
  color: $color-bblue;
  font-size: 30px;
  font-weight:bold;
  float: left;
}
.top{
  font-family: '楷体';
  text-align: center;
  position: absolute;
  height: 1200px;
  width: 100%;
  background-color: rgba(0,0,0,0.2);
}

.img{
  width: 100%;
  height: 100%;
  border: 4px solid black;
}
.hot{
    height: 250px;
    margin-bottom: 70px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 250px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

.mid{
  width: 100%;
}
  .links{
    padding: 10px;
    height: 300px;
    color:black;
    background-color: rgba(255,255,255,0.4);
   border-radius: 20px;
    margin: 20px;
  }
  .link{
    font-family: '黑体';
    color:$color-bblue;
    font-size: 18px;
  }
  .link_item{
    height: 40px;
    line-height: 40px;
  }
  .informs{
    padding: 10px;
    height: 300px;
    color:white;
    background-color: rgba(0,0,0,0.8);
   border-radius: 20px;
    margin: 20px;
  }
  .item{
      color:$color-white;
      border: 1px solid $color-blue;
      height: 35px;
      margin: 10px;
      padding-left: 5px;
      padding-right: 5px;
    }
    .item:hover{
      transform: scale(1.02);
      border: 2px solid $color-white;
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
  .news{
    padding: 10px;
    height: 250px;
    color:white;
    background-color: rgba(0,0,0,0.8);
  border-radius: 20px;
    margin: 20px;
  }
  .download{
    padding: 10px;
    height: 250px;
    color:black;
    background-color: rgba(255,255,255,0.4);
   border-radius: 20px;
    margin: 20px;
  }

.buttom{
  height: 200px;
  width: 100%;
  background-color:orange;
  margin-top: 30px;
}
</style>
