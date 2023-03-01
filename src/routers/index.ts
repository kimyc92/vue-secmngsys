import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/routers/views/password/Password.vue'),
	},
	{
		path: '/setting',
		name: 'setting',
		//component: Home,
		component: () => import('@/routers/views/Management.vue'),
	},
	{
		path: '/password',
		name: 'password',
		//component: Home,
		component: () => import('@/routers/views/password/Password.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
