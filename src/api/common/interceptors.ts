import { CustomInstance } from '@/common/types/common';
import { logOnDev } from '@/common/composables/logOnDev';
import { customModal } from '@/components/modal/customModal/composables/customModal';
import common from '@/common/composables/common';
import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

const { modalAlert } = customModal();
const { resCodeRegex } = common();

const onRequest = (
	config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
	const { method, url } = config;
	logOnDev(`[API] ${method?.toLocaleUpperCase()} ${url} [REQUEST OK]`);
	return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
	const { method, url } = response.config;
	const { status, data } = response;
	if (!data.code.match(resCodeRegex)) {
		modalAlert('경고', data.data[0].content);
	}
	logOnDev(`[API] ${method?.toLocaleUpperCase()} ${url} [RESPONSE ${status}]`);
	return response;
};

const onError = (error: AxiosError | Error): Promise<AxiosError> => {
	if (axios.isAxiosError(error)) {
		//const { message } = error;
		const { method, url } = error.config as AxiosRequestConfig;
		const { status, data } = error.response as AxiosResponse;
		logOnDev(
			`[API] ${method?.toLocaleUpperCase()} ${url} [RESPONSE ${status}]`,
		);

		switch (status) {
			default: {
				modalAlert(data.status, data.data[0].content);
			}
		}
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
