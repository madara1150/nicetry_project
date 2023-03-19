import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import * as te from 'tw-elements';



createApp(App).use(router).mount('#app').use(te)
