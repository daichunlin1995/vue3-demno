import { defineStore } from "pinia";
import { Names } from "./store-namespace";
export const mainStore = defineStore(Names.MAIN, {
  state: () => ({
    count: 0,
  }),
  getters: {},
  actions: {},
});
