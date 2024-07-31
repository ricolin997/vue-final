import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";

// 引入 Bootstrap 的 Scss與自定義的Scss
import "./assets/styles/all.scss";

const app = createApp(App);

app.config.globalProperties.$axios = axios; // 將 Axios 設定為全局屬性

app.use(store);
app.use(router);
app.mount("#app");
