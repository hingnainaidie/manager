<template>
    <div>
      <div class='top'>
        <el-row>
          <el-col :span='10'><el-button class='el-icon-back' @click='back'>返回</el-button></el-col>
          <el-col :span='14' class='title'>赛事类别获奖分析</el-col>
        </el-row>
      </div>
      <el-row style="margin-bottom: 30px;">
        <el-col :span='6'>
          <el-select v-model="category" placeholder='选择赛事级类别'>
            <el-option v-for='item in categories' :key='item' :label='item' :value='item'></el-option>
          </el-select>
        </el-col>
        <el-col :span='6'>
          <el-button type='primary' @click='reflesh()'>生成分析图表</el-button>
        </el-col>
      </el-row>
      <div id='chartColumn' style="height: 400px;"></div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'con_awardCate',
    data() {
      return {
        chartColumn: null,
        category:'',
        categories:[],
        com:{
          com_num:['第一届','第二届','第三届','第四届','第五届'],
          cate:{
            award1:[1,3,2,1,2],
            award2:[5,3,6,7,8],
            award3:[4,5,3,7,3],
          },
        }
      };
    },
    mounted(){
      this.instance.cateFindall({}).then(res => {
        this.categories=res.data
      });
    },
    methods:{
      back(){
        this.$router.back();
      },
      reflesh(){
        if(this.category==''){
          alert("请选择赛事类别");
        }else{
          this.instance.award_category({
            cate_name:this.category
          }).then(res => {
            this.com=res.data
            this.drawColumnChart()
          });
        }
      },
      drawColumnChart() {
        this.chartColumn = echarts.init(document.getElementById('chartColumn'));
        this.chartColumn.setOption({
          title: {
            text: this.category+'获奖统计'
          },
          tooltip: {},
          xAxis: {
            data: this.com.com_num
          },
          yAxis: {},
          series: [{
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
</style>
