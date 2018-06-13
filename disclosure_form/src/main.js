// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
