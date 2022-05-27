import { defineStore } from 'pinia'
import { Names } from './store-namespace'
import { setCookie, getCookie } from '@/utils/helper'
export const userStore = defineStore({
  id: Names.USER,
  state: () => ({
    vToken: getCookie('token') || '',
    name: 'hello'
  }),
  actions: {
    setToken(token: string) {
      this.vToken = token
      setCookie('token', token)
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage
      }
    ]
  }
})
