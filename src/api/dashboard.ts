import request from '@/utils/server'
export default class Dashboard {
  static getCollapseListApi() {
    return request({
      url: '/api/collapse/list',
      method: 'get'
    })
  }
  static getCarouselListApi(id: number) {
    return request({
      url: `/api/carousel/list/${id}`,
      method: 'get'
    })
  }
  static getChartsDataApi() {
    return request({
      url: '/api/charts/data',
      method: 'get'
    })
  }
}
