import { createApp } from "vue";
import { store as counterStore, StateKey } from "./store/counter";
import App from "./App.vue";

createApp(App)
  .use(counterStore, StateKey)
  .mount("#app");
