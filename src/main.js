import { createApp } from "vue";
import App from "./App.vue";
import VueAnalytics from "vue-analytics";
import VueMobileDetection from "vue-mobile-detection";

const app = createApp(App);
app.use(VueMobileDetection);
app.mount("#app");
