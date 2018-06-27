/**
 * 服务
 */
import axios from 'axios'
import {banner} from '../mock/data'

export async function getBanners(){
  return axios.get('/api/banner');
}

export async function login(param) {
  const {username,password,type} = param;

  return axios.get('/api/login').then(function(response){
    if(username === 'admin' && password === '888888'){
      return {
        status:'ok',
        type:type,
        currentAuthority:'admin'
      };
    }else if(password === '123456' && username === 'user'){
      return {
        status: 'ok',
        type,
        currentAuthority: 'user'
      }
    }else{
      return {
        status:'error',
        type:type,
      }
    }
  })
}