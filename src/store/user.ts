import { defineStore } from 'pinia'
import { Names } from './store-namespace'
export const userStore = defineStore({
  id: Names.USER,
  state: () => ({
    vToken: ''
  }),
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
