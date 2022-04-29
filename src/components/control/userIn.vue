<template>
  <div id="dialog">
    <div class="border">
      <el-upload accept=".xlsx" style="margin-bottom: 30px;" class="upload-demo" drag action="#" :auto-upload="false" :multiple='false'
        :on-change="onChange" :file-list="fileList">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传单个excel文件，且不超过20MB</div>
      </el-upload>
      <el-button type='primary' @click="ch_wait">取消</el-button>
      <el-button type='primary' @click="ch_sure">确定</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userIn",
    data(){
      return{
        fileList:[],
      }
    },
    methods: {
      onChange(file, list) {
        let imgSize = Number(file.size / 1024 / 1024);
        if (imgSize > 20) {
          this.$msgbox({
            title: "",
            message: "文件大小不能超过20MB，请重新上传。",
            type: "warning",
          });
          this.materialList[scope.$index].fileList.splice(scope.index, 1);
          return;
        }
        this.fileList = list;
        if (list.length > 1 && file.status !== "fail") {
          list.splice(0, 1);
        } else if (file.status === "fail") {
          errorMsg("上传失败，请重新上传！");
          list.splice(0, 1);
        }
      },
      ch_sure() {
        if (this.fileList.length == 0) {
          alert("请选择文件")
        }else {
          var storage = window.localStorage;
          let file = this.fileList.pop().raw; //这里获取上传的文件对象
          let formData = new FormData();
          formData.append("file", file);
          this.instance.userIn(formData).then(res => {
            if(res.data==666){
              this.$emit('ch_sure')
            }
          })
        }
      },
      ch_wait() {
        this.$emit('ch_wait')
      }
    }
  }
</script>

<style scoped>
  #dialog {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
  }

  .border {
    padding: 10px;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    width: 800px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
