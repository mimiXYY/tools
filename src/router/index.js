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
    {
        path: '/scoreEchart',
        name: 'scoreEchart',
        component: () => import('@/view/scoreEchart/index')
    },
    {
        path: '/manageScore',
        name: 'manageScore',
        component: () => import('@/view/manageScore/index')
    },

]
const router = new Router({ mode: 'history', routes: constantRoutes })
export default router