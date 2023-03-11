import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/routers/views/password/Password.vue'),
		meta: {
			title: '홈',
		},
	},
	{
		path: '/setting',
		name: 'setting',
		//component: Home,
		component: () => import('@/routers/views/Management.vue'),
		meta: {
			title: '관리',
		},
	},
	{
		path: '/password',
		name: 'password',
		//component: Home,
		component: () => import('@/routers/views/password/Password.vue'),
		meta: {
			title: '비밀번호',
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
router.beforeEach((to, from, next) => {
	document.title = (process.env.VUE_APP_TITLE +
		' - ' +
		to.meta.title) as string;
	next();
});

export default router;
