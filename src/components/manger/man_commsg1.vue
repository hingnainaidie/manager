<template>
  <div class="top">
    <div class="name_css">
      <div>
        <el-row>
          <el-col :span="24">
            <div class="main_name">
              <h1>{{com.com_mainname}}</h1>
            </div>
            <div class="sub_name">
              <h6>{{com.com_subname}}</h6>
            </div>
          </el-col>
          <el-col :span="4">
          </el-col>
        </el-row>
      </div>
      <div class="res_css">
        竞赛负责人：{{com.user_name}}
      </div>
    </div>
    <div class="detail_css">
      <div>
        <el-row>
          <el-col :span='8'>
            <div class='about_css'>
              <div>竞赛状态：{{transtatus(com.com_status)}}</div>
              <div>竞赛级别：{{com.com_level}}</div>
              <div>竞赛科目：{{com.com_major}}</div>
              <div>竞赛类别：{{com.cate_name}}</div>
            </div>
          </el-col>
          <el-col :span='16'>
            <div  class="about_css">
              <div>竞赛描述</div>
              <div>{{com.com_information}}</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="time_css">
        <div>报名开始时间：{{com.sign_up_start}}</div>
        <div>报名结束时间：{{com.sign_up_end}}</div>
        <div>初赛开始时间：{{com.preliminary_start}}</div>
        <div>初赛结束时间：{{com.preliminary_end}}</div>
        <div>复赛开始时间：{{com.repecharge_start}}</div>
        <div>复赛结束时间：{{com.repecharge_end}}</div>
        <div>决赛开始时间：{{com.finals_start}}</div>
        <div>决赛结束时间：{{com.finals_end}}</div>
      </div>
    </div>
    <div class="award_css" v-show="award">
      <el-row>
        <el-col :span="14">
          <div id='chartColumn' style="height: 400px;"></div>
        </el-col>
        <el-col :span="8">
          <div id='chartPie' style="height: 400px;"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'com_con',
    data() {
      return {
        award:true,
        id:this.$route.query.data,
        chartColumn: null,
        chartPie: null,
        com:{},
        // {
        //   com_mainname: "全国大学生英语竞赛",
        //   com_subname: "全国大学生英语口语比赛",
        //   com_manager: '时影',
        //   com_level: '竞赛等级',
        //   com_subject: '竞赛科目',
        //   com_category: '竞赛类别',
        //   com_information: '这个比赛是专门为了锻炼学生的英语表达能力和写作水平而创，它能够很好地让学生参与到竞赛中来，它开始于1999年，至今已经创办了二十多年了',
        //   sign_up_start: '2021-02-14',
        //   sign_up_end: '2021-02-14',
        //   preliminary_start: '2021-02-15',
        //   preliminary_end: '2021-02-16',
        //   repecharge_start: '2021-02-17',
        //   repecharge_end: '2021-02-18',
        //   finals_start: '2021-02-19',
        //   finals_end: '2021-02-20',
        //   num: '7',
        //   //获奖情况
        //   statue: '已完成',
        //   award0: '20',
        //   award1: '1',
        //   award2: '2',
        //   award3: '4',
        //   awardOther: '5',
        // }
      }
    },
    methods: {
      transtatus(data){
        if(data==0){
          return "未完成"
        }else if(data==1){
          return "进行中"
        }else{
          return "已结束"
        }
      },
      back() {
        this.$router.back();
      },
      drawColumnChart() {
        this.chartColumn = echarts.init(document.getElementById('chartColumn'));
        this.chartColumn.setOption({
          title: {
            text: '获奖统计'
          },
          tooltip: {},
          xAxis: {
            data: ['一等奖', '二等奖', '三等奖']
          },
          yAxis: {},
          series: [{
            name: '人数',
            type: 'bar',
            data: [this.com.award1, this.com.award2, this.com.award3]
          }]
        })
      },
      drawPieChart() {
        this.chartPie = echarts.init(document.getElementById('chartPie'));
        this.chartPie.setOption({
          title: {
            text: '获奖分布',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['一等奖', '二等奖', '三等奖']
          },
          series: [{
            name: '模拟数据',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data:[
              {value:this.com.award1, name:'一等奖'},
              {value:this.com.award2, name:'二等奖'},
              {value:this.com.award3, name:'三等奖'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]

        })
      },
      drawCharts() {
        this.drawColumnChart(),
        this.drawPieChart()
      }
    },
    mounted: function() {
      this.instance.comIdsearch({
        com_id:this.id
      }).then(res => {
        if(res.data.code==666){
          this.com=res.data.idcom;
          console.log(res.data.idcom.com_schedule);
          if(res.data.idcom.com_schedule==1){
            this.drawCharts()
          }else{
            this.award=false;
          }
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  .top{
    background-color:$color-white;
  	text-align: center;
    width: 900px;
    margin: auto;
    margin-top:5px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px $color-bblue;
  }
  .name_css {
    padding: 5px;
    border-bottom: 3px solid $color-bblue;
  }

  .num_css {
    background-color: $color-lightgray;
    border-radius: 10px;
    margin-bottom: 15px;
    width: 80%;
  }

  .res_css {
    padding-right: 10px;
    text-align: right;
  }

  .about_css {
    text-align: left;
    min-height: 100px;
    margin: 10px;
    margin-top:20px;
    padding: 10px;
    background-color: $color-light;
    border-radius: 10px;
  }

  .time_css {
    text-align: left;
    min-height: 100px;
    margin: 10px;
    padding: 10px;
    background-color: $color-light;
    border-radius: 10px;
  }

  .award_css {
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
  }
</style>
