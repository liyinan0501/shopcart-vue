import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.escook.cn'
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.mount('#app')
