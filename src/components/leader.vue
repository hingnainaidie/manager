<template>
  <div>
    <el-container>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="$router.path" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="/login">
              <i class="el-icon-setting"></i>
              <span slot="title">快速登录</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-submenu index="3">
              <template #title>
                <i class="el-icon-location"></i>
                <span>相关链接</span>
              </template>
              <el-menu-item index="1-1">重庆大学教务网</el-menu-item>
              <el-menu-item index="1-2">重庆大学xxx</el-menu-item>
              <el-menu-item index="1-3">重庆大学xxx</el-menu-item>
              <el-menu-item index="1-4">重庆大学xxx</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="parent">
            <div class="inform_css" @click="goInform()">
              <div>
                公告通知
              </div>
              <div class="inform_body">
                <div v-for="table in tableData" v-bind:key="table" class="items" @click.stop="detail(table)">
                  <el-row >
                    <el-col :span="19">
                      <div class="informs">{{table.inform}}</div>
                    </el-col>
                    <el-col :span="5">
                      <div class="date_css">{{table.date}}</div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
            <div class="new_css" @click="goNew()">
              <div>
                新闻中心
              </div>
              <div class="inform_body">
                <el-row v-for="newn in news" v-bind:key="newn" class="items">
                  <el-col :span="19">
                    <div class="informs">{{newn.inform}}</div>
                  </el-col>
                  <el-col :span="5">
                    <div class="date_css">{{newn.date}}</div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="display_css">
              成果展示
            </div>
            <div class="download_css">
              下载中心
            </div>
          </div>
        </el-main>
      </el-container>
      <el-footer>
        <div class="footer">基本信息</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'leader',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          inform: '关于xxxxxxx竞赛的报名已经开始了，如果要了解详细信息，请准备就绪巴拉巴拉'
        }, {
          date: '2016-05-04',
          inform: '关于xxxxxxx竞赛的报名已经开始了，如果要了解详细信息，请准备就绪巴拉巴拉'
        }, {
          date: '2016-05-01',
          inform: '关于xxxxxxx竞赛的报名已经开始了，如果要了解详细信息，请准备就绪巴拉巴拉'
        }, {
          date: '2016-05-03',
          inform: '关于xxxxxxx竞赛的报名已经开始了，如果要了解详细信息，请准备就绪巴拉巴拉'
        }, {
          date: '2016-05-03',
          inform: '关于xxxxxxx竞赛的报名已经开始了，如果要了解详细信息，请准备就绪巴拉巴拉'
        }, {
          date: '2016-05-04',
          inform: '关于xxxxxxx竞赛的报名已经开始了，如果要了解详细信息，请准备就绪巴拉巴拉'
        }],
        news: [{
          date: '2016-05-02',
          inform: '恭喜本校同学xxx获得xxxx竞赛,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
        }, {
          date: '2016-05-02',
          inform: '恭喜本校同学xxx获得xxxx竞赛,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
        }, {
          date: '2016-05-02',
          inform: '恭喜本校同学xxx获得xxxx竞赛,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
        }, {
          date: '2016-05-02',
          inform: '恭喜本校同学xxx获得xxxx竞赛,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
        }, {
          date: '2016-05-02',
          inform: '恭喜本校同学xxx获得xxxx竞赛,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
        }, {
          date: '2016-05-02',
          inform: '恭喜本校同学xxx获得xxxx竞赛,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
        }]
      }
    },
    methods: {
      handleSelect(key) {
        this.$router.push({
          path: key
        })
      },
      goInform(){
        this.$router.push("/informs")
      },
      goNew(){
        this.$router.push("/news")
      },
      detail(table){
        console.log(1)
        this.$router.push({path:"/new_detail",query:{data:table}})
      }
    }
  }
</script>

<style scoped lang="scss">
  .informs {
    margin-top: 15px;
    margin-bottom: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
  }

  .date_css {
    width: 100px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .parent {
    text-align: center;
  }
.items{
  border-radius: 10px;
  background-color: $color-light;
  margin: 5px;
}
  .inform_css {
    min-width: 500px;
    width: 45%;
    float: left;
    height: 400px;
    background-color: $color-mid;
    border-radius: 10px;
    margin: 10px;
  }

  .new_css {
    min-width: 500px;
    width: 45%;
    float: left;
    height: 400px;
    background-color: $color-mid;
    border-radius: 10px;
    margin: 10px;
  }

  .display_css {
    min-width: 500px;
    width: 45%;
    float: left;
    height: 300px;
    background-color: $color-mid;
    border-radius: 10px;
    margin: 10px;
  }

  .download_css {
    min-width: 500px;
    width: 45%;
    float: left;
    height: 300px;
    background-color: $color-mid;
    border-radius: 10px;
    margin: 10px;
  }

  .footer {
    height: 150px;
    background-color: coral;
  }

  .inform_body {
    height: 300px;
  }
</style>
