import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 状态管理
import { setupStore } from '@/store'
import { setupRouter } from './router'

const setupAll = async () => {
  const app = createApp(App)
  setupStore(app)
  setupRouter(app)
  app.mount('#app')
}

setupAll()
