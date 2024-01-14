import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router)
const constantRoutes = [
    {
        path: '/',
        redirect: '/navHome',
        component: () => import('@/view/navHome/index'),
    },
    {
        path: '/navHome',
        name: 'navHome',
        component: () => import('@/view/navHome/index')
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