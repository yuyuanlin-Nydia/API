import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mitt from "mitt"

import './assets/style/reset.css'
import './assets/style/main.scss'

// createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')

const app = createApp(App)

app.config.globalProperties.$bus = new mitt()

app.use(store).use(VueAxios, axios).mount('#app')