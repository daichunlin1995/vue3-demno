import request from '@/utils/server'
export default class User {
  static loginIn() {
    return request({
      url: './login.json',
      method: 'get',
      headers: {
        cancelToken: true,
        showMessage: true
      }
    })
  }
}
