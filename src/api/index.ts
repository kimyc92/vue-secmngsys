import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';
import { CustomInstance } from '@/common/types/common';

function createInstance() {
	const instance: CustomInstance = axios.create({
		baseURL: process.env.VUE_APP_MAIN_API_URL,
		headers: {},
	});
	return setInterceptors(instance);
}

export { createInstance };
