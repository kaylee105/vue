
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/page/Home.vue';
import About from '@/page/About.vue';
import Contact from '@/page/Contact.vue';
import Guide from '@/guide/Form.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
    {
		path: '/guide',
		name: 'Guide',
		component: Guide,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;