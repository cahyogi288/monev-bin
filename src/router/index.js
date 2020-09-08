import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sidebar from '../components/Sidebar.vue'
import Sasaran from '../views/staff/Sasaran.vue'
import Indikator from '../views/staff/Indikator.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/sidebar',
        name: 'Sidebar',
        component: Sidebar
    },
    {
        path: '/sasaran',
        name: 'Sasaran',
        component: Sasaran
    },
    {
        path: '/indikator',
        name: 'Indikator',
        component: Indikator
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router