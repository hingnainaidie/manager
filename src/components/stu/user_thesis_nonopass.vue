<template>
  <div>
    <div class="main">
      <div>
        <el-row>
          <el-col :span='8'><el-button class='el-icon-back' @click='back'>返回</el-button></el-col>
          <el-col :span='14' class='title'>我的审核失败论文信息</el-col>
        </el-row>
      </div>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='cate_name' label='赛事类别' width="250" :filters="ccate" :filter-method="filterHandler"></el-table-column>
          <el-table-column prop='com_num' label='竞赛届数' width="150" :filters="cnum" :filter-method="filterHandler"></el-table-column>
          <el-table-column prop='award_level' label='论文标题' width="150"></el-table-column>
          <el-table-column label='操作'>
            <template slot-scope='scope'>
              <el-button size="mini" type="primary" @click='detail(scope.row.thesis_id)'>查看详细信息</el-button>
              <el-button size="mini" type="warning" @click='download(scope.row)'>下载</el-button>
              <el-button size="mini" type="danger" @click='del(scope.row.award_id)'>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <dialog1 @ch_sure="sure" @ch_wait="wait" v-if="showDialog" :msg="msg" :msg1="msg1" :msg2="msg2"></dialog1>
  </div>
</template>

<script>
  import dialog1 from '../../components/dialog1'
  export default {
    name: 'user_award_nonopass',
    components: {
      dialog1,
    },
    mounted() {
      this.getData();
      this.instance.cateReFindall({}).then(res => {
        this.ccate=res.data
      });
    },
    data() {
      return {
        showDialog:false,
        delId:'',
        ccate:[],
        cnum:[{ text: '第一届', value: '第一届' },
                { text: '第二届', value: '第二届' },
                { text: '第三届', value: '第三届' },
                { text: '第四届', value: '第四届' },
                { text: '第五届', value: '第五届' }],
        alevel:[{ text: '一等奖', value: '一等奖' },
                { text: '二等奖', value: '二等奖' },
                { text: '三等奖', value: '三等奖' }],
        datas:[]
      }
    },
    methods: {
      getData(){
        var storage = window.localStorage;
        this.instance.thesisStuNonopass({
          user_id:storage.user_id
        }).then(res => {
          this.datas=res.data
        });
      },
      del(data){
        this.msg = "确定删除该数据";
        this.msg1 = "我不确定";
        this.msg2 = "确认删除";
        this.delId=data;
        this.showDialog=true;
      },
      back(){
        this.$router.back();
      },
      detail(data) {
        this.$router.push({
          path: "/User/user_thesis_detail",
          query: {
            data: data
          }
        })
      },
      download(data) {
        this.instance.thesisEssay({
          thesis_id: data.thesis_id
        }).then(res => {
          let URL = this.dataURLtoBlob(res.data);
          var reader = new FileReader();
          　　reader.readAsDataURL(URL);
          　　reader.onload = function (e) {
          　　　　// 兼容IE
          　　　　if (window.navigator.msSaveOrOpenBlob) {
          　　　　　　var bstr = atob(e.target.result.split(",")[1]);
          　　　　　　var n = bstr.length;
          　　　　　　var u8arr = new Uint8Array(n);
          　　　　　　while (n--) {
          　　　　　　　　u8arr[n] = bstr.charCodeAt(n);
          　　　　　　}
          　　　　　　var blob = new Blob([u8arr]);
          　　　　　　window.navigator.msSaveOrOpenBlob(blob,data.thesis_name+'.pdf');
          　　　　} else {
          　　　　　　// 转换完成，创建一个a标签用于下载
          　　　　　　const a = document.createElement('a');
          　　　　　　a.download = data.thesis_name+'.pdf'; // 这里写你的文件名
          　　　　　　a.href = e.target.result;
          　　　　　　document.body.appendChild(a)
          　　　　　　a.click();
          　　　　　　document.body.removeChild(a)
          　　}
          }
        });
      },
      dataURLtoBlob(dataurl) {
        var bstr = atob(dataurl)
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {
          type: 'pdf'
        });
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      sure(){
        this.instance.thesisDelete({
          award_id:this.delId
        }).then(res => {
          if(res.data==666){
            this.getData()
          }
        });
        this.showDialog=false
      },
      wait(){
        this.showDialog=false
      }
    }
  }
</script>

<style scoped lang='scss'>
  .title {
    line-height: 30px;
    color: gray;
    font-size: 20px;
    font-weight: bold;
    float: left;
  }
  .main{
    width: 900px;
    margin: auto;
  }
  .com{
    margin-top:10px;
  }
</style>
