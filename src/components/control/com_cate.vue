<template>
    <div class='top'>
      <div style="margin-top: 10px;margin-bottom: 10px;">
        <el-row>
          <el-col :span='6'>
            <el-input placeholder="请输入赛事类别名称" v-model="cate_name"></el-input>
          </el-col>
          <el-col :span='6'>
            <el-button type="primary" @click='add()'>添加</el-button>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-table :data='com_cates' style='width: 100%; padding: auto;'>
          <el-table-column prop='cate_name' label='赛事类别' width="200"></el-table-column>
          <el-table-column label='操作' width="150">
            <template slot-scope='scope'>
              <el-button size="mini" @click='del(scope.row.cate_id)' type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'con_cate',
    data(){
      return{
        cate_name:'',
        com_cates:[]
      }
    },
    mounted() {
      this.findcate()
    },
    methods:{
      findcate(){
        this.instance.cateFind().then(res => {this.com_cates=res.data})
      },
      add(){
        this.instance.cateAdd({cate_name:this.cate_name}).then(res => {
          if(res.data==666){
            this.findcate()
          }
        })
      },
      del(data){
        this.instance.cateDelete({cate_id:data}).then(res => {
          if(res.data==666){
            this.findcate()
          }
        })
      },
    }
  }
</script>

<style scoped lang='scss'>


</style>
