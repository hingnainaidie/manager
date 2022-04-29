<template>
    <div class='top'>
      <el-button @click="goNew()" type='primary' style="margin-bottom: 20px; margin-right: 20px;">发布新竞赛</el-button>
      <el-badge :value="count" :max='99' style="margin-right: 20px;">
        <el-button @click="goPass()">已审核竞赛</el-button>
      </el-badge>
      <div class='com'>
        <el-table border :data='datas' style='width: 100%; padding: auto;'>
          <el-table-column prop='com_date' label='发布时间' width="120"></el-table-column>
          <el-table-column prop='user_name' label='竞赛负责人' width="120"></el-table-column>
          <el-table-column prop='com_mainname' label='竞赛标题' width="350"></el-table-column>
          <el-table-column label='操作' width="300">
            <template slot-scope='scope'>
              <el-button size="mini" @click='detail(scope.row.com_id)'>查看详情</el-button>
              <el-button size="mini" type="primary" @click='controlPass(scope.row.com_id)'>审核通过</el-button>
              <el-button size="mini" type="danger" @click='controlNopass(scope.row.com_id)'>审核失败</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <comnew @ch_sure="sure1()" @ch_wait="wait1()" v-if="showDialog1"></comnew>
    </div>
</template>

<script>
  import comnew from '../../components/com_new'
  export default {
    name: 'con_com',
    components:{
      comnew
    },
    data(){
      return{
        showDialog1:false,
        datas:[],
        count:''
      }
    },
    mounted() {
      this.getNopass(),
      this.getCount()
    },
    methods:{
      getCount(){
        this.instance.com_passCom({}).then(res => {
          this.count=res.data
        });
      },
      goPass(){
        this.$router.push("/Controller/con_concom1",)
      },
      goNew(){
        this.showDialog1=true;
      },
      sure1(){
        this.getNopass();
        this.showDialog1=false;
      },
      wait1(){
        this.showDialog1=false;
      },
      detail(data) {
        this.$router.push({
          path: "/Controller/con_commsg",
          query: {data: data}
        })
      },
      getNopass(){
        this.instance.comConNopass().then(res => {
          this.datas=res.data.data
        })
      },
      controlNopass(data){
        this.instance.comControl({
          com_id:data,
          check:2
        }).then(res => {
          if(res.data==666){
            this.getNopass()
          }
        })
      },
      controlPass(data){
        this.instance.comControl({
          com_id:data,
          check:1
        }).then(res => {
          if(res.data==666){
            this.getNopass()
          }
        })
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
    }
  }
</script>

<style scoped lang='scss'>
.top{

}
.com{
  margin-top: 10px;
}

</style>
