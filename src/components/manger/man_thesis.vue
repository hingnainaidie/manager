<template>
  <div>
    <div class="main">
      <el-badge :value="count" :max='99' style="margin-bottom: 20px;">
        <el-button @click="goNopass()">未审核论文</el-button>
      </el-badge>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='cate_name' label='赛事类别' width="200" :filters="ccate" :filter-method="filterHandle">
          </el-table-column>
          <el-table-column prop='com_num' label='竞赛届数' width="100" :filters="cnum" :filter-method="filterHandle">
          </el-table-column>
          <el-table-column prop='thesis_name' label='论文标题' width="180">
          </el-table-column>
          <el-table-column prop='user_name' label='学生名字' width="100"></el-table-column>
          <el-table-column prop='user_num' label='学生学号' width="120"></el-table-column>
          <el-table-column label='操作'>
            <template slot-scope='scope'>
              <el-button size="mini" type="primary" @click='detail(scope.row.thesis_id)'>查看详细信息</el-button>
              <el-button size="mini" type="warning" @click='download(scope.row)'>下载</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'man_thesis',
    data() {
      return {
        count:0,
        ccate: [],
        cnum: [{
            text: '第一届',
            value: '第一届'
          },
          {
            text: '第二届',
            value: '第二届'
          },
          {
            text: '第三届',
            value: '第三届'
          },
          {
            text: '第四届',
            value: '第四届'
          },
          {
            text: '第五届',
            value: '第五届'
          }
        ],
        datas: []
      }
    },
    mounted() {
      var storage = window.localStorage;
      this.instance.thesisManPass({
        user_id:storage.user_id
      }).then(res => {
        this.datas=res.data
      });
      this.instance.thesisManCount({
        user_id:storage.user_id
      }).then(res => {
        this.count=res.data
      });
      this.instance.cateReFindall({}).then(res => {
        this.ccate=res.data
      });
    },
    methods: {
      goNopass() {
        this.$router.push({
          path: "/Manager/man_thesis_nopass"
        })
      },
      detail(data) {
        this.$router.push({
          path: "/Manager/man_thesis_detail",
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
      filterHandle(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
    }
  }
</script>

<style scoped lang='scss'>
  .main {
    width: 900px;
    margin: auto;
  }

  .com {
    margin-top: 10px;
  }
</style>
