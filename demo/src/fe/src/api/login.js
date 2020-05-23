import axios from 'axios'

const http = axios.create({
  // baseURL: "http://localhost:8081",
  baseURL: "/api",
  method: "GET",

});
// http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
http.interceptors.request.use(function (config) {
  console.log("进入请求拦截器");
  console.log(config);

  return config;
});

http.interceptors.response.use(
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),

  error => {
    console.log("失败---")
  }
);


export default {
  login(params) {
    console.log("22222");
    return http.post('login' , params)
  },
  getBookList(params) {
    return http.post(`getBookList`,params)
  },
  save(params) {
    return http.post(`save`, params)
  },
  update(params) {
    return http.post(`update`, params)
  },
  delete(bookId) {
    return http.get(`delete/${bookId}`)
  },
  batchDelete(params) {
    return http.post(`batchDelete`, params)
  },
  validateBook(bookId) {
    return http.get(`findBookById/${bookId}`)
  }

}
