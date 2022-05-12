import { createApp } from "vue";
import App from "./App.vue";
// 引入router
import useRouter from "./router";
// 引入pinia
import { createPinia } from "pinia";
// 获取vue实例
const app = createApp(App);
// 注册router
const router = useRouter(app);
app.use(router);
// 注册pinia
const store = createPinia();
app.use(store);
app.mount("#app");
