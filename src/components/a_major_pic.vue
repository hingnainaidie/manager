<template>
    <div>
      <div class="award_css">
        <el-row>
          <el-col :span="8">
            <div class='all'>竞赛总数：{{this.com.allc}}</div>
            <div class='all'>报名总人数：{{this.com.allp}}</div>
          </el-col>
          <el-col :span="16">
            <div id='chartPie' style="height: 200px;"></div>
          </el-col>
        </el-row>
        <div id='chartColumn' style="height: 400px;"></div>
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name:'a_major_pic',
    data(){
      return{
        chartColumn: null,
        chartPie: null,
        com:{
          //竞赛专业占比
          allc:'10',
          allp:'130',
          major:{
            major1:{
              name:'计算机科学与技术',
              num:'2',
              sign:'30',
              award1:'1',
              award2:'3',
              award3:'2',
              awardOther:'3',
            },
            major2:{
              name:'物联网',
              num:'4',
              sign:'45',
              award1:'1',
              award2:'6',
              award3:'3',
              awardOther:'2',
            },
            major3:{
              name:'信息安全技术',
              num:'1',
              sign:'50',
              award1:'4',
              award2:'3',
              award3:'2',
              awardOther:'5',
            },
          }
        }
      }
    },
    methods: {
      drawColumnChart() {
        this.chartColumn = echarts.init(document.getElementById('chartColumn'));
        this.chartColumn.setOption({
          title: {
            text: '获奖统计'
          },
          tooltip: {},
          xAxis: {
            data: ['计算机科学与技术', '物联网', '信息安全技术']
          },
          yAxis: {},
          series: [{
            name: '竞赛总数',
            type: 'bar',
            data: [this.com.major.major1.num,this.com.major.major2.num,this.com.major.major3.num]
          },{
            name: '报名总数',
            type: 'bar',
            data: [this.com.major.major1.sign,this.com.major.major2.sign,this.com.major.major3.sign]
          },{
            name: '一等奖总数',
            type: 'bar',
            data: [this.com.major.major1.award1,this.com.major.major2.award1,this.com.major.major3.award1]
          },{
            name: '二等奖总数',
            type: 'bar',
            data: [this.com.major.major1.award2,this.com.major.major2.award2,this.com.major.major3.award2]
          },{
            name: '三等奖总数',
            type: 'bar',
            data: [this.com.major.major1.award3,this.com.major.major2.award3,this.com.major.major3.award3]
          },{
            name: '其它奖项',
            type: 'bar',
            data: [this.com.major.major1.awardOther,this.com.major.major2.awardOther,this.com.major.major3.awardOther]
          }]
        })
      },
      drawPieChart() {
        this.chartPie = echarts.init(document.getElementById('chartPie'));
        this.chartPie.setOption({
          title: {
            text: '专业占比',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['计算机科学与技术', '物联网', '信息安全技术']
          },
          series: [{
            name: '模拟数据',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data:[
              {value:this.com.major.major1.num, name:'计算机科学与技术'},
              {value:this.com.major.major2.num, name:'物联网'},
              {value:this.com.major.major3.num, name:'信息安全技术'}
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
      this.drawCharts()
    }
  }
</script>

<style scoped lang="scss">
.award_css{
  min-width: 800px;
}
.all{
  line-height: 40px;
  margin:30px;
  font-size: 30px;
  color:$color-gray;
}
</style>
