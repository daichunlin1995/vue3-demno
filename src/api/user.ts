import request from '@/utils/server'
export default class User {
  static getPublicKeyApi() {
    return request({
      url: '/api/getPublicKey',
      method: 'get'
    })
  }
  static loginInApi(data: any) {
    return request({
      url: '/api/login',
      method: 'post',
      data
    })
  }
  static registerApi(data: any) {
    return request({
      url: '/api/register',
      method: 'post',
      data
    })
  }
}
