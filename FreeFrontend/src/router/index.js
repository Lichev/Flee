import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Signup from '../views/SignupView.vue'
import Login from '../views/LoginView.vue'
import Feed from '../views/FeedView.vue'
import Messages from '../views/MessagesView.vue'
import Search from '../views/SearchView.vue'


let routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/feed',
        name: 'feed',
        component: Feed
    },
    {
        path: '/messages',
        name: 'messages',
        component: Messages
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },

]

let router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
