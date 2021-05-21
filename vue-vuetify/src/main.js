import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'

// Routes (Deve ser obrigatóriamente chamado de "router")
import router from './routes.js';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
