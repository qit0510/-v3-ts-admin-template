import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home/Home.vue'),
    name: 'Home'
  },
  {
    path: '/about',
    component: () => import('@/views/About/About.vue'),
    name: 'About'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
