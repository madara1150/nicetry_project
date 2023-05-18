import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import * as te from "tw-elements";
import Vuelidate from "vuelidate";
import { storage } from "./firebase";
import { VueFire } from "vuefire";
import axiosInstanec from "./plugin/axios";
import { createPinia } from 'pinia'


const app = createApp(App);
app.use(VueFire, {
    storage,
  });
app.use(Vuelidate);
app.use(createPinia())
app.use(router)
app.use(te)
app.config.globalProperties.axios = axiosInstanec;

app.mount("#app")
