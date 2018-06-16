// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// const cors = require('cors')

// app.use(cors());

// Vue.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }))
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
// Vue.http.headers.common['Access-Control-Request-Method'] = '*'
// Import plugin config
// import vlConfig from './config/vue-localize-conf'

// Import vuex store (required by vue-localize)
// import store from './vuex/store'

// Import VueLocalize plugin
// import VueLocalize from 'vue-localize'
// Vue.use(VueLocalize, {// All options is required
//   store,
//   config: vlConfig,
//   router: router,
// })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
