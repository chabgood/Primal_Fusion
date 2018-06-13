import Vuex from 'vuex'
import Vue from 'vue'
import { vueLocalizeVuexStoreModule } from 'vue-localize'
// import other Vuex modules

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vueLocalizeVuexStoreModule,
    // other Vuex modules
  }
})
