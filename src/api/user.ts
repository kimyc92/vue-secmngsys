import { createInstance } from '@/api/index';
import { ResponseData } from '@/api/types/reponse';
import { UserInfo } from '@/common/types/common';

const instance = createInstance();

// 유저정보 조회 API
// function retrieveUserInfo2(userData: any): Promise<ResponseData> {
// 	return instance.post<ResponseData>('/my/test', userData);
// }

function retrieveUserConfirm(userInfo: UserInfo): Promise<ResponseData> {
	return instance.post<ResponseData>('/v1/user/user-confirm', userInfo);
}

function updateUserInfo(userInfo: UserInfo): Promise<ResponseData> {
	return instance.patch<ResponseData>('/v1/user/user-info', userInfo);
}

export { retrieveUserConfirm, updateUserInfo };
