import { CustomInstance } from '@/common/types/common';
import { logOnDev } from '@/common/composables/logOnDev';
import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

const onRequest = (
	config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
	const { method, url } = config;
	logOnDev(`[API] ${method?.toLocaleUpperCase()} ${url} [REQUEST OK]`);
	return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
	const { method, url } = response.config;
	const { status } = response;
	logOnDev(`[API] ${method?.toLocaleUpperCase()} ${url} [RESPONSE ${status}]`);
	return response;
};

const onError = (error: AxiosError | Error): Promise<AxiosError> => {
	if (axios.isAxiosError(error)) {
		//const { message } = error;
		const { method, url } = error.config as AxiosRequestConfig;
		const { status } = error.response as AxiosResponse;
		logOnDev(
			`[API] ${method?.toLocaleUpperCase()} ${url} [RESPONSE ${status}]`,
		);
	} else {
		throw new Error('different error than axios');
	}
	return Promise.reject(error);
};
//CustomInstance
const setInterceptors = (instance: CustomInstance): CustomInstance => {
	instance.interceptors.request.use(onRequest, onError); // Add a Request Interceptor
	instance.interceptors.response.use(onResponse, onError); // Add a Response interceptor
	return instance;
};

export { setInterceptors };
