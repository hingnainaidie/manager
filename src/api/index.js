//输出通用axios实例
import axios from 'axios';

const instance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': "application/json;charset=utf-8"
  }
});

export default {
  //登录
  userLogin ( data ) {
    return instance.post('/api/user/login', data);
  }
  userNewLogin ( data ) {
    return instance.post('/api/user/new_login', data);
  }
  //新闻的增删查改
  newAdd(data){
    return instance.post('/api/new/add',data)
  }
  newDelete(id){
    return instance.delete('/api/new/delete',id)
  }
  newUpdate(data){
    return instance.put('/api/new/update',data)
  }
  newFindId(id){
    return instance.get('/api/new/findId',id)
  }
  newFindAll(){
    return instance.get('/api/new/findAll')
  }

  //公告的增删查改
  informAdd(data){
    return instance.post('/api/inform/add',data)
  }
  informDelete(id){
    return instance.delete('/api/inform/delete',id)
  }
  informUpdate(data){
    return instance.put('/api/inform/update',data)
  }
  informFindId(id){
    return instance.get('/api/inform/findId',id)
  }
  informFindAll(){
    return instance.get('/api/inform/findAll')
  }
};
