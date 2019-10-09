import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../views/home.vue')
const thevilla = () => import('../views/thevilla.vue')
const gallery = () => import('../views/gallery.vue')
const events = () => import('../views/events.vue')
const book = () => import('../views/book.vue')
const pricing = () => import('../views/pricing.vue')
const notfound = () => import('../views/notfound')

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
