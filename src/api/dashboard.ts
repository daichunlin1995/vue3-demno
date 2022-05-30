import request from '@/utils/server'
export default class Dashboard {
  static getCollapseList() {
    return request({
      url: '/api/collapse/list',
      method: 'get'
    })
  }
}
