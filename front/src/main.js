import './style/index.sass'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import manifest from './imagemanifest.js'

Vue.prototype.$manifest = manifest

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBR6eSdLVeJ3lD9UJeElCQtKQTdTxh8rwg'
  }
})

Vue.use(store)
Vue.use(router)
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
