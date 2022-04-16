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
    name:'a_level_pic',
    data(){
      return{
        date1:this.$route.query.date1,
        date2:this.$route.query.date2,
        chartColumn: null,
        chartPie: null,
        com:{
          //竞赛专业占比
          allc:'10',
          allp:'130',
          level:{
            level1:{
              name:'A类',
              num:'2',
              sign:'30',
              award1:'1',
              award2:'3',
              award3:'2',
              awardOther:'3',
            },
            level2:{
              name:'B类',
              num:'4',
              sign:'45',
              award1:'1',
              award2:'6',
              award3:'3',
              awardOther:'2',
            },
            level3:{
              name:'C类',
              num:'1',
              sign:'50',
              award1:'4',
              award2:'3',
              award3:'2',
              awardOther:'5',
            },
            level4:{
              name:'D类',
              num:'4',
              sign:'30',
              award1:'6',
              award2:'7',
              award3:'9',
              awardOther:'5',
            },
            level5:{
              name:'E类',
              num:'5',
              sign:'50',
              award1:'4',
              award2:'3',
              award3:'8',
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
            data: ['A类', 'B类', 'C类','D类','E类']
          },
          yAxis: {},
          series: [{
            name: '竞赛总数',
            type: 'bar',
            data: [this.com.level.level1.num,this.com.level.level2.num,this.com.level.level3.num,this.com.level.level4.num,this.com.level.level5.num]
          },{
            name: '报名总数',
            type: 'bar',
            data: [this.com.level.level1.sign,this.com.level.level2.sign,this.com.level.level3.sign,this.com.level.level4.sign,this.com.level.level5.sign]
          },{
            name: '一等奖总数',
            type: 'bar',
            data: [this.com.level.level1.award1,this.com.level.level2.award1,this.com.level.level3.award1,this.com.level.level4.award1,this.com.level.level5.award1]
          },{
            name: '二等奖总数',
            type: 'bar',
            data: [this.com.level.level1.award2,this.com.level.level2.award2,this.com.level.level3.award2,this.com.level.level4.award2,this.com.level.level5.award2]
          },{
            name: '三等奖总数',
            type: 'bar',
            data: [this.com.level.level1.award3,this.com.level.level2.award3,this.com.level.level3.award3,this.com.level.level4.award3,this.com.level.level5.award3]
          },{
            name: '其它奖项',
            type: 'bar',
            data: [this.com.level.level1.awardOther,this.com.level.level2.awardOther,this.com.level.level3.awardOther,this.com.level.level4.awardOther,this.com.level.level5.awardOther]
          }]
        })
      },
      drawPieChart() {
        this.chartPie = echarts.init(document.getElementById('chartPie'));
        this.chartPie.setOption({
          title: {
            text: '竞赛级别占比',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['A类', 'B类', 'C类','D类','E类']
          },
          series: [{
            name: '模拟数据',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data:[
              {value:this.com.level.level1.num, name:'A类'},
              {value:this.com.level.level2.num, name:'B类'},
              {value:this.com.level.level3.num, name:'C类'},
              {value:this.com.level.level4.num, name:'D类'},
              {value:this.com.level.level5.num, name:'E类'},
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
      this.instance.award_level({
        date1:this.date1,
        date2:this.date2
      }).then(res => {
        this.com=res.data
      })
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
