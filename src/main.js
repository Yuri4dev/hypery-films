import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/index.css";
import Router from "./router";
import { store } from "./store";

createApp(App).use(Router).use(store).mount("#app");
