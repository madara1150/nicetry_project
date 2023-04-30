import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import * as te from 'tw-elements';
import Vuelidate from 'vuelidate'

const app = createApp(App)

app.use(Vuelidate)

createApp(App).use(router).mount('#app').use(te)
