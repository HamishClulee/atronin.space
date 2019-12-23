import Vue from 'vue'
import Router from 'vue-router'
const home = () => import(/* webpackPrefetch: true */ '../views/home.vue')
const gallery = () => import(/* webpackPrefetch: true */ '../views/gallery.vue')
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
            path: '/gallery',
            name: 'gallery',
            component: gallery
        },
        {
            path: '*',
            name: 'notfound',
            component: notfound
        }
    ]
})
