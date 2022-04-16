//输出通用axios实例
import axios from 'axios';

const instance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': "application/json;charset=utf-8"
  }
});

export default {
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
  userBulkImport ( data ) {
    return instance.post('/api/user/bulkimport', data);
  },
  userIdentify ( data ) {
    return instance.post('/api/user/identify', data);
  },
  userCom ( data ) {
    return instance.post('/api/user/com', data);
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
    return instance.get('/api/com/delete',data)
  },
  comUpdate(data){
    return instance.post('/api/com/update',data)
  },
  comIdsign(data){
    return instance.post('/api/com/idsign',data)
  },
  comIdaward(){
    return instance.post('/api/com/idaward')
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
    return instance.post('/api/com/signall',data)
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
//获奖分析接口
  awardAdd(data){
    return instance.post('/api/award/add',data)
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
  awardStuPass(data){
    return instance.post('/api/award/stu_pass',data)
  },
  awardManNopass(data){
    return instance.post('/api/award/man_nopass',data)
  },
  awardManPass(data){
    return instance.post('/api/award/man_pass',data)
  },
  awardConNopass(){
    return instance.post('/api/award/con_nopass')
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
    return instance.post('/api/award/year',data)
  },
  award_major(data){
    return instance.post('/api/award/category',data)
  },
  award_level(data){
    return instance.post('/api/award/level',data)
  },

//数据接口
  createdata(){
    return instance.post('/api/data/createall')
  },
  deletedata(){
    return instance.get('/api/data/deleteall')
  },
};
