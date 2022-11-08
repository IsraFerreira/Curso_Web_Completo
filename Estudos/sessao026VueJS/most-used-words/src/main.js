import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");

// I don't use it by default.
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

createApp(App).mount('#app')
