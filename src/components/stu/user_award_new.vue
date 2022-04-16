<template>
  <div id="dialog">
    <div class="border">
      <el-row style="margin: 20px;">
        <el-col :span='8'>
          <el-select v-model="com_cate" placeholder='选择赛事类别'>
            <el-option v-for='item in com_cates' :key='item' :label='item' :value='item'></el-option>
          </el-select>
        </el-col>
        <el-col :span='8'>
          <el-select v-model="com_num" placeholder='选择竞赛届数'>
            <el-option v-for='item in com_nums' :key='item' :label='item' :value='item'></el-option>
          </el-select>
        </el-col>
        <el-col :span='8'>
          <el-select v-model="award_level" placeholder='选择获奖级别'>
            <el-option v-for='item in award_levels' :key='item' :label='item' :value='item'></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-upload
      style="margin-bottom: 30px;"
        class="upload-demo"
        drag
        action="#"
        :auto-upload="false"
        :multiple='false'
        :on-change="onChange"
        :file-list="fileList"
        >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传单个jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button type='primary' @click="ch_wait">取消</el-button>
      <el-button type='primary' @click="ch_sure">确定</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user_award_new",
    data(){
      return {
        fileList:[],
        com_cate:'',
        com_cates:["大学生英语竞赛","数模比赛","程序设计大赛"],
        com_num:'',
        com_nums:["第一届","第二届","第三届","第四届","第五届"],
        award_level:'',
        award_levels:["一等奖","二等奖","三等奖"],
      }
    },
    props:['id'],
    methods:{
      onChange(file, list) {
          this.fileList=list;
        	if (list.length > 1 && file.status !== "fail") {
            list.splice(0, 1);
          } else if (file.status === "fail") {
            errorMsg("上传失败，请重新上传！");
            list.splice(0, 1);
          }
       },
      ch_sure(){
        if(this.fileList.length==0){
          alert("请选择文件")
        }else if(this.com_cate==''||this.com_num==''||this.award_level==''){
          alert("请选择完整信息")
        }else{
          let file = this.fileList.pop().raw; //这里获取上传的文件对象
          let formData = new FormData();
          formData.append("award_prove", file);
          formData.append("award_level", this.award_level);
          formData.append("com_num", this.com_num);
          formData.append("com_cate", this.com_cate);
          this.instance.upload(formData).then(res => {})
          this.$emit('ch_sure')
        }
      },
      ch_wait(){
         this.$emit('ch_wait')
      }
    }
  }
</script>

<style scoped>
  #dialog{
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    width: 100%;
    height: 100%;
  }
  .border{
    padding: 10px;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    width: 800px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
