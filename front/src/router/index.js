import Vue from 'vue'
import Router from 'vue-router'
const home = () => import(/* webpackPrefetch: true */ '../views/home.vue')
const thevilla = () => import(/* webpackPrefetch: true */ '../views/thevilla.vue')
const gallery = () => import(/* webpackPrefetch: true */ '../views/gallery.vue')
const events = () => import(/* webpackPrefetch: true */ '../views/events.vue')
const book = () => import(/* webpackPrefetch: true */ '../views/book.vue')
const pricing = () => import(/* webpackPrefetch: true */ '../views/pricing.vue')
const notfound = () => import(/* webpackPrefetch: true */ '../views/notfound')

Vue.use(Router)
export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
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
            path: '/gallery',
            name: 'gallery',
            component: gallery
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
