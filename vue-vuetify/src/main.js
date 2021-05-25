import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'

// Store
import { store } from './store.js';

// Routes (Deve ser obrigatóriamente chamado de "router")
import router from './routes.js';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
