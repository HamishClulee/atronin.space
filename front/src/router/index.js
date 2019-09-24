import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import thevilla from '../views/thevilla.vue'
import events from '../views/events.vue'
import book from '../views/book.vue'
import pricing from '../views/pricing.vue'
import notfound from '../views/notfound'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/thevilla',
            name: 'thevilla',
            component: thevilla
        },
        {
            path: '/events',
            name: 'events',
            component: events
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: pricing
        },
        {
            path: '/book',
            name: 'book',
            component: book
        },
        {
            path: '*',
            name: 'notfound',
            component: notfound
        }
    ]
})
