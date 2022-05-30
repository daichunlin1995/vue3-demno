import Mock from 'mockjs'
import { publicKey } from './tools/rsa'
export default [
  {
    url: '/api/getPublicKey',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: publicKey
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: Mock.mock({
          'token|20': '',
          userInfo: {
            cName: '@cname',
            name: '@name',
            email: '@email',
            avatar: Mock.Random.image('240x240', '#000', '#fff', 'png', '@cName')
          }
        })
      }
    }
  },
  {
    url: '/api/register',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'success'
      }
    }
  }
]
