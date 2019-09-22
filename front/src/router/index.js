import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import colive from '../views/colive.vue'
import cowork from '../views/cowork.vue'
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
            path: '/colive',
            name: 'colive',
            component: colive
        },
        {
            path: '/cowork',
            name: 'cowork',
            component: cowork
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
