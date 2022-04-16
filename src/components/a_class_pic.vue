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
          allp:'130',
          class:{
            class1:{
              name:'体育类',
              num:'2',
              sign:'30',
              award1:'1',
              award2:'3',
              award3:'2',
              awardOther:'3',
            },
            class2:{
              name:'艺术类',
              num:'4',
              sign:'45',
              award1:'1',
              award2:'6',
              award3:'3',
              awardOther:'2',
            },
            class3:{
              name:'科技类',
              num:'1',
              sign:'50',
              award1:'4',
              award2:'3',
              award3:'2',
              awardOther:'5',
            },
            class4:{
              name:'电子类',
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
            data: ['体育类', '艺术类', '科技类', '电子类']
          },
          yAxis: {},
          series: [{
            name: '竞赛总数',
            type: 'bar',
            data: [this.com.class.class1.num,this.com.class.class2.num,this.com.class.class3.num,this.com.class.class4.num]
          },{
            name: '报名总数',
            type: 'bar',
            data: [this.com.class.class1.sign,this.com.class.class2.sign,this.com.class.class3.sign,this.com.class.class4.sign]
          },{
            name: '一等奖总数',
            type: 'bar',
            data: [this.com.class.class1.award1,this.com.class.class2.award1,this.com.class.class3.award1,this.com.class.class4.award1]
          },{
            name: '二等奖总数',
            type: 'bar',
            data: [this.com.class.class1.award2,this.com.class.class2.award2,this.com.class.class3.award2,this.com.class.class4.award2]
          },{
            name: '三等奖总数',
            type: 'bar',
            data: [this.com.class.class1.award3,this.com.class.class2.award3,this.com.class.class3.award3,this.com.class.class4.award3]
          },{
            name: '其它奖项',
            type: 'bar',
            data: [this.com.class.class1.awardOther,this.com.class.class2.awardOther,this.com.class.class3.awardOther,this.com.class.class4.awardOther]
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
            data: ['体育类', '艺术类', '科技类', '电子类']
          },
          series: [{
            name: '模拟数据',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data:[
              {value:this.com.class.class1.num, name:'体育类'},
              {value:this.com.class.class2.num, name:'艺术类'},
              {value:this.com.class.class3.num, name:'科技类'},
              {value:this.com.class.class4.num, name:'电子类'}
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
