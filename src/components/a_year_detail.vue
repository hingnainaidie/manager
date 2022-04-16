<template>
  <div>
    <div class='com'>
      <el-table :data='datas' style='width: 100%; padding: auto;'>
        <el-table-column prop='main_name' label='竞赛名称' width="250"></el-table-column>
        <el-table-column prop='num' label='竞赛编号' width="100"></el-table-column>
        <el-table-column prop='sign_start' label='报名开始时间' width="120"></el-table-column>
        <el-table-column prop='manager' label='竞赛负责人' width="100"></el-table-column>
        <el-table-column prop='level' label='竞赛等级' width="80"></el-table-column>
        <el-table-column prop='category' label='竞赛类别' width="150"></el-table-column>
        <el-table-column prop='major' label='专业' width="150"></el-table-column>
        <el-table-column label='操作' width="150">
          <el-button size="mini" type="primary" @click='detail()'>查看竞赛详情</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'a_year_detail',
    data() {
      return {
        datas: [{
            year:this.$route.query.data,
            main_name: '全国大学生英语竞赛',
            num:'0099829',
            manager: '时影',
            sign_start: '2021/2/16',
            level:'B类',
            category:'电子类',
            major:'计算机科学与技术',
          },{
            main_name: '全国大学生英语竞赛',
            num:'0099829',
            manager: '时影',
            sign_start: '2021/2/16',
            level:'B类',
            category:'电子类',
            major:'计算机科学与技术',
          },{
            main_name: '全国大学生英语竞赛',
            num:'0099829',
            manager: '时影',
            sign_start: '2021/2/16',
            level:'B类',
            category:'电子类',
            major:'计算机科学与技术',
          },{
            main_name: '全国大学生英语竞赛',
            num:'0099829',
            manager: '时影',
            sign_start: '2021/2/16',
            level:'B类',
            category:'电子类',
            major:'计算机科学与技术',
          },{
            main_name: '全国大学生英语竞赛',
            num:'0099829',
            manager: '时影',
            sign_start: '2021/2/16',
            level:'B类',
            category:'电子类',
            major:'计算机科学与技术',
          },{
            main_name: '全国大学生英语竞赛',
            num:'0099829',
            manager: '时影',
            sign_start: '2021/2/16',
            level:'B类',
            category:'电子类',
            major:'计算机科学与技术',
          },{
            main_name: '全国大学生英语竞赛',
            num:'0099829',
            manager: '时影',
            sign_start: '2021/2/16',
            level:'B类',
            category:'电子类',
            major:'计算机科学与技术',
          },
        ]
      }
    },
    methods: {
      detail() {
        this.$router.push({
          path: "/com_con"
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .com {
  }
</style>
