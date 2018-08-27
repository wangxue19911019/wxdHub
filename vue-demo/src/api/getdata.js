import $http from './index.js'

/*登录接口*/
export const login = data => $http.get('/api/login',data)

/*忘记密码 */
export const forgetpassword = data =>$http.get('/api/forgetpassword',data)

/*近三个月数据统计 */
export const threemonth = data =>$http.get('/api/threemonth',data)
