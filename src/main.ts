import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import axios from 'axios'; // API 통신
//import { customModal } from '@/components/modal/customModal/composables/customModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import {
	FontAwesomeIcon,
	FontAwesomeLayers,
	FontAwesomeLayersText,
} from '@/plugins/font-awesome'; // 폰트 및 아이콘
import Loading from 'vue3-loading-overlay';
import { LoadingVal } from '@/common/composables/loading';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

const app = createApp(App);

//Axios
app.provide('$axios', axios);

// Font Awesome
app.component('fa-icon', FontAwesomeIcon);
app.component('fa-layers', FontAwesomeLayers);
app.component('fa-layers-text', FontAwesomeLayersText);
app.component('loading', Loading);

app.use(router).mount('#app');

// Golbal Filter
router.beforeEach((to, from, next) => {
	//const { modalAlert } = customModal();
	//const deptInfo = JSON.parse(sessionStorage.getItem('deptInfo') as string);
	LoadingVal.fullPage = false;
	LoadingVal.isLoading = true;
	//   if (to.path != '/' && !deptInfo) {
	//     modalAlert('경고', '관리 부서정보가 없습니다. 관리부서를 선택합니다.');
	//     next('/');
	//   } else next();
	next();
	setTimeout(() => {
		LoadingVal.isLoading = false;
	}, 50);
	return;
});
