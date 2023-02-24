import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false


require('axios').defaults.headers.common['Authorization'] = 
'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IklzcmFlbCBGZXJyZWlyYSIsImVtYWlsIjoiaW5vbmF0b0BpZGVhcy5tZWQuYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjc3MjQ0NTc2LCJleHAiOjE2Nzc1MDM3NzZ9.AJMPIny-RD8IBjqJrw-7gj-lMV3K3-8wLjZ5-v1nRjo'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')