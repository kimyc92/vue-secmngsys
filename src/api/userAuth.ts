import { createInstance } from '@/api/index';
import { ResponseData } from '@/api/types/reponse';

const instance = createInstance();

// 유저정보 조회 API
function selectUser2(userData: any): Promise<ResponseData> {
	return instance.post<ResponseData>('/my/test', userData);
}

const selectUser = async (userData: any): Promise<ResponseData> => {
	const { data: response } = await instance.post<ResponseData>(
		'/my/test',
		userData,
	);
	return response;
};

export { selectUser, selectUser2 };
