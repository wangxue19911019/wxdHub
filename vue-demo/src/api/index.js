import axios from 'axios'
//import store from '../store'
import { Loading } from 'element-ui';

let http = axios.create({
  baseUrl: '',
  withCredentials: true
})

http.interceptors.request.use(function(config){
  let loadingInstance = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  return config;
},function(error){
  let loadingInstance = Loading.service();
  loadingInstance.close();
  return Promise.reject(error);
})


http.interceptors.response.use(function(config){
  let loadingInstance = Loading.service();
  loadingInstance.close();
  return config;
},function(error){
  let loadingInstance = Loading.service();
  loadingInstance.close();
  return Promise.reject(error);
})

export default http
