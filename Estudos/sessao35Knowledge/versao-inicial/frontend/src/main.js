import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false


require('axios').defaults.headers.common['Authorization'] = 
'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IklzcmFlbCBGZXJyZWlyYSIsImVtYWlsIjoiaW5vbmF0b0BpZGVhcy5tZWQuYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjc2MzE2Njg0LCJleHAiOjE2NzY1NzU4ODR9.iuO0dy56I9wZeCpLYbvOZUm7hbCSXfzqWiqIoRnBHnM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')