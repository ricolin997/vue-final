import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入 Bootstrap 的 CSS
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
