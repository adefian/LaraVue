import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = require('../pages/Home.vue').default
const About = require('../pages/About.vue').default
// const NotFound = require('./pages/NotFound.vue').default
import NotFound from '../pages/NotFound.vue'
import User from '../pages/User.vue'

const routes = [
    {
        name: 'Home',
        path: '/home',
        component: Home
    },
    {  
        name: 'About',
        path: '/about',
        component: About
    },
    {  
        name: 'User',
        path: '/user/:name?',
        component: User,
        props: true
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    linkActiveClass: 'active',
    mode : 'history',
    routes
})

export default router