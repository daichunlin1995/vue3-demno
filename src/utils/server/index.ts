/*
 * @Author       : daichunlin
 * @Date         : 2022-05-12 20:32:37
 * @LastEditors  : daichunlin
 * @LastEditTime : 2022-05-16 21:22:26
 * @Description  : axios 配置文件
 * @FilePath     : /vue3-project/src/utils/server/index.ts
 */
import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Iheaders } from '/#/axios'
import { addPending, removePending } from './axiosCancel'
import { httpErrorStatusHandle } from './status'
const baseURL = import.meta.env.VITE_BASE_URL

const server: AxiosInstance = axios.create({
  baseURL,
  timeout: 50000
})

// 设置request拦截器
server.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { cancelToken } = (config.headers as Iheaders) ?? true
    if (cancelToken) {
      // 处理重复请求
      removePending(config)
      addPending(config)
    }
    // config 处理
    return config
  },
  (error: AxiosError) => {
    // 错误处理
    return Promise.reject(new Error('this is axios error'))
  }
)

server.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log(response)
    // 处理重复请求
    removePending(response.config)

    // response 处理
    return response.data
  },
  (error: AxiosError) => {
    // 清除请求队列
    error.config && removePending(error.config)
    // 获取错误状态信息
    let errMsg = httpErrorStatusHandle(error)
    // 错误处理
    return Promise.reject(new Error(errMsg))
  }
)

export default server
