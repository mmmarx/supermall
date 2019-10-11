import axios from 'axios'

/*export function request(config) {
//创建实例
  const instance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com',
    timeout:5000
  })
  //发送请求
  return instance(config)
}*/

/*axios拦截器 全局拦截器axios.interceptors*/
export function request(config) {
//创建实例
  const instance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com',
    timeout:5000
  })
  /*axios拦截器 实例拦截  请求拦截   响应拦截*/
  instance.interceptors.request.use(config=>{
   console.log(config)
    //场景1： config信息不符合要求
    // 2      请求时在界面有请求图标
    //3      一些请求 如：登陆（token）   携带特殊信息
    return config
  },err=>{
   console.log(err)
  })
  //响应拦截
  instance.interceptors.response.use(res=>{
   console.log(res)
    return res.data
  },err=>{
   console.log(err)
  })

  //发送请求
  return instance(config)
}



/*instance本身就返回promise*/

/*export function request(config) {
//创建实例
return new Promise((resolve,reject)=>{
  const instance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com',
    timeout:5000
  })
  //发送请求
  instance(config)
    .then(res=>{
    resolve(res)
  })
    .catch(err=>{
      reject(err)
    })
})
}
*/




/*其他页面的请求方式*/
/*
*request({
  url:'user'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
*
*
*
* */
