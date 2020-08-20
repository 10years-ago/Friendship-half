import axios from 'axios';

//请求user数据
export function user(config){
  return new Promise((resolve,reject) =>{
    const userGet = axios.create({
      baseUrl:'http://111.229.183.8:8080',
      timeout:5000
    })
    userGet(config)
      .then(res =>{
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}