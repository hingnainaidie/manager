<template>
    <div>
      <div class="award_css">
        <el-row>
          <el-col :span="8">
            <div class='all'>竞赛总数：{{this.com.allc}}</div>
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
    name:'a_class_pic',
    data(){
      return{
        date1:this.$route.query.date1,
        date2:this.$route.query.date2,
        chartColumn: null,
        chartPie: null,
        com:{
          //竞赛专业占比
          allc:'10',
          cates:['大学生英语竞赛', '数模比赛', '程序设计大赛'],
          cate:{
            num:[2,4,1],
            award1:[1,3,2],
            award2:[5,3,6],
            award3:[4,5,3],
          },
          sn:[
            {value:2,name:'大学生英语竞赛'},
            {value:4,name:'数模比赛'},
            {value:1,name:'程序设计大赛'}
          ]
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
            data: this.com.cates
          },
          yAxis: {},
          series: [{
            name: '竞赛总数',
            type: 'bar',
            data: this.com.cate.num
          },{
            name: '一等奖总数',
            type: 'bar',
            data: this.com.cate.award1
          },{
            name: '二等奖总数',
            type: 'bar',
            data: this.com.cate.award2
          },{
            name: '三等奖总数',
            type: 'bar',
            data: this.com.cate.award3
          }]
        })
      },
      drawPieChart() {
        this.chartPie = echarts.init(document.getElementById('chartPie'));
        this.chartPie.setOption({
          title: {
            text: '竞赛类别占比',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: this.com.cates
          },
          series: [{
            name: '模拟数据',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data:this.com.sn,
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
      this.instance.award_category({
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
