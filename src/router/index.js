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
		path: '/talleres',
		name: 'Talleres',
		component: () => import('@/views/Eventos'),
		props: {
			coleccion: 'workshops'
		}
	},
	{
		path: '/videojuegos',
		name: 'Videojuegos',
		component: () => import('@/views/Videojuegos')
	},
	{
		path: '/rol',
		name: 'Rol',
		component: () => import('@/views/Rol')
	},
	{
		path: '/hackaton',
		name: 'Hackaton',
		component: () => import('@/views/Hackaton')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
