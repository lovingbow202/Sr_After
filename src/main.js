import { createApp } from "vue";
import App from "./App.vue"; //從 ./App.vue import 東西進來，然後叫他 App
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app"); //建立APP，可以用store，router
