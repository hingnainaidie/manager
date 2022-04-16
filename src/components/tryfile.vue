<template>
  <div>
    <el-upload class="upload-demo" ref="upload" action="#"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取证明材料</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">确认上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

  </div>
</template>

<script>
  export default {
    name: 'tryfile',
    data() {
      return {
        msg: "这是文件上传携带的信息"
      }
    },
    methods: {
      submitUpload() {
        //this.$refs.upload.submit();
        let file = this.$refs.upload.uploadFiles.pop().raw; //这里获取上传的文件对象
        let formData = new FormData();
        formData.append("file", file);
        formData.append("msg", this.msg)
        this.instance.upload(formData).then(res => {})
      }
    }
  }
</script>

<style>
</style>
