import { Dashboard } from '@/api'
export const useCollapseApi = async () => {
  let result = await Dashboard.getCollapseListApi()
  return result
}

export const useCarouselApi = async (id: number) => {
  let result = await Dashboard.getCarouselListApi(id)
  return result
}

export const useChartDataApi = async () => {
  let result = await Dashboard.getChartsDataApi()
  return result
}
