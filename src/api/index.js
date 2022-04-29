//输出通用axios实例
import axios from 'axios';
const instance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': "application/json;charset=utf-8"
  }
});
const instupload = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': "multipart/form-data"
  }
});



export default {
  //文件下载
  thesisEssay ( data ) {
    return instance.post('/api/thesis/essay', data);
  },
  //文件尝试
  upload ( data ) {
    return instance.post('/api/award/upload', data);
  },
  //用户
  userLogin ( data ) {
    return instance.post('/api/user/login', data);
  },
  userNewLogin ( data ) {
    return instance.post('/api/user/register', data);
  },
  userChabasic ( data ) {
    return instance.post('/api/user/chabasic', data);
  },
  userChapass ( data ) {
    return instance.post('/api/user/chapass', data);
  },
  userIdentify ( data ) {
    return instance.post('/api/user/identify', data);
  },
  userCom ( data ) {
    return instance.post('/api/user/com', data);
  },
  userIn(data) {
    return instupload.post('/api/user/bulkimport',data);
  },
  userDelete ( data ) {
    return instance.post('/api/user/delete', data);
  },
  //新闻的增删查改
  newsLeader(){
    return instance.post('/api/news/leader')
  },
  newsKeysearch(data){
    return instance.post('/api/news/keysearch',data)
  },
  newsDatesearch(data){
    return instance.post('/api/news/datesearch',data)
  },
  newsFindall(data){
    return instance.post('/api/news/findall',data)
  },
  newsIdsearch(data){
    return instance.post('/api/news/idsearch',data)
  },
  newsAdd(data){
    return instance.post('/api/news/add',data)
  },
  newsDelete(data){
    return instance.post('/api/news/delete',data)
  },
  newsUpdate(data){
    return instance.post('/api/news/update',data)
  },
  //负责人发布
  newsUserfindNopass(data){
    return instance.post('/api/news/userfind_nopass',data)
  },
  newsUserfindPass(data){
    return instance.post('/api/news/userfind_pass',data)
  },
  //管理员审核
  newsConNopass(){
    return instance.post('/api/news/con_nopass')
  },
  newsConPass(){
    return instance.post('/api/news/con_pass')
  },
  newsControl(data){
    return instance.post('/api/news/control',data)
  },
  //公告的增删查改
  informLeader(){
    return instance.post('/api/inform/leader')
  },
  informKeysearch(data){
    return instance.post('/api/inform/keysearch',data)
  },
  informDatesearch(data){
    return instance.post('/api/inform/datesearch',data)
  },
  informFindall(data){
    return instance.post('/api/inform/findall',data)
  },
  informIdsearch(data){
    return instance.post('/api/inform/idsearch',data)
  },
  informAdd(data){
    return instance.post('/api/inform/add',data)
  },
  informDelete(id){
    return instance.post('/api/inform/delete',id)
  },
  informUpdate(data){
    return instance.post('/api/inform/update',data)
  },
  informUserfindNopass(data){
    return instance.post('/api/inform/userfind_nopass',data)
  },
  informUserfindPass(data){
    return instance.post('/api/inform/userfind_pass',data)
  },
  informConNopass(){
    return instance.post('/api/inform/con_nopass')
  },
  informConPass(){
    return instance.post('/api/inform/con_pass')
  },
  informControl(data){
    return instance.post('/api/inform/control',data)
  },
  //竞赛
  comHot(){
    return instance.post('/api/com/hot')
  },
  comKeysearch(data){
    return instance.post('/api/com/keysearch',data)
  },
  comDatesearch(data){
    return instance.post('/api/com/datesearch',data)
  },
  comLevelsearch(data){
    return instance.post('/api/com/levelsearch',data)
  },
  comMajorsearch(data){
    return instance.post('/api/com/majorsearch',data)
  },
  comCatesearch(data){
    return instance.post('/api/com/catesearch',data)
  },
  comFindall(data){
    return instance.post('/api/com/findall',data)
  },
  comIdsearch(data){
    return instance.post('/api/com/idsearch',data)
  },
  comFindall(data){
    return instance.post('/api/com/findall',data)
  },
  comAdd(data){
    return instance.post('/api/com/add',data)
  },
  comDelete(data){
    return instance.post('/api/com/delete',data)
  },
  comUpdate(data){
    return instance.post('/api/com/update',data)
  },
  comIdsign(data){
    return instance.post('/api/com/idsign',data)
  },
  comIdaward(data){
    return instance.post('/api/com/idaward',data)
  },
  comConNopass(){
    return instance.post('/api/com/con_nopass')
  },
  comConPass(data){
    return instance.post('/api/com/con_pass',data)
  },
  comControl(data){
    return instance.post('/api/com/control',data)
  },
  comUserfindNopass(data){
    return instance.post('/api/com/userfind_nopass',data)
  },
  comUserfindPass(data){
    return instance.post('/api/com/userfind_pass',data)
  },
  comSignall(data){
    return instupload.post('/api/com/signall',data)
  },
  comSign(data){
    return instance.post('/api/com/sign',data)
  },
  com_stunocom(data){
    return instance.post('/api/com/stu_nocomplete',data)
  },
  com_stucom(data){
    return instance.post('/api/com/stu_complete',data)
  },
  com_passCom(){
    return instance.post('/api/com/passcom')
  },
//获奖分析接口
  awardDataIn(data){
    return instupload.post('/api/award/excelExport',data)
  },
  awardAdd(data){
    return instupload.post('/api/award/add',data)
  },
  awardDelete(data){
    return instance.post('/api/award/delete',data)
  },
  awardUpdate(data){
    return instance.post('/api/award/update',data)
  },
  awardIdsearch(data){
    return instance.post('/api/award/idsearch',data)
  },
  awardStuNopass(data){
    return instance.post('/api/award/stu_nopass',data)
  },
  awardStuNonopass(data){
    return instance.post('/api/award/stu_nonopass',data)
  },
  awardStuNoCount(data){
    return instance.post('/api/award/stu_nocount',data)
  },
  awardStuCount(data){
    return instance.post('/api/award/stu_count',data)
  },
  awardStuPass(data){
    return instance.post('/api/award/stu_pass',data)
  },
  awardManNopass(data){
    return instance.post('/api/award/man_nopass',data)
  },
  awardManCount(data){
    return instance.post('/api/award/man_count',data)
  },
  awardManPass(data){
    return instance.post('/api/award/man_pass',data)
  },
  awardConNopass(){
    return instance.post('/api/award/con_nopass')
  },
  awardConCount(data){
    return instance.post('/api/award/con_count',data)
  },
  awardConPass(){
    return instance.post('/api/award/con_pass')
  },
  awardCheck(data){
    return instance.post('/api/award/check',data)
  },

  award_year(data){
    return instance.post('/api/award/year',data)
  },
  award_major(data){
    return instance.post('/api/award/major',data)
  },
  award_category(data){
    return instance.post('/api/award/category',data)
  },
  award_all(data){
    return instance.post('/api/award/all',data)
  },
  award_major(data){
    return instance.post('/api/award/major',data)
  },
  award_level(data){
    return instance.post('/api/award/level',data)
  },

//论文接口
  thesisAdd(data){
    return instupload.post('/api/thesis/add',data)
  },
  thesisDelete(data){
    return instance.post('/api/thesis/delete',data)
  },
  thesisUpdate(data){
    return instance.post('/api/thesis/update',data)
  },
  thesisIdsearch(data){
    return instance.post('/api/thesis/idsearch',data)
  },
  thesisStuNopass(data){
    return instance.post('/api/thesis/stu_nopass',data)
  },
  thesisStuNonopass(data){
    return instance.post('/api/thesis/stu_nonopass',data)
  },
  thesisStuNoCount(data){
    return instance.post('/api/thesis/stu_nocount',data)
  },
  thesisStuCount(data){
    return instance.post('/api/thesis/stu_count',data)
  },
  thesisStuPass(data){
    return instance.post('/api/thesis/stu_pass',data)
  },
  thesisManNopass(data){
    return instance.post('/api/thesis/man_nopass',data)
  },
  thesisManCount(data){
    return instance.post('/api/thesis/man_count',data)
  },
  thesisManPass(data){
    return instance.post('/api/thesis/man_pass',data)
  },
  thesisConNopass(){
    return instance.post('/api/thesis/con_nopass')
  },
  thesisConCount(data){
    return instance.post('/api/thesis/con_count',data)
  },
  thesisConPass(){
    return instance.post('/api/thesis/con_pass')
  },
  thesisCheck(data){
    return instance.post('/api/thesis/check',data)
  },

//专利接口
  patentAdd(data){
    return instupload.post('/api/patent/add',data)
  },
  patentDelete(data){
    return instance.post('/api/patent/delete',data)
  },
  patentUpdate(data){
    return instance.post('/api/patent/update',data)
  },
  patentIdsearch(data){
    return instance.post('/api/patent/idsearch',data)
  },
  patentStuNopass(data){
    return instance.post('/api/patent/stu_nopass',data)
  },
  patentStuNonopass(data){
    return instance.post('/api/patent/stu_nonopass',data)
  },
  patentStuNoCount(data){
    return instance.post('/api/patent/stu_nocount',data)
  },
  patentStuCount(data){
    return instance.post('/api/patent/stu_count',data)
  },
  patentStuPass(data){
    return instance.post('/api/patent/stu_pass',data)
  },
  patentManNopass(data){
    return instance.post('/api/patent/man_nopass',data)
  },
  patentManCount(data){
    return instance.post('/api/patent/man_count',data)
  },
  patentManPass(data){
    return instance.post('/api/patent/man_pass',data)
  },
  patentConNopass(){
    return instance.post('/api/patent/con_nopass')
  },
  patentConCount(data){
    return instance.post('/api/patent/con_count',data)
  },
  patentConPass(){
    return instance.post('/api/patent/con_pass')
  },
  patentCheck(data){
    return instance.post('/api/patent/check',data)
  },


//数据接口
  createdata(){
    return instance.post('/api/data/createall')
  },
  deletedata(){
    return instance.get('/api/data/deleteall')
  },

  //赛事类别管理
  cateAdd(data){
    return instance.post('/api/cate/add',data)
  },
  cateDelete(data){
    return instance.post('/api/cate/delete',data)
  },
  cateFindall(){
    return instance.post('/api/cate/findall')
  },
  cateFind(){
    return instance.post('/api/cate/find')
  },
  cateReFindall(){
    return instance.post('/api/cate/refindall')
  },
};
