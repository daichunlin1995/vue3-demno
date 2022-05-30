import { defineStore } from 'pinia'
import { Names } from './store-namespace'
import { Itab } from '/#/layout'
export const tabStore = defineStore({
  id: Names.ROUTE,
  state: () => ({
    tabList: [] as Itab[]
  }),
  actions: {
    addTabList(tab: Itab) {
      let nameList = this.tabList.map((item) => item.name)
      if (!nameList.includes(tab.name)) {
        this.tabList.push(tab)
      }
    },
    removeTabList(tab: Itab) {
      let nameList = this.tabList.map((item) => item.name)
      let index = nameList.indexOf(tab.name)
      this.tabList.splice(index, 1)
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'tab',
        storage: sessionStorage
      }
    ]
  }
})
