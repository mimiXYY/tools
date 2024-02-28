import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router)
const constantRoutes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/view/home/index'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/view/home/index')
    },
    // {
    //     path: '/scoreEchart',
    //     name: 'scoreEchart',
    //     component: () => import('@/view/scoreEchart/index')
    // },
    // {
    //     path: '/manageScore',
    //     name: 'manageScore',
    //     component: () => import('@/view/manageScore/index')
    // },
    {
        path: '/dotaQuery',
        name: 'dotaQuery',
        component: () => import('@/view/dotaQuery/index'),
    },
    {
        path: '/dotaMatches/:id',
        name: 'dotaMatches',
        component: () => import("@/view/dotaMatches/index"),
    },
    {
        path: '/YuGiOh',
        name: 'YuGiOh',
        component: () => import('@/view/YuGiOh/index')
    },
    {
        path: '/cardPairing',
        name: 'cardPairing',
        component: () => import('@/view/cardPairing/index')
    },

]
const router = new Router({ mode: 'history', routes: constantRoutes })
export default router