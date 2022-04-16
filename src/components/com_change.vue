<template>
  <div id="dialog">
    <div class="border">
      <div class="detail_css">
        <div>
          <input class='input' placeholder="输入竞赛主标题" v-model="com.com_mainname"/>
          <input class='input' placeholder="输入竞赛副标题" v-model='com.com_subname'/>
          <el-row>
            <el-col :span='8'>
              <div class='about_css'>
                <el-select v-model="com.com_level" placeholder='选择赛事级别' @change='levelChange()' style="margin: 5px;">
                  <el-option v-for='item in levels' :key='item' :label='item' :value='item'></el-option>
                </el-select>
                <el-select v-model="com.com_subject" placeholder='选择专业' @change='levelChange()' style="margin: 5px;">
                  <el-option v-for='item in majors' :key='item' :label='item' :value='item'></el-option>
                </el-select>
                <el-select v-model="com.com_category" placeholder='选择赛事类别' @change='levelChange()' style="margin: 5px;">
                  <el-option v-for='item in categorys' :key='item' :label='item' :value='item'></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span='16'>
              <div  class="about_css">
                <textarea class="input" v-model="com.com_information" placeholder="请输入竞赛描述" style="width:100%; min-height: 130px;"></textarea>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="time_css">
          <div class='time'>
            <el-row>
              <el-col :span='4'><div class='text'>报名开始时间：</div></el-col>
              <el-col :span='8'>
                <el-date-picker v-model="com.sign_up_start" type="date" @change='dateChange()' placeholder="选择日期"></el-date-picker>
              </el-col>
              <el-col :span='4'><div class='text'>报名结束时间：</div></el-col>
              <el-col :span='8'>
                <el-date-picker v-model="com.sign_up_end" type="date" @change='dateChange()' placeholder="选择日期"></el-date-picker>
              </el-col>
            </el-row>
          </div>
          <div class='time'>
            <el-row>
              <el-col :span='4'><div class='text'>初赛开始时间：</div></el-col>
              <el-col :span='8'>
                <el-date-picker v-model="com.preliminary_start" type="date" @change='dateChange()' placeholder="选择日期"></el-date-picker>
              </el-col>
              <el-col :span='4'><div class='text'>初赛结束时间：</div></el-col>
              <el-col :span='8'>
                <el-date-picker v-model="com.preliminary_end" type="date" @change='dateChange()' placeholder="选择日期"></el-date-picker>
              </el-col>
            </el-row>
          </div>
          <div class='time'>
            <el-row>
              <el-col :span='4'><div class='text'>复赛开始时间：</div></el-col>
              <el-col :span='8'>
                <el-date-picker v-model="com.repecharge_start" type="date" @change='dateChange()' placeholder="选择日期"></el-date-picker>
              </el-col>
              <el-col :span='4'><div class='text'>复赛结束时间：</div></el-col>
              <el-col :span='8'>
                <el-date-picker v-model="com.repecharge_end" type="date" @change='dateChange()' placeholder="选择日期"></el-date-picker>
              </el-col>
            </el-row>
          </div>
          <div class='time'>
            <el-row>
              <el-col :span='4'><div class='text'>决赛开始时间：</div></el-col>
              <el-col :span='8'>
                <el-date-picker v-model="com.finals_start" type="date" @change='dateChange()' placeholder="选择日期"></el-date-picker>
              </el-col>
              <el-col :span='4'><div class='text'>决赛结束时间：</div></el-col>
              <el-col :span='8'>
                <el-date-picker v-model="com.finals_end" type="date" @change='dateChange()' placeholder="选择日期"></el-date-picker>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <el-button type='primary' @click="ch_wait">取消</el-button>
      <el-button type='primary' @click="ch_sure">确定修改</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "com_change",
    props:['com_id'],
    data(){
      return {
        id:this.$route.query.data,
        levels:['A类','B类','C类','D类','E类'],
        majors:['计算机科学与技术','信息安全技术','物联网'],
        categorys:['体育类','文艺类','科学类','技术类'],
        com:{}
      }
    },
    mounted() {
      this.instance.comIdsearch(this.com).then(res => {
        this.com=res.data.com
      })
    },
    methods:{
      ch_sure(){
         this.instance.comUpdate({
           user_id:storage.user_id
         }).then(res => {
           this.datas=res.data.data
         })
         this.$emit('ch_sure')
      },
      ch_wait(){
         //给父组件传参
         this.$emit('ch_wait')
      }
    }
  }
</script>

<style scoped lang='scss'>
  #dialog{
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    width: 100%;
    height: 100%;
  }
  .input{
    height: 40px;
    width: 97%;
    border: 2px solid #b0cfe1;
    margin: 10px;
    padding: 7px 0px;
    border-radius: 10px; /*css3属性IE不支持*/
    padding-left: 10px;
  }
  .input:focus{
    border-color: #759EB8;
    outline: 0;
  }
  .message{
    text-align: center;
    margin-bottom: 20px;
    border-radius:10px;
    margin-bottom: 7px;
  }
  .border{
    min-width: 800px;
    padding: 10px;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .about_css {
    text-align: left;
    min-height: 100px;
    margin: 8px;
    border-radius: 10px;
  }

  .time_css {
    text-align: left;
    min-height: 100px;
    margin: 8px;
    padding: 10px;
    border-radius: 10px;
  }
  .text{
    line-height: 40px;
    color:$color-gray;
  }
  .time{
    margin:5px;
  }
</style>
