import { defineStore } from 'pinia'
import { store } from '../index'
export const useTestStore = defineStore({
  id: 'test',
  state: () => ({
    count: 0
  }),
  //设置存储会存入sessionStore 用于刷新不改变值的方式
  //   persist: {
  //     enabled: true
  //   },
  getters: {
    getCount(): number {
      return this.count
    }
  },
  actions: {
    setCount(step: number) {
      this.count += step
    }
  }
})

export const useTestStoreWithOut = () => {
  return useTestStore(store)
}
