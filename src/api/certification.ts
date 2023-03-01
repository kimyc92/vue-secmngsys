import { createInstance } from '@/api/index';
import { ResponseData } from '@/api/types/reponse';
import { UserInfo } from '@/common/types/common';

const instance = createInstance();

function createSmsSends(userInfo: UserInfo): Promise<ResponseData> {
	return instance.put<ResponseData>('/v1/certification/sms-sends', userInfo);
}

function retrieveSmsConfirms(userInfo: UserInfo): Promise<ResponseData> {
	return instance.post<ResponseData>(
		'/v1/certification/sms-confirms',
		userInfo,
	);
}

export { createSmsSends, retrieveSmsConfirms };
