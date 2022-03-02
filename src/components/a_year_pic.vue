<template>
    <div>
      <div class="award_css">
        <el-row>
          <el-col :span="14">
            <div id='chartColumn' style="height: 400px;"></div>
          </el-col>
          <el-col :span="8">
            <div id='chartPie1' style="height: 400px;"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div id='chartPie2' style="height: 200px;"></div>
          </el-col>
          <el-col :span="8">
            <div id='chartPie3' style="height: 200px;"></div>
          </el-col>
          <el-col :span="8">
            <div id='chartPie4' style="height: 200px;"></div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name:'a_year_pic',
    data(){
      return{
        date1:'',
        date2:'',
        chartColumn: null,
        chartPie1: null,
        chartPie2: null,
        chartPie3: null,
        chartPie4: null,
        com:{
          years:['2021','2022','2023'],
          
          //竞赛总数
          allc:'10',
          //竞赛总报名人数
          allp:'150',
          //竞赛专业占比
          major:{
            major1:'2',
            major2:'4',
            major3:'6',
          },
          //竞赛等级占比
          level:{
            level1:'1',
            level2:'3',
            level3:'2',
            level4:'3',
            level5:'1',
          },
          category:{
            category1:'3',
            category2:'2',
            category3:'1',
            category4:'4',
          },
          //总共获奖情况
          reword1:'2',
          reword2:'5',
          reword3:'10',
          rewordOther:'7',
          reword0:'126',
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
            data: ['竞赛总数','报名总数','一等奖', '二等奖', '三等奖', '其它奖项', '未获奖']
          },
          yAxis: {},
          series: [{
            name: '人数',
            type: 'bar',
            data: [this.com.allc,this.com.allp,this.com.reword1, this.com.reword2, this.com.reword3, this.com.rewordOther, this.com.reword0]
          }]
        })
      },
      drawPieChart1() {
        this.chartPie1 = echarts.init(document.getElementById('chartPie1'));
        this.chartPie1.setOption({
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
            data: ['一等奖', '二等奖', '三等奖', '其它奖项', '未获奖']
          },
          series: [{
            name: '模拟数据',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data:[
              {value:this.com.reword1, name:'一等奖'},
              {value:this.com.reword2, name:'二等奖'},
              {value:this.com.reword3, name:'三等奖'},
              {value:this.com.rewordOther, name:'其他奖项'},
              {value:this.com.reword0, name:'未获奖'}
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
      drawPieChart2() {
        this.chartPie2 = echarts.init(document.getElementById('chartPie2'));
        this.chartPie2.setOption({
          title: {
            text: '竞赛等级占比',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['A类', 'B类', 'C类', 'D类', 'F类']
          },
          series: [{
            name: '模拟数据',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data:[
              {value:this.com.level.level1, name:'A类'},
              {value:this.com.level.level2, name:'B类'},
              {value:this.com.level.level3, name:'C类'},
              {value:this.com.level.level4, name:'D类'},
              {value:this.com.level.level5, name:'F类'}
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
      drawPieChart3() {
        this.chartPie3 = echarts.init(document.getElementById('chartPie3'));
        this.chartPie3.setOption({
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
              {value:this.com.major.major1, name:'计算机科学与技术'},
              {value:this.com.major.major2, name:'物联网'},
              {value:this.com.major.major3, name:'信息安全技术'}
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
      drawPieChart4() {
        this.chartPie4 = echarts.init(document.getElementById('chartPie4'));
        this.chartPie4.setOption({
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
              {value:this.com.category.category1, name:'体育类'},
              {value:this.com.category.category2, name:'艺术类'},
              {value:this.com.category.category3, name:'科技类'},
              {value:this.com.category.category4, name:'电子类'}
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
        this.drawPieChart1(),
        this.drawPieChart2(),
        this.drawPieChart3(),
        this.drawPieChart4()
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
</style>
