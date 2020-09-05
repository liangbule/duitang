import axios from 'axios'
export function request(config){
//    return new Promise( (resolve,reject) => {
    const instance = axios.create({
        baseURL:"/api/napi/blog/list/by_filter_id/",
        timeout: 5000
    })
    // 2 axios拦截器
    instance.interceptors.request.use(config => {
        // console.log(config);
        //1 -  发送网络请求时候 设置一个 loading
        // 2 - 网络请求携带token 
        return config
    },err => {
        // console.log(err);
    })
    // 2.2 响应拦截
    instance.interceptors.response.use( res => {
        // console.log(res);
        return res.data
    },err => {
        console.log(err);
    })
    // 发送网络请求
    return instance(config)

    // instance(config)
    //     .then( res => {
    //         resolve(res)
    //     })
    //     .catch( err => {
    //         reject(err)
    //     })
//    })
}

// 拦截器  请求成功/请求失败   响应成功/响应失败