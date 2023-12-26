import './assets/main.css'
import './style/tailwind.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import qs from "qs"





const app=createApp(App);

app.config.productionTip = false

//设置axios的基础url部分
axios.defaults.baseURL = 'http://localhost:8080/elm/';
//将axios挂载到vue实例上，使用时就可以 this.$axios 这样使用了
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$qs = qs;


app.use(router).mount('#app')
