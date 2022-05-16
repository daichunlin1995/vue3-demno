/*
 * @Author       : daichunlin
 * @Date         : 2022-05-16 08:51:08
 * @LastEditors  : daichunlin
 * @LastEditTime : 2022-05-16 14:03:27
 * @Description  : file content
 * @FilePath     : /vue3-project/src/api/test.ts
 */

import request from '@/utils/server'
export default class Test {
  static getTestDataApi() {
    return request({
      url: './data.json',
      method: 'get',
      headers: {
        cancelToken: true,
        showMessage: true
      }
    })
  }
}
