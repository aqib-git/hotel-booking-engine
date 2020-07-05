import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: HomeView
        }
    ],
    linkActiveClass: 'active'
})

export default router;