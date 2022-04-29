<template>
    <div>
      <div class='top'>
        <el-row>
          <el-col :span='10'><el-button class='el-icon-back' @click='back'>返回</el-button></el-col>
          <el-col :span='14' class='title'>竞赛获奖年分析</el-col>
        </el-row>
      </div>
      <div>
        <el-row style="margin-bottom: 30px;">
          <el-col :span='6'>
            <el-select v-model="year" placeholder='选择年份'>
              <el-option v-for='item in years' :key='item' :label='item' :value='item'></el-option>
            </el-select>
          </el-col>
          <el-col :span='6'>
            <el-button type='primary' @click='reflesh()'>生成分析图表</el-button>
          </el-col>
          <el-col :span="12">
            <div id='chartPie' style="height: 200px;"></div>
          </el-col>
        </el-row>
      </div>
        <div id='chartColumn' style="height: 400px; width: 100%;"></div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'con_awardAll',
    data() {
      return {
        chartColumn: null,
        chartPie: null,
        years:['2019','2020','2021','2022'],
        year:'',
        com:{
          //当前年份的所有的竞赛
          comList:['大学生英语竞赛2020(第一届)', '数模比赛2019(第二届)', '程序设计大赛2020(第一届)'],
          comData:{
            award1:[1,3,2],
            award2:[5,3,6],
            award3:[4,5,3],
          },
          awardValue:[
            {value:2,name:'大学生英语竞赛2020(第一届)'},
            {value:4,name:'数模比赛2019(第二届)'},
            {value:1,name:'程序设计大赛2020(第一届)'}
          ]
        }
      };
    },
    mounted() {
      // this.instance.award_all({}).then(res => {
      //   this.com=res.data,

      // });
    },
    methods:{
      back(){
        this.$router.back();
      },
      reflesh(){
        if(this.year==''){
          alert("请选择年份");
        }else{
          this.instance.award_all({
            com_year:this.year
          }).then(res => {
            this.com=res.data
            this.drawCharts()
          });
        }
      },
      drawColumnChart() {
        this.chartColumn = echarts.init(document.getElementById('chartColumn'));
        this.chartColumn.setOption({
          title: {
            text: '获奖统计'
          },
          tooltip: {},
          xAxis: {
            data: this.com.comList
          },
          yAxis: {},
          series: [{
            name: '一等奖',
            type: 'bar',
            data: this.com.comData.award1
          },{
            name: '二等奖',
            type: 'bar',
            data: this.com.comData.award2
          },{
            name: '三等奖',
            type: 'bar',
            data: this.com.comData.award3
          }]
        })
      },
      drawPieChart() {
        this.chartPie = echarts.init(document.getElementById('chartPie'));
        this.chartPie.setOption({
          title: {
            text: '获奖人数占比',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: this.com.comList
          },
          series: [{
            name: '模拟数据',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data:this.com.awardValue,
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
    }
  }
</script>

<style scoped>
  .top{
    margin-bottom: 20px;
  }
.title {
    line-height: 30px;
    color: gray;
    font-size: 20px;
    font-weight: bold;
    float: left;
  }
  .award_css{
    margin: 10px;
  }
</style>
