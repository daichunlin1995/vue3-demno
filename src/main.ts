import { createApp } from 'vue'
import App from './App.vue'
// 清除默认样式
import 'normalize.css/normalize.css'
// 引入animate.css 动画样式
import 'animate.css'
// 引入router
import useRouter from './router'
// 引入pinia
import usePinia from './store'
// 获取vue实例
const app = createApp(App)
// 注册router
const router = useRouter(app)
app.use(router)
// 注册pinia
const store = usePinia()
app.use(store)
// 引入mock
import './mock'
app.mount('#app')
