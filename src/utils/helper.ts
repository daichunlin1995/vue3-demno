/**
 *
 * @description 获取数据真实类型
 * @param data 形参 待获取的数据
 */
export function getDataType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
