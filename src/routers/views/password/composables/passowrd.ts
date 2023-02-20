// import { PrivacyPolicy } from '@/routers/views/password/types/password';
// import { UserInfo, EmpInfo } from '@/common/types/common';
import common from '@/common/composables/common';
import { reactive, ref } from 'vue';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => {
	const columns = ref([
		{
			label: '번호',
			field: 'num',
			display: false,
			/*
        filterOptions: {
          styleClass: 'class1',
        },
        */
		},
		{
			label: '성명',
			field: 'name',
			type: 'string',
			thClass: 'col-3',
		},
		{
			label: '팀명',
			field: 'team',
			type: 'string',
			thClass: 'col-9',
		},
	]);
	const rows = ref([
		{
			num: 1,
			name: 'John-0',
			team: 'ICT전략기획팀',
		},
		{
			num: 2,
			name: 'Joney-1',
			team: 'ICT전략기획팀',
		},
		{
			num: 3,
			name: 'Hong-2',
			team: 'ICT공제보험팀',
		},
		{
			num: 4,
			name: 'Nikey-3',
			team: 'ICT정책보험팀',
		},
		{
			num: 5,
			name: 'Hoing-4',
			team: 'ICT인프라팀',
		},
		{
			num: 6,
			name: 'Deun-5',
			team: 'ICT인프라팀',
		},
		{
			num: 7,
			name: 'Youjin-6',
			team: 'ICT인프라팀',
		},
		{
			num: 8,
			name: 'Joney-7',
			team: 'ICT전략기획팀',
		},
		{
			num: 9,
			name: 'Hong-8',
			team: 'ICT공제보험팀',
		},
		{
			num: 10,
			name: 'Nikey-9',
			team: 'ICT정책보험팀',
		},
		{
			num: 11,
			name: 'Hoing-10',
			team: 'ICT인프라팀',
		},
		{
			num: 12,
			name: 'Deun-11',
			team: 'ICT인프라팀',
		},
		{
			num: 13,
			name: 'Youjin-12',
			team: 'ICT인프라팀',
		},
	]);
	const { stringToNumber, empInfo } = common();

	// const privacyPolicy: PrivacyPolicy = reactive({
	// 	policy1: false,
	// 	policy2: false,
	// });

	//const registerUserInfo: UserInfo = reactive({ ...userInfo });

	// const registerEmpInfo: EmpInfo = reactive({ ...empInfo });

	// const initUserInfo = () => {
	// 	Object.assign(registerUserInfo, { ...userInfo });
	// };

	// const initManagerInfo = () => {
	// 	Object.assign(registerEmpInfo, { ...empInfo });
	// };

	// const userRegNo = () =>
	// 	(registerUserInfo.regNo = stringToNumber(registerUserInfo.regNo));

	return {
		columns,
		rows,
		//privacyPolicy,
		//	registerUserInfo,
		//	registerEmpInfo,
		//	initUserInfo,
		//initManagerInfo,
		//	userRegNo,
	};
};
