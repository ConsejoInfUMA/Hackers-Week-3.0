import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Inicio',
		component: () => import('@/views/Inicio')
	},
	{
		path: '/conferencias',
		name: 'Conferencias',
		component: () => import('@/views/Eventos'),
		props: {
			coleccion: 'conferencias'
		}
	},
	{
		path: '/torneos',
		name: 'Torneos',
		component: () => import('@/views/Torneos')
	},
	{
		path: '/rol',
		name: 'Rol',
		component: () => import('@/views/Rol')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
