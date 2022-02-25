<template>
  <div>
    <div class='items'>
      <el-table :data='datas' style='width: 100%; padding: auto;'>
        <el-table-column prop='title' label='论文标题' width="450"></el-table-column>
        <el-table-column prop='author' label='作者' width="150"></el-table-column>
        <el-table-column prop='date' label='上传时间' width="150"></el-table-column>
        <el-table-column label='操作' width="150">
          <el-button size="mini" type="warning" @click='detail()'>下载</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user_thesis',
    data(){
      return{
        datas:[
          { date: '2016-05-02',
            author:'永宁',
            title: '浅谈基于深度学习的机器研究'},
          { date: '2016-05-02',
            author:'永宁',
            title: '浅谈基于深度学习的机器研究'},
          { date: '2016-05-02',
            author:'永宁',
            title: '浅谈基于深度学习的机器研究'},
          { date: '2016-05-02',
            author:'永宁',
            title: '浅谈基于深度学习的机器研究'},
          { date: '2016-05-02',
            author:'永宁',
            title: '浅谈基于深度学习的机器研究'},
          { date: '2016-05-02',
            author:'永宁',
            title: '浅谈基于深度学习的机器研究'},
          { date: '2016-05-02',
            author:'永宁',
            title: '浅谈基于深度学习的机器研究'},
          { date: '2016-05-02',
            author:'永宁',
            title: '浅谈基于深度学习的机器研究'},
          { date: '2016-05-02',
            author:'永宁',
            title: '浅谈基于深度学习的机器研究'}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .top{
    text-align: center;
  }
.items{
  width: 900px;
  margin: auto;
}
</style>
