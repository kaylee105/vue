import Vue from 'vue'
import Router from 'vue-router'

//compontents
import home from '@/components/home.vue';
import about from '@/components/about.vue';
import info from '@/components/info.vue';


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
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/info',
            name: 'info',
            component: info
        }
    ]
})