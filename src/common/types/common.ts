//import { PrivacyPolicy } from '@/routers/views/register/types/register';
import {
	AxiosInstance,
	// AxiosInterceptorManager,
	// AxiosRequestConfig,
	// AxiosResponse,
} from 'axios';

interface MyNumber {
	hpNo: string;
	done: boolean;
}

interface AppModal {
	title: string;
	content: string;
}

interface UserInfo {
	sysCd: string;
	userId: string;
	userNm: string;
	userHpNo: string;
	companyNm: string;
	deptNm: string;
	certificationNumber: string;
	password: string;
	passwordConfirm: string;
}

interface CertificationInfo extends UserInfo {
	certificationNumber: string;
}

// interface UserInfo extends PrivacyPolicy {
// 	userNum: number;
// 	userNm: string;
// 	regNo: string;
// 	company: string;
// }

interface DeptInfo {
	deptNum: number;
	deptNm: string;
}

interface EmpInfo {
	empNum: number;
	empNm: string;
	team?: string;
}

interface RegChgInfo {
	regDate: string;
	regEmpNum: DateType;
	chgDate: string;
	chgEmpNum: DateType;
}

interface AccInfo extends EmpInfo, DeptInfo, RegChgInfo {
	accSeq: number;
	accDate: DateType;
	accTime: DateType;
	accPupose: string;
	timeTaken: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// type CustomResponseFormat<T = any> = {
// 	response: T;
// 	refreshedToken?: string;
// };

interface CustomInstance extends AxiosInstance {
	get<T>(...params: Parameters<AxiosInstance['get']>): Promise<T>;
	delete<T>(...params: Parameters<AxiosInstance['delete']>): Promise<T>;
	post<T>(...params: Parameters<AxiosInstance['post']>): Promise<T>;
	put<T>(...params: Parameters<AxiosInstance['put']>): Promise<T>;
	patch<T>(...params: Parameters<AxiosInstance['patch']>): Promise<T>;
}

enum ModalMode {
	Alert = 'alert',
	Confirm = 'confirm',
}

export {
	ModalMode,
	MyNumber,
	AppModal,
	CustomInstance,
	CertificationInfo,
	UserInfo,
	DeptInfo,
	EmpInfo,
	RegChgInfo,
	AccInfo,
};

/*
const h3 = 'mt-6 mb-2 text-xl font-bold';
const ul = 'mt-2 list-disc list-inside';
const button =
  'mt-2 rounded-full py-1 px-4 bg-white transition border-blue-500 border-2 text-blue-500 text-sm hover:border-blue-700 hover:text-blue-700 focus:bg-blue-700 focus:text-white focus:outline-none';

export const style = {
  h3,
  ul,
  button,
};
*/
