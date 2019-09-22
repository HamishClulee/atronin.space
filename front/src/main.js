import './style/index.sass'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBR6eSdLVeJ3lD9UJeElCQtKQTdTxh8rwg',
    libraries: 'places',
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
