import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import * as te from "tw-elements";
import Vuelidate from "vuelidate";
import { storage } from "./firebase";
import { VueFire } from "vuefire";

const app = createApp(App);
app.use(VueFire, {
    storage,
  });
app.use(Vuelidate);
app.use(router)
app.use(te)

app.mount("#app")
