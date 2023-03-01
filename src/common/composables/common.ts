import {
	EmpInfo,
	UserInfo,
	MyNumber,
	AccInfo,
	RegChgInfo,
	DeptInfo,
	CertificationInfo,
} from '@/common/types/common';
import { reactive } from 'vue';

/*
const zero = (value: number | string) =>
  value.toString().length === 1 ? `0${value}` : value;

const formatReplace = (format: string): void => {
  const allowForm = date.toString().replace(/\.|\-|\s+/g, '/');
  const _date = new Date(allowForm); // Date 객체로 만들어줍니다.
  format.replace(/(yyyy|mm|dd|MM|DD|H|i|s)/g, (t: string): DateType => {
    switch (t) {
      case 'yyyy':
        return _date.getFullYear();
      case 'mm':
        return _date.getMonth() + 1;
      case 'dd':
        return _date.getDate();
      case 'MM':
        return zero(_date.getMonth() + 1);
      case 'DD':
        return zero(_date.getDate());
      case 'H':
        return zero(_date.getHours());
      case 'i':
        return zero(_date.getMinutes());
      case 's':
        return zero(_date.getSeconds());
      default:
        return '';
    }
  });
};

const dateFormater = (format: string, date: DateType = Date.now()): string => {
  return formatReplace(format);
};
*/

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => {
	const stringToNumber = (val: string) => {
		return val.replace(/[^0-9]/g, '');
	};

	const sortJSON = (data: JSONArray, key: string, type: string): JSONArray => {
		const sortData = JSON.parse(JSON.stringify(data));
		const sortMultiplier = type === 'asc' ? 1 : -1;

		return sortData.sort((a: JSONObject, b: JSONObject) => {
			if (a[key] < b[key]) return -1 * sortMultiplier;
			if (a[key] > b[key]) return 1 * sortMultiplier;
			return 0;
		});
	};

	// const userInfo: UserInfo = reactive({
	// 	policy1: false,
	// 	policy2: false,
	// 	userNum: -1,
	// 	userNm: '',
	// 	regNo: '',
	// 	company: '',
	// });
	const userInfo: UserInfo = reactive({
		sysCd: '00',
		userId: null,
		userNm: null,
		userHpNo: null,
		companyNm: null,
		deptNm: null,
		certificationNumber: null,
		password: null,
		passwordConfirm: null,
	});

	const certificationInfo: CertificationInfo = reactive({
		...userInfo,
		certificationNumber: null,
	});

	const deptInfo: DeptInfo = reactive({
		deptNum: -1,
		deptNm: '',
	});

	const empInfo: EmpInfo = reactive({
		empNum: -1,
		empNm: '',
		team: '',
	});

	const regChgInfo: RegChgInfo = reactive({
		regDate: '',
		regEmpNum: '',
		chgDate: '',
		chgEmpNum: '',
	});

	const accInfo: AccInfo = reactive({
		accSeq: -1,
		accDate: '', // typescript data
		accTime: '', // typescript data
		accPupose: '',
		timeTaken: 0,
		//...userInfo,
		...empInfo,
		...deptInfo,
		...regChgInfo,
	});

	const resCodeRegex = /COM_\d{3}_200/;
	/*
  accSeq: number;
  accDate: DateType;
  accTime: DateType;
  accPupose: string;
  timeTaken: string;
  */

	//   interface AccInfo extends UserInfo, EmpInfo, DeptInfo, RegChgInfo {
	//     accSeq: number;
	//     accDate: DateType;
	//     accTime: DateType;
	//     accPupose: string;
	//     timeTaken: string;
	//   }
	const inputNumber: MyNumber = reactive({
		hpNo: '',
		done: false,
	});

	return {
		resCodeRegex,
		stringToNumber,
		certificationInfo,
		inputNumber,
		sortJSON,
		userInfo,
		deptInfo,
		empInfo,
		regChgInfo,
		accInfo,
	};
};
