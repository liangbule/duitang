import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// http://v.juhe.cn/toutiao/index
// type : top 
// key : 4dfc9a03c356917dca428d407161ba77

// axios({
//   url:"/api/napi/blog/list/by_filter_id/",
//   method:"GET",
//   params:{
//   include_fields: "top_comments,is_root,source_link,item,buyable,root_id,status,like_count,sender,album,reply_count,",
//   filter_id: "摄影",
//   // start: 40,
//   limit:10,
//   _: 1599271482290,
//   }
// }).then( res => {
//   console.log(res.data);
// })

// axios.all(
//   [
//   axios({
//     url:"/api/napi/blog/list/by_filter_id/",
//     method:"GET",
//     params:{
//     include_fields: "top_comments,is_root,source_link,item,buyable,root_id,status,like_count,sender,album,reply_count,",
//     filter_id: "摄影",
//     // start: 40,
//     limit:20,
//     _: 1599271482290,
//     }
//   }),
//   axios({
//     baseURL:"/api/napi/blog/list/by_filter_id/",
    // method:"GET",
    // timeout:4000,
    // params:{
    // include_fields: "top_comments,is_root,source_link,item,buyable,root_id,status,like_count,sender,album,reply_count,",
    // filter_id: "美食菜谱",
    // // start: 40,
    // limit:20,
    // _: 1599271482290,
    // }
//   }),
//   axios({
//     url:"/api/napi/blog/list/by_filter_id/",
//     method:"GET",
//     params:{
//     include_fields: "top_comments,is_root,source_link,item,buyable,root_id,status,like_count,sender,album,reply_count,",
//     filter_id: "家居生活",
//     // start: 40,
//     limit:20,
//     _: 1599271482290,
//     }
//   })
// ]).then(axios.spread((res1 , res2 , res3) => {
//   console.log(res1.data);
//   console.log(res2.data);
//   console.log(res3.data);

// }))
// .then(results => {
//   console.log(results);
// })

// 全局配置
// axios.defaults.baseURL = "http://www.duitang.com/";
// axios.defaults.timeout = 5000


// 4 - 创建对应实例
// const axiosCreate = axios.create({
//   baseURL:"http://www.duitang.com/",
//   timeout: 5000
// })
// axiosCreate({
//   url:"/api/napi/blog/list/by_filter_id/",
// }).then( res => {console.log(res);})

// 导入 
import { request } from './utils/request'
request({
  method:"GET",
  timeout:4000,
  params:{
  include_fields: "top_comments,is_root,source_link,item,buyable,root_id,status,like_count,sender,album,reply_count,",
  filter_id: "美食菜谱",
  // start: 40,
  limit:20,
  _: 1599271482290,
  }
}).then( res => {
  console.log(res);
}).catch( err => {
  // console.log(err);
})